import { mockTestID, render, wrapper } from '../../tests';

import { Container, ContainerProps } from '.';

describe(`Container`, () => {
  const props: ContainerProps = {
    testID: 'Container',
  };

  const { findByTestId, toJSON } = render(<Container {...props} />, {
    wrapper,
  });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
