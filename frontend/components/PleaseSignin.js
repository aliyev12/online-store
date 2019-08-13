import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

const PleaseSignIn = props => {
  const { data, loading } = useQuery(CURRENT_USER_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  } else if (!data.me) {
    return (
      <div>
        <p>Please sign in before continuing</p>
        <Signin />
      </div>
    );
  } else {
    return props.children;
  }
};

export default PleaseSignIn;
