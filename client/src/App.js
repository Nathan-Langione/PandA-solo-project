import React from "react";
// No longer needed with bootstrap
//import './App.css';
import { Router } from '@reach/router';
import Landing from './views/Landing';
import Login from './components/Login';
import UserProfile from './views/UserProfile';
import EditUserProfile from './views/EditPetProfile';
import AllUserProfiles from './views/AllUserProfiles';
import PetProfile from './views/PetProfile';
import EditPetProfile from './views/EditPetProfile';
import AllPetProfiles from './views/AllPetProfiles';

function App() {
  return (
    <div >
      <Router>
        <Landing path="/" />
        <Login path="/login" />
        {/* Object specific pages */}
        <UserProfile path="/user/:id" />
        <EditUserProfile path="/user/:id/edit" />
        <AllUserProfiles path="/users" />
        <PetProfile path="/pet/:id" />
        <EditPetProfile path="/pet/:id/edit" />
        <AllPetProfiles path="/pets" />
      </Router>
    </div>
  );
}

export default App;
