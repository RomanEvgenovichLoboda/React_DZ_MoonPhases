import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState , useEffect} from 'react';
import Timer from '../AppTime/AppTime';
import MoonCycle from '../AppMoonCycle/MoonCycle';
import Curse from '../AppCourse/Curse';
import './App.css';
import reportWebVitals from '../reportWebVitals'

function App() {
  // const [crsString,setString] = useState();
  // useEffect(()=>{
  //   fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then((data=>console.log(data)));
  // },[]);
  // function Course(){
  //   const response = fecth('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  //   const data = response.json();


  // };
  return (
    <div className="App">
      {/* <Timer name = "First" hours="1" minutes="0" seconds="10"></Timer>
      <Timer name = "Second" hours="0" minutes="10" seconds="10"></Timer>
      <Timer name = "Third" hours="0" minutes="0" seconds="40"></Timer> */}
      <MoonCycle></MoonCycle>
    </div>
  );
}

export default App;