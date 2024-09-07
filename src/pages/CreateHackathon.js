import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const CreateHackathon = () => {
    
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('easy');
  const [image, setImage] = useState(null);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('description', description);
    formData.append('level', level);
    formData.append('image', image);

    axios.post('/api/hackathons', formData)
      .then(response => {
        console.log('Hackathon created:', response.data);
        history.push('/');
      })
      .catch(error => console.error('Error creating hackathon:', error));
  };

  return (
    <div>
      <h1>Create Hackathon</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Hackathon Name" 
          required 
        />
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          required 
        />
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          required 
        />
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Description" 
          required 
        />
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])} 
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateHackathon;