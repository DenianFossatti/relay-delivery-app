import { VStack } from 'native-base';

import { Button } from '../Button';

export interface ModalFooterButtonProps {
  onCancel?: () => void;
  onCancelDisabled?: boolean;
  onCancelHide?: boolean;
  onCancelText?: string;
  onCancelTrack?: () => void;
  onClose?: () => void;
  onConfirm?: () => void;
  onConfirmDisabled?: boolean;
  onConfirmLoading?: boolean;
  onConfirmText?: string;
  onConfirmTrack?: () => void;
  testID?: string;
}

export const ModalFooterButton = ({
  onCancel,
  onCancelDisabled = false,
  onCancelHide = false,
  onCancelText,
  onCancelTrack,
  onClose,
  onConfirm,
  onConfirmDisabled = false,
  onConfirmLoading = false,
  onConfirmText,
  onConfirmTrack,
  testID,
}: ModalFooterButtonProps) => {
  function onConfirmPress() {
    onConfirmTrack?.();
    onConfirm?.();
    onClose?.();
  }
  function onCancelPress() {
    onCancel?.();
    onClose?.();
    onCancelTrack?.();
  }
  return (
    <VStack mt={1}>
      {!!onConfirmText && onConfirmPress && (
        <Button
          disabled={onConfirmDisabled}
          isLoading={onConfirmLoading}
          onPress={onConfirmPress}
          testID={`${testID}_ModalFooterButton_Confirm`}
        >
          {onConfirmText}
        </Button>
      )}
      {!!onCancelText && onCancelHide === false && (
        <Button
          colorScheme="neutral"
          disabled={onCancelDisabled}
          mt="3"
          onPress={onCancelPress}
          testID={`${testID}_ModalFooterButton_Cancel`}
        >
          {onCancelText}
        </Button>
      )}
    </VStack>
  );
};
