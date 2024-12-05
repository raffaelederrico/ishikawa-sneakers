import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, MEDIA_BLOCK } from './blocks'
import { SHOES_LINE } from './categories'
import { META } from './meta'

export const PRODUCTS = `
  query Products {
    Products(limit: 300) {
      docs {
        slug
        sizes {
          id
          size
          stock
          }
        gallery {
          image {
            id
            url
          }
        }
      }
    }
  }
`

export const PRODUCT = `
  query Product($slug: String, $draft: Boolean) {
    Products(where: { slug: { equals: $slug}}, limit: 1, draft: $draft) {
      docs {
        id
        title
        sizes {
          id
          size
          stock
        }
        gallery {
          image {
            id
            url
          }
        }
        stripeProductID
        ${SHOES_LINE}
        layout {
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
        }
        priceJSON
        enablePaywall
        relatedProducts {
          id
          slug
          title
          ${META}
        }
        ${META}
      }
    }
  }
`

export const PRODUCT_PAYWALL = `
  query Product($slug: String, $draft: Boolean) {
    Products(where: { slug: { equals: $slug}}, limit: 1, draft: $draft) {
      docs {
        paywall {
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
        }
      }
    }
  }
`
