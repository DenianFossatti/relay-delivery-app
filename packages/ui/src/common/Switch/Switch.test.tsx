import { mockTestID, render, wrapper } from '../../tests';

import { Switch, SwitchProps } from '.';

describe(`Switch`, () => {
  const props: SwitchProps = {
    testID: 'Switch',
  };

  const { findByTestId, toJSON } = render(<Switch {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
