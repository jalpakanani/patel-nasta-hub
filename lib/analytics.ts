type GtagFn = (...args: unknown[]) => void

/** GA4 DebugView માટે — `.env.local`: NEXT_PUBLIC_GA_DEBUG_VIEW=true (ફક્ત ટેસ્ટ; પ્રોડ પર બંધ રાખો) */
export function getGaDebugModeFields(): { debug_mode: true } | Record<string, never> {
  const v = process.env.NEXT_PUBLIC_GA_DEBUG_VIEW?.trim().toLowerCase()
  if (v === '1' || v === 'true' || v === 'yes') return { debug_mode: true }
  return {}
}

function shouldLogAnalyticsToConsole(): boolean {
  if (process.env.NODE_ENV === 'development') return true
  const v = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG?.trim().toLowerCase()
  return v === '1' || v === 'true' || v === 'yes'
}

function logGa(eventName: string, detail: Record<string, unknown>) {
  if (!shouldLogAnalyticsToConsole() || typeof console === 'undefined') return
  console.info(`[GA] ${eventName}`, detail)
}

function isValidGaMeasurementId(value: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(value)
}

/**
 * `output: "export"` / Netlify પર ક્યારેક client chunk માં `NEXT_PUBLIC_*` ખૂટે છે,
 * પણ layout માં gtag script હોય — ત્યાંથી `window` / `<meta>` થી ID લઈએ.
 */
function getGaMeasurementId(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()
  if (raw && isValidGaMeasurementId(raw)) return raw
  if (typeof window !== 'undefined') {
    const fromWin = (window as unknown as { __GA4_MEASUREMENT_ID__?: string })
      .__GA4_MEASUREMENT_ID__?.trim()
    if (fromWin && isValidGaMeasurementId(fromWin)) return fromWin
    const fromMeta = document
      .querySelector('meta[name="ga4-measurement-id"]')
      ?.getAttribute('content')
      ?.trim()
    if (fromMeta && isValidGaMeasurementId(fromMeta)) return fromMeta
  }
  return undefined
}

function getGtag(): GtagFn | undefined {
  if (typeof window === 'undefined') return undefined
  return (window as unknown as { gtag?: GtagFn }).gtag
}

function pageLocationForPath(pagePath: string): string | undefined {
  if (typeof window === 'undefined') return undefined
  const path = pagePath.startsWith('/') ? pagePath : `/${pagePath}`
  return `${window.location.origin}${path}`
}

/** GA4 ચાલુ છે કે નહીં — ક્લાયન્ટ પર `gtag` લોડ થયા પછી */
export function isGaConfigured(): boolean {
  return Boolean(getGaMeasurementId())
}

/**
 * SPA પેજ વ્યૂ — `gtag('event','page_view')` ક્યારેક સ્ટ્રીમ પર ઓછો વિશ્વાસપાત્ર;
 * ફરીથી `config` + `send_page_view` ચાલુ કરવું GA4 દસ્તાવેજો સાથે મેળ ખાય છે.
 */
export function trackGaPageView(pagePath: string, pageTitle?: string) {
  const id = getGaMeasurementId()
  const gtag = getGtag()
  const page_location = pageLocationForPath(pagePath)
  logGa('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location,
    sentToGa: Boolean(id && gtag),
  })
  if (!id || !gtag) return
  gtag('config', id, {
    ...getGaDebugModeFields(),
    page_path: pagePath,
    send_page_view: true,
    ...(pageTitle ? { page_title: pageTitle } : {}),
    ...(page_location ? { page_location } : {}),
  })
}

export type WhatsAppTapOutcome =
  | 'opened'
  | 'blocked_no_cart'
  | 'blocked_no_address'

export function trackWhatsAppTap(payload: {
  placement: string
  outcome: WhatsAppTapOutcome
  cartLineCount?: number
}) {
  const id = getGaMeasurementId()
  const gtag = getGtag()
  const params: Record<string, string | number> = {
    placement: payload.placement,
    outcome: payload.outcome,
  }
  if (payload.cartLineCount !== undefined) {
    params.cart_lines = payload.cartLineCount
  }
  logGa('whatsapp_tap', {
    ...params,
    sentToGa: Boolean(id && gtag),
  })
  if (!id || !gtag) return
  // `send_to` કાઢ્યું — એક જ `config` થી ડેસ્ટિનેશન ફિક્સ થયેલું હોય ત્યારે ક્યારેક ઇવેન્ટ ડ્રોપ થતા હતા
  gtag('event', 'whatsapp_tap', { ...params, ...getGaDebugModeFields() })
}
