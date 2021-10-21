import IndexPage from './IndexPage'

import * as PostListStories from '@/components/organisms/PostList/PostList.stories'

const Template = (args) => <IndexPage {...args} />

export const Default = Template.bind({})
Default.args = {
  posts: PostListStories.Default.args.posts,
}

export default {
  title: 'templates/IndexPage',
  component: IndexPage,
}
