// server/routes/photoRoutes.js
import express from 'express';
import { createPhoto, getAllPhotos, getPhotoById, updatePhoto, deletePhoto } from '../Controller/photoController.js';

const router = express.Router();

// Create a new photo
router.post('/create/photos', createPhoto);

// Get all photos
router.get('/find/photos', getAllPhotos);

// Get a single photo by ID
router.get('/find/by/ID/:id', getPhotoById);

// Update a photo by ID
router.put('/update/by/ID/:id', updatePhoto);

// Delete a photo by ID
router.delete('/delete/by/ID/:id', deletePhoto);

export default router;