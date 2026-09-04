import { db, storage } from '../firebase/firebase';
import {
  collection, addDoc, getDocs, doc,
  updateDoc, deleteDoc, query, where, getDoc, serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const addProduct = async (productData, imageFile, farmerId) => {
  if (!db) throw new Error("Firebase is not configured. Please add your credentials to frontend/.env");
  let imageUrl = '';
  if (imageFile && storage) {
    const imageRef = ref(storage, `products/${farmerId}_${Date.now()}_${imageFile.name}`);
    await uploadBytes(imageRef, imageFile);
    imageUrl = await getDownloadURL(imageRef);
  }
  const docRef = await addDoc(collection(db, 'products'), {
    ...productData,
    imageUrl,
    farmerId,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};

export const getFarmerProducts = async (farmerId) => {
  if (!db) return [];
  const q = query(collection(db, 'products'), where('farmerId', '==', farmerId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getAllProducts = async () => {
  if (!db) return [];
  const querySnapshot = await getDocs(collection(db, 'products'));
  return querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getProductById = async (productId) => {
  if (!db) return null;
  const docRef = doc(db, 'products', productId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
  return null;
};

export const updateProduct = async (productId, updatedData) => {
  if (!db) throw new Error("Firebase is not configured.");
  await updateDoc(doc(db, 'products', productId), updatedData);
};

export const deleteProduct = async (productId) => {
  if (!db) throw new Error("Firebase is not configured.");
  await deleteDoc(doc(db, 'products', productId));
};
