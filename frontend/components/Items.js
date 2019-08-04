import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import handleError from '../lib/handleError';
import styled from 'styled-components';
import Item from './Item';
import Pagination from './Pagination';
import {perPage} from '../config';
//, orderBy: createdAt_DESC
export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createAt_DESC) {
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

const Items = ({ page }) => {
  console.log('page = ', page);
  console.log('perPage = ', perPage);
  return (
    <Center>
      <p>Items!</p>
      <Pagination page={page} />
      <Query
        query={ALL_ITEMS_QUERY}
        variables={{
          skip: page * perPage - perPage,
          first: perPage
        }}
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{handleError(error)}</p>;

          return (
            <ItemsList>
              {data.items.map(item => (
                <Item key={item.id} item={item} />
              ))}
            </ItemsList>
          );
        }}
      </Query>
      <Pagination page={page} />
    </Center>
  );
};

export default Items;
