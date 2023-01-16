import { assignTestId } from '../../tests/assignTestId';
import { BoxProps } from '../Box';
import { Center } from '../Center';
import {} from 'native-base';
import { Spinner } from '../Spinner';
// import AnimatedLottieView from 'lottie-react-native';

export type AppLoadingProps = BoxProps;
export const AppLoading = (props: AppLoadingProps) => {
  return (
    <Center bg="background" flex={1} {...assignTestId('View', 'AppLoading')} {...props}>
      <Spinner />
      {/* <AnimatedLottieView
        autoPlay
        loop
        source={animation}
        style={{
          height: 150,
          width: 150,
        }}
      /> */}
    </Center>
  );
};
