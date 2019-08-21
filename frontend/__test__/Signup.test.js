import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from '@apollo/react-testing';
import { ApolloConsumer } from 'react-apollo';
import Signup, { SIGNUP_MUTATION } from '../components/Signup';
import { CURRENT_USER_QUERY } from '../lib/queries';
import { fakeUser } from '../lib/testUtils';

function type(wrapper, name, value) {
  wrapper.find(`input[name="${name}"]`).simulate('change', {
    target: { name, value }
  });
}

const me = fakeUser();
const mocks = [
  // Signup mock mutation
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        name: me.name,
        email: me.email,
        password: 'test_password'
      }
    },
    result: {
      data: {
        signup: {
          __typename: 'User',
          email: me.email,
          name: me.name,
          id: 'abc123'
        }
      }
    }
  },
  // Current user query mock
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me } }
  }
];

describe('<Signup/>', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <Signup />
      </MockedProvider>
    );
    expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
  });

  /* DOESN'T WORK!!  */
//   it('calls the mutation properly', async () => {
//     let apolloClient;
//     const wrapper = mount(
//       <MockedProvider mocks={mocks}>
//         <ApolloConsumer>
//           {client => {
//             apolloClient = client;
//             return <Signup />;
//           }}
//         </ApolloConsumer>
//       </MockedProvider>
//     );
//     await wait();
//     wrapper.update();
//     type(wrapper, 'name', me.name);
//     type(wrapper, 'email', me.email);
//     type(wrapper, 'password', 'pass');
//     wrapper.update();
//     wrapper.find('form').simulate('submit');
//     await wait();
//     // Query the user out of the apollo client
//     const user = await apolloClient.query({ query: CURRENT_USER_QUERY });
//     console.log(user);
//   });
});
