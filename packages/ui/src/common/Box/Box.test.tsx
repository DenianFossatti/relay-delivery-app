import { mockTestID, render, wrapper } from '../../tests';

import { Box, BoxProps } from '.';

describe(`Box`, () => {
  const props: BoxProps = {
    testID: 'Box',
  };

  const { findByTestId, toJSON } = render(<Box {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
