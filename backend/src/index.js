require('dotenv').config();
const createServer = require('./createServer');
const db = require('./db');

const yogaServer = createServer();

// TODO use express middleware to handle cookies
// TODO use express middleware to populate current user

yogaServer.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    },
}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
});