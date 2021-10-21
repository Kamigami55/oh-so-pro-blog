import { useMemo } from 'react'
import { useQuery } from '@apollo/client'

import { initializeApollo, addApolloState } from '@/lib/apolloClient'
import { allPostsQueryVars, ALL_POSTS_QUERY, transformAllPostsData } from '@/graphql/allPostsQuery'
import Layout from '@/components/layout'
import IndexPage from '@/components/templates/IndexPage'

export default function Home() {
  const { data } = useQuery(ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
  })
  const allPosts = useMemo(() => transformAllPostsData(data), [data]) || []

  return (
    <Layout>
      <IndexPage posts={allPosts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}
