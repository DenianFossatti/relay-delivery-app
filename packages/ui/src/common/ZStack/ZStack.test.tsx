import { mockTestID, render, wrapper } from '../../tests';

import { ZStack, ZStackProps } from '.';

describe(`ZStack`, () => {
  const props: ZStackProps = {
    testID: 'ZStack',
  };

  const { findByTestId, toJSON } = render(<ZStack {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
