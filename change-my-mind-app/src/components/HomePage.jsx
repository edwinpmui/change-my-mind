import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import '../App.css';

const HomePage = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChatRooms = async () => {
      const chatRoomsCollection = collection(db, 'chatRooms');
      const chatRoomsSnapshot = await getDocs(chatRoomsCollection);
      const chatRoomsList = chatRoomsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setChatRooms(chatRoomsList);
    };

    fetchChatRooms();
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-page">
      <h1>Chat Rooms</h1>
      <button onClick={handleLoginClick}>Login</button>
      <ul className="chat-room-list">
        {chatRooms.map(room => (
          <li key={room.id} className="chat-room-item">
            <Link to={`/chat-room/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;