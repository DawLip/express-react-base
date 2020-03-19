import path from 'path';
import express from 'express';
import mongoose from 'mongoose';

import sockets from './sockets/index.js';
import graphql from './graphql/index.js';

const app = express();

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-igfew.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    const server = app.listen(port, () => console.log('App listening on port: ' + port));

    app.use(express.static(DIST_DIR));

    sockets(server);
    graphql(app);

    app.get('*', (req, res) => {
      res.sendFile(HTML_FILE);
    });
  })
  .catch(err => console.log(err));
