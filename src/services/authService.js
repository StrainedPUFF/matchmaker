import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      return "This email is already registered. Try logging in instead.";
    }
    return error.message;
  }
};


export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      return "Incorrect password. Please try again.";
    }
    if (error.code === "auth/user-not-found") {
      return "No account found with this email. Sign up first.";
    }
    return error.message;
  }
};


export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error.message);
  }
};
