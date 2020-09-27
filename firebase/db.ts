import firebase from './clientApp';

const firestore = firebase.firestore();
const app = firebase.app();

export const createUser = (uid, data) => {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};
