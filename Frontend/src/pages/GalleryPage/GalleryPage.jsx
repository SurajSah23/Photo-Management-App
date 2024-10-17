import  { Component } from 'react';
import './Gallerypage.css'

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null, // For holding the clicked image details
    };
  }

  // Image click handler
  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  render() {
    // Sample images ka array (yahan apne actual images daal sakte ho)
    const images = [
      { id: 1, src: 'https://t4.ftcdn.net/jpg/07/40/00/13/360_F_740001386_carq48Q2WiZ7b1DHzj7GDPfAkUuxxQxQ.jpg', alt: 'Image 1', description: 'This is image 1.' },
      { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgekH6ehR563wRZQXt72dq7STysUOeL5KWiMUD5aOggIRZCB0KTG3d31gJHYZNNQQs0Rk&usqp=CAU', alt: 'Image 2', description: 'This is image 2.' },
      { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmS1wtqYGf3ChrN6MZDzrDKt-2Bm8YfwEbO2C7bq2Uw81cH_xaU8wVY3GiKexXEsMgvA&usqp=CAU', alt: 'Image 3', description: 'This is image 3.' },
    ];

    const { selectedImage } = this.state;

    return (
      <div className="gallery-container">
        <h2>Gallery Page</h2>

        {/* Gallery Images */}
        <div className="image-gallery">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => this.handleImageClick(image)}
              style={{ margin: '10px', cursor: 'pointer', width: '150px', height: '150px' }}
            />
          ))}
        </div>

        {/* Image Detail Section */}
        {selectedImage && (
          <div className="image-detail">
            <h3>Image Detail</h3>
            <img src={selectedImage.src} alt={selectedImage.alt} style={{ width: '300px', height: '300px' }} />
            <p>{selectedImage.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default GalleryPage;
