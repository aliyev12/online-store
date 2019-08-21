import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import handleError from '../lib/handleError';

import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';
import User from './User';
import useUser from '../hooks/useUser';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import TakeMyMoney from './TakeMyMoney';

export const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Cart = () => {
  const { loading, error, data } = useQuery(LOCAL_STATE_QUERY);
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const user = useUser();

  if (user.data && !user.data.me) {
    return null;
  } else {
    return (
      <CartStyles open={data.cartOpen}>
        {loading && <p>Loading...</p>}
        {error && handleError(error)}
        {!loading && !error && (
          <>
            <header>
              <CloseButton onClick={toggleCart} title="close">
                &times;
              </CloseButton>
              <Supreme>
                {/* Your Cart */}
                {/* {me.name}
                {me.name[me.name.length - 1] === 's' ? `'` : `'s`} Cart */}
              </Supreme>
              {/* <p>
                You have {me.cart.length} item{me.cart.length === 1 ? '' : 's'}{' '}
                in your cart.
              </p> */}
            </header>
            <ul>
              {user.data &&
                user.data.me.cart.map(cartItem => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </ul>
            <footer>
              <p>{formatMoney(calcTotalPrice(user.data && user.data.me.cart))}</p>
              {user.data && user.data.me.cart.length && (
                <TakeMyMoney>
                  <SickButton>Checkout</SickButton>
                </TakeMyMoney>
              )}
            </footer>
          </>
        )}
      </CartStyles>
    );
  }
};

export default Cart;
