import Intro from './Intro'

const Template = (args) => <Intro {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'molecules/Intro',
  component: Intro,
}
