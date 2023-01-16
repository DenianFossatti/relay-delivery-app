import { mockTestID, render, wrapper } from '../../';
import { ScrollView, ScrollViewProps, Text } from '../../components/atoms';

describe(`ScrollView`, () => {
  const props: ScrollViewProps = {
    children: <Text>Oi</Text>,
    testID: 'ScrollView',
  };

  const { findByTestId, toJSON } = render(<ScrollView {...props} />, {
    wrapper,
  });

  const el_container = mockTestID('View', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
