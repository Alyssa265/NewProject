import mongoose from 'mongoose';

const adoptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
  status: { type: String, enum: ['pending', 'approved', 'denied'], default: 'pending' }
});

export default mongoose.model('AdoptionRequest', adoptionSchema);
