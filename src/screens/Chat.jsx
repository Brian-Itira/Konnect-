import React, { useState, useEffect } from 'react';
import { app, signOut} from '../Firebase'; 

import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore';

import { useUser } from '../UserStateContext';

const firestore = getFirestore(app);

import '../styles/Chat.css';



const Chat = () => {

  const handleSignout = async () => {
    signOut();
 
  }

  const user = useUser()


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
          <div key={message.id}>{message.text}
          <p>{user.name}</p>
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
      <button onClick={handleSignout}>signout</button>
    </div>
  );
};

export default Chat;
