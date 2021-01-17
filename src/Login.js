import React, { useEffect, useContext, useState } from 'react';
import './App.css'
import { signInWithGoogle, addUser } from './services/firebase';
import { UserContext } from './providers/UserProvider';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import { getDate } from './Helpers';

export default function Login() {
  const user = useContext(UserContext)
  const [redirect, setredirect] = useState(null)

  useEffect(() => {
    if (user) {
        var user_id = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+user_id).once('value').then(userSnapshot => {
            var children = userSnapshot.val();
            if(userSnapshot.exists()){
                //user exists
                var dateToday = getDate(children.year, children.month, children.day);
                if(dateToday){
                    setredirect('/dashboard');
                } else {
                    setredirect('/feeling');
                }
            } else { 
                //new user
                addUser(user_id);
                setredirect('/feeling');
            }
        }).catch(error => {
            console.error(error);
        });
    }
  }, [user])
  if (redirect) {
    return <Redirect to={redirect}/>
  }
  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Continue with Google</span>
       </button>
      </div>
  );
}