// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePhoto from './component/CreatePhoto/CreatePhoto';
import PhotoGallery from './component/PhotoGallery/PhotoGallery';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<CreatePhoto />} />
          <Route path="/gallery" element={<PhotoGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;