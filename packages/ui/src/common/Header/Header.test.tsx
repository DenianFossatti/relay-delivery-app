import { fireEvent, mockTestID, render, wrapper } from '../../tests';

import { Header, HeaderProps } from './';

describe(`Header`, () => {
  const props: HeaderProps = {
    testID: 'Header',
  };

  const el_container = mockTestID('View', props.testID!);
  const el_title = mockTestID('Text', `${props.testID}_title`);
  const el_subtitle = mockTestID('Text', `${props.testID}_subtitle`);
  const el_onBack = mockTestID('Button', `${props.testID!}_onBack`);
  const el_logo = mockTestID('View', `${props.testID!}_logo`);
  const el_rightButton = mockTestID('Button', `${props.testID!}_rightButton_0`);
  const el_onHelp = mockTestID('Button', `${props.testID!}_onHelp`);
  const el_onClose = mockTestID('Button', `${props.testID!}_onClose`);
  const el_rightButtonText_Pressable = mockTestID('Pressable', `${props.testID!}_rightButtonText`);
  const el_rightButtonText_Text = mockTestID('Text', `${props.testID!}_rightButtonText`);
  const el_rightButtonText_Icon = mockTestID('Image', `${props.testID!}_rightButtonText`);
  const el_menu = mockTestID('View', `${props.testID!}_menu`);

  it(`render component #${el_container}`, async () => {
    const { findByTestId, toJSON } = render(<Header {...props} />, { wrapper });
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it(`render component #${el_onBack}`, async () => {
    props.onBack = jest.fn();
    const { findByTestId, toJSON } = render(<Header {...props} />, { wrapper });
    const sut = await findByTestId(el_onBack);
    fireEvent.press(sut);
    expect(sut).toBeTruthy();
    expect(props.onBack).toHaveBeenCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });

  it(`render component #${el_logo}`, async () => {
    props.logo = true;
    const { findByTestId, toJSON } = render(<Header {...props} />, { wrapper });
    const sut = await findByTestId(el_logo);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it(`render component #${el_title}`, async () => {
    const { findByTestId, toJSON } = render(<Header title="pageTitle" {...props} />, { wrapper });
    const sut = await findByTestId(el_title);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it(`render component #${el_subtitle}`, async () => {
    const { findByTestId, toJSON } = render(<Header subtitle="pageSubtitle" title="pageTitle" {...props} />, {
      wrapper,
    });
    const sut = await findByTestId(el_subtitle);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it(`render component #${el_rightButton}`, async () => {
    props.rightButtons = [{ icon: 'times', onPress: jest.fn() }];
    const { findByTestId, toJSON } = render(<Header {...props} />, { wrapper });
    const sut = await findByTestId(el_rightButton);
    fireEvent.press(sut);
    expect(sut).toBeTruthy();
    expect(props.rightButtons[0].onPress).toHaveBeenCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });

  it(`render component #${el_onHelp}`, async () => {
    props.onHelp = jest.fn();
    const { findByTestId, toJSON } = render(<Header {...props} />, { wrapper });
    const sut = await findByTestId(el_onHelp);
    fireEvent.press(sut);
    expect(sut).toBeTruthy();
    expect(props.onHelp).toHaveBeenCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });

  it(`render component #${el_onClose}`, async () => {
    props.onClose = jest.fn();
    const { findByTestId, toJSON } = render(<Header {...props} />, { wrapper });
    const sut = await findByTestId(el_onClose);
    fireEvent.press(sut);
    expect(sut).toBeTruthy();
    expect(props.onClose).toHaveBeenCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });

  it(`render component #${el_rightButtonText_Pressable}`, async () => {
    props.rightButtonText = {
      icon: 'times',
      onPress: jest.fn(),
      text: 'Pular',
    };
    const { findByTestId, toJSON } = render(<Header {...props} />, { wrapper });
    const sut = await findByTestId(el_rightButtonText_Pressable);
    fireEvent.press(sut);
    expect(sut).toBeTruthy();
    expect(props.rightButtonText.onPress).toHaveBeenCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });
  it(`render component #${el_rightButtonText_Text}`, async () => {
    props.rightButtonText = {
      icon: 'times',
      onPress: jest.fn(),
      text: 'Pular',
    };
    const { findByTestId, toJSON } = render(<Header {...props} />, { wrapper });
    const sut = await findByTestId(el_rightButtonText_Text);

    expect(sut.children.join('')).toEqual(props.rightButtonText.text);
    expect(toJSON()).toMatchSnapshot();
  });

  it(`render component #${el_rightButtonText_Icon}`, async () => {
    props.rightButtonText = {
      icon: 'times',
      onPress: jest.fn(),
      text: 'Pular',
    };
    const { findByTestId, toJSON } = render(<Header {...props} />, { wrapper });
    const sut = await findByTestId(el_rightButtonText_Icon);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
