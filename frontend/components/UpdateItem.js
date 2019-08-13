import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      title
      description
      price
    }
  }
`;

const UpdateItem = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleUpdateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    const variables = {
      id: props.id
    };
    title ? (variables.title = title) : null;
    description ? (variables.description = description) : null;
    price ? (variables.price = price) : null;
    const res = await updateItemMutation({ variables });
  };
  const { data, loading: queryLoading } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id: props.id }
  });
  const [updateItem, { loading: mutationLoading, error }] = useMutation(
    UPDATE_ITEM_MUTATION,
    {
      variables: {
        title,
        description,
        price
      }
    }
  );
  if (!data.item) return <p>No item for ID {props.id}</p>;
  return (
    <>
      {queryLoading && <p>Loading...</p>}
      <Form onSubmit={e => handleUpdateItem(e, updateItem)} method="post">
        <Error error={error} />
        <fieldset disabled={mutationLoading} aria-busy={mutationLoading}>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              defaultValue={data.item.title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              required
              defaultValue={data.item.price}
              onChange={e => setPrice(e.target.value)}
            />
          </label>
          <label htmlFor="title">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Enter a Description"
              required
              defaultValue={data.item.description}
              onChange={e => setDescription(e.target.value)}
            />
          </label>
          <button type="submit">
            Sav{mutationLoading ? 'ing' : 'e'} Changes
          </button>
        </fieldset>
      </Form>
    </>
  );
};

export default UpdateItem;
// import React, { useState } from 'react';
// import { Mutation, Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import Router from 'next/router';
// import Form from './styles/Form';
// import formatMoney from '../lib/formatMoney';
// import Error from './ErrorMessage';

// export const SINGLE_ITEM_QUERY = gql`
//   query SINGLE_ITEM_QUERY($id: ID!) {
//     item(where: { id: $id }) {
//       id
//       title
//       description
//       price
//     }
//   }
// `;

// export const UPDATE_ITEM_MUTATION = gql`
//   mutation UPDATE_ITEM_MUTATION(
//     $id: ID!
//     $title: String
//     $description: String
//     $price: Int
//   ) {
//     updateItem(
//       id: $id
//       title: $title
//       description: $description
//       price: $price
//     ) {
//       id
//       title
//       description
//       price
//     }
//   }
// `;

// const UpdateItem = props => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState(0);

//   const handleUpdateItem = async (e, updateItemMutation) => {
//     e.preventDefault();
//     console.log('updating item..');
//     const variables = {
//       id: props.id,
//     };
//     title ? variables.title = title : null;
//     description ? variables.description = description : null;
//     price ? variables.price = price : null;
//     console.log('variables = ', variables);
//     const res = await updateItemMutation({ variables });
//   }

//   return (
//     <Query query={SINGLE_ITEM_QUERY} variables={{ id: props.id }}>
//       {({ data, loading }) => {
//         if (loading) <p>Loading...</p>;
//         if (!data.item) return <p>No item for ID {props.id}</p>
//         return (
//           <Mutation
//             mutation={UPDATE_ITEM_MUTATION}
//             variables={{
//               title,
//               description,
//               price
//             }}
//           >
//             {(updateItem, { loading, error }) => (
//               <Form onSubmit={e => handleUpdateItem(e, updateItem)} method="post">
//                 <Error error={error} />
//                 <fieldset disabled={loading} aria-busy={loading}>
//                   <label htmlFor="title">
//                     Title
//                     <input
//                       type="text"
//                       id="title"
//                       name="title"
//                       placeholder="Title"
//                       required
//                       defaultValue={data.item.title}
//                       onChange={e => setTitle(e.target.value)}
//                     />
//                   </label>
//                   <label htmlFor="price">
//                     Price
//                     <input
//                       type="number"
//                       id="price"
//                       name="price"
//                       placeholder="Price"
//                       required
//                       defaultValue={data.item.price}
//                       onChange={e => setPrice(e.target.value)}
//                     />
//                   </label>
//                   <label htmlFor="title">
//                     Description
//                     <textarea
//                       id="description"
//                       name="description"
//                       placeholder="Enter a Description"
//                       required
//                       defaultValue={data.item.description}
//                       onChange={e => setDescription(e.target.value)}
//                     />
//                   </label>
//                   <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>
//                 </fieldset>
//               </Form>
//             )}
//           </Mutation>
//         );
//       }}
//     </Query>
//   );
// };

// export default UpdateItem;
