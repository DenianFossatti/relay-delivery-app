import { fireEvent, mockTestID, render, wrapper } from '../../tests';

import { Modal, ModalProps } from './';

describe(`Modal`, () => {
  const props: ModalProps = {
    isOpen: true,
    testID: 'Modal',
  };

  const el_container = mockTestID('Modal', props.testID!);
  const el_footer_confirm_button = mockTestID('Button', `${props.testID}_ModalFooterButton_Confirm`);
  const el_footer_cancel_button = mockTestID('Button', `${props.testID}_ModalFooterButton_Cancel`);

  it(`render component #${el_container}`, async () => {
    const { findByTestId } = render(<Modal {...props} />, { wrapper });
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it(`render component and press on confirm #${el_footer_confirm_button}`, async () => {
    const onConfirm = jest.fn();
    const { findByTestId } = render(
      <Modal
        footerButton={{
          onConfirm,
          onConfirmText: 'Confirmar',
        }}
        {...props}
      />,
      { wrapper },
    );
    const sut = await findByTestId(el_footer_confirm_button);
    expect(sut).toBeTruthy();
    fireEvent.press(sut);
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it(`render component and press on cancel #${el_footer_cancel_button}`, async () => {
    const onCancel = jest.fn();
    const { findByTestId } = render(
      <Modal
        footerButton={{
          onCancel,
          onCancelText: 'Cancelar',
        }}
        {...props}
      />,
      { wrapper },
    );
    const sut = await findByTestId(el_footer_cancel_button);
    expect(sut).toBeTruthy();
    fireEvent.press(sut);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it(`render component and press on cancel and confirm #${el_footer_confirm_button}`, async () => {
    const onConfirm = jest.fn();
    props.onConfirmTrack = jest.fn();
    props.isOpen = true;

    const { findByTestId } = render(
      <Modal
        footerButton={{
          onConfirm,
          onConfirmText: 'Confirmar',
        }}
        {...props}
      />,
      { wrapper },
    );
    const sut = await findByTestId(el_footer_confirm_button);
    expect(onConfirm).toBeTruthy();
    fireEvent.press(sut);
    expect(props.onConfirmTrack).toHaveBeenCalledTimes(1);
  });

  it(`render component and press on cancel and confirm #${el_footer_cancel_button}`, async () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    props.onConfirmTrack = jest.fn();
    props.onCancelTrack = jest.fn();
    props.isOpen = true;

    const { findByTestId } = render(
      <Modal
        footerButton={{
          onCancel,
          onCancelText: 'Cancelar',
          onConfirm,
          onConfirmText: 'Confirmar',
        }}
        {...props}
      />,
      { wrapper },
    );
    const sut = await findByTestId(el_footer_cancel_button);
    expect(onCancel).toBeTruthy();
    fireEvent.press(sut);
    expect(props.onCancelTrack).toHaveBeenCalledTimes(1);
  });
});
