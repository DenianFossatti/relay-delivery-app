import { mockTestID, render, wrapper } from '../../tests';

import { Heading, HeadingProps } from '.';

describe(`Heading`, () => {
  const props: HeadingProps = {
    testID: 'Heading',
  };

  const { findByTestId, toJSON } = render(<Heading {...props} />, { wrapper });

  const el_container = mockTestID('Text', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
