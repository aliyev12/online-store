import PleaseSignIn from '../components/PleaseSignIn';
import OrderList from '../components/OrderList';

export default ({ query }) => (
    <div>
        <PleaseSignIn>
            <OrderList />
        </PleaseSignIn>
    </div>
);