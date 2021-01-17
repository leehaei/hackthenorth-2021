import React, { useEffect, useContext, useState } from "react";
import { UserContext } from './providers/UserProvider';
import { Redirect, useHistory } from 'react-router-dom';
import { logOut } from "./services/firebase";

export default function Feeling() {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);
    const [feeling, setFeeling] = useState("happy");
    const history = useHistory();
    const goTasks= () => history.push({
        pathname: '/tasks',
        state: { feeling: feeling, }
      });

    useEffect(() => {
        if (!user) {
            setredirect("/");
        }
    }, [user]);
    useEffect(() => {
        console.log(feeling);
    }, [feeling]);
    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return (
        <div className="feeling">
            <div className="feelingRelativeWrapperTwo">
                <button className="dashboardLogoutCircle" onClick={logOut}>
                    Logout
                </button>
            </div>
            <p className="dashboardTitle">
                <>Good Morning!<br /> <strong className="goodMorningEmphasis2"> <br /> </strong></>
            </p>
            <p className="howAreYouFeelingToday">How are you feeling today?</p>
            <div className="flexWrapperSeven">
                <div className="feelingRelativeWrapperOne">
                    <div className="icons8Seesaw501"/>
                    <button className="flexWrapperTwo" onClick={() => setFeeling("happy")}>
                        <div className="happyFaceWrapperOne">
                            <div className="group">
                                <div className="happyFace">
                                    <img alt="" src="https://static.overlay-tech.com/assets/6f499457-591b-42bd-b296-7de9300736a8.svg"/>
                                </div>
                                <img alt="" className="happyFaceMouth" src="https://static.overlay-tech.com/assets/c68fc71d-97d5-4054-abb2-b6b3d682c99f.svg"/>
                                <img alt="" className="happyFaceMouth2" src="https://static.overlay-tech.com/assets/b73d5a56-472f-4046-bfb1-46c0448df2d7.svg"/>
                                <img alt="" className="happyFaceBottomTeeth" src="https://static.overlay-tech.com/assets/6bac0ddc-421c-450c-8558-d0c45be8c23f.svg"/>
                                <img alt="" className="happyFaceBottomTeeth2" src="https://static.overlay-tech.com/assets/e1c4ef45-cf3e-41f3-96eb-afffebeda302.svg"/>
                            </div>
                            <div className="happyFaceEyes">
                                <div className="happyFaceEye1"/>
                                <div className="happyFaceEye2"/>
                            </div>
                        </div>
                    </button>
                </div>
                <button className="flexWrapperFour" onClick={() => setFeeling("tired")}>
                    <div className="tiredFaceWrapperOne">
                        <div className="group">
                            <img alt="" src="https://static.overlay-tech.com/assets/78384931-2d01-4ba3-9f90-bc58e04aba95.svg"/>
                        </div>
                        <div className="tiredFaceEye1"/>
                        <div className="tiredFaceEye2"/>
                        <div className="feelingFlexWrapperOne">
                            <img alt="" className="tiredFaceHand2" src="https://static.overlay-tech.com/assets/442ce9b0-756f-44bf-9814-56b8ca656ccf.svg"/>
                            <img alt="" className="group" src="https://static.overlay-tech.com/assets/3fda71cb-eb22-4298-b6d1-c9de7d93d4d4.svg"/>
                        </div>
                        <div className="tiredFaceHand"/>
                    </div>
                </button>
            </div>
            <div className="flexWrapperEight">
                <button className="flexWrapperThree" onClick={() => setFeeling("worried")}>
                    <div className="worriedFaceWrapperOne">
                        <div className="group">
                            <img alt="" src="https://static.overlay-tech.com/assets/fedf69e1-f1a7-450a-8058-2d82c2369fcf.svg"/>
                        </div>
                        <div className="worriedFaceEye1"/>
                        <div className="worriedFaceEyebrow1"/>
                        <div className="worriedFaceEyebrow2"/>
                        <div className="worriedFaceMouth"/>
                        <div className="worriedFaceEye2"/>
                        <img alt="" className="worriedFaceMouth2" src="https://static.overlay-tech.com/assets/0a253b5c-9616-4ee9-94a0-f9ec156dea50.svg"/>
                    </div>
                </button>
                <button className="flexWrapperFive" onClick={() => setFeeling("sad")}>
                    <div className="sadFaceWrapperOne">
                        <div className="group">
                            <img alt="" src="https://static.overlay-tech.com/assets/1abc02e9-6bbf-49ee-9400-5294223335c0.svg"/>
                        </div>
                        <div className="sadFaceMouth"/>
                        <div className="sadFaceEyes">
                            <img alt="" className="vector" src="https://static.overlay-tech.com/assets/79e6e51d-1f32-4de8-8d04-79eb185e8154.svg"/>
                            <div className="sadFaceEye1"/>
                        </div>
                        <img alt="" className="worriedFaceMouth2" src="https://static.overlay-tech.com/assets/6dcbd19d-0b9e-436a-aa83-5145651b5ea2.svg"/>
                    </div>
                </button>
            </div>
            <button className="flexWrapperSix" onClick={goTasks}>
                <p className="continue">Continue</p>
            </button>
        </div>
    );
}
