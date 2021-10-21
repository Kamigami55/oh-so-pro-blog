import Header from './Header'

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  aProp: 'placeholder',
}

export default {
  title: 'organisms/Header',
  component: Header,
}
