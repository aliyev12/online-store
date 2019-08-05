import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const Signin = () => {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: ''
  });

  const handleFormField = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: target.value
    });
  };

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      variables={inputs}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signup, { error, loading }) => {
        return (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const res = await signup();
              setInputs({
                ...inputs,
                email: '',
                name: '',
                password: ''
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign Into Your Account</h2>
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
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  value={inputs.password}
                  onChange={handleFormField}
                />
              </label>
              <button type="submit">Sign In!</button>
            </fieldset>
          </Form>
        );
      }}
    </Mutation>
  );
};

export default Signin;
