import { useCallback, useState } from 'react';
import { Keyboard } from 'react-native';

import { ModalProps } from '../Modal';

import { ModalComponentContext } from './ModalComponentContext';
import { ModalContext } from './ModalContext';

export type ModalProviderProps = {
  children: React.ReactNode;
  onCancelTracking?: () => void;
  onClose?: () => void;
  onConfirmTracking?: () => void;
  onOpen?: (modal: ModalProps) => void;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
  onCancelTracking,
  onClose,
  onConfirmTracking,
  onOpen,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [state, setState] = useState<ModalProps>();

  const open = useCallback(
    (modal: ModalProps) => {
      onOpen?.(modal);
      Keyboard.dismiss();
      setState(modal);
      setOpen(true);
    },
    [onOpen],
  );

  const close = useCallback(() => {
    setOpen(false);
    onClose?.();
  }, [onClose]);

  return (
    <ModalContext.Provider
      value={{
        close,
        isOpen,
        onCancelTracking,
        onConfirmTracking,
        open,
        state,
      }}
    >
      <ModalComponentContext />
      {children}
    </ModalContext.Provider>
  );
};
