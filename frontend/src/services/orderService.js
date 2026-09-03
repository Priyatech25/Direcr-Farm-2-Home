import { db } from '../firebase/firebase';
import {
  collection, addDoc, getDocs, doc,
  updateDoc, query, where, serverTimestamp
} from 'firebase/firestore';

export const createOrder = async (orderData) => {
  if (!db) throw new Error("Firebase is not configured. Please add your credentials to frontend/.env");
  const docRef = await addDoc(collection(db, 'orders'), {
    ...orderData,
    createdAt: serverTimestamp(),
    status: 'Pending'
  });
  return docRef.id;
};

export const getFarmerOrders = async (farmerId) => {
  if (!db) return [];
  const q = query(collection(db, 'orders'), where('farmerId', '==', farmerId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getConsumerOrders = async (consumerId) => {
  if (!db) return [];
  const q = query(collection(db, 'orders'), where('consumerId', '==', consumerId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const updateOrderStatus = async (orderId, newStatus) => {
  if (!db) throw new Error("Firebase is not configured.");
  await updateDoc(doc(db, 'orders', orderId), { status: newStatus });
};
