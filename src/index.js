import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Welcome(props) {
//   return <h1>Bonjour, {props.name}</h1>;
// }
// function App(){
//   return(
//     <div>
//       <Welcome name="mohamed"/>
//       <Welcome name="sahra"/>
//       <Welcome name="othman"/>
//     </div>
//   );
// }


// function formatName(user){
//   return user.firstName + ' '+ user.lastName;
// }

// function getGreeting(user){
//   if(user)
//   {
//     return <h1>Hello, {formatName(user)} !</h1>;
//   }
//   else
//   {
//     return <h1>Hello, who are you?</h1>
//   }
// }
// function tick() {
//   const element = (
//     <div>
//       bonjour tous le monde 
//       <h2>Il est {new Date().toLocaleTimeString()}.</h2>
//       </div>
//   );
//   ReactDOM.render(element,document.getElementById('root'))
// }

// const user ={
//   firstName: 'el houssaïne',
//   lastName: 'le magnifique'
// };


// const element = getGreeting(user);

ReactDOM.render(
<App/>,
document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// setInterval(tick, 1000);
