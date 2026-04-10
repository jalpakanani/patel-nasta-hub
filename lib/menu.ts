export type MenuItem = {
  name: string
  price: string
  /** Local `/images/...` or remote URL for Next/Image */
  image: string
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
        price: '₹50',
        image: '/images/menu-bhajiya.png',
      },
      {
        name: 'ગાઠીયા',
        price: '₹50',
        image: '/images/menu-gathiya.png',
      },
      {
        name: 'ગોગળી કુંભણિયા',
        price: '₹50',
        image: '/images/menu-kumbhaniya.png',
      },
      {
        name: 'ચિપ્સ (ફ્રેંચ ફ્રાઈ)',
        price: '₹50',
        image: '/images/menu-french-fries.png',
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
