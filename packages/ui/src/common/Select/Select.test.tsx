import { mockTestID, render, wrapper } from '../../tests';

import { Select, SelectProps } from '.';

describe(`Select`, () => {
  const props: SelectProps = {
    items: [
      {
        label: 'Option 1',
        value: '1',
      },
      {
        label: 'Option 2',
        value: '2',
      },
    ],
    placeholder: 'Select an option',
    testID: 'Select',
  };

  const el_container = mockTestID('Select', `${props.testID}`);

  it(`render component #${el_container}`, async () => {
    const { findByTestId, toJSON } = render(<Select {...props} />, { wrapper });
    const sut = await findByTestId(el_container);
    expect(sut.props.placeholder).toEqual(props.placeholder);
    expect(toJSON()).toMatchSnapshot();
  });
});
