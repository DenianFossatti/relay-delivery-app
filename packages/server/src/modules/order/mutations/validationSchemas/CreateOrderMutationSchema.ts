import * as yup from 'yup';

import { GraphQLContext } from '../../../../types';

const CreateOrderMutationSchema = (context: GraphQLContext) => {
  const { t } = context;

  const schema = yup.object().shape({
    products: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.string().required('InvalidProductId').min(1, 'InvalidProductId'),
          quantity: yup.number().required('InvalidQuantity').min(1, 'InvalidQuantity'),
        }),
      )
      .required('InvalidProductIdLength')
      .min(1, 'InvalidProductIdLength'),
    // products: yup.array().of(yup.string()).required(t('common', 'InvalidProductIdLength')) // TODO: adicionar erro ao pedido
  });

  return schema;
};

export default CreateOrderMutationSchema;
