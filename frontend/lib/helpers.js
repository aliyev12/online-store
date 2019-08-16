// Check deeply nested props
/* Example:
const user = {
  posts: [
    {title: 'Title', comment: 'Comment'}
  ]
}
idx(['posts', '0', 'title'], user) // returns 'Title'
idx(['posts', '2', 'title'], user) // returns 'null' because there is no index 2 in posts
*/
export const idx = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);