import React, { useState } from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import { useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`;

const AutoComplete = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const client = useApolloClient();

  const onChange = debounce(async (e, client) => {
    // Turn loading on
    setLoading(true);
    // Manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value }
    });
    setItems(res.data.items);
    setLoading(false);
  }, 350);

  const routeToItem = item => {
    Router.push({
      pathname: '/item',
      query: {
        id: item.id
      }
    });
  };

  // To get rid of the aria-label warning in console:
  resetIdCounter();
  return (
    <SearchStyles>
      <Downshift
        onChange={routeToItem}
        itemToString={item => (item === null ? '' : item.title)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex
        }) => (
          <div>
            <input
              type="search"
              {...getInputProps({
                type: 'search',
                placeholder: 'Search For An Item',
                id: 'search',
                className: loading ? 'loading' : '',
                onChange: e => {
                  e.persist();
                  onChange(e, client);
                }
              })}
            />
            {isOpen && (
              <DropDown>
                {items.map((item, index) => (
                  <DropDownItem
                    {...getItemProps({ item })}
                    key={item.id}
                    highlighted={index === highlightedIndex}
                  >
                    <img width="50" src={item.image} alt={item.title} />
                    {item.title}
                  </DropDownItem>
                ))}
                {!items.length && !loading && (
                  <DropDownItem>Nothing Found For {inputValue}</DropDownItem>
                )}
              </DropDown>
            )}
          </div>
        )}
      </Downshift>
    </SearchStyles>
  );
};

export default AutoComplete;
