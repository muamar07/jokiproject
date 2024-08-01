import { initializeApp } from 'firebase/app';
import { getFirestore} from '@firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { doc, deleteDoc,  collection, getDocs, addDoc  } from 'firebase/firestore';
import { getStorage, ref, listAll, getDownloadURL, FirebaseStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: 'AIzaSyApLSuNBFuuyBVNreO4rtxvTBFTePQES0o',
  authDomain: 'support-system-af352.firebaseapp.com',
  projectId: 'support-system-af352',
  storageBucket: 'support-system-af352.appspot.com',
  messagingSenderId: '597516016340',
  appId: '1:597516016340:web:b6dfaf3c0080e1b4c8b941'
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore();
  export default firebaseConfig;
  export const storage = getStorage();
  export const functions = getFunctions(app);


  {/*========================Delete Document collection=================================  */}
// const handleDeleteDocument = async (collectionName:string, documentId:string) => {
//   try {
//     const documentRef = doc(db, collectionName, documentId);
//     await deleteDoc(documentRef);
//     // console.log('Document successfully deleted!');
//   } catch (error) {
//     console.error('Error deleting document:', error);
//   }
// };

// handleDeleteDocument('new-member', 'ofvimShauPPnahfTzv5B');

{/* 
=========================Collect Documet to JSON============================================= */}

// const exportCollectionToJson = async (collectionName: string) => {
//   try {
//     const collectionRef = collection(db, collectionName);
//     const querySnapshot = await getDocs(collectionRef); 

//     const jsonData: any[] = [];
//     querySnapshot.forEach((doc) => {
//       jsonData.push(doc.data());
//     });

//     const jsonString = JSON.stringify(jsonData, null, 2);
//     console.log(jsonString);
//   } catch (error) {
//     console.error('Error exporting collection to JSON:', error);
//   }
// };

// exportCollectionToJson('new-member');
