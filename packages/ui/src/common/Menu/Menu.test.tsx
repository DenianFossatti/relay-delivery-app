import {Menu, MenuProps} from '~/atomic'
import {fireEvent, mockTestID, render, wrapper} from '~/tests'

import {base} from '../base'

describe(`${base.name}/Menu`, () => {
  const props: MenuProps = {
    items: [
      {
        onPress: jest.fn(),
        title: 'item1',
      },
      {
        onPress: jest.fn(),
        title: 'item2',
      },
    ],
    testID: 'Menu',
  }

  const el_container = mockTestID('View', props.testID!)
  const el_trigger = mockTestID('Button', `${props.testID!}_Trigger`)

  // Skip because Menu from native-base doesn't have a testID prop.
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip(`render component #${el_container}`, async () => {
    const {findByTestId, toJSON} = render(<Menu {...props} />, {wrapper})
    const sut = await findByTestId(el_container)
    expect(sut).toBeTruthy()
    expect(toJSON()).toMatchSnapshot()
  })

  // Skip because Menu.Item from native-base doesn't have a testID prop.
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip(`render component #${el_trigger}`, async () => {
    const onOpen = jest.fn()
    const {findByTestId, toJSON} = render(<Menu onOpen={onOpen} {...props} />, {wrapper})
    const sut = await findByTestId(el_trigger)
    const sut2 = await findByTestId('Menu_MenuItem_0')
    expect(sut).toBeTruthy()
    expect(sut2).toBeTruthy()
    fireEvent.press(sut)
    expect(onOpen).toHaveBeenCalledTimes(1)
    expect(toJSON()).toMatchSnapshot()
  })
})
