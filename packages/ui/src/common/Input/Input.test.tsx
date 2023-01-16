import { act, fireEvent, mockTestID, render, wrapper } from '../../tests';

import { Input, InputProps } from '.';

describe(`Input`, () => {
  const props: InputProps = {
    accessibilityLabel: 'Input',
    testID: 'Input',
  };

  const el_container = mockTestID('TextInput', props.testID!);
  const el_helper_text = mockTestID('Text', `${props.testID!}_helper`);

  it(`render component #${el_container}`, async () => {
    const { findByTestId, toJSON } = render(<Input {...props} />, {
      wrapper,
    });
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it(`should find the ${el_container} via acessebilityLabel #${props.accessibilityLabel}`, async () => {
    const { getByLabelText, toJSON } = render(<Input {...props} />, {
      wrapper,
    });
    const sut = getByLabelText(props.accessibilityLabel!);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it(`render component with invalid #${el_container}`, async () => {
    props.isInvalid = true;
    props.onChangeText = jest.fn();
    const { findByTestId, toJSON } = render(<Input {...props} />, {
      wrapper,
    });
    const input = await findByTestId(el_container);

    await act(async () => {
      fireEvent.press(input);
      fireEvent.changeText(input, 'teste');
    });
    expect(input.props.value).toBe('teste');
    expect(toJSON()).toMatchSnapshot();
  });
  it(`render component with helper text #${el_helper_text}`, async () => {
    props.helperText = 'helper text';
    const { findByTestId, toJSON } = render(<Input {...props} />, {
      wrapper,
    });
    const sut = await findByTestId(el_helper_text);

    expect(sut.children.join('')).toBe('helper text');
    expect(toJSON()).toMatchSnapshot();
  });
});

describe(`Input Phone`, () => {
  const props: InputProps = {
    accessibilityLabel: 'Input',
    testID: 'Input',
    variant: 'phone',
  };

  const el_container = mockTestID('TextInput', props.testID!);

  it(`render component with variant phone #${el_container}`, async () => {
    props.variant = 'phone';
    props.onChangeText = jest.fn();
    const { findByTestId, toJSON } = render(<Input {...props} />, {
      wrapper,
    });
    const input = await findByTestId(el_container);

    await act(async () => {
      fireEvent.press(input);
      fireEvent.changeText(input, '21999999999');
    });
    expect(input.props.value).toBe('(21) 99999-9999');
    expect(toJSON()).toMatchSnapshot();
  });
  it(`render component with variant phone #${el_container}`, async () => {
    props.variant = 'phone';
    props.onChangeText = jest.fn();
    const { findByTestId, toJSON } = render(<Input {...props} />, {
      wrapper,
    });
    const input = await findByTestId(el_container);

    await act(async () => {
      fireEvent.press(input);
      fireEvent.changeText(input, '21999999');
    });
    expect(input.props.value).toBe('(21) 99999-9');
    expect(toJSON()).toMatchSnapshot();
  });
});

describe(`Input Password`, () => {
  const props: InputProps = {
    accessibilityLabel: 'Input',
    testID: 'Input',
    variant: 'password',
  };

  const el_container = mockTestID('TextInput', props.testID!);
  const el_buttonSecure = mockTestID('Button', `${props.testID!}_securePassword`);

  it(`render component with variant password #${el_container}`, async () => {
    props.onChangeText = jest.fn();
    const { findByTestId, toJSON } = render(<Input {...props} />, {
      wrapper,
    });
    const input = await findByTestId(el_container);

    await act(async () => {
      fireEvent.press(input);
      fireEvent.changeText(input, '1233');
    });
    expect(input.props.value).toBe('1233');
    expect(toJSON()).toMatchSnapshot();
  });
  it(`should find the label about show password #${el_buttonSecure}`, async () => {
    props.onChangeText = jest.fn();
    const { getByLabelText, toJSON } = render(<Input {...props} />, {
      wrapper,
    });
    const sut = getByLabelText('Exibir senha');
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it(`should find the label about hide password #${el_buttonSecure}`, async () => {
    props.onChangeText = jest.fn();
    const { findByTestId, getByLabelText, toJSON } = render(<Input {...props} />, {
      wrapper,
    });
    const input = await findByTestId(el_buttonSecure);

    await act(async () => {
      fireEvent.press(input);
    });

    const sut = getByLabelText('Esconder senha');
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
