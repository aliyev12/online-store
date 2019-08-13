import React, { forwardRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { CURRENT_USER_QUERY } from './User';

export const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = forwardRef((props, ref) => {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });

  return (
    <button onClick={() => signout()} ref={ref}>
      Sign Out
    </button>
  );
});

export default Signout;

// import React, { forwardRef } from 'react';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import { CURRENT_USER_QUERY } from './User';

// export const SIGN_OUT_MUTATION = gql`
//   mutation SIGN_OUT_MUTATION {
//     signout {
//       message
//     }
//   }
// `;

// const Signout = forwardRef((props, ref) => (
//   <Mutation
//     mutation={SIGN_OUT_MUTATION}
//     refetchQueries={[{ query: CURRENT_USER_QUERY }]}
//   >
//     {signout => <button onClick={() => signout()} ref={ref}>Sign Out</button>}
//   </Mutation>
// ));
// const ThisWillWork = forwardRef((props, ref) => {
//   return <button ref={ref}>Text</button>
// })

// export default Signout;
