import Date from './Date'

const Template = (args) => <Date {...args} />

export const Default = Template.bind({})
Default.args = {
  dateString: '2021-10-13T15:30:10Z',
}

export default {
  title: 'atoms/Date',
  component: Date,
}
