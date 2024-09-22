import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const distributeUsers = async () => {
  const preferencesSnapshot = await getDocs(collection(db, 'preferences'));
  const preferences = preferencesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  // Logic to distribute users into chat rooms based on preferences
  const chatRooms = {};
  preferences.forEach(pref => {
    const { userId, preferences } = pref;
    const room = preferences[0]; // Simplified logic: use the first preference
    if (!chatRooms[room]) {
      chatRooms[room] = [];
    }
    chatRooms[room].push(userId);
  });

  // Update users with their assigned chat rooms
  for (const room in chatRooms) {
    for (const userId of chatRooms[room]) {
      const userDoc = doc(db, 'users', userId);
      await updateDoc(userDoc, { chatRoom: room });
    }
  }
};

export default distributeUsers;