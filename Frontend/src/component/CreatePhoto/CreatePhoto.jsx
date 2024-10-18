import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CreatePhoto.css'

const CreatePhoto = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleCreatePhoto = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://photo-management-app-nu.vercel.app/api/create/photos', {
        title,
        description,
        imageUrl,
      });
      toast.success('Photo created successfully!');
      // Clear the form fields
      setTitle('');
      setDescription('');
      setImageUrl('');
      console.log('Photo created:', response.data);
    } catch (error) {
      toast.error('Error creating photo.');
      console.error('Error creating photo:', error);
    }
  };

  return (
    <div>
      <h1>Photo Management App</h1>
      <form onSubmit={handleCreatePhoto}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Create Photo</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreatePhoto;