import React, { useEffect, useContext, useState } from "react";
import "./App.css"
import { UserContext } from "./providers/UserProvider";
import { Redirect } from "react-router-dom";
import { logOut } from "./services/firebase";
import firebase from 'firebase/app';

export default function Dashboard() {
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);
  const [todaysChallenges, setTodaysChallenges] = useState('0');

  if(user){
    var user_id = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + user_id).once('value').then((snapshot) => {
      if(snapshot.val() && snapshot.val().tasks){
        setTodaysChallenges(snapshot.val().tasks);
      }
    });
  }
  
  useEffect(() => {
    if (!user) {
      setredirect("/");
    }
  }, [user]);
  useEffect(() => {
    if (!user) {
      console.log(todaysChallenges);
    }
  }, [todaysChallenges]);
  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className="dashboard">
      <div className="relativeWrapperTwo">
          <button className="dashboardLogoutCircle" onClick={logOut}>
            Logout
          </button>
      </div>
      <p className="dashboardTitle">
        See You Soon
      </p>
      <p className="dashboardSubtitle">
        We will be sending challenges through notifications during the day.
      </p>
      <div className="dashboardRelativeWrapperOne">
        <div className="icons8Seesaw501" />
        <div className="hand">
          <img
            alt=""
            className="hand1"
            src="https://static.overlay-tech.com/assets/79c1ab0e-008e-4a35-a637-dc7b14663f7f.svg"
          />
          <img
            alt=""
            className="hand2"
            src="https://static.overlay-tech.com/assets/f7ea3a7e-4b47-4dc9-b4b1-847c41619cf8.svg"
          />
          <img
            alt=""
            className="hand3"
            src="https://static.overlay-tech.com/assets/a575a311-692e-497b-b2f0-5fff0b2679ae.svg"
          />
          <img
            alt=""
            className="hand4"
            src="https://static.overlay-tech.com/assets/8294bd34-c834-4c1c-8784-8c253be65821.svg"
          />
          <img
            alt=""
            className="hand5"
            src="https://static.overlay-tech.com/assets/5ae3fdc5-5742-41cb-9ad7-27b3e0cdacd8.svg"
          />
        </div>
      </div>
      <div className="dashboarFlexWrapperOne">
        <p className="todayNumChallenges">
          Today's number of challenges: 
        </p>
        <div className="numChallengesCir">
          <p className="todayChallenges">
            {todaysChallenges}
          </p>
        </div>
      </div>
    </div>
  );
}
