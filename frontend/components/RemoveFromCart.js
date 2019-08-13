import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from '../lib/queries';

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

const RemoveFromCart = ({ id }) => {
  // This gets called as soon as we get a response back from the server as soon as the mutation gets performed
  const update = (cache, payload) => {
    // 1. First read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });

    // 2. Remove that item from the cart
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);

    // 3. Write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  const [removeFromCart, { loading, error }] = useMutation(
    REMOVE_FROM_CART_MUTATION,
    {
      variables: { id },
      update,
      optimisticResponse: {
          __typename: 'Mutation',
          removeFromCart: {
              __typename: 'CartItem',
              id
          }
      }
    }
  );
  return (
    <BigButton
      title="Delete Item"
      disabled={loading}
      onClick={() => {
        removeFromCart().catch(err => alert(err.message));
      }}
    >
      &times;{loading && '...'}
    </BigButton>
  );
};

RemoveFromCart.propTypes = {
  id: PropTypes.string.isRequired
};

export default RemoveFromCart;
