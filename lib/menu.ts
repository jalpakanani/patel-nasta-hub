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

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'dabeli',
    title: 'દાબેલી સ્પેશિયલ',
    items: [
      {
        name: 'દાબેલી',
        price: '₹30',
        image: '/images/dabeli-menu.png',
      },
      {
        name: 'પટેલ સ્પેશીયલ દાબેલી',
        price: '₹40',
        image: '/images/kutchhi-dabeli.png',
      },
    ],
  },
  {
    id: 'pakwan',
    title: 'પકવાન અને બ્રેડ',
    items: [
      {
        name: 'દાળપકવાન',
        price: '₹30',
        image: u('/photo-1585937421612-70a008356fbe?w=600&h=450'),
      },
      {
        name: 'મસાલા પકવાન',
        price: '₹40',
        image: u('/photo-1565557623262-b51c2513a641?w=600&h=450'),
      },
      {
        name: 'બ્રેડ કટકા',
        price: '₹40',
        image: '/images/bread-katka.jpg',
      },
    ],
  },
  {
    id: 'snacks',
    title: 'ભેળ, ભજીયા અને વધુ',
    items: [
      {
        name: 'ભેળ',
        price: '₹40',
        image: u('/photo-1589302168068-964664d93dc0?w=600&h=450'),
      },
      {
        name: 'ભજીયા',
        price: '₹50',
        image: u('/photo-1606491956689-2ea866880c84?w=600&h=450'),
      },
      {
        name: 'ગાંઠીયા',
        price: '₹50',
        image: u('/photo-1601050690597-df0568f70950?w=600&h=450'),
      },
      {
        name: 'ગોગળી કુંભણિયા',
        price: '₹50',
        image: u('/photo-1540189549336-e6e99c3679fe?w=600&h=450'),
      },
      {
        name: 'ચિપ્સ (ફ્રેંચ ફ્રાઈ)',
        price: '₹50',
        image: u('/photo-1573080496219-bb080dd4f877?w=600&h=450'),
      },
      {
        name: 'દહીં ભેળ',
        price: '₹50',
        image: '/images/dahi-bhel.jpg',
      },
      {
        name: 'દહીં કચોરી',
        price: '₹50',
        image: '/images/dahi-kachori.png',
      },
      {
        name: 'તીખા મોરા',
        price: '₹40',
        image: u('/photo-1596797038530-2c107229654b?w=600&h=450'),
      },
      {
        name: 'દહીં તીખા મોરા',
        price: '₹50',
        image: '/images/dahi-bhel.jpg',
      },
    ],
  },
  {
    id: 'farali',
    title: 'ફરાળી',
    items: [
      {
        name: 'ફરાળી ભેળ',
        price: '₹40',
        image: '/images/farali-bhel-official.png',
      },
      {
        name: 'ફરાળી ભેળ (દહીં)',
        price: '₹50',
        image: '/images/farali-bhel-dahi.jpg',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'પીણાં',
    items: [
      {name: 'છાશ', price: '₹10', image: '/images/chhaas.png'},
      {
        name: 'કોલ્ડ્રીંક્સ',
        price: '₹10',
        image: u('/photo-1622483767028-3f66f32aef97?w=600&h=450'),
      },
      {
        name: 'પાણી',
        price: '₹10 / ₹20',
        image: '/images/water-bottle.jpg',
        note: 'બોટલ પ્રમાણે ભાવ',
      },
    ],
  },
]

export const MENU_NOTES = [
  'જે વસ્તુ હાજર હશે તેજ મળશે.',
  'એક્સ્ટ્રા વસ્તુ નાખવાનો અલગથી ચાર્જ રહેશે.',
] as const
