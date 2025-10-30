import express from 'express';
import Pet from '../models/Pet.js';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.get('/', protect, async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

router.post('/', protect, adminOnly, async (req, res) => {
  const pet = await Pet.create(req.body);
  res.json(pet);
});

router.put('/:id', protect, adminOnly, async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(pet);
});

router.delete('/:id', protect, adminOnly, async (req, res) => {
  await Pet.findByIdAndDelete(req.params.id);
  res.json({ message: 'Pet deleted' });
});

export default router;
