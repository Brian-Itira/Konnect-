import React, { useState, useEffect } from 'react';
import { app } from '../Firebase'; // Assuming you have initialized Firebase app as 'app'

import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore';

const firestore = getFirestore(app);

import '../styles/Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messageRef = collection(firestore, 'messages');

    const unsubscribe = onSnapshot(messageRef, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      const messagesRef = collection(firestore, 'messages');
      await addDoc(messagesRef, {
        text: newMessage,
        timestamp: new Date(),
      });

      setNewMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
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
    </div>
  );
};

export default Chat;
