/**
 * Convert date to date string Indonesian format, short mode, i.e 20 Sep 2020
 * @param {Date} date
 *
 * @return {String}
 */
export function shortDateFormat(date) {
  if (!date) return null;

  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
