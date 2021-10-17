import PropTypes from 'prop-types'

import PostPreview from '@/components/organisms/PostPreview'

export default function PostList({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post?.id}
            title={post?.title}
            featuredImage={post?.featuredImage}
            date={post?.date}
            uri={post?.uri}
            excerpt={post?.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

PostList.propTypes = {
  posts: PropTypes.array,
}

PostList.defaultProps = {
  posts: [],
}
