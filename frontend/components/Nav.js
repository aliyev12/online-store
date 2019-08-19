import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
import NavStyles from './styles/NavStyles';
import Signout from './Signout';
import CartCount from './CartCount';
import { TOGGLE_CART_MUTATION } from './Cart';
import useUser from '../hooks/useUser';

export default () => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const {
    data: { me }
  } = useUser();

  return (
    <NavStyles data-test="nav">
      <Link href="/items">
        <a>Shop</a>
      </Link>
      {me && (
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      )}
      {me && (
        <Link href="/orders">
          <a>Orders</a>
        </Link>
      )}
      {me && (
        <Link href="/me">
          <a>Account</a>
        </Link>
      )}
      {me && (
        <Link href="/signout">
          <Signout />
        </Link>
      )}
      {me && (
        <button onClick={toggleCart}>
          My Cart
          <CartCount
            count={me.cart.reduce(
              (acc, cartItem) => acc + cartItem.quantity,
              0
            )}
          />
        </button>
      )}
      {!me && (
        <Link href="/signup">
          <a>Sign In</a>
        </Link>
      )}
    </NavStyles>
  );
};
