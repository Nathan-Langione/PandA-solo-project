import React from "react";
import { Router } from '@reach/router';
import Home from './views/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './views/UserProfile';
import EditUserProfile from './views/EditUserProfile';
import AllUserProfiles from './components/UserList';


function App() {
  return (
    <div >
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Register path="/register" />
        {/* Object specific pages */}
        <UserProfile path="/user/:id" />
        <EditUserProfile path="/user/:id/edit" />
        <AllUserProfiles path="/users" />
      </Router>
    </div>
  );
}

export default App;
