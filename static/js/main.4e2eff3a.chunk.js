(this["webpackJsonphackthenorth-2021"]=this["webpackJsonphackthenorth-2021"]||[]).push([[0],{23:function(e,s,a){},49:function(e,s,a){"use strict";a.r(s);var c=a(2),t=a(3),r=a.n(t),i=a(28),n=a.n(i),l=a(17),o=a(5),d=a(11),j=(a(23),a(10)),b=(a(37),a(50),a(39),a(29));a.n(b).a.config(),j.a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID});var h=j.a.auth(),O=new j.a.auth.GoogleAuthProvider,m=function(){h.signInWithRedirect(O).then((function(e){console.log(e.user)})).catch((function(e){console.log(e.message)}))},u=function(){h.signOut().then((function(){console.log("logged out"),window.location.href.reload(!1)})).catch((function(e){console.log(e.message)}))};var p=a(24),v=a.n(p),x=a(30),f=Object(t.createContext)({user:null}),g=function(e){var s=Object(t.useState)(null),a=Object(d.a)(s,2),r=a[0],i=a[1];return Object(t.useEffect)((function(){h.onAuthStateChanged(function(){var e=Object(x.a)(v.a.mark((function e(s){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s&&(a=s.displayName,c=s.email,i({displayName:a,email:c}));case 1:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}())}),[]),Object(c.jsx)(f.Provider,{value:r,children:e.children})};function N(){var e=Object(t.useContext)(f),s=Object(t.useState)(null),a=Object(d.a)(s,2),r=a[0],i=a[1];return Object(t.useEffect)((function(){if(e){var s=j.a.auth().currentUser.uid;j.a.database().ref("users/"+s).once("value").then((function(e){var a,c=e.val();if(e.exists()){var t=function(e,s,a){var c=new Date;c.toLocaleString("en-US",{timeZone:"America/New_York"});var t=c.getMonth()+1,r=c.getDate();return c.getFullYear()===e&&t===s&&r===a}(c.year,c.month,c.day);i(t?"/dashboard":"/feeling")}else a=s,j.a.database().ref("users/"+a).set({feeling:"",tasks:"",year:"",month:"",day:""}),i("/feeling")})).catch((function(e){console.error(e)}))}}),[e]),r?Object(c.jsx)(o.a,{to:r}):Object(c.jsxs)("div",{className:"dashboard",children:[Object(c.jsx)("div",{className:"relativeWrapperTwo"}),Object(c.jsxs)("p",{className:"dashboardTitle",children:["Welcome To ",Object(c.jsx)("br",{})," Balanced"]}),Object(c.jsxs)("div",{className:"relativeWrapperOne",children:[Object(c.jsx)("div",{className:"icons8Seesaw501"}),Object(c.jsx)("div",{className:"balanceBall21",children:Object(c.jsxs)("div",{className:"seesaw",children:[Object(c.jsx)("img",{alt:"",className:"vector",src:"https://static.overlay-tech.com/assets/5db8f63d-f704-43e5-8ec9-ff725493488a.svg"}),Object(c.jsx)("img",{alt:"",className:"circle2",src:"https://static.overlay-tech.com/assets/cebb993c-0c8b-4125-a90c-8671a1b37196.svg"}),Object(c.jsx)("img",{alt:"",className:"line1",src:"https://static.overlay-tech.com/assets/20a83157-949f-4d4b-9468-407dfff643fb.svg"}),Object(c.jsx)("img",{alt:"",className:"line2",src:"https://static.overlay-tech.com/assets/35f667cf-29c3-4284-a0f9-d7cdd2c80933.svg"}),Object(c.jsx)("img",{alt:"",className:"line3",src:"https://static.overlay-tech.com/assets/6d2aceec-0bee-4e27-a601-192ef10f488f.svg"}),Object(c.jsx)("img",{alt:"",className:"line4",src:"https://static.overlay-tech.com/assets/b6269dab-e9b9-4e62-90d2-588b360a260d.svg"})]})})]}),Object(c.jsx)("p",{className:"dashboardSubtitle",children:"A customized approach to maintaining a work - life balance."}),Object(c.jsxs)("button",{className:"flexWrapperSix",onClick:m,children:[Object(c.jsx)("img",{alt:"",src:"https://static.overlay-tech.com/assets/51d06d55-9eaf-40ca-b8aa-99b2ded127fa.png"}),Object(c.jsx)("p",{className:"signInButton",children:"Sign in with gmail"})]})]})}function S(){var e=Object(t.useContext)(f),s=Object(t.useState)(null),a=Object(d.a)(s,2),r=a[0],i=a[1],n=Object(t.useState)("0"),l=Object(d.a)(n,2),b=l[0],h=l[1];if(e){var O=j.a.auth().currentUser.uid;j.a.database().ref("users/"+O).once("value").then((function(e){e.val()&&e.val().tasks&&h(e.val().tasks)}))}return Object(t.useEffect)((function(){e||i("/")}),[e]),Object(t.useEffect)((function(){e||console.log(b)}),[b]),r?Object(c.jsx)(o.a,{to:r}):Object(c.jsxs)("div",{className:"dashboard",children:[Object(c.jsx)("div",{className:"relativeWrapperTwo",children:Object(c.jsx)("button",{className:"dashboardLogoutCircle",onClick:u,children:"Logout"})}),Object(c.jsx)("p",{className:"dashboardTitle",children:"See You Soon"}),Object(c.jsx)("p",{className:"dashboardSubtitle",children:"We will be sending challenges through notifications during the day."}),Object(c.jsx)("div",{className:"dashboardRelativeWrapperOne",children:Object(c.jsxs)("div",{className:"hand",children:[Object(c.jsx)("img",{alt:"",className:"hand1",src:"https://static.overlay-tech.com/assets/79c1ab0e-008e-4a35-a637-dc7b14663f7f.svg"}),Object(c.jsx)("img",{alt:"",className:"hand2",src:"https://static.overlay-tech.com/assets/f7ea3a7e-4b47-4dc9-b4b1-847c41619cf8.svg"}),Object(c.jsx)("img",{alt:"",className:"hand3",src:"https://static.overlay-tech.com/assets/a575a311-692e-497b-b2f0-5fff0b2679ae.svg"}),Object(c.jsx)("img",{alt:"",className:"hand4",src:"https://static.overlay-tech.com/assets/8294bd34-c834-4c1c-8784-8c253be65821.svg"}),Object(c.jsx)("img",{alt:"",className:"hand5",src:"https://static.overlay-tech.com/assets/5ae3fdc5-5742-41cb-9ad7-27b3e0cdacd8.svg"})]})}),Object(c.jsxs)("div",{className:"dashboarFlexWrapperOne",children:[Object(c.jsx)("p",{className:"todayNumChallenges",children:"Today's number of challenges:"}),Object(c.jsx)("div",{className:"numChallengesCir",children:Object(c.jsx)("p",{className:"todayChallenges",children:b})})]})]})}function E(){var e=Object(t.useContext)(f),s=Object(t.useState)(null),a=Object(d.a)(s,2),r=a[0],i=a[1],n=Object(t.useState)("1"),l=Object(d.a)(n,2),b=l[0],h=l[1],O=Object(o.h)().href.state.feeling,m=new Date;m.toLocaleString("en-US",{timeZone:"America/New_York"});var p=m.getMonth()+1,v=m.getDate(),x=m.getFullYear();if(e)var g=j.a.auth().currentUser.uid;return Object(t.useEffect)((function(){e||i("/")}),[e]),Object(t.useEffect)((function(){console.log(b)}),[b]),Object(t.useEffect)((function(){console.log(b)}),[b]),r?Object(c.jsx)(o.a,{to:r}):Object(c.jsxs)("div",{className:"dashboard",children:[Object(c.jsx)("div",{className:"relativeWrapperTwo",children:Object(c.jsx)("button",{className:"dashboardLogoutCircle",onClick:u,children:"Logout"})}),Object(c.jsx)("p",{className:"dashboardTitle",children:Object(c.jsxs)(c.Fragment,{children:["Number of Tasks",Object(c.jsx)("br",{})," ",Object(c.jsx)("strong",{className:"numberOfTasksEmphasis2",children:" "})]})}),Object(c.jsx)("p",{className:"howAreYouFeelingToday",children:"How many challenges are you up for today?"}),Object(c.jsxs)("div",{className:"flexWrapperSeven",children:[Object(c.jsx)("div",{className:"tasksRelativeWrapperOne",children:Object(c.jsx)("button",{className:"tasksFlexWrapperThree",onClick:function(){return h("1")},children:Object(c.jsx)("p",{className:"num1",children:"1"})})}),Object(c.jsx)("button",{className:"tasksFlexWrapperTwo",onClick:function(){return h("2")},children:Object(c.jsx)("p",{className:"num1",children:"2"})})]}),Object(c.jsxs)("div",{className:"flexWrapperEight",children:[Object(c.jsx)("button",{className:"tasksFlexWrapperFour",onClick:function(){return h("3")},children:Object(c.jsx)("p",{className:"num1",children:"3"})}),Object(c.jsx)("button",{className:"tasksFlexWrapperFive",onClick:function(){return h("4")},children:Object(c.jsx)("p",{className:"num1",children:"4"})})]}),Object(c.jsx)("div",{className:"flexWrapperSix",onClick:function(){!function(e,s,a,c,t,r){j.a.database().ref("users/"+e).set({feeling:s,tasks:a,year:c,month:t,day:r}),window.location.href.reload(!1)}(g,O,b,x,p,v)},children:Object(c.jsx)("p",{className:"continue",children:"Continue"})})]})}function _(){var e=Object(t.useContext)(f),s=Object(t.useState)(null),a=Object(d.a)(s,2),r=a[0],i=a[1],n=Object(t.useState)("happy"),l=Object(d.a)(n,2),j=l[0],b=l[1],h=Object(o.g)();return Object(t.useEffect)((function(){e||i("/")}),[e]),Object(t.useEffect)((function(){console.log(j)}),[j]),r?Object(c.jsx)(o.a,{to:r}):Object(c.jsxs)("div",{className:"dashboard",children:[Object(c.jsx)("div",{className:"relativeWrapperTwo",children:Object(c.jsx)("button",{className:"dashboardLogoutCircle",onClick:u,children:"Logout"})}),Object(c.jsx)("p",{className:"dashboardTitle",children:Object(c.jsxs)(c.Fragment,{children:["Good Morning!",Object(c.jsx)("br",{})," ",Object(c.jsx)("strong",{className:"goodMorningEmphasis2",children:" "})]})}),Object(c.jsx)("p",{className:"howAreYouFeelingToday",children:"How are you feeling today?"}),Object(c.jsxs)("div",{className:"flexWrapperSeven",children:[Object(c.jsx)("div",{className:"feelingRelativeWrapperOne",children:Object(c.jsx)("button",{className:"flexWrapperTwo",onClick:function(){return b("happy")},children:Object(c.jsxs)("div",{className:"happyFaceWrapperOne",children:[Object(c.jsxs)("div",{className:"group",children:[Object(c.jsx)("div",{className:"happyFace",children:Object(c.jsx)("img",{alt:"",src:"https://static.overlay-tech.com/assets/6f499457-591b-42bd-b296-7de9300736a8.svg"})}),Object(c.jsx)("img",{alt:"",className:"happyFaceMouth",src:"https://static.overlay-tech.com/assets/c68fc71d-97d5-4054-abb2-b6b3d682c99f.svg"}),Object(c.jsx)("img",{alt:"",className:"happyFaceMouth2",src:"https://static.overlay-tech.com/assets/b73d5a56-472f-4046-bfb1-46c0448df2d7.svg"}),Object(c.jsx)("img",{alt:"",className:"happyFaceBottomTeeth",src:"https://static.overlay-tech.com/assets/6bac0ddc-421c-450c-8558-d0c45be8c23f.svg"}),Object(c.jsx)("img",{alt:"",className:"happyFaceBottomTeeth2",src:"https://static.overlay-tech.com/assets/e1c4ef45-cf3e-41f3-96eb-afffebeda302.svg"})]}),Object(c.jsxs)("div",{className:"happyFaceEyes",children:[Object(c.jsx)("div",{className:"happyFaceEye1"}),Object(c.jsx)("div",{className:"happyFaceEye2"})]})]})})}),Object(c.jsx)("button",{className:"flexWrapperFour",onClick:function(){return b("tired")},children:Object(c.jsxs)("div",{className:"tiredFaceWrapperOne",children:[Object(c.jsx)("div",{className:"group",children:Object(c.jsx)("img",{alt:"",src:"https://static.overlay-tech.com/assets/78384931-2d01-4ba3-9f90-bc58e04aba95.svg"})}),Object(c.jsx)("div",{className:"tiredFaceEye1"}),Object(c.jsx)("div",{className:"tiredFaceEye2"}),Object(c.jsxs)("div",{className:"feelingFlexWrapperOne",children:[Object(c.jsx)("img",{alt:"",className:"tiredFaceHand2",src:"https://static.overlay-tech.com/assets/442ce9b0-756f-44bf-9814-56b8ca656ccf.svg"}),Object(c.jsx)("img",{alt:"",className:"group",src:"https://static.overlay-tech.com/assets/3fda71cb-eb22-4298-b6d1-c9de7d93d4d4.svg"})]}),Object(c.jsx)("div",{className:"tiredFaceHand"})]})})]}),Object(c.jsxs)("div",{className:"flexWrapperEight",children:[Object(c.jsx)("button",{className:"flexWrapperThree",onClick:function(){return b("worried")},children:Object(c.jsxs)("div",{className:"worriedFaceWrapperOne",children:[Object(c.jsx)("div",{className:"group",children:Object(c.jsx)("img",{alt:"",src:"https://static.overlay-tech.com/assets/fedf69e1-f1a7-450a-8058-2d82c2369fcf.svg"})}),Object(c.jsx)("div",{className:"worriedFaceEye1"}),Object(c.jsx)("div",{className:"worriedFaceEyebrow1"}),Object(c.jsx)("div",{className:"worriedFaceEyebrow2"}),Object(c.jsx)("div",{className:"worriedFaceMouth"}),Object(c.jsx)("div",{className:"worriedFaceEye2"}),Object(c.jsx)("img",{alt:"",className:"worriedFaceMouth2",src:"https://static.overlay-tech.com/assets/0a253b5c-9616-4ee9-94a0-f9ec156dea50.svg"})]})}),Object(c.jsx)("button",{className:"flexWrapperFive",onClick:function(){return b("sad")},children:Object(c.jsxs)("div",{className:"sadFaceWrapperOne",children:[Object(c.jsx)("div",{className:"group",children:Object(c.jsx)("img",{alt:"",src:"https://static.overlay-tech.com/assets/1abc02e9-6bbf-49ee-9400-5294223335c0.svg"})}),Object(c.jsx)("div",{className:"sadFaceMouth"}),Object(c.jsxs)("div",{className:"sadFaceEyes",children:[Object(c.jsx)("img",{alt:"",className:"vector",src:"https://static.overlay-tech.com/assets/79e6e51d-1f32-4de8-8d04-79eb185e8154.svg"}),Object(c.jsx)("div",{className:"sadFaceEye1"})]}),Object(c.jsx)("img",{alt:"",className:"worriedFaceMouth2",src:"https://static.overlay-tech.com/assets/6dcbd19d-0b9e-436a-aa83-5145651b5ea2.svg"})]})})]}),Object(c.jsx)("button",{className:"flexWrapperSix",onClick:function(){return h.push({pathname:"/tasks",state:{feeling:j}})},children:Object(c.jsx)("p",{className:"continue",children:"Continue"})})]})}var T=function(){return Object(c.jsx)(g,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{exact:!0,path:"/",children:Object(c.jsx)(N,{})}),Object(c.jsx)(o.b,{path:"/dashboard",children:Object(c.jsx)(S,{})}),Object(c.jsx)(o.b,{path:"/tasks",children:Object(c.jsx)(E,{})}),Object(c.jsx)(o.b,{path:"/feeling",children:Object(c.jsx)(_,{})})]})})})})};n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.4e2eff3a.chunk.js.map