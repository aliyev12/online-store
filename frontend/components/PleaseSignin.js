import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER_QUERY } from '../lib/queries';
import Signin from './Signin';

const PleaseSignIn = props => {
  const { data, loading } = useQuery(CURRENT_USER_QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Sorry, something went wrong. Error code: PS-01</p>;
  if (!data.me)
    return (
      <div>
        <p>Please sign in before continuing</p>
        <Signin />
      </div>
    );
  return props.children;
};

export default PleaseSignIn;
