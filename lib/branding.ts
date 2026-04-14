const WHATSAPP_DIGITS = '919664859253' as const

const WHATSAPP_ORDER_MESSAGE_GU =
  'નમસ્તે પટેલ નાસ્તા હબ, અમે નાસ્તો ઓર્ડર કરવા માંગીએ છીએ.' as const

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
  whatsappOrderMustCallGu:
    'મહત્વપૂર્ણ: WhatsApp પર ઓર્ડર મોકલ્યા પછી કન્ફર્મ માટે ફોન કરવો ફરજિયાત છે. કૉલ વગર ઓર્ડર કન્ફર્મ નહીં થાય.',
  whatsappOrderIntegrityNoteGu:
    'નોંધ: ઉપર દરેક પંક્તિના રૂપિયા જોડીને "વસ્તુઓ કુલ" સાથે મેળ ખાવા જોઈએ. રકમમાં શંકા હોય અથવા મેસેજ ફેરફારેલો લાગે તો મેનુ મુજબ કૉલ પર ચોક્કસ કરજો — ફક્ત WhatsApp લખાણથી ઓર્ડર કન્ફર્મ થતો નથી.',
} as const

export function shopWhatsAppHref(options?: {
  prefillOrder?: boolean
  message?: string
}) {
  const base = `https://wa.me/${SHOP.whatsappPhoneDigits}`
  if (options?.message != null && options.message !== '') {
    return `${base}?text=${encodeURIComponent(options.message)}`
  }
  if (options?.prefillOrder === false) return base
  return `${base}?text=${encodeURIComponent(SHOP.whatsappOrderMessageGu)}`
}
