import React, { useState, useEffect } from 'react';
import { app, signOut } from '../Firebase';
import { getFirestore, collection, onSnapshot, addDoc, query, orderBy, snapshotEqual } from 'firebase/firestore';
import { useUser } from '../UserStateContext';

const firestore = getFirestore(app);

import '../styles/Chat.css';

const Chat = () => {
  const handleSignout = async () => {
    signOut();
  };

  const user = useUser();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messageRef = collection(firestore, 'messages');
  
    const unsubscribe = onSnapshot(
      query(messageRef, orderBy('timestamp', 'asc')), 
      (snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
  
        setMessages(data);
      }
    );
  
    return () => unsubscribe();
  }, []);
  
  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      const messagesRef = collection(firestore, 'messages');
      await addDoc(messagesRef, {
        text: newMessage,
        timestamp: new Date(),
        person: user.name,
      });

      setNewMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              textAlign: message.person === user.name ? 'left' : 'right',
              backgroundColor: message.person === user.name ? '#f0f0f0' : '#e1f5fe',
            }}
          >
            <strong>{message.person}:</strong> {message.text}
            <p>{message.timestamp.toDate().toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <button onClick={handleSignout}>Sign Out</button>
    </div>
  );
};

export default Chat;
