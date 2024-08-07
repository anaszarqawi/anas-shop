'use client';

import { createContext, useContext, useState, useEffect, FC, use } from 'react';
import firebase_app from '@/firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile as fb_updateProfile,
  signOut as fb_signOut,
} from 'firebase/auth';
import { redirect } from 'next/navigation';

const auth = getAuth(firebase_app);

// Define the user type
interface User {
  name: string | null;
  uid: string;
  email: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
  emailVerified: boolean;
  role?: string;
}

// Define the context properties
interface AuthContextProps {
  user: User | null;
  profileIsComplete: boolean;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  updateProfile: (name?: string, phoneNumber?: string) => Promise<void>;
}

// 1. Create the Context
const AuthContext = createContext<AuthContextProps>({
  user: null,
  profileIsComplete: false,
  loading: true,
  error: null,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  signInWithGoogle: async () => {},
  updateProfile: async () => {},
});

// 2. Create a Provider
export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [profileIsComplete, setProfileIsComplete] = useState<boolean>(false);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // redirect('/');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const signOut = async () => {
    try {
      await fb_signOut(auth);
      redirect('/login');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Handle user data here
    } catch (error: any) {
      setError(error.message);
    }
  };

  const updateProfile = async (name?: string) => {
    if (!auth.currentUser) return;

    const newUser: any = {};
    name && (newUser['displayName'] = name);
    // phoneNumber && (newUser['phoneNumber'] = phoneNumber);

    try {
      await fb_updateProfile(auth.currentUser, newUser);
      setProfileIsComplete(true);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const checkProfile = (user: User) => {
    if (user) {
      if (user.name) {
        setProfileIsComplete(true);
      } else {
        setProfileIsComplete(false);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const newUser = {
          name: user.displayName,
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
          emailVerified: user.emailVerified,
        };
        setUser(newUser);
        checkProfile(newUser);
        console.log('User:', newUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const printError = () => {
      if (error) console.log('Error:', error);
    };

    return () => printError();
  }, [error]);

  const value = { user, loading, error, signIn, signUp, signOut, signInWithGoogle, updateProfile, profileIsComplete };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
