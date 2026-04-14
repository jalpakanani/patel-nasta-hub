export type MenuItem = {
  name: string
  price: string
  /** Local `/images/...` or remote URL for Next/Image */
  image: string
  /** દરેક કાર્ટ એકમ = આટલા ગ્રામ (દા.ત. 100 ગ્રામ પગલું) — UI વજન લેબલ માટે */
  gramsPerCartStep?: number
  note?: string
  /** Small badges on menu cards */
  tags?: readonly string[]
  /** First matching item drives the home featured strip */
  featured?: boolean
  /** Hero image for featured strip; defaults to `image` */
  featureImage?: string
  featureDescriptionGu?: string
  nameLatin?: string
}

export type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

/** `₹80`, `₹50 / 100 ગ્રામ` → પહેલું ₹ મૂલ્ય (કાર્ટ ટોટલ માટે) */
export function parsePriceInr(price: string): number {
  const m = price.match(/₹\s*(\d+)/)
  if (m) return parseInt(m[1], 10)
  const digits = price.replace(/\D/g, '')
  const n = parseInt(digits, 10)
  return Number.isFinite(n) ? n : 0
}

export function menuCartItemKey(categoryId: string, itemName: string): string {
  return `${categoryId}::${itemName}`
}

/** `qty` કાર્ટ એકમ × `stepGrams` → ગુજરાતી વજન લેબલ (1000 ગ્રામ+ પર કિ.ગ્રા.) */
export function formatGuWeightLabel(qty: number, stepGrams: number): string {
  const g = qty * stepGrams
  if (g >= 1000) {
    const kg = g / 1000
    const s =
      kg % 1 === 0
        ? String(kg)
        : kg
            .toFixed(2)
            .replace(/\.?0+$/, '')
            .replace(/\.$/, '')
    return `${s} કિ.ગ્રા.`
  }
  return `${g} ગ્રામ`
}

/** પ્રિન્ટ પોસ્ટર (લેમિનેટેડ મેનુ) સાથે સરખું — ક્રમ અને ભાવ */
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'cheese-pakwan-dabeli',
    title: 'ચીઝ, દાબેલી અને પકવાન',
    items: [
      {
        name: 'ચીઝ મસાલા પકવાન',
        price: '₹80',
        image: '/images/menu-masala-cheese-pakwan.png',
        featured: true,
        featureImage: '/images/featured-cheese-masala-pakwan.jpg',
        nameLatin: 'Cheese Masala Pakwan',
        featureDescriptionGu:
          'અમારી દુકાનની સૌથી લોકપ્રિય અને ફેમસ આઇટમ — ચીઝ મસાલા પકવાન. ખાસ મસાલા અને ચીઝથી ભરપૂર, દરેક વાર એક જ લાજવાબ સ્વાદ.',
        tags: ['લોકપ્રિય', 'ફેમસ'],
      },
      {
        name: 'ચીઝ દાબેલી',
        price: '₹50',
        image: '/images/menu-chizz-dabeli.png',
      },
      {
        name: 'દાબેલી',
        price: '₹30',
        image: '/images/dabeli-menu.png',
        tags: ['ક્લાસિક'],
      },
      {
        name: 'દાળપકવાન',
        price: '₹30',
        image: '/images/menu-dal-pakwan.png',
      },
      {
        name: 'મસાલા પકવાન',
        price: '₹40',
        image: '/images/menu-masala-pakwan.png',
      },
      {
        name: 'બ્રેડ કટકા',
        price: '₹40',
        image: '/images/bread-katka-v2.jpg',
      },
    ],
  },
  {
    id: 'bhel-snacks',
    title: 'ભેળ, ભજીયા અને વધુ',
    items: [
      {
        name: 'ભેળ',
        price: '₹40',
        image: '/images/menu-bhel.png',
      },
      {
        name: 'ભજીયા',
        price: '₹50 / 100 ગ્રામ',
        image: '/images/menu-bhajiya.png',
        gramsPerCartStep: 100,
      },
      {
        name: 'ગાઠીયા',
        price: '₹50 / 100 ગ્રામ',
        image: '/images/menu-gathiya.png',
        gramsPerCartStep: 100,
      },
      {
        name: 'ગોગળી કુંભણિયા',
        price: '₹50 / 100 ગ્રામ',
        image: '/images/menu-kumbhaniya.png',
        gramsPerCartStep: 100,
      },
      {
        name: 'ચિપ્સ (ફ્રેંચ ફ્રાઈ)',
        price: '₹50 / 100 ગ્રામ',
        image: '/images/menu-french-fries.png',
        gramsPerCartStep: 100,
      },
      {
        name: 'દહીં ભેળ',
        price: '₹50',
        image: '/images/menu-dahi-bhel.png',
      },
      {
        name: 'દહીં કચોરી',
        price: '₹50',
        image: '/images/menu-dahi-kachori.png',
      },
    ],
  },
  {
    id: 'farali-mora',
    title: 'ફરાળી, તીખા મોરા અને સ્પેશિયલ',
    items: [
      {
        name: 'ફરાળી ભેળ',
        price: '₹40',
        image: '/images/farali-bhel-official.png',
      },
      {
        name: 'ફરાળી ભેળ (દહીં)',
        price: '₹50',
        image: '/images/farali-bhel-dahi.png',
      },
      {
        name: 'તીખા મોરા',
        price: '₹40',
        image: '/images/menu-tikha-mora-v2.jpg',
        // tags: ['તીખું'],
      },
      {
        name: 'દહીં તીખા મોરા',
        price: '₹50',
        image: '/images/menu-dahi-tikha-mora.png',
      },
      {
        name: 'પટેલ સ્પેશિયલ દાબેલી',
        price: '₹40',
        image: '/images/dabeli-menu.png',
      },
    ],
  },
  {
    id: 'maggi',
    title: 'મેગી',
    items: [
      {
        name: 'મેગી',
        price: '₹50',
        image: '/images/menu-maggi.png',
      },
      {
        name: 'ચીઝ મસાલા મેગી',
        price: '₹80',
        image: '/images/menu-cheese-masala-maggi.png',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'પીણા',
    items: [
      {name: 'છાશ', price: '₹10', image: '/images/menu-chhaas.png'},
      {
        name: 'લસ્સી',
        price: '₹20',
        image: '/images/menu-lassi.png',
        note: 'મીઠી લસ્સી',
      },
      {
        name: 'કોલ્ડ્રીંક્સ',
        price: '₹10',
        image: '/images/menu-cold-drinks.png',
        // note: 'લિમ્કા, માઉન્ટેન ડ્યૂ, કોક, ફેન્ટા, થંબ્સ અપ — જે હોય તે',
      },
    ],
  },
]

/** કાર્ટ લાઇન `key` (`categoryId::itemName`) માટે મેનુમાંથી વજન પગલું — કાર્ટ UI માટે */
export function gramsPerCartStepForCartKey(cartKey: string): number | undefined {
  const sep = '::'
  const i = cartKey.indexOf(sep)
  if (i === -1) return undefined
  const categoryId = cartKey.slice(0, i)
  const itemName = cartKey.slice(i + sep.length)
  const cat = MENU_CATEGORIES.find(c => c.id === categoryId)
  return cat?.items.find(it => it.name === itemName)?.gramsPerCartStep
}

export function getFeaturedSpotlight(): {
  name: string
  price: string
  image: string
  nameLatin?: string
  descriptionGu: string
} | null {
  for (const cat of MENU_CATEGORIES) {
    for (const item of cat.items) {
      if (item.featured) {
        return {
          name: item.name,
          price: item.price,
          image: item.featureImage ?? item.image,
          nameLatin: item.nameLatin,
          descriptionGu:
            item.featureDescriptionGu ??
            item.note ??
            'અમારી દુકાનની ખાસ ભલામણ.',
        }
      }
    }
  }
  return null
}

export const MENU_NOTES = [
  'જે વસ્તુ હાજર હશે તેજ મળશે.',
  'એક્સ્ટ્રા વસ્તુ નાખવાનો અલગથી ચાર્જ રહેશે.',
] as const

/** લેમિનેટેડ મેનુની ઓરિજિનલ PNG — `public/images/menu-poster-original.png` બદલતા નામ/pાથ અપડેટ કરો */
export const PRINTED_MENU_SRC = '/images/menu-poster-original.png' as const
export const PRINTED_MENU_ALT = 'પટેલ નાસ્તા હબ — પ્રિન્ટ મેનુ' as const
