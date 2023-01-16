import { mockTestID, render, wrapper } from '../../tests';

import { Divider, DividerProps } from '.';

describe(`Divider`, () => {
  const props: DividerProps = {
    testID: 'Divider',
  };

  const { findByTestId, toJSON } = render(<Divider {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
