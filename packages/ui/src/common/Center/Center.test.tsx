import { mockTestID, render, wrapper } from '../../tests';

import { Center, CenterProps } from '.';

describe(`Center`, () => {
  const props: CenterProps = {
    testID: 'Center',
  };

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const { findByTestId, toJSON } = render(<Center {...props} />, { wrapper });
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
