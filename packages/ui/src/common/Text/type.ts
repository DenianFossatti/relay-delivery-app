import { ITextProps as Props } from 'native-base';

export type TextVariantValue =
  | 'body2'
  | 'body2Bold'
  | 'bodyBold'
  | 'body'
  | 'smallButton'
  | 'button'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'link'
  | 'small'
  | 'subtitle'
  | 'title';

export type TextProps = Props & { testID?: string; variant?: TextVariantValue };
