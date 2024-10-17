import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Photo = mongoose.model('Photo', photoSchema);

export default Photo;
