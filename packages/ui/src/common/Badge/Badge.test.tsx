import { mockTestID, render, wrapper } from '../../tests';

import { Badge, BadgeProps } from '.';

describe(`Badge`, () => {
  const props: BadgeProps = {
    testID: 'Badge',
  };

  const { findByTestId, toJSON } = render(<Badge {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
