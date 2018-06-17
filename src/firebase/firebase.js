import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/datastore';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAqvtw3O3KHWzVk3rJSHvHnebuzzQHMomc",
    authDomain: "autoqe-1490727866440.firebaseapp.com",
    databaseURL: "https://autoqe-1490727866440.firebaseio.com",
    projectId: "autoqe-1490727866440",
    storageBucket: "autoqe-1490727866440.appspot.com",
    messagingSenderId: "1001030870889"
};
export default firebase.initializeApp(config);

