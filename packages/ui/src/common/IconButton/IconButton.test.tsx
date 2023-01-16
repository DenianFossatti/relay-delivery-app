import { mockTestID, render, wrapper } from '../../tests';

import { IconButton, IconButtonProps } from '.';

describe(`IconButton`, () => {
  const props: IconButtonProps = {
    accessibilityLabel: 'IconButton',
    icon: 'times',
    testID: 'IconButton',
  };

  const el_container = mockTestID('Button', props.testID!);

  it(`render component #${el_container}`, async () => {
    const { findByTestId, toJSON } = render(<IconButton {...props} />, {
      wrapper,
    });
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
