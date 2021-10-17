import HeroPost from './HeroPost'

const Template = (args) => <HeroPost {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Post Title',
  featuredImage: { altText: 'alt text', sourceUrl: 'https://via.placeholder.com/400x300' },
  date: '2021-10-13T15:30:10Z',
  excerpt: 'Lorem',
  uri: '/',
}

export default {
  title: 'organisms/HeroPost',
  component: HeroPost,
}
