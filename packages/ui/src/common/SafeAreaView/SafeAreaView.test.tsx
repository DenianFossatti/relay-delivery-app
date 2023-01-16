import { mockTestID, render, wrapper } from '../../tests';

import { SafeAreaView, SafeAreaViewProps } from '.';

describe(`SafeAreaView`, () => {
  const props: SafeAreaViewProps = {
    testID: 'SafeAreaView',
  };

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const { findByTestId, toJSON } = render(<SafeAreaView {...props} />, {
      wrapper,
    });
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
