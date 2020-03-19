import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const helloSchema = new Schema({
  hello: {
    type: String,
    required: true
  }
});

export default mongoose.model('hello', helloSchema);
