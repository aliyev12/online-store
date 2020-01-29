import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import PaginationStyles from "./styles/PaginationStyles";
import { perPage } from "../config";
import Error from "./ErrorMessage";

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({ page }) => {
  const { data, loading, error } = useQuery(PAGINATION_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <Error error={error} />;

  const count = data.itemsConnection.aggregate.count;
  const pages = Math.ceil(count / perPage);
  return (
    <PaginationStyles data-test="pagination">
      <Head>
        <title>
          Tent Store ~ Page {page} of {pages}
        </title>
      </Head>
      <Link
        prefetch
        href={{
          pathname: "items",
          query: { page: page - 1 }
        }}
      >
        <a className="prev" aria-disabled={page <= 1}>
          ← Prev
        </a>
      </Link>
      <p>
        Page {page} of <span className="totalPages">{pages}</span>
      </p>
      <p>{count} Items Total</p>
      <Link
        prefetch
        href={{
          pathname: "items",
          query: { page: page + 1 }
        }}
      >
        <a className="next" aria-disabled={page >= pages}>
          Next →
        </a>
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;

// import React from 'react';
// import gql from 'graphql-tag';
// import Head from 'next/head';
// import Link from 'next/link';
// import { Query } from 'react-apollo';
// import PaginationStyles from './styles/PaginationStyles';
// import { perPage } from '../config';

// export const PAGINATION_QUERY = gql`
//   query PAGINATION_QUERY {
//     itemsConnection {
//       aggregate {
//         count
//       }
//     }
//   }
// `;

// const Pagination = ({ page }) => {
//   return (
//     <Query query={PAGINATION_QUERY}>
//       {({ data, loading, error }) => {
//         if (loading) return <p>Loading...</p>;
//         const count = data.itemsConnection.aggregate.count;
//         const pages = Math.ceil(count / perPage);
//         return (
//           <PaginationStyles>
//             <Head>
//               <title>
//                 Great Fits! Page {page} of {pages}
//               </title>
//             </Head>
//             <Link
//               prefetch
//               href={{
//                 pathname: 'items',
//                 query: { page: page - 1 }
//               }}
//             >
//               <a className="prev" aria-disabled={page <= 1}>← Prev</a>
//             </Link>
//             <p>
//               Page {page} of {pages}
//             </p>
//             <p>{count} Items Total</p>
//             <Link
//               prefetch
//               href={{
//                 pathname: 'items',
//                 query: { page: page + 1 }
//               }}
//             >
//               <a className="next" aria-disabled={page >= pages}>Next →</a>
//             </Link>
//           </PaginationStyles>
//         );
//       }}
//     </Query>
//   );
// };

// export default Pagination;
