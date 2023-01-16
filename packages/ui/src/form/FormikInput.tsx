import { useField, useFormikContext } from 'formik';
import { useCallback, useMemo, useState } from 'react';

import { Input, InputProps } from '../common';

interface FormikInputProps extends InputProps {
  name: string;
}

export const FormikInput = ({ name, ...props }: FormikInputProps) => {
  const [touched, setTouched] = useState(false);

  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext<any>();

  const error = useMemo(() => (meta.error && meta.touched ? meta.error : ''), [meta.error, meta.touched]);

  const handleChange = useCallback(
    (value: string) => {
      if (!touched) {
        setFieldTouched(name, true);
        setTouched(true);
      }

      setFieldValue(name, value);
    },
    [name, setFieldTouched, setFieldValue, touched],
  );

  return (
    <Input
      isInvalid={!!error}
      helperText={error}
      /* {...field} */ {...props}
      onChangeText={handleChange}
      value={field.value}
    />
  );
};
