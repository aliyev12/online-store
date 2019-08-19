import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import Nav from '../components/Nav';
import { SINGLE_ITEM_QUERY } from '../components/SingleItem';
import { MockedProvider } from '@apollo/react-testing';
import { fakeUser, fakeCartItem } from '../lib/testUtils';
// import { TOGGLE_CART_MUTATION } from './Cart';
import useUser from '../hooks/useUser';
import { CURRENT_USER_QUERY } from '../lib/queries';

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

const signedInWithItemsInCart = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [fakeCartItem(), fakeCartItem()]
        }
      }
    }
  }
];

describe('<Nav/>', () => {
  it('renders a minimal nav when signed out', async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <Nav />
      </MockedProvider>
    );

    await wait();
    wrapper.update();
    const nav = wrapper.find('ul[data-test="nav"]');
    // expect(toJSON(nav)).toMatchSnapshot();
  });

  it('renders full nav when signed in', async () => {
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <Nav />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    const nav = wrapper.find('ul[data-test="nav"]');
    expect(nav.children().length).toBe(6);
    expect(nav.text()).toContain('Shop');
    expect(nav.text()).toContain('Sell');
    expect(nav.text()).toContain('Orders');
    expect(nav.text()).toContain('Account');
    expect(nav.text()).toContain('Sign Out');
    expect(nav.text()).toContain('My Cart');
    // expect(toJSON(nav)).toMatchSnapshot();
  });

  it('renders the amount of items in the cart', async () => {
    const wrapper = mount(
      <MockedProvider mocks={signedInWithItemsInCart}>
        <Nav />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    const nav = wrapper.find('ul[data-test="nav"]');
    const count = nav.find('div.count');
    expect(toJSON(count)).toMatchSnapshot();
    // expect(toJSON(nav)).toMatchSnapshot();
    // console.log(wrapper.debug());
  });
});
