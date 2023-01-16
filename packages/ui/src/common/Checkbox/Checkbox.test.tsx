import { mockTestID, render, wrapper } from '../../tests';

import { Checkbox, CheckboxProps } from '.';

describe(`Checkbox`, () => {
  const props: CheckboxProps = {
    testID: 'Checkbox',
    value: 'value',
  };

  const { findByTestId, toJSON } = render(<Checkbox {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
