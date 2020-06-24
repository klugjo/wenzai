import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBAijwH7ZVJAE4REkFKbcWJapHlIO2wNDM",
  authDomain: "chalk-it.firebaseapp.com",
  databaseURL: "https://chalk-it.firebaseio.com",
  projectId: "chalk-it",
  storageBucket: "chalk-it.appspot.com",
  messagingSenderId: "261626329410",
  appId: "1:261626329410:web:9a47556e5ec325ffdbb0db",
  measurementId: "G-C4TPMSMK8C"
};

class Firebase {
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  functions: firebase.functions.Functions;
  storage: firebase.storage.Storage;

  constructor() {
    console.log('FIREBASE INIT');

    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();
    this.functions = app.functions();
    this.storage = app.storage();
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password: string) =>
    this.auth.currentUser?.updatePassword(password);

  // addDeck = async (name: string, userId: string, tags: string[] = []): Promise<IDeck> => {
  //   const newDeckRef = this.db.collection('decks').doc();
  //   const id = newDeckRef.id;
  //   const newDeck = {
  //     name,
  //     userId,
  //     tags,
  //     createdAt: new Date(),
  //     id,
  //     cards: []
  //   };

  //   await newDeckRef.set(newDeck);

  //   return newDeck;
  // };

  // deleteDeck = async (id: string) => {
  //   const deleteFn = this.functions.httpsCallable('deleteCardFromDeck');
  //   await deleteFn({ deckId: id });

  //   await this.db.collection('decks').doc(id).delete();
  // };

  // deleteCard = async (deckId: string, cardId: string) => {
  //   await this.db.collection('decks').doc(deckId).collection('cards').doc(cardId).delete();
  // };

  // fetchDecks = async (userId: string): Promise<IDeck[]> => {
  //   const querySnapshot = await this.db.collection('decks').where('userId', '==', userId).get();

  //   return querySnapshot.docs.map(d => d.data()) as IDeck[];
  // };

  // addCard = async (card: ICardRequest, userId: string): Promise<ICard> => {
  //   const {
  //     name,
  //     faceA,
  //     faceB,
  //     file,
  //     deckId
  //   } = card;
  //   const batch = this.db.batch();
  //   const deckRef = this.db.collection('decks').doc(deckId);
  //   const newCardRef = deckRef.collection('cards').doc();
  //   const id = newCardRef.id;
  //   const newCard: ICard = {
  //     name,
  //     faceA,
  //     faceB,
  //     deckId,
  //     id,
  //     userId,
  //     createdAt: new Date()
  //   };

  //   if (file !== undefined) {
  //     const path = `cards/${deckId}/${id}/${file.name}`;
  //     const storageRef = this.storage.ref(path);
  //     storageRef.put(file);
  //     newCard.filePath = path;
  //   }

  //   batch.set(newCardRef, newCard);
  //   batch.update(deckRef, {
  //     cards: app.firestore.FieldValue.arrayUnion({ name, id })
  //   });

  //   await batch.commit();

  //   return newCard;
  // };
}

let firebaseInstance = new Firebase();

export default firebaseInstance;
