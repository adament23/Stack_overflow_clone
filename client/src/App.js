import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoute";
import { fetchAllQuestions } from "./actions/questions";
import { fetchAllUsers } from "./actions/users";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
      <Navbar/>
      <AllRoutes/>
      </Router>
     
      
    </div>
  );
}

export default App;
