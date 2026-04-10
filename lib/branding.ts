const WHATSAPP_DIGITS = '919664859253' as const

const WHATSAPP_ORDER_MESSAGE_GU =
  'નમસ્તે પટેલ નાસ્તા હબ, મારે ઓર્ડર વિશે વાત કરવી છે. કૃપા કરીને મેનુ અને ભાવ મોકલશો? ધન્યવાદ 🙏' as const

export const SHOP = {
  name: 'પટેલ નાસ્તા હબ',
  nameLatin: 'Patel Nasta Hub',
  logoSrc: '/images/logo-brand.png',
  tagline: 'સ્વાદ જે દિલ સુધી પહોંચે',
  phoneDisplay: '+91 96648 59253',
  phoneTel: '+919664859253',
  whatsappPhoneDigits: WHATSAPP_DIGITS,
  whatsappOrderMessageGu: WHATSAPP_ORDER_MESSAGE_GU,

  website: 'https://www.patelnastahub.com',
  mapsUrl:
    `https://www.google.com/maps/place/22%C2%B013'10.9%22N+70%C2%B036'31.5%22E/@22.219698,70.6061821,726m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d22.219698!4d70.608757?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D` +
    encodeURIComponent('Patel Nasta Hub Chhapra GIDC Kalavad Road Gujarat'),
  /** Hashtag explore until a single official profile URL is set */
  instagramUrl: 'https://www.instagram.com/patel_nasta_hub/',
  addressLines: [
    'છાપરા જી.આઈ.ડી.સી., કાલાવડ રોડ, છાપરા',
    'દેવડા નું પાટિયું, જેસડિયા કોમ્પ્લેક્સ',
  ],
  addressShort: 'છાપરા જી.આઈ.ડી.સી., કાલાવડ રોડ, છાપરા',
  socialHandle: 'patel nasta hub',
  socialHandleLatin: '@patelnastahub',
  upiId: 'paytmqr67fjfd@ptys',
  ownerGu: 'સોજીત્રા મધુરેશ વલ્લભભાઈ',
  openingHoursGu: 'સવારે 7 વાગ્યાથી રાત્રે 10 વાગ્યા સુધી',
  openingHoursLatin: '7:00 AM – 10:00 PM',
  featuredEyebrowGu: 'અમારી દુકાનની સૌથી ફેમસ આઇટમ',
  featuredEyebrowLatin: 'Our shop’s most famous item',
} as const

/** WhatsApp chat; default pre-fills a Gujarati order message */
export function shopWhatsAppHref(options?: {prefillOrder?: boolean}) {
  const prefill = options?.prefillOrder !== false
  const base = `https://wa.me/${SHOP.whatsappPhoneDigits}`
  if (!prefill) return base
  return `${base}?text=${encodeURIComponent(SHOP.whatsappOrderMessageGu)}`
}
