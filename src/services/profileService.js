import { db } from './firebase';
import { collection, doc, setDoc, getDoc, deleteDoc, runTransaction } from 'firebase/firestore';

/**
 * Add or update user profile using a transaction for data integrity
 */
export const updateUserProfile = async (uid, profileData) => {
  if (!uid || !profileData) return { success: false, error: "Invalid user data" };

  try {
    await runTransaction(db, async (transaction) => {
      const userDocRef = doc(db, "users", uid);
      transaction.set(userDocRef, profileData);
    });
    return { success: true };
  } catch (error) {
    console.error("Profile update error:", error.message);
    return { success: false, error: error.message };
  }
};

/**
 * Fetch user profile from Firestore
 */
export const getUserProfile = async (uid) => {
  if (!uid) return { success: false, error: "Invalid user ID" };

  try {
    const docSnap = await getDoc(doc(db, "users", uid));
    return docSnap.exists() ? { success: true, data: docSnap.data() } : { success: false, error: "User not found" };
  } catch (error) {
    console.error("Profile fetch error:", error.message);
    return { success: false, error: error.message };
  }
};

/**
 * Delete user account from Firestore
 */
export const deleteUserAccount = async (uid) => {
  if (!uid) return { success: false, error: "Invalid user ID" };

  try {
    await deleteDoc(doc(db, "users", uid));
    return { success: true };
  } catch (error) {
    console.error("Delete account error:", error.message);
    return { success: false, error: error.message };
  }
};
