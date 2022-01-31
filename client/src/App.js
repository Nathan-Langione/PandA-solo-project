import React from "react";
import { Router } from '@reach/router';
import Home from './views/Home';
// User imports
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './views/UserProfile';
import EditUserProfile from './views/EditUserProfile';
import AllUserProfiles from './components/UserList';
// Dog imports
import CreateDog from './views/CreateDog';
import ViewDog from './views/ViewDog';
import AllDogProfiles from './components/DogList';

function App() {
  return (
    <div >
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Register path="/register" />
        {/* User specific pages */}
        <UserProfile path="/user/:id" />
        <EditUserProfile path="/user/:id/edit" />
        <AllUserProfiles path="/users" />
        {/* Dog specific pages */}
        <CreateDog path="/createdog" />
        <AllDogProfiles path="/dogs" />
        <ViewDog path="/dog/:_id" />

      </Router>
    </div>
  );
}

export default App;
