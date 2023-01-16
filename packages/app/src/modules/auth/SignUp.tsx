import { useNavigation } from '@react-navigation/native';
import { FormikProvider, useFormik } from 'formik';
import { Keyboard, ToastAndroid, TouchableOpacity } from 'react-native';
import { useMutation } from 'react-relay';
import * as yup from 'yup';

import { Center, FormikButton, FormikInput, Text } from '@workspace/ui';

import useTranslation from '../../locales/useTranslation';
import useRouterAuth from '../../router/useRouterAuth';

import { UserRegistrationMutation } from './mutations/__generated__/UserRegistrationMutation.graphql';

import { UserRegistration } from './mutations/UserRegistrationMutation';

const SignUp = () => {
  const { t } = useTranslation();

  const navigation = useNavigation();

  const { signIn } = useRouterAuth();

  const [userRegistration] = useMutation<UserRegistrationMutation>(UserRegistration);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required(t('name_is_required')),
      email: yup.string().email(t('must_be_a_valid_email')).required(t('email_is_required')),
      password: yup.string().required(t('password_is_required')).min(6, t('password_must_be_at_least_6_characters')),
    }),
    onSubmit: (input, { setSubmitting }) => {
      userRegistration({
        variables: { input },
        onCompleted: ({ UserRegistration }) => {
          setSubmitting(false);

          if (!UserRegistration || UserRegistration.error || !UserRegistration.token) {
            ToastAndroid.show(UserRegistration?.error || t('unable_to_create_account'), ToastAndroid.SHORT);
            return;
          }

          Keyboard.dismiss();
          signIn(UserRegistration.token);
        },
        onError: (error) => {
          setSubmitting(false);
          Keyboard.dismiss();
          ToastAndroid.show(error?.message || t('unable_to_create_account'), ToastAndroid.SHORT);
        },
      });
    },
  });

  return (
    <Center flex={1}>
      <Text mb="10" fontWeight="bold" textAlign="center">
        {t('create_your_account')}
      </Text>
      <FormikProvider value={formik}>
        <FormikInput mb="2" name="name" label={t('name')} placeholder={t('full_name')} textContentType="name" />
        <FormikInput
          mb="2"
          name="email"
          label={t('email')}
          placeholder="email@example.com"
          textContentType="emailAddress"
        />
        <FormikInput mb="2" name="password" label={t('password')} placeholder={t('your_password')} secureTextEntry />
        <FormikButton>{t('submit')}</FormikButton>
      </FormikProvider>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ paddingVertical: 20 }}>
        <Text>{t('already_have_an_account_go_back_to_login')}</Text>
      </TouchableOpacity>
    </Center>
  );
};

export default SignUp;
