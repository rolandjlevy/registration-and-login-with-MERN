const app = require('./server.js');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async client => {
  await console.log('Mongoose is connected...');
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
})
.catch(error => {
  console.error(error.stack);
  process.exit(1);
});