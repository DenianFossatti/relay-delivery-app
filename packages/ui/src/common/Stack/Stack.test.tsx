import { mockTestID, render, wrapper } from '../../tests';

import { Stack, StackProps } from '.';

describe(`Stack`, () => {
  const props: StackProps = {
    testID: 'Stack',
  };

  const { findByTestId, toJSON } = render(<Stack {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
