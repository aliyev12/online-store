import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
import NavStyles from './styles/NavStyles';
import Signout from './Signout';
import CartCount from './CartCount';
import { TOGGLE_CART_MUTATION } from './Cart';
import useUser from '../hooks/useUser';

export default () => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const { data } = useUser();

  return (
    <NavStyles data-test="nav">
      <Link href="/items">
        <a>Shop</a>
      </Link>
      {data && data.me && (
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      )}
      {data && data.me && (
        <Link href="/orders">
          <a>Orders</a>
        </Link>
      )}
      {data && data.me && (
        <Link href="/me">
          <a>Account</a>
        </Link>
      )}
      {data && data.me && (
        <Link href="/signout">
          <Signout />
        </Link>
      )}
      {data && data.me && (
        <button onClick={toggleCart}>
          My Cart
          <CartCount
            count={data.me.cart.reduce(
              (acc, cartItem) => acc + cartItem.quantity,
              0
            )}
          />
        </button>
      )}
      {data && !data.me && (
        <Link href="/signup">
          <a>Sign In</a>
        </Link>
      )}
    </NavStyles>
  );
};
