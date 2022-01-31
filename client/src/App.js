import React from "react";
import { Router } from '@reach/router';
import Home from './views/Home';
// User imports
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './views/UserProfile';
import AllUserProfiles from './components/UserList';
// Dog imports
import CreateDog from './views/CreateDog';
import DogProfile from './views/DogProfile';
import AllDogProfiles from './components/DogList';
import EditDogProfile from './views/EditDogProfile';

function App() {
  return (
    <div >
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Register path="/register" />
        {/* User specific pages */}
        <UserProfile path="/user/:id" />

        <AllUserProfiles path="/users" />
        {/* Dog specific pages */}
        <CreateDog path="/createdog" />
        <AllDogProfiles path="/dogs" />
        <DogProfile path="/dog/:id" />
        <EditDogProfile path="/dog/:id/edit" />

      </Router>
    </div>
  );
}

export default App;
