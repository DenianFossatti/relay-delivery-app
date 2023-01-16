import { mockTestID, render, wrapper } from '../../tests';

import { Text, TextProps } from '.';

describe(`Text`, () => {
  const props: TextProps = {
    children: 'Welcome',
    testID: 'Text',
  };

  const { findByTestId, toJSON } = render(<Text {...props} />, { wrapper });

  const el_container = mockTestID('Text', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut.children).toEqual([props.children]);
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
