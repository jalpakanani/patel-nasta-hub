/** હોમ ડિલિવરી માટે વસ્તુઓનો ન્યૂનતમ કુલ — આથી ઓછા પર હોમ ડિલિવરી નહીં (પિકઅપ / કૉલ) */
export const HOME_DELIVERY_MIN_SUBTOTAL_INR = 300 as const

/** જૂના import સાથે સુસંગત (એ જ સીમા) */
export const DELIVERY_FREE_MIN_SUBTOTAL_INR = HOME_DELIVERY_MIN_SUBTOTAL_INR

/** મેનુ / ડિલિવરી સેક્શન માટે */
export function deliveryWebHighlightGu(): string {
  const min = HOME_DELIVERY_MIN_SUBTOTAL_INR
  return `હોમ ડિલિવરી માત્ર ₹${min} કે તેથી વધુ વાળા ઓર્ડર (વસ્તુઓનો કુલ) પર મળશે. ₹${min}થી ઓછા ઓર્ડર માટે દુકાન પર પિકઅપ અથવા કૉલ કરીને વાત કરો — એમાં હોમ ડિલિવરી સેવા નથી.`
}

/** કાર્ટ સારાંશ માટે ટૂંકી લાઇન */
export function deliveryBelowMinLabelGu(): string {
  return `હોમ ડિલિવરી માટે ₹${HOME_DELIVERY_MIN_SUBTOTAL_INR}+`
}

export function cartHomeDeliveryMinNoticeGu(subtotalInr: number): string | null {
  if (subtotalInr <= 0) return null
  if (subtotalInr >= HOME_DELIVERY_MIN_SUBTOTAL_INR) return null
  return `હાલ વસ્તુઓનો કુલ ₹${subtotalInr} — હોમ ડિલિવરી માટે ઓછામાં ઓછું ₹${HOME_DELIVERY_MIN_SUBTOTAL_INR} જોઈએ.`
}

export function orderMinHomeDeliveryErrorGu(subtotalInr: number): string {
  const min = HOME_DELIVERY_MIN_SUBTOTAL_INR
  return `હોમ ડિલિવરી માટે વસ્તુઓનો કુલ ઓછામાં ઓછો ₹${min} જોઈએ (હાલ ₹${subtotalInr}). મેનુમાંથી વધુ ઉમેરો અથવા દુકાન પર પિકઅપ / કૉલ કરો.`
}
