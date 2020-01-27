import PleaseSignIn from "../components/PleaseSignin";
import OrderList from "../components/OrderList";

export default ({ query }) => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
);
