import { mount } from 'enzyme';
import wait from 'waait';
import PleaseSignin from '../components/PleaseSignin';
import { MockedProvider } from '@apollo/react-testing';
import { fakeUser } from '../lib/testUtils';
import { CURRENT_USER_QUERY } from '../lib/queries';

const noDataReceived = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: undefined }
  }
];

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } }
  }
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } }
  }
];

describe('<PleaseSignin/>', () => {
  it('renders error if no data has been received', async () => {
    const wrapper = mount(
      <MockedProvider mocks={noDataReceived}>
        <PleaseSignin />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.text()).toContain(
      'Sorry, something went wrong. Error code: PS-01'
    );
  });

  it('renders the sign in dialog to logged out users', async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignin />
      </MockedProvider>
    );
    await wait(0);
    wrapper.update();
    expect(wrapper.text()).toContain('Please sign in before continuing');
    expect(wrapper.find('Signin').exists()).toBe(true);
    // console.log(wrapper.debug());
  });

  it('renders the child component when the user is signed in', async () => {
    const TestChildComponent = () => <p>test_child_component</p>;
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignin>
          <TestChildComponent />
        </PleaseSignin>
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    // expect(wrapper.find('TestChildComponent').exists()).toBe(true);
    expect(wrapper.contains(<TestChildComponent/>)).toBe(true);
  });
});
