import { TextProps, TextVariantValue } from './type';

export const TextVariants: Record<TextVariantValue, TextProps> = {
  body: {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.25,
    lineHeight: 17.5,
  } as TextProps,
  body2: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  } as TextProps,
  body2Bold: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 20,
  } as TextProps,
  bodyBold: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0.25,
    lineHeight: 17.5,
  } as TextProps,
  button: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
  } as TextProps,
  h1: {
    fontSize: 96,
    fontWeight: 500,
    lineHeight: 120,
  } as TextProps,
  h2: {
    fontSize: 60,
    fontWeight: 500,
    lineHeight: 75,
  } as TextProps,
  h3: {
    fontSize: 48,
    fontWeight: 500,
    lineHeight: 60,
  } as TextProps,
  h4: {
    fontSize: 34,
    fontWeight: 500,
    lineHeight: 42.5,
  } as TextProps,
  h5: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 30,
  } as TextProps,
  h6: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 25,
  } as TextProps,
  link: {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.25,
    lineHeight: 20,
    textDecorationLine: 'underline',
  } as TextProps,
  small: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.25,
    lineHeight: 20,
  } as TextProps,
  smallButton: {
    fontSize: 16,
    fontWeight: 700,
  } as TextProps,
  subtitle: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0.25,
  } as TextProps,
  title: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
  } as TextProps,
};
