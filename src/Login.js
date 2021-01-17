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
        <div className="page20">
            <p className="welcomeToBalanced">
                Welcome To <br /> Balanced
            </p>
            <div className="relativeWrapperOne">
                <div className="icons8Seesaw501"/>
                <div className="balanceBall21">
                    <div className="seesaw">
                        <img
                        alt=""
                        className="vector"
                        src="https://static.overlay-tech.com/assets/5db8f63d-f704-43e5-8ec9-ff725493488a.svg"
                        />
                        <img
                        alt=""
                        className="circle2"
                        src="https://static.overlay-tech.com/assets/cebb993c-0c8b-4125-a90c-8671a1b37196.svg"
                        />
                        <img
                        alt=""
                        className="line1"
                        src="https://static.overlay-tech.com/assets/20a83157-949f-4d4b-9468-407dfff643fb.svg"
                        />
                        <img
                        alt=""
                        className="line2"
                        src="https://static.overlay-tech.com/assets/35f667cf-29c3-4284-a0f9-d7cdd2c80933.svg"
                        />
                        <img
                        alt=""
                        className="line3"
                        src="https://static.overlay-tech.com/assets/6d2aceec-0bee-4e27-a601-192ef10f488f.svg"
                        />
                        <img
                        alt=""
                        className="line4"
                        src="https://static.overlay-tech.com/assets/b6269dab-e9b9-4e62-90d2-588b360a260d.svg"
                        />
                    </div>
                </div>
            </div>
            <div className="relativeWrapperOne">
                <button className="flexWrapperOne" onClick={signInWithGoogle}>
                    <img
                        alt=""
                        src="https://static.overlay-tech.com/assets/51d06d55-9eaf-40ca-b8aa-99b2ded127fa.png"
                    />
                    <p className="signInButton">
                        Sign in with gmail
                    </p>
                    
                </button>
                <p className="subtitle">A customized approach to maintaining a work - life balance.</p>
            </div>
        </div>
    );
}