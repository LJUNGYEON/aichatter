import './App.css';
import {useEffect, useState} from "react";
import Header from './js/header';
import React from "react";

function App() {
 const [data, setData] = useState([]);

    useEffect(() => {
    fetch("/")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {
            setData(result);
      })
  },[]);

   return (
    <div className="App">
      <div className="header_div">
        <Header/>
      </div>

    </div>
  );
}

export default App;
