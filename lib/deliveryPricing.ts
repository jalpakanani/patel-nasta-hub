/** વસ્તુઓના કુલ પર આ રકમથી નીચે ડિલિવરી ફી લાગે (વેબ કાર્ટ / WhatsApp ઓર્ડર) */
export const DELIVERY_FREE_MIN_SUBTOTAL_INR = 300 as const
export const DELIVERY_FEE_BELOW_THRESHOLD_INR = 30 as const

/** મેનુ / ડિલિવરી સેક્શન માટે — સંખ્યા કાર્ટ સાથે સરખી રાખો */
export function deliveryWebHighlightGu(): string {
  const min = DELIVERY_FREE_MIN_SUBTOTAL_INR
  const fee = DELIVERY_FEE_BELOW_THRESHOLD_INR
  return `જો ઓર્ડર (વસ્તુઓનો કુલ) ₹${min}થી ઓછો હોય તો ₹${fee}નો ડિલિવરી ચાર્જ લાગશે. ₹${min} કે તેથી વધુના ઓર્ડર પર આ ચાર્જ નહીં.`
}

/** કાર્ટ બાર / નાની નોંધ માટે ટૂંકી લાઇન */
export function deliveryBelowMinLabelGu(): string {
  return `₹${DELIVERY_FREE_MIN_SUBTOTAL_INR}થી ઓછો ઓર્ડર`
}
