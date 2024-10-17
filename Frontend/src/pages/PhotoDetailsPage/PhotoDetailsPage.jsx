import './PhotoDetailsPage.css'

const PhotoDetailsPage = () => {
  // Static data directly in the component
  const photo = {
    title: 'Beautiful Sunset',
    description: 'A stunning sunset over the mountains.',
    url: 'https://t3.ftcdn.net/jpg/05/68/52/52/360_F_568525285_CrGJ8Yh1noTyqu6QsocfVeGQGY91E0Jb.jpg',
  };

  return (
    <div className="photo-details">
      <h2>{photo['title']}</h2>
      <p>{photo['description']}</p>
      <img src={photo['url']} alt={photo['title']} style={{ width: '100%' }} />
    </div>
  );
};

export default PhotoDetailsPage;
