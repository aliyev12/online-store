import Items from '../components/Items';

export default ({ query }) => (
  <>
    <Items page={parseFloat(query.page) || 1}/>
  </>
);
