import Link from "next/link";
import { useMutation } from "@apollo/react-hooks";
import NavStyles from "./styles/NavStyles";
import Signout from "./Signout";
import CartCount from "./CartCount";
import { TOGGLE_CART_MUTATION } from "./Cart";
import useUser from "../hooks/useUser";
import styled from "styled-components";
import { displayDummyNav } from "../config";

const DummyContentDisclaimer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 7px !important;
  font-weight: 300;
  background-color: #00000075;
  color: #ffffffd6;
  padding: 5px 19px;
  border-bottom-left-radius: 30px;
  border: 0;
  z-index: 99;
  margin-left: 20px;

  a {
    text-decoration: underline;
    color: lightblue;
  }
`;

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
      {displayDummyNav && (
        <DummyContentDisclaimer>
          In order to add/update/remove items, please reach out to site
          developer for special permission -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://aaliyev.com"
            className="message-link"
          >
            aaliyev.com
          </a>{" "}
          <span role="image">😊</span>
        </DummyContentDisclaimer>
      )}
    </NavStyles>
  );
};

// import Link from "next/link";
// import { useMutation } from "@apollo/react-hooks";
// import NavStyles from "./styles/NavStyles";
// import Signout from "./Signout";
// import CartCount from "./CartCount";
// import { TOGGLE_CART_MUTATION } from "./Cart";
// import useUser from "../hooks/useUser";
// import { displayDummyNav } from "../config";
// import styled from "styled-components";

// const DummyContentDisclaimer = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   font-size: 7px !important;
//   font-weight: 300;
//   background-color: #00000075;
//   color: #ffffffd6;
//   padding: 5px 19px;
//   border-bottom-left-radius: 30px;
//   border: 0;
//   z-index: 99;
//   margin-left: 20px;
// `;

// export default () => {
//   const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
//   const { data } = useUser();

//   return (
//     <NavStyles data-test="nav">
//       <Link href="/items">
//         <a>Shop</a>
//       </Link>
//       {displayDummyNav || (data && data.me) ? (
//         <Link href="/sell">
//           <a>Sell</a>
//         </Link>
//       ) : null}
//       {displayDummyNav || (data && data.me) ? (
//         <Link href="/orders">
//           <a>Orders</a>
//         </Link>
//       ) : null}
//       {displayDummyNav || (data && data.me) ? (
//         <Link href="/me">
//           <a>Account</a>
//         </Link>
//       ) : null}
//       {!displayDummyNav || (data && data.me) ? (
//         <Link href="/signout">
//           <Signout />
//         </Link>
//       ) : null}
//       {displayDummyNav || (data && data.me) ? (
//         <button onClick={toggleCart}>
//           My Cart
//           <CartCount
//             count={
//               displayDummyNav
//                 ? 3
//                 : data.me.cart.reduce(
//                     (acc, cartItem) => acc + cartItem.quantity,
//                     0
//                   )
//             }
//           />
//         </button>
//       ) : null}
//       {displayDummyNav && (
//         <DummyContentDisclaimer>
//           You are viewing dummy content. To sign up and experiment with the app,
//           please reach out to site developer - aaliyev.com{" "}
//           <span role="image">😊</span>
//         </DummyContentDisclaimer>
//       )}
//       {data && !data.me && (
//         <Link href="/signup">
//           <a>Sign In</a>
//         </Link>
//       )}
//     </NavStyles>
//   );
// };
