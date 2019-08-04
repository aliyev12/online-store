import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './Items';

export const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const DeleteItem = ({ children, id }) => {
  const update = (cache, payload) => {
    // Manually update the cache on the client so it matches the server
    // 1. Read the cache for items we want
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    // 2. Filter the deleted item out of the page
    data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id);
    // 3. Put the items back
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };

  return (
    <Mutation
      mutation={DELETE_ITEM_MUTATION}
      variables={{ id }}
      update={update}
    >
      {(deleteItem, { error }) => (
        <button
          onClick={() => {
            if (confirm('Are you sure you wanted to delete this?')) {
              deleteItem();
            }
          }}
        >
          {children}
        </button>
      )}
    </Mutation>
  );
};

export default DeleteItem;
