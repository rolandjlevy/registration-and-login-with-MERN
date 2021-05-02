const app = require('./server.js');
const mongoose = require('mongoose');
require('dotenv').config();


const { USERNAME, PASSWORD, DB_NAME, PORT } = process.env;
const port = PORT || 8080;

const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster1.zuz2v.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async client => {
  await console.log('Mongoose is connected...');
  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
})
.catch(error => {
  console.error(error.stack);
  process.exit(1);
});