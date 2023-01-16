import { Center } from '../Center';
import { Icon, IconProps } from '../Icon';
import { Text } from '../Text';
import { VStack } from '../VStack';

export interface ModalHeaderProps {
  icon?: IconProps;
  title?: string;
}

export const ModalHeader = ({ icon, title }: ModalHeaderProps) => {
  return (
    <VStack alignItems="center">
      {icon && (
        <Center my="4" background="primary.400" borderRadius="full" h="100px" w="100px">
          <Icon color="white" size={40} {...icon} />
        </Center>
      )}
      {!!title && (
        <Text fontSize="xl" fontWeight="bold" pb={5}>
          {title}
        </Text>
      )}
    </VStack>
  );
};
