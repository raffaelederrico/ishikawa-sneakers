export const SHOES_LINE = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `
      query Categories {
        Categories(limit: 300) {
          docs {
            id
            title
            media {
            alt
            width
            height
            url
            }
          }
        }
      }
    `
