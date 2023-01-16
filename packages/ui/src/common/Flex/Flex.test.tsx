import { mockTestID, render, wrapper } from '../../tests';

import { Flex, FlexProps } from '.';

describe(`Flex`, () => {
  const props: FlexProps = {
    testID: 'Flex',
  };

  const { findByTestId, toJSON } = render(<Flex {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
