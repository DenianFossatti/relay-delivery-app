import { HStack, Pressable, Text, VStack } from '@workspace/ui';

export type ProductCardProps = {
  title?: string;
  subtitle?: string;
  rightComponent?: React.ReactNode;
};

export const ProductCard = ({ title, subtitle, rightComponent }: ProductCardProps) => {
  return (
    <Pressable
      mb="4"
      justifyContent="center"
      p="4"
      minH="100px"
      borderWidth={1}
      borderColor="gray.200"
      borderRadius="lg"
    >
      <HStack justifyContent="center">
        <VStack flex={10} space="2">
          <Text variant="body2">{title}</Text>
          <Text variant="body">{subtitle}</Text>
        </VStack>

        {rightComponent}
      </HStack>
    </Pressable>
  );
};
