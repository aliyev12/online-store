const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const createServer = require('./createServer');
const db = require('./db');

const yogaServer = createServer();

// Use express middleware to handle cookies (JWT)
yogaServer.express.use(cookieParser());
// TODO use express middleware to populate current user

// Decode the JWT so we can get the user id on each request
yogaServer.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const jwtToken = jwt.verify(token, process.env.APP_SECRET);
    // Put the userId onto the req for future request to access
    req.userId = jwtToken.userId;
  }
  next();
});

yogaServer.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
