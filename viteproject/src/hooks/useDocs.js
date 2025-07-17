import { collection, getDocs } from "firebase/firestore";
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

