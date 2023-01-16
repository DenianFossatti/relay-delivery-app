import { useFormikContext } from 'formik';

import { Button, ButtonProps } from '../common/Button';

export const FormikButton = (props: ButtonProps) => {
  const { isValid, isSubmitting, handleSubmit } = useFormikContext();

  return (
    <Button isLoading={isSubmitting} isDisabled={!isValid || isSubmitting} onPress={() => handleSubmit()} {...props} />
  );
};
