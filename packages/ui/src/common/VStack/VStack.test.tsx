import { mockTestID, render, wrapper } from '../../tests';

import { VStack, VStackProps } from '.';

describe(`VStack`, () => {
  const props: VStackProps = {
    testID: 'VStack',
  };

  const { findByTestId, toJSON } = render(<VStack {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
