import PleaseSignIn from '../components/PleaseSignin';
import Order from '../components/Order';

export default ({ query }) => (
    <div>
        <PleaseSignIn>
            <Order id={query.id}/>
        </PleaseSignIn>
    </div>
);