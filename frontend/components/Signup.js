import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from '../lib/queries';

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      email
      name
      id
    }
  }
`;

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [signup, { error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });

  const handleFormField = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: target.value
    });
  };
  return (
    <Form
      method="post"
      onSubmit={async e => {
        e.preventDefault();
        const res = await signup();
        console.log(res);
        setInputs({
          ...inputs,
          name: '',
          email: '',
          password: ''
        });
      }}
    >
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Sign Up for An Account</h2>
        <Error error={error} />
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleFormField}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleFormField}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleFormField}
          />
        </label>
        <button type="submit">Sign Up!</button>
      </fieldset>
    </Form>
  );
};

export default Signup;
