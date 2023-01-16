import { mockTestID, render, wrapper } from '../../tests';

import { HStack, HStackProps } from '.';

describe(`HStack`, () => {
  const props: HStackProps = {
    testID: 'HStack',
  };

  const { findByTestId, toJSON } = render(<HStack {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
