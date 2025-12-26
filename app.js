const express = require('express');
const helmet = require('helmet');
//require('./db/migrations');

const cors = require('cors')


const app = express();
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["'none'"],
        scriptSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"]
      }
    },
    referrerPolicy: { policy: 'no-referrer' }
  })
);

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    maxAge: 600
  })
);
app.use(express.json());

app.use('/api', require('./routes/account_routes'));

module.exports = app;
