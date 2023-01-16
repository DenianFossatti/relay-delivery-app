import { KeyboardTypeOptions } from 'react-native';

export type InputVariantType = 'text' | 'phone' | 'date' | 'number' | 'cpf' | 'points' | 'zipCode' | 'password';

export type InputType = {
  keyboardType: KeyboardTypeOptions;
  length: number;
};

export const InputVariant: Record<InputVariantType, InputType> = {
  cpf: {
    keyboardType: 'numbers-and-punctuation',
    length: 14,
  },
  date: {
    keyboardType: 'number-pad',
    length: 10,
  },
  number: {
    keyboardType: 'number-pad',
    length: 100,
  },
  password: {
    keyboardType: 'default',
    length: 32,
  },
  phone: {
    keyboardType: 'phone-pad',
    length: 15,
  },
  points: {
    keyboardType: 'numbers-and-punctuation',
    length: 100,
  },
  text: {
    keyboardType: 'default',
    length: 200,
  },
  zipCode: {
    keyboardType: 'decimal-pad',
    length: 9,
  },
};
