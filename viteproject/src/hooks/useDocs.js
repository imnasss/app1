import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";





export async function checkLogin(username, password) {
    const querySnapshot = await getDocs(collection(db, "register"));
    
    let isValidUser = false;

    querySnapshot.forEach((doc) => {
        const user = doc.data();
        if (user.username === username && user.password === password) {
            isValidUser = true;
        }
    });

    return isValidUser;
}


export async function addUser(userData) {
    const usersCollection = collection(db, "register");
    const querySnapshot = await getDocs(usersCollection);

    let highestId = 0;
    querySnapshot.forEach((userDoc) => {
        const id = parseInt(userDoc.id);
        if (!isNaN(id) && id > highestId) {
            highestId = id;
        }
    });

    const newId = highestId + 1;

    try {
        await setDoc(doc(db, "register", newId.toString()), userData);
        return true;
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
}



export function addRegister(username,email,city,number,password){
    addDoc(collection(db, "register"), {
        username,
        email,
        number,
        city,
        password
    })
}

export async function getAllUsers() {
  const usersCollection = collection(db, "register");
  const querySnapshot = await getDocs(usersCollection);
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
}