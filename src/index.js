

console.log("hello")


const input=document.querySelector("input")

const typed=document.getElementById("typed")
const run=document.getElementById("func_Run")

let typedTimes=0

let runTimes=0

typed.innerText=typedTimes
run.innerText=runTimes


input.addEventListener("input",()=>{
  typedTimes++
  typed.innerText=typedTimes
  runTimes++
  run.innerText=runTimes
})





















































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




