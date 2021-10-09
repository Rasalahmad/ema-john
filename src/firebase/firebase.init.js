import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

 /* steps  for authentication 
 step - 1
-------------------------- 
1. Firebase: create project
2. create web app
3. get configuration
4. initialize authenticaiton
5. Enable auth method

---------------------------------
step - 2 : set up component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

-----------------------------------

step - 3 : set auth system
1. set up sign in method
2. set up sign out method
3. user state
4. special observer
5. return necessary method and state from useFirebase

---------------------------------

step -4 : create auth context hook (use auth) 
1. create a auth context 
2. create context provider
3. set provider context value
4. use auth provider
5. create useAuth hook

-------------------------------------
step - 5 : create private route
1. Create private route
2. set private route

-------------------------------------

step - 6 : Redirect after login 
1. After login redirect user to their desire destination

*/