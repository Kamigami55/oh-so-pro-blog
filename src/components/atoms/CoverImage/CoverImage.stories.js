import CoverImage from './CoverImage'

const Template = (args) => <CoverImage {...args} />

export const Default = Template.bind({})
Default.args = {
  featuredImage: { altText: 'placeholder', sourceUrl: 'https://via.placeholder.com/400x300' },
  uri: '/',
}

export default {
  title: 'atoms/CoverImage',
  component: CoverImage,
}
