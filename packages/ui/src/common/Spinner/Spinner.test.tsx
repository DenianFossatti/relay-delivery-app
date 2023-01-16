import { mockTestID, render, wrapper } from '../../tests';

import { Spinner, SpinnerProps } from '.';

describe(`Spinner`, () => {
  const props: SpinnerProps = {
    testID: 'Spinner',
  };

  const { findByTestId, toJSON } = render(<Spinner {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
