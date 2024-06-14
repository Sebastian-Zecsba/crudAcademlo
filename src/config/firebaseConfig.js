import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDqbZ1ZcavGkNF-KgeXUUqxfoE7XFRWnos",
  authDomain: "crudacademlo-2aaa0.firebaseapp.com",
  projectId: "crudacademlo-2aaa0",
  storageBucket: "crudacademlo-2aaa0.appspot.com",
  messagingSenderId: "771835097459",
  appId: "1:771835097459:web:73c74a9ff8b020caced506"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)