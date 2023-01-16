import { mockTestID, render, wrapper } from '../../tests';

import { Fab, FabProps } from '.';

describe(`Fab`, () => {
  const props: FabProps = {
    testID: 'Fab',
  };

  const { findByTestId, toJSON } = render(<Fab {...props} />, { wrapper });

  const el_container = mockTestID('Button', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
