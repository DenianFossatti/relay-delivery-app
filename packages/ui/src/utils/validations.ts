export const upperValidation = (value: string): boolean => !!value.match(/[A-Z]/);
export const lowerValidation = (value: string): boolean => !!value.match(/[a-z]/);
export const allValidation = (value: string): boolean =>
  !!value.match(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/);
export const numberValidation = (value: string): boolean => !!value.match(/[0-9]/);
export const specialCharsValidation = (value: string): boolean => !!value.match(/[!@#$&*]/);
export const lengthValidation = (value: string): boolean => value.length >= 8;
