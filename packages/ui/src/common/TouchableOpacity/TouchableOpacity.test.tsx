import { mockTestID, render, wrapper } from '../../tests';

import { TouchableOpacity, TouchableOpacityProps } from '.';

describe(`TouchableOpacity`, () => {
  const props: TouchableOpacityProps = {
    testID: 'TouchableOpacity',
  };

  const { findByTestId, toJSON } = render(<TouchableOpacity {...props} />, {
    wrapper,
  });

  const el_container = mockTestID('TouchableOpacity', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
