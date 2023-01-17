import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Navbar from "./components/navbar.component"
import ActivityList from "./components/activity-list.component";
import EditActivity from "./components/edit-activity.component";
import CreateActivity from "./components/create-activity.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router> 
    <Navbar /> 
    <br/> 
        <Routes> 
            <Route path="/" exact element={<ActivityList />} /> 
            <Route path="/edit/:id" element={<EditActivity />} /> 
            <Route path="create" element={<CreateActivity />} /> 
            <Route path="user" element={<CreateUser />} /> 
        </Routes>
   </Router>
  );
}

export default App;
