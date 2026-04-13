/** ઓર્ડર મોકલ્યાનો સમય — IST, ગુજરાતી લોકેલ */
export function formatOrderSentAtIst(date = new Date()): string {
  try {
    return new Intl.DateTimeFormat('gu-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date)
  } catch {
    return date.toISOString()
  }
}
