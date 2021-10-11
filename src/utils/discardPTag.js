/**
 * Discard starting and trailing <p> from a string
 * "<p>slice</p>" -> "slice"
 * @param {string} source
 * @returns string
 */
export default function discardPTag(source) {
  return source?.slice(3, -4)
}
