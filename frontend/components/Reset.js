import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Form from './styles/Form';
import Error from './ErrorMessage';
import CURRENT_USER_QUERY from './User';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`;

const Reset = ({ resetToken }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetPassword, { loading, error, called }] = useMutation(
    RESET_MUTATION,
    {
      variables: {
        resetToken,
        password,
        confirmPassword
      },
      refetchQueries: [{ query: CURRENT_USER_QUERY }]
    }
  );
  return (
    <Form
      method="post"
      onSubmit={async e => {
        e.preventDefault();
        resetPassword();
        setPassword('');
        setConfirmPassword('');
      }}
    >
      {/* <fieldset disabled={loading} aria-busy={loading}> */}
      <fieldset>
        <h2>Reset Your Password</h2>
        <Error error={error} />
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit">Reset Your Password!</button>
      </fieldset>
    </Form>
  );
};

Reset.propTypes = {
  resetToken: PropTypes.string.isRequired
};

export default Reset;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import Form from './styles/Form';
// import Error from './ErrorMessage';
// import CURRENT_USER_QUERY from './User';

// const RESET_MUTATION = gql`
//   mutation RESET_MUTATION(
//     $resetToken: String!
//     $password: String!
//     $confirmPassword: String!
//   ) {
//     resetPassword(
//       resetToken: $resetToken
//       password: $password
//       confirmPassword: $confirmPassword
//     ) {
//       id
//       email
//       name
//     }
//   }
// `;

// const Reset = ({ resetToken }) => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   return (
//     <Mutation
//       mutation={RESET_MUTATION}
//       variables={{
//         resetToken,
//         password,
//         confirmPassword
//       }}
//       refetchQueries={[{ query: CURRENT_USER_QUERY }]}
//     >
//       {(resetPassword, { loading, error, called }) => {
//         return (
//           <Form
//             method="post"
//             onSubmit={async e => {
//               e.preventDefault();
//               resetPassword();
//               setPassword('');
//               setConfirmPassword('');
//               console.log('====== here....');
//             }}
//           >
//             {/* <fieldset disabled={loading} aria-busy={loading}> */}
//             <fieldset >
//               <h2>Reset Your Password</h2>
//               <Error error={error} />
//               <label htmlFor="password">
//                 Password
//                 <input
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={e => setPassword(e.target.value)}
//                 />
//               </label>
//               <label htmlFor="confirmPassword">
//                 Confirm Password
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={e => setConfirmPassword(e.target.value)}
//                 />
//               </label>
//               <button type="submit">Reset Your Password!</button>
//             </fieldset>
//           </Form>
//         );
//       }}
//     </Mutation>
//   );
// };

// Reset.propTypes = {
//   resetToken: PropTypes.string.isRequired
// };

// export default Reset;
