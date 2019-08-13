import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
    }
  }
`;

const User = ({ children }) => {
  const currentUserQueryPayload = useQuery(CURRENT_USER_QUERY);
  return children(currentUserQueryPayload);
}

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import PropTypes from 'prop-types';

// export const CURRENT_USER_QUERY = gql`
//   query {
//     me {
//       id
//       email
//       name
//       permissions
//     }
//   }
// `;

// const User = props => {
//   console.log('props = ', props);
//   return (
//   <Query {...props} query={CURRENT_USER_QUERY}>
//     {currentUserQueryPayload => {
//         console.log('currentUserQueryPayload = ', currentUserQueryPayload);
//       return props.children(currentUserQueryPayload);
//       }}
//   </Query>
// );
// }

// User.propTypes = {
//   children: PropTypes.func.isRequired
// };

// export default User;
