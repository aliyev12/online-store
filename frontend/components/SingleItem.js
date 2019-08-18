import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import Error from './ErrorMessage';
import Head from 'next/head';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      image
      largeImage
    }
  }
`;

const SingleItem = ({ id }) => {
  const { error, loading, data } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id }
  });

  if (error) return <Error error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data.item) return <p>No Item Found for {id}</p>;
  return (
    <SingleItemStyles>
      <Head>
        <title>Sick Fits | {data.item.title}</title>
      </Head>
      <img src={data.item.largeImage} alt={data.item.title} />
      <div className="details">
        <h2>Viewing {data.item.title}</h2>
        <p>{data.item.description}</p>
      </div>
    </SingleItemStyles>
  );
};

export default SingleItem;
