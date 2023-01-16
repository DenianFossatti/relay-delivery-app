import { mockTestID, render, wrapper } from '../../tests';

import { Icon, IconProps } from '.';

describe(`Icon`, () => {
  const props: IconProps = {
    icon: 'eye',
    testID: 'Icon',
  };

  const { findByTestId, toJSON } = render(<Icon {...props} />, { wrapper });

  const el_container = mockTestID('Image', `${props.testID}`);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
