import { mockTestID, render, wrapper } from '../../tests';

import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from '.';

describe(`KeyboardAvoidingView`, () => {
  const props: KeyboardAvoidingViewProps = {
    testID: 'KeyboardAvoidingView',
  };

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const { findByTestId, toJSON } = render(<KeyboardAvoidingView {...props} />, { wrapper });
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
