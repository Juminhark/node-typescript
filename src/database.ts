import mongoose from 'mongoose';

import { mongodb } from './keys'

mongoose.connect(mongodb.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then(db => console.log('DB is conneted'))
  .catch(err => console.log(err));
  