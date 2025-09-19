// AddNoteScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { FIREBASE_API_KEY } from '@env';



const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "efago-c7603.firebaseapp.com",
  projectId: "efago-c7603",
  storageBucket: "efago-c7603.firebasestorage.app",
  messagingSenderId: "356639063909",
  appId: "1:356639063909:web:850f95800978a31498eb8c",
  measurementId: "G-94EC8FGQYT"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function AddNoteScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const saveNote = async () => {
    try {
      await addDoc(collection(db, 'notes'), {
        title,
        content,
      });
      alert('Note saved securely!');
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Content" value={content} onChangeText={setContent} multiline />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
}
