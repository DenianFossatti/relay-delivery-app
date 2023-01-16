import { mockTestID, render, wrapper } from '../../tests';

import { FlatList, FlatListProps } from '.';

describe(`FlatList`, () => {
  const props: FlatListProps = {
    testID: 'FlatList',
  };

  const el_container = mockTestID('List', props.testID!);

  it(`render component #${el_container}`, async () => {
    const { findByTestId, toJSON } = render(<FlatList {...props} />, {
      wrapper,
    });
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
