import PostList from './PostList'

const Template = (args) => <PostList {...args} />

export const Default = Template.bind({})
Default.args = {
  posts: [
    {
      id: 1,
      title: 'Post Title',
      featuredImage: { altText: 'alt text', sourceUrl: 'https://via.placeholder.com/400x300' },
      date: '2021-10-13T15:30:10Z',
      excerpt: 'Lorem',
      uri: '/',
    },
    {
      id: 2,
      title: 'Post Title',
      featuredImage: { altText: 'alt text', sourceUrl: 'https://via.placeholder.com/400x300' },
      date: '2021-10-13T15:30:10Z',
      excerpt: 'Lorem',
      uri: '/',
    },
    {
      id: 3,
      title: 'Post Title',
      featuredImage: { altText: 'alt text', sourceUrl: 'https://via.placeholder.com/400x300' },
      date: '2021-10-13T15:30:10Z',
      excerpt: 'Lorem',
      uri: '/',
    },
  ],
}

export default {
  title: 'organisms/PostList',
  component: PostList,
}
