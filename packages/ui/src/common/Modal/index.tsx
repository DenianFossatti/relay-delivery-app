import { Actionsheet, Box, Hidden, IOverlayProps, Modal as ModalBase, VStack } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { Keyboard } from 'react-native';

import { assignTestId } from '../../tests/assignTestId';
import { Text } from '../Text';

import { ModalFooterButton, ModalFooterButtonProps } from './ModalFooterButton';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';

export { useModal } from './useModal';

export type ModalProps = {
  children?: React.ReactNode;
  footerButton?: ModalFooterButtonProps;
  header?: ModalHeaderProps;
  isOpen?: boolean;
  onCancelTrack?: () => void;
  onClose?: () => void;
  onConfirmTrack?: () => void;
  testID?: string;
  text?: string;
};

export const Modal = ({
  children,
  footerButton,
  header,
  isOpen = false,
  onCancelTrack,
  onClose,
  onConfirmTrack,
  testID = 'Modal',
  text,
}: ModalProps) => {
  const renderContentMobile = useCallback(
    (mobile = false) => {
      return (
        <VStack px={mobile ? 2 : 0} safeAreaBottom={mobile ? 2 : 0} w="full">
          {header && <ModalHeader {...header} />}
          {!!children && <Box>{children}</Box>}
          {!!text && (
            <Text fontSize={16} pb={4}>
              {text}
            </Text>
          )}

          {footerButton && (
            <ModalFooterButton
              testID={testID}
              {...footerButton}
              onCancelTrack={onCancelTrack}
              onClose={onClose}
              onConfirmTrack={onConfirmTrack}
            />
          )}
        </VStack>
      );
    },
    [children, footerButton, header, onCancelTrack, onClose, onConfirmTrack, testID, text],
  );

  useEffect(() => {
    if (isOpen) {
      Keyboard.dismiss();
    }
  }, [isOpen]);

  return (
    <>
      <Hidden from="sm">
        <Actionsheet
          _backdrop={
            {
              style: {
                opacity: 0.5,
              },
            } as IOverlayProps
          }
          isOpen={isOpen}
          onClose={onClose}
          {...assignTestId('Modal', testID)}
        >
          <Actionsheet.Content bg="background" pt={6}>
            {renderContentMobile(true)}
          </Actionsheet.Content>
        </Actionsheet>
      </Hidden>
      <Hidden till="sm">
        <ModalBase
          {...assignTestId('Modal', testID)}
          alignItems="center"
          isOpen={isOpen}
          justifyContent="center"
          size="xl"
        >
          <ModalBase.Content>{renderContentMobile(false)}</ModalBase.Content>
        </ModalBase>
      </Hidden>
    </>
  );
};
