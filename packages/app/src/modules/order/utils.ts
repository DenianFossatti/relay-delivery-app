import { OrderStatus } from './__generated__/OrderListScreenQuery.graphql';

// eslint-disable-next-line relay/no-future-added-value
const ORDER_STATUS_MESSAGES: Record<Exclude<OrderStatus, '%future added value'>, string> = {
  PENDING: 'Pendente',
  ACCEPTED: 'Aceito',
  SENT: 'A Caminho',
  DELIVERED: 'Entregue',
  CANCELLED: 'Cancelado',
};

export const parseOrderStatus = (status: OrderStatus) => {
  return {
    label: ORDER_STATUS_MESSAGES[status] as string,
  };
};
