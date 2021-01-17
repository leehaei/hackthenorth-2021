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
    window.location.href = window.location;
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
        <div className="dashboard">
            <div className="relativeWrapperTwo">
                <button className="dashboardLogoutCircle" onClick={logOut}>
                    Logout
                </button>
            </div>
            <p className="dashboardTitle">
                <>Number of Tasks<br /> <strong className="numberOfTasksEmphasis2"> </strong></>
            </p>
            <p className="howAreYouFeelingToday">How many challenges are you up for today?</p>
            <div className="flexWrapperSeven">
                <div className="tasksRelativeWrapperOne">
                    <button className="tasksFlexWrapperThree" onClick={() => setNumTasks("1")}>
                        <p className="num1">1</p>
                    </button>
                </div>
                <button className="tasksFlexWrapperTwo" onClick={() => setNumTasks("2")}>
                    <p className="num1">2</p>
                </button>
            </div>
            <div className="flexWrapperEight">
                <button className="tasksFlexWrapperFour" onClick={() => setNumTasks("3")}>
                    <p className="num1">3</p>
                </button>
                <button className="tasksFlexWrapperFive" onClick={() => setNumTasks("4")}>
                    <p className="num1">4</p>
                </button>
            </div>
            <div className="flexWrapperSix" onClick={() => {writeUserData(user_id, feeling, numTasks, currYear, currMonth, currDay)}}>
                <p className="continue">Continue</p>
            </div>
        </div>
    );
}

