import { mockTestID, render, wrapper } from '../../tests';

import { SimpleGrid, SimpleGridProps } from '.';
describe(`SimpleGrid`, () => {
  const props: SimpleGridProps = {
    columns: 3,
    space: 2,
    testID: 'SimpleGrid',
  };

  const { findByTestId, toJSON } = render(<SimpleGrid {...props} />, {
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
