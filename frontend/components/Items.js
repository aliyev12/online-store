import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import handleError from '../lib/handleError';
import styled from 'styled-components';
import Item from './Item';

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
    text-align: center;
`;

const ItemsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

const Items = () => {
  return (
    <Center>
      <p>Items!</p>
      <Query query={ALL_ITEMS_QUERY}>
        {({ data, error, loading }) => {
          console.log('data = ', data);
          if (loading) return <p>Loading...</p>;
          if (error) return <p>handleError(error)</p>;

          return <ItemsList>
              {data.items.map(item => (
                  <Item key={item.id} item={item} />
              ))}
          </ItemsList>;
        }}
      </Query>
    </Center>
  );
};

export default Items;
