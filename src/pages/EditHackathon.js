import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditHackathon = () => {
  const { id } = useParams(); // Get hackathon ID from URL
  const [hackathon, setHackathon] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    level: 'easy',
    image: null,
  });
  const navigate =useNavigate();

  useEffect(() => {
    // Fetch the current hackathon details to pre-fill the form
    axios.get(`/api/hackathons/${id}`)
      .then(response => setHackathon(response.data))
      .catch(error => console.error('Error fetching hackathon:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHackathon(prevHackathon => ({
      ...prevHackathon,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setHackathon(prevHackathon => ({
      ...prevHackathon,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', hackathon.name);
    formData.append('startDate', hackathon.startDate);
    formData.append('endDate', hackathon.endDate);
    formData.append('description', hackathon.description);
    formData.append('level', hackathon.level);
    if (hackathon.image) {
      formData.append('image', hackathon.image);
    }

    axios.put(`/api/hackathons/${id}`, formData)
      .then(response => {
        console.log('Hackathon updated:', response.data);
        navigate.push(`/hackathon/${id}`);
      })
      .catch(error => console.error('Error updating hackathon:', error));
  };

  return (
    <div>
      <h1>Edit Hackathon</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={hackathon.name}
          onChange={handleChange}
          placeholder="Hackathon Name"
          required
        />
        <input
          type="date"
          name="startDate"
          value={hackathon.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={hackathon.endDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={hackathon.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <select
          name="level"
          value={hackathon.level}
          onChange={handleChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
        />
        <button type="submit">Update Hackathon</button>
      </form>
    </div>
  );
};

export default EditHackathon;
