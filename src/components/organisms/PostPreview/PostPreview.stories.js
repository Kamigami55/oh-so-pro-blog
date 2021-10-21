import PostPreview from './PostPreview'

const Template = (args) => <PostPreview {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Post Title',
  featuredImage: { altText: 'alt text', sourceUrl: 'https://via.placeholder.com/400x300' },
  date: '2021-10-13T15:30:10Z',
  excerpt: 'Lorem',
  uri: '/',
}

export default {
  title: 'organisms/PostPreview',
  component: PostPreview,
}
