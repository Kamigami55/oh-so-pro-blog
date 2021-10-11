import { gql } from '@apollo/client'

import discardPTag from '../utils/discardPTag'

export const ALL_POSTS_QUERY = gql`
  query allPosts($first: Int!) {
    posts(where: { orderby: { field: DATE, order: DESC } }, first: $first) {
      edges {
        node {
          databaseId
          title
          uri
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`

export const allPostsQueryVars = {
  first: 10,
}

export const transformAllPostsData = (data) => {
  return (
    data?.posts?.edges
      ?.map((edge) => edge?.node)
      ?.map((post) => ({
        id: post?.databaseId || '',
        title: post?.title || '',
        uri: post?.uri || '',
        date: post?.date || '',
        excerpt: discardPTag(post?.excerpt) || '',
        featuredImage: {
          sourceUrl: post?.featuredImage?.node?.sourceUrl || '',
          altText: post?.featuredImage?.node?.altText || '',
        },
      })) || []
  )
}
