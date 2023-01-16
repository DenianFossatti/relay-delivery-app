import { graphql } from 'react-relay';

export const CreateOrder = graphql`
  mutation CreateOrderMutation($input: CreateOrderInput!) {
    CreateOrder(input: $input) {
      success
      error
      orderEdge {
        node {
          id
        }
      }
    }
  }
`;
