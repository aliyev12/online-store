import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import Error from './ErrorMessage';
import Table from './styles/Table';
import SickButton from './styles/SickButton';

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE'
];

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation updatePermissions($permissions: [Permission], $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = props => {
  const { data, loading, error } = useQuery(ALL_USERS_QUERY);
  return (
    console.log(data && data) || (
      <>
        <Error error={error} />
        <div>
          <h2>Manage Permissions</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {possiblePermissions.map(permission => (
                  <th key={permission}>{permission}</th>
                ))}
                <th>
                  <span role="image">👇</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data && data.users && data.users.map(user => (
                <UserPermissions key={user.id} user={user} />
              ))}
            </tbody>
          </Table>
        </div>
      </>
    )
  );
};

const UserPermissions = ({ user }) => {
  const [permissions, setPermissions] = useState(user.permissions);
  const handlePermissionChange = (e, updatePermissions) => {
    const checkbox = e.target;
    // Tale a copy of the current permissions
    let updatedPermissions = [...permissions];
    // Figure out if you need to add or remove a permission
    if (checkbox.checked) {
      // Add it in
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        permission => permission !== checkbox.value
      );
    }
    const setState = async () => await setPermissions(updatedPermissions);
    setState().then(() => updatePermissions());
  };
  const [updatePermissions, { loading, error }] = useMutation(
    UPDATE_PERMISSIONS_MUTATION,
    {
      variables: {
        permissions,
        userId: user.id
      }
    }
  );
  return (
    <>
      {error && (
        <tr>
          <td colSpan="8">
            <Error error={error} />
          </td>
        </tr>
      )}
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {possiblePermissions.map((permission, i) => (
          <td key={permission + i}>
            <label htmlFor={`${user.id}-permission-${permission}`}>
              <input
                id={`${user.id}-permission-${permission}`}
                type="checkbox"
                checked={permissions.includes(permission)}
                value={permission}
                onChange={e => handlePermissionChange(e, updatePermissions)}
              />
            </label>
          </td>
        ))}
        <td>
          <SickButton
            type="button"
            disabled={loading}
            onClick={updatePermissions}
          >
            Updat{loading ? 'ing' : 'e'}
          </SickButton>
        </td>
      </tr>
    </>
  );
};

UserPermissions.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    permissions: PropTypes.array
  }).isRequired
};

export default Permissions;

// import React, { useState } from 'react';
// import { Query, Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import PropTypes from 'prop-types';
// import Error from './ErrorMessage';
// import Table from './styles/Table';
// import SickButton from './styles/SickButton';

// const possiblePermissions = [
//   'ADMIN',
//   'USER',
//   'ITEMCREATE',
//   'ITEMUPDATE',
//   'ITEMDELETE',
//   'PERMISSIONUPDATE'
// ];

// const UPDATE_PERMISSIONS_MUTATION = gql`
//   mutation updatePermissions($permissions: [Permission], $userId: ID!) {
//     updatePermissions(permissions: $permissions, userId: $userId) {
//       id
//       permissions
//       name
//       email
//     }
//   }
// `;

// const ALL_USERS_QUERY = gql`
//   query {
//     users {
//       id
//       name
//       email
//       permissions
//     }
//   }
// `;

// const Permissions = props => (
//   <Query query={ALL_USERS_QUERY}>
//     {({ data, loading, error }) =>
//       console.log(data) || (
//         <>
//           <Error error={error} />
//           <div>
//             <h2>Manage Permissions</h2>
//             <Table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   {possiblePermissions.map(permission => (
//                     <th key={permission}>{permission}</th>
//                   ))}
//                   <th>
//                     <span role="image">👇</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.users.map(user => (
//                   <UserPermissions key={user.id} user={user} />
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </>
//       )
//     }
//   </Query>
// );

// const UserPermissions = ({ user }) => {
//   const [permissions, setPermissions] = useState(user.permissions);
//   const handlePermissionChange = (e, updatePermissions) => {
//     const checkbox = e.target;
//     // Tale a copy of the current permissions
//     let updatedPermissions = [...permissions];
//     // Figure out if you need to add or remove a permission
//     if (checkbox.checked) {
//       // Add it in
//       updatedPermissions.push(checkbox.value);
//     } else {
//       updatedPermissions = updatedPermissions.filter(
//         permission => permission !== checkbox.value
//       );
//     }
//     const setState = async () => await setPermissions(updatedPermissions);
//     setState().then(() => updatePermissions());
//     };
//   return (
//     <Mutation
//       mutation={UPDATE_PERMISSIONS_MUTATION}
//       variables={{
//         permissions,
//         userId: user.id
//       }}
//     >
//       {(updatePermissions, { loading, error }) => (
//         <>
//           {error && (
//             <tr>
//               <td colSpan="8">
//                 <Error error={error} />
//               </td>
//             </tr>
//           )}
//           <tr>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//             {possiblePermissions.map((permission, i) => (
//               <td key={permission + i}>
//                 <label htmlFor={`${user.id}-permission-${permission}`}>
//                   <input
//                     id={`${user.id}-permission-${permission}`}
//                     type="checkbox"
//                     checked={permissions.includes(permission)}
//                     value={permission}
//                     onChange={e => handlePermissionChange(e, updatePermissions)}
//                   />
//                 </label>
//               </td>
//             ))}
//             <td>
//               <SickButton
//                 type="button"
//                 disabled={loading}
//                 onClick={updatePermissions}
//               >
//                 Updat{loading ? 'ing' : 'e'}
//               </SickButton>
//             </td>
//           </tr>
//         </>
//       )}
//     </Mutation>
//   );
// };

// UserPermissions.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string,
//     email: PropTypes.string,
//     id: PropTypes.string,
//     permissions: PropTypes.array
//   }).isRequired
// };

// export default Permissions;
