import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { CURRENT_USER_QUERY } from '../lib/queries';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;
const AddToCart = ({ id }) => {
  const [addToCart, { error, loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });
  return (
    <button onClick={addToCart} disabled={loading}>
      Add{loading && 'ing'} To Cart 🛒
    </button>
  );
};

export default AddToCart;

// import React from 'react';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';

// const ADD_TO_CART_MUTATION = gql`
//   mutation addToCart($id: ID!) {
//     addToCart(id: $id) {
//       id
//       quantity
//     }
//   }
// `;

// const AddToCart = ({ id }) => {
//   return (
//     <Mutation mutation={ADD_TO_CART_MUTATION} variables={{ id }}>
//       {addToCart => <button onClick={addToCart}>Add To Cart 🛒</button>}
//     </Mutation>
//   );
// };

// export default AddToCart;
