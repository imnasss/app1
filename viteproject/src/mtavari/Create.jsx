import React, { useState } from 'react';
import './create.css';

function Create() {
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Post Created!');  // Replace this with your submit logic
    setPostText('');
    setImage(null);
  };

  return (
    <div className="create-post-container">
      <h2>Create New Post</h2>
      
      {image && <img src={image} alt="Preview" className="preview-image" />}

        {/* description */}
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          required
        />

       
        <br />
        {/* user write url image  */}
        <input className='img' type="text" placeholder="Image URL"/>

        {/* user uploads image */}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <button type="submit">post</button>
      </form>
    </div>
  );
}

export default Create;
