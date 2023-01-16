import {expect} from '@storybook/jest'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {userEvent, waitFor, within} from '@storybook/testing-library'

import {Box} from '~/atomic'

import {base} from '../base'
import {Menu} from './'

export default {
  component: Menu,
  title: `${base.name}/Menu`,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = args => (
  <Box alignItems='flex-end' w='100%'>
    <Menu {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  items: [
    {onPress: () => console.log('onPress'), title: 'Arial'},
    {onPress: () => console.log('onPress'), title: 'Nunito Sans'},
    {
      icon: ['far', 'smile'],
      onPress: () => console.log('onPress'),
      title: 'Sans',
    },
  ],
}

Default.play = async ({canvasElement}) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByTestId('Button_Menu_Trigger'))
  // eslint-disable-next-line testing-library/prefer-find-by
  await waitFor(() => expect(canvas.getByText('Arial')).toBeInTheDocument())
  // eslint-disable-next-line testing-library/no-wait-for-side-effects
  await waitFor(() => userEvent.hover(canvas.getByText('Arial')))
}
