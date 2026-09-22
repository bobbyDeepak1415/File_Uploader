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


let person1={
  name:"Bobby",
  age:30,
  active:true,
  print(){
    console.log(`${this.name} is ${this.age} years old`)
  }
}


const person2={
  name:"Deepak",
  age:"35",

}

person1.print()
const display=person1.print.call(person2)

