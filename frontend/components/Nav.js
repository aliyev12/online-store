import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';
import { TOGGLE_CART_MUTATION } from './Cart';

export default () => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  return (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {/* {console.log(me ? me : 'nothing')} */}
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>{' '}
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Link href="/signout">
              <Signout />
            </Link>
            <button onClick={toggleCart}>My Cart</button>
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);
}

// import Link from 'next/link';
// import { Mutation } from 'react-apollo';
// import NavStyles from './styles/NavStyles';
// import User from './User';
// import Signout from './Signout';
// import { TOGGLE_CART_MUTATION } from './Cart';

// export default () => (
//   <User>
//     {({ data: { me } }) => (
//       <NavStyles>
//         <Link href="/items">
//           <a>Shop</a>
//         </Link>
//         {console.log(me ? me : 'nothing')}
//         {me && (
//           <>
//             <Link href="/sell">
//               <a>Sell</a>
//             </Link>
//             <Link href="/orders">
//               <a>Orders</a>
//             </Link>{' '}
//             <Link href="/me">
//               <a>Account</a>
//             </Link>
//             <Link href="/signout">
//               <Signout />
//             </Link>
//             <Mutation mutation={TOGGLE_CART_MUTATION}>
//               {toggleCart => <button onClick={toggleCart}>My Cart</button>}
//             </Mutation>
//           </>
//         )}
//         {!me && (
//           <Link href="/signup">
//             <a>Sign In</a>
//           </Link>
//         )}
//       </NavStyles>
//     )}
//   </User>
// );

