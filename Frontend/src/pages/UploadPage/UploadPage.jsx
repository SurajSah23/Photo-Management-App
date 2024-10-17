import './UploadPage.css'

const UploadPage = () => {
  let file = null;
  let title = '';
  let description = '';

  const handleFileChange = (e) => {
    file = e.target.files[0];
  };

  const handleTitleChange = (e) => {
    title = e.target.value;
  };

  const handleDescriptionChange = (e) => {
    description = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form data ko handle karna
    console.log("File:", file);
    console.log("Title:", title);
    console.log("Description:", description);
  };

  return (
    <div className="upload-container">
      <h2>Upload Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Choose Photo:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" onChange={handleTitleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea onChange={handleDescriptionChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPage;
