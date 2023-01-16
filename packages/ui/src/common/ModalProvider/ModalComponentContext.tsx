import { useContext } from 'react';

import { Modal } from '../Modal';

import { ModalContext } from './ModalContext';

export const ModalComponentContext = () => {
  const { close: onClose, isOpen, state } = useContext(ModalContext);

  if (!state) return null;

  return <Modal {...state} isOpen={isOpen} onClose={onClose} />;
};
