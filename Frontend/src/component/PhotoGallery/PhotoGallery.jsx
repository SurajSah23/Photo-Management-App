import { useState, useEffect } from 'react';
import axios from 'axios';
import './PhotoGallery.css';
import { FaTrash } from 'react-icons/fa'; // Importing React Icons for delete icon
import { ToastContainer, toast } from 'react-toastify';  // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import the Toastify CSS

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://photo-management-app-nu.vercel.app/api/find/photos');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const deletePhoto = async (id) => {
    console.log('Delete button clicked for photo ID:', id); // Debugging if the function is called

    try {
      const response = await axios.delete(`https://photo-management-app-nu.vercel.app/api/delete/by/ID/${id}`);
      console.log('Delete API response:', response); // Debugging API response
      if (response.status === 200) {
        setPhotos(photos.filter(photo => photo._id !== id)); // Remove photo from state
        toast.success('Photo deleted successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error deleting photo:', error);
      toast.error('Failed to delete photo!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="gallery-container">
      <h1>Photo Gallery</h1>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo._id} className="photo-item">
            {/* Delete icon using a div */}
            <div
              className="delete-icon"
              onClick={() => deletePhoto(photo._id)}
            >
              <FaTrash />
            </div>
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
            <img src={photo.imageUrl} alt={photo.title} />
          </div>
        ))}
      </div>

      {/* ToastContainer for rendering notifications */}
      <ToastContainer />
    </div>
  );
};

export default PhotoGallery;
