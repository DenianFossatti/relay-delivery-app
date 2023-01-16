import { fireEvent, mockTestID, render, wrapper } from '../../tests';

import { mockChips } from './mock';

import { Chip, ChipProps } from '.';

describe(`Chips`, () => {
  const props: ChipProps = {
    ...mockChips,
  };

  const el_chip = mockTestID('Pressable', props.testID!);
  const el_chipText = mockTestID('Text', props.testID!);

  it(`should press on #${el_chip}`, async () => {
    const { findByTestId, toJSON } = render(<Chip {...props} />, {
      wrapper,
    });
    const sut = await findByTestId(el_chip);
    fireEvent.press(sut);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it(`should text on #${el_chipText}`, async () => {
    const { findByTestId, toJSON } = render(<Chip {...props} />, {
      wrapper,
    });
    const sut = await findByTestId(el_chipText);
    expect(sut.children.join('')).toEqual(props.label);
    expect(toJSON()).toMatchSnapshot();
  });
});
