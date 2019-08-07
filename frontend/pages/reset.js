import Reset from '../components/Reset';

export default ({ query }) => (
    <div>
        <p>Reset Your Password {query.resetToken}</p>
        <Reset resetToken={ query.resetToken }/>
    </div>
);