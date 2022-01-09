import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyD4wlDPJRfVhnPkNdvTtzrXil-s9KsHzUU",
  authDomain: "crwn-db-b55e9.firebaseapp.com",
  projectId: "crwn-db-b55e9",
  storageBucket: "crwn-db-b55e9.appspot.com",
  messagingSenderId: "774546988909",
  appId: "1:774546988909:web:b5361e3000b32816f5c464",
  measurementId: "G-WGPE203ZSR"
  };

  export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);


    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch ( error ){
        console.log('error creating user', error.message);
      }
    }
    return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
