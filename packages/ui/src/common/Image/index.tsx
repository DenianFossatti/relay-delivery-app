import { Image as Base, IImageProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type ImageProps = Props & { alt: string; testID?: string };

const Component = ({ testID = 'Image', ...props }: ImageProps, ref: any) => {
  return <Base {...props} ref={ref} {...assignTestId('Image', testID)} />;
};

export const Image = memo(forwardRef(Component));
