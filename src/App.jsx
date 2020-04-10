import React from 'react';
import styles from './App.module.scss';
import NavBar from "./containers/NavBar";
import DashBoard from "./containers/DashBoard";

const App = () => {
  return (
    <div className="App">
    <NavBar />
    <DashBoard />
    </div>
  );
}

export default App;
