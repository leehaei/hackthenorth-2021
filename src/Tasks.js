/* eslint-disable no-unused-expressions */
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from './providers/UserProvider';
import { Redirect, useLocation } from 'react-router-dom';
import { logOut } from "./services/firebase";
import firebase from 'firebase/app';

function writeUserData(userId, feeling, tasks, year, month, day) {
    firebase.database().ref('users/' + userId).set({
      feeling: feeling,
      tasks: tasks,
      year : year,
      month: month,
      day: day,
    });
    window.location.reload(false);
  }

export default function Tasks() {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);
    const [numTasks, setNumTasks] = useState("1");

    const location = useLocation();
    const feeling = location.state.feeling;

    var date = new Date();
    date.toLocaleString('en-US', { timeZone: 'America/New_York' });
    var currMonth = date.getMonth() + 1;
    var currDay = date.getDate();
    var currYear = date.getFullYear();

    if(user) {
        var user_id = firebase.auth().currentUser.uid;
    }

    useEffect(() => {
        if (!user) {
            setredirect("/");
        }
    }, [user]);
    useEffect(() => {
        console.log(numTasks);
    }, [numTasks]);
    useEffect(() => {
        console.log(numTasks);
    }, [numTasks]);
    if (redirect) {
        return <Redirect to={redirect} />;
    }
    
    return (
        <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Number of Tasks</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
            <button onClick={() => setNumTasks("1")}>
                1
            </button>
            <button onClick={() => setNumTasks("2")}>
                2
            </button>
            <button onClick={() => setNumTasks("3")}>
                3
            </button>
            <button onClick={() => setNumTasks("4")}>
                4
            </button>
            <button onClick={() => {writeUserData(user_id, feeling, numTasks, currYear, currMonth, currDay)}}>
                Continue
            </button>
            </div>
          </div>
          <button className="logout-button" onClick={logOut}>
            <span> logout</span>
        </button>
        </div>
      </React.Fragment>
    )
}
