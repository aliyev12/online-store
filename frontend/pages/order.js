import PleaseSignIn from '../components/PleaseSignIn';
import Order from '../components/Order';

export default ({ query }) => (
    <div>
        <PleaseSignIn>
            {console.log('query.id', query.id)}
            <Order id={query.id}/>
        </PleaseSignIn>
    </div>
);