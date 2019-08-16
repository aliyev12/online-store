import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Router from 'next/router';
import NProgress from 'nprogress';
import { gql } from 'apollo-boost';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from '../lib/queries';
import useUser from '../hooks/useUser';
import { idx } from '../lib/helpers';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

const TakeMyMoney = ({ children }) => {
  const [createOrder] = useMutation(CREATE_ORDER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });
  const {
    data: { me }
  } = useUser();

  const totalItems = cart =>
    cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  const onToken = async (res, create) => {
    NProgress.start();
    // Manually call the mutation once we have the stripe token
    const order = await create({
      variables: {
        token: res.id
      }
    }).catch(err => {
      alert(err.message);
    });
    Router.push({
      pathname: '/order',
      query: { id: order.data.createOrder.id }
    })
  };

  return (
    <StripeCheckout
      amount={calcTotalPrice(me.cart)}
      name="Great Fits"
      description={`Order of ${totalItems(me.cart)} item${
        totalItems(me.cart) === 1 ? '' : 's'
      }`}
      image={idx(['cart', '0', 'item', 'image'], me)}
      // image={me.cart && me.cart.length && me.cart[0].item && me.cart[0].item.image ? me.cart[0].item.image : ''}
      stripeKey="pk_test_hhz29HQbQz30mWS5QF59kLKN00Nv74hEX0"
      currency="USD"
      email={me.email}
      token={res => onToken(res, createOrder)}
    >
      {children}
    </StripeCheckout>
  );
};

export default TakeMyMoney;
