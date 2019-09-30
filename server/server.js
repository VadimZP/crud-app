import "babel-polyfill";
import express from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// import auth from './middlewares/auth';
import user from './routes/user';
import posts from './routes/posts';


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (req, res) => { res.send('aksdsad')})
// app.use(expressValidator());
app.use('/user', user);
app.use('/posts', posts);


app.listen(port, () => console.log(`Server is listening on port: ${port}`));

mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongoose connection established');
});
