import { useContext } from 'react';

import { ModalContext } from '../ModalProvider/ModalContext';
import { ModalContextType } from '../ModalProvider/type';

export type useModalReturn = ModalContextType;
// eslint-disable-next-line @typescript-eslint/ban-types
export type useModalProps = {};

export const useModal = (): useModalReturn => useContext(ModalContext);
