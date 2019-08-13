import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER_QUERY } from '../lib/queries';

export default () => {
    const currentUserData = useQuery(CURRENT_USER_QUERY);
    return currentUserData;
}