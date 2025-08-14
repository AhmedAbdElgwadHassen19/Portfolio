// Firebase-backed API: projects (Firestore) and admin auth (Firebase Auth)
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// Initialize Firebase app (config from env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

const projectsCol = collection(db, 'projects')

export const projectsAPI = {
  getAll: async () => {
    const snap = await getDocs(projectsCol)
    return { data: snap.docs.map(d => ({ _id: d.id, ...d.data() })) }
  },
  getById: async (id) => {
    const ref = doc(db, 'projects', id)
    const snap = await getDoc(ref)
    return { data: snap.exists() ? { _id: snap.id, ...snap.data() } : null }
  },
  create: async (data) => {
    const ref = await addDoc(projectsCol, { ...data, createdAt: new Date() })
    return { data: { _id: ref.id, ...data } }
  },
  update: async (id, data) => {
    const ref = doc(db, 'projects', id)
    await updateDoc(ref, data)
    return { data: { _id: id, ...data } }
  },
  delete: async (id) => {
    const ref = doc(db, 'projects', id)
    await deleteDoc(ref)
    return { data: null }
  }
}

// Admin: sign-in with email/password. To restrict admin, set VITE_ADMIN_EMAIL in env and check email equality.
export const adminAPI = {
  login: async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { data: { email: userCredential.user.email, uid: userCredential.user.uid } }
  }
}

export default { projectsAPI, adminAPI }