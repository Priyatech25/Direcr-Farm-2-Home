import { auth, db } from '../firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export const registerUser = async (email, password, role, additionalData) => {
  if (!auth || !db) throw new Error("Firebase is not configured. Please add your credentials to frontend/.env");
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await setDoc(doc(db, 'users', user.uid), {
    email: user.email,
    role,
    status: 'active',
    createdAt: serverTimestamp(),
    ...additionalData
  });
  return user;
};

export const loginUser = async (email, password) => {
  if (!auth) throw new Error("Firebase is not configured. Please add your credentials to frontend/.env");
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const logoutUser = async () => {
  if (!auth) return;
  await signOut(auth);
};

export const resetPassword = async (email) => {
  if (!auth) throw new Error("Firebase is not configured.");
  await sendPasswordResetEmail(auth, email);
};
