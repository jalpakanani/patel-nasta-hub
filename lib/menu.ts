export type MenuItem = {
  name: string
  price: string
  /** Local `/images/...` or remote URL for Next/Image */
  image: string
  note?: string
}

export type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

const u = (path: string) =>
  `https://images.unsplash.com${path}&auto=format&fit=crop&q=80`

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
    title: 'ફરાળી, મોરા અને સ્પેશિયલ',
    items: [
      {
        name: 'ફરાળી ભેળ (દહીં)',
        price: '₹50',
        image: '/images/farali-bhel-dahi.png',
      },
      {
        name: 'ફરાળી ભેળ',
        price: '₹40',
        image: '/images/farali-bhel-official.png',
      },
      {
        name: 'તીખા મોરા',
        price: '₹40',
        image: '/images/menu-tikha-mora-v2.jpg',
      },
      {
        name: "દહીં તીખા મોરા",
        price: "₹50",
        image: "/images/menu-dahi-tikha-mora.png",
      },
      {
        name: 'પટેલ સ્પેશીયલ દાબેલી',
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
    title: 'પીણાં',
    items: [
      { name: "છાશ", price: "₹10", image: "/images/menu-chhaas.png" },
      {
        name: 'કોલ્ડ્રીંક્સ',
        price: '₹10',
        image: u('/photo-1622483767028-3f66f32aef97?w=600&h=450'),
      },
    ],
  },
]

export const MENU_NOTES = [
  'જે વસ્તુ હાજર હશે તેજ મળશે.',
  'એક્સ્ટ્રા વસ્તુ નાખવાનો અલગથી ચાર્જ રહેશે.',
] as const

/** લેમિનેટેડ મેનુની ઓરિજિનલ PNG — `public/images/menu-poster-original.png` બદલતા નામ/pાથ અપડેટ કરો */
export const PRINTED_MENU_SRC = '/images/menu-poster-original.png' as const
export const PRINTED_MENU_ALT = 'પટેલ નાસ્તા હબ — પ્રિન્ટ મેનુ' as const
