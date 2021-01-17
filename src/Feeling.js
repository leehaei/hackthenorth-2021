import React, { useEffect, useContext, useState } from "react";
import { UserContext } from './providers/UserProvider';
import { Redirect, useHistory } from 'react-router-dom';
import { logOut } from "./services/firebase";

export default function Feeling() {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);
    const [feeling, setFeeling] = useState("Happy");
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
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>How are you feeling</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
            <button onClick={() => setFeeling("Happy")}>
                Happy
            </button>
            <button onClick={() => setFeeling("Meh")}>
                Meh
            </button>
            <button onClick={() => setFeeling("Bad")}>
                Bad
            </button>
            <button onClick={goTasks}>
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




// import React, { useEffect, useContext, useState } from "react";
// import { UserContext } from './providers/UserProvider';
// import { Redirect } from 'react-router-dom';

// const Feeling = ({onClick}) => (
//     <div className="container">
//         <div className="row">
//             <div className="col-xl-12">
//                 <h1>How are you feeling</h1>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-xl-12">
//                 <button onclick="setFeeling('Happy')">
//                     Happy
//                 </button>
//                 <button onclick="setFeeling('Meh')">
//                     Meh
//                 </button>
//                 <button onclick="setFeeling('Bad')">
//                     Bad
//                 </button>
//                 <button onClick={() => onClick("numTasks")}
//                 onclick="setShowNumTasks(true)">
//                     Continue
//                 </button>
//             </div>
//         </div>
//     </div>
// );

// const NumTasks = ({onClick}) => (
//     <div className="container">
//         <div className="row">
//             <div className="col-xl-12">
//                 <h1>Decide Number of Tasks</h1>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-xl-12">
//                 <button onclick="setNumber(1)">
//                     1
//                 </button>
//                 <button onclick="setNumber(2)">
//                     2
//                 </button>
//                 <button onclick="setNumber(3)">
//                     3
//                 </button>
//                 <button onclick="setNumber(4)">
//                     4
//                 </button>
//                 <button onClick={() => onClick("success")}>
//                     continue
//                 </button>
//             </div>
//         </div>
//     </div>
// );

// export default function Tasks() {
//     const user = useContext(UserContext);
//     const [redirect, setredirect] = useState(null);
//     var feeling = "";


//     useEffect(() => {
//         if (!user) {
//             setredirect("/");
//         }
//     }, [user]);
//     if (redirect) {
//         return <Redirect to={redirect} />;
//     }

//     const [currentView, setCurrentView] = React.useState("feeling");

//     return (
//         <div>
//             {
//             currentView === "feeling" ? 
//             <Feeling onClick={page => setCurrentView(page)} /> : 
//             <NumTasks onClick={page => setCurrentView(page)} />
//             }
//         </div>
//     );
// }
