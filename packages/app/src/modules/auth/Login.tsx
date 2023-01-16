import { useNavigation } from '@react-navigation/native';
import { FormikProvider, useFormik } from 'formik';
import { Keyboard, ToastAndroid, TouchableOpacity } from 'react-native';
import { useMutation } from 'react-relay';
import * as yup from 'yup';

import { FormikButton, FormikInput, Text, VStack } from '@workspace/ui';

import useTranslation from '../../locales/useTranslation';
import useRouterAuth from '../../router/useRouterAuth';

import { UserLoginMutation } from './mutations/__generated__/UserLoginMutation.graphql';

import { UserLogin } from './mutations/UserLoginMutation';

const Login = () => {
  const { t } = useTranslation();

  const navigation = useNavigation();

  const { signIn } = useRouterAuth();

  const [userLogin] = useMutation<UserLoginMutation>(UserLogin);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email(t('must_be_a_valid_email')).required(t('email_is_required')),
      password: yup.string().required(t('password_is_required')),
    }),
    onSubmit: (input, { setSubmitting }) => {
      userLogin({
        variables: { input },
        onCompleted: ({ UserLogin }) => {
          setSubmitting(false);

          if (!UserLogin || UserLogin.error || !UserLogin.token) {
            ToastAndroid.show(UserLogin?.error || t('unable_to_login'), ToastAndroid.SHORT);
            return;
          }

          Keyboard.dismiss();
          signIn(UserLogin.token);
        },
        onError: (error) => {
          setSubmitting(false);
          Keyboard.dismiss();
          ToastAndroid.show(error?.message || t('unable_to_login'), ToastAndroid.SHORT);
        },
      });
    },
  });

  return (
    <VStack flex={1}>
      <Text mb="10" fontWeight="bold" textAlign="center">
        {t('welcome_back')}
      </Text>
      <FormikProvider value={formik}>
        <FormikInput
          name="email"
          label={t('email')}
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          mb="2"
        />
        <FormikInput
          name="password"
          label={t('password')}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          mb="10"
        />
        <FormikButton>{t('submit')}</FormikButton>
      </FormikProvider>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ paddingVertical: 20 }}>
        <Text>{t('dont_have_an_account_create_now')}</Text>
      </TouchableOpacity>
    </VStack>
  );
};

export default Login;
