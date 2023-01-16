import { mockTestID, render, wrapper } from '../../tests';

import { TextArea, TextAreaProps } from '.';

describe(`TextArea`, () => {
  const props: TextAreaProps = {
    testID: 'TextArea',
  };

  const { findByTestId, toJSON } = render(<TextArea {...props} />, { wrapper });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
