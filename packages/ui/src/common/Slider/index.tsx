import { Slider as Base } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type SliderProps = {
  defaultValue?: number;
  maxValue?: number;
  minValue?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  step?: number;
  testID?: string;
  value?: number;
};

const Component = ({ testID = 'Slider', ...props }: SliderProps, ref?: any) => {
  return (
    <Base ref={ref} {...props} {...assignTestId('Slider', testID)}>
      <Base.Track>
        <Base.FilledTrack />
      </Base.Track>
      <Base.Thumb shadow="3" />
      ib
    </Base>
  );
};

export const Slider = memo(forwardRef(Component));
