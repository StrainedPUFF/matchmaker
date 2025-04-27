import { db } from './firebase';
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

// Add a favorite match
export const addFavoriteMatch = async (uid, match) => {
  await setDoc(doc(db, "users", uid, "favorites", match.idEvent), match);
};

// Get all favorite matches
export const getFavoriteMatches = async (uid) => {
  const snapshot = await getDocs(collection(db, "users", uid, "favorites"));
  return snapshot.docs.map(doc => doc.data());
};
