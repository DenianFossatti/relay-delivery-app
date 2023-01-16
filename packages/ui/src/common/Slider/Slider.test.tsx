import { mockTestID, render, wrapper } from '../../tests';

import { Slider, SliderProps } from '.';

describe(`Slider`, () => {
  const props: SliderProps = {
    testID: 'Slider',
  };

  const { findByTestId, toJSON } = render(<Slider {...props} />, { wrapper });

  const el_container = mockTestID('Slider', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
