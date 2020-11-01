import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./Config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const HandleUserProfile = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const { userId } = userAuth;
	const userRef = firestore.doc(`/users/${userId}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const timestamp = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				CreatedDate: timestamp,
				...additionalData,
			});
		} catch (err) {
			console.log(err);
		}
	}
	return userRef;
};
