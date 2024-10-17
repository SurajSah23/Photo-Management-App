import Photo from '../Schema/photoSchema.js';

// Create a new photo
const createPhoto = async (req, res) => {
  const { title, description, imageUrl } = req.body;

  try {
    const newPhoto = new Photo({
      title,
      description,
      imageUrl,
    });

    await newPhoto.save();
    res.status(201).json(newPhoto);  // Return the created photo as response
  } catch (err) {
    console.error('Error creating photo:', err);
    res.status(500).json({ message: 'Error creating photo' });
  }
};

// Get all photos
const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();  // Find all photos in the database
    res.json(photos);  // Send the photos array as response
  } catch (err) {
    console.error('Error fetching photos:', err);
    res.status(500).json({ message: 'Error fetching photos' });
  }
};

// Get a single photo by ID
const getPhotoById = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await Photo.findById(id);  // Find the photo by ID
    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' });
    }
    res.json(photo);  // Send the photo details as response
  } catch (err) {
    console.error('Error fetching photo:', err);
    res.status(500).json({ message: 'Error fetching photo' });
  }
};

// Update a photo by ID
const updatePhoto = async (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl } = req.body;

  try {
    const updatedPhoto = await Photo.findByIdAndUpdate(
      id,
      { title, description, imageUrl },
      { new: true }  // Return the updated document
    );

    if (!updatedPhoto) {
      return res.status(404).json({ message: 'Photo not found' });
    }
    res.json(updatedPhoto);  // Return the updated photo
  } catch (err) {
    console.error('Error updating photo:', err);
    res.status(500).json({ message: 'Error updating photo' });
  }
};

// Delete a photo by ID
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPhoto = await Photo.findByIdAndDelete(id);  // Delete the photo by ID
    if (!deletedPhoto) {
      return res.status(404).json({ message: 'Photo not found' });
    }
    res.json({ message: 'Photo deleted successfully' });  // Return success message
  } catch (err) {
    console.error('Error deleting photo:', err);
    res.status(500).json({ message: 'Error deleting photo' });
  }
};

export  { createPhoto, getAllPhotos, getPhotoById, updatePhoto, deletePhoto };