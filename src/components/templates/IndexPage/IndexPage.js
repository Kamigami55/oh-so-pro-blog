import PropTypes from 'prop-types'

import Container from '@/components/molecules/Container'
import Intro from '@/components/molecules/Intro'
import HeroPost from '@/components/organisms/HeroPost'
import PostList from '@/components/organisms/PostList'

export default function IndexPage({ posts }) {
  const heroPost = posts?.[0]
  const morePosts = posts?.slice(1) || []

  return (
    <Container>
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          featuredImage={heroPost.featuredImage}
          date={heroPost.date}
          uri={heroPost.uri}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <PostList posts={morePosts} />}
    </Container>
  )
}

IndexPage.propTypes = { posts: PropTypes.array }

IndexPage.defaultProps = { posts: [] }
