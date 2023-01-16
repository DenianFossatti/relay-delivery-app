import { ModalProps } from '../Modal';

export type ModalContextType = {
  close?: () => void;
  isOpen: boolean;
  onCancelTracking?: () => void;
  onConfirmTracking?: () => void;
  open?: (modal: ModalProps) => void;
  state?: ModalProps;
};
