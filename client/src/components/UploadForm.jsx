import { useState } from 'react';
import axios from '../utils/axios';

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData);
      console.log('Upload success:', res.data);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <div className="upload-form">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadForm;
