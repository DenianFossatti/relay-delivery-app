import { createContext } from 'react';

import { ModalContextType } from './type';

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
});
