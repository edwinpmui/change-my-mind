import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { useAuth } from './AuthContext';
import distributeUsers from '../utils/distributeUsers';
import '../App.css';

const PreferenceForm = () => {
  const [preferences, setPreferences] = useState(['', '', '']);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newPreferences = [...preferences];
    newPreferences[index] = value;
    setPreferences(newPreferences);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await addDoc(collection(db, 'preferences'), {
        userId: user.uid,
        preferences,
      });
      await distributeUsers(); // Call distributeUsers after adding preferences
      navigate(`/chat-room/${user.uid}`); // Navigate to the chat room with the user's unique ID
    }
  };

  return (
    <form className="preference-form" onSubmit={handleSubmit}>
      <h2>Rank Your Preferences</h2>
      {preferences.map((preference, index) => (
        <div key={index}>
          <label>Preference {index + 1}</label>
          <input
            type="text"
            value={preference}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PreferenceForm;