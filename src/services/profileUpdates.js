import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebase";

export const subscribeToProfile = (uid, callback) => {
  return onSnapshot(doc(db, "users", uid), (docSnapshot) => {
    callback(docSnapshot.data());
  });
};
