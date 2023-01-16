import { mockTestID, render, wrapper } from '../../tests';

import { Image, ImageProps } from '.';

describe(`Image`, () => {
  const props: ImageProps = {
    alt: 'Image',
    source: { uri: 'https://via.placeholder.com/300x200' },
    testID: 'Image',
  };

  const { findByTestId, toJSON } = render(<Image {...props} />, { wrapper });

  const el_container = mockTestID('Image', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
