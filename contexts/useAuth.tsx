"use client";

import { createContext, useContext, useState, useEffect, FC } from 'react';
import firebase_app from '@/firebase/config';
import { createUserWithEmailAndPassword, signInWithPopup, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut as signOut_f } from "firebase/auth";

const auth = getAuth(firebase_app);

// Define the user type
interface User {
  uid: string;
  email: string | null;
}

// Define the context properties
interface AuthContextProps {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

// 1. Create the Context
const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  error: null,
  signIn: async () => { },
  signUp: async () => { },
  signOut: async () => { },
  signInWithGoogle: async () => { },
});

// 2. Create a Provider
export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
      await signOut_f(auth);
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ uid: user.uid, email: user.email });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = { user, loading, error, signIn, signUp, signOut, signInWithGoogle };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
