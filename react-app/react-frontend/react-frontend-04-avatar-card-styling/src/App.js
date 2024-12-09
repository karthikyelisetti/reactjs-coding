import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
// Switch and Redirect are replaced with Routes and Navigate from react-router-dom v6 onwards

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* react-router-dom version 6 no longer supports the use of components directly. Use an element to specify the component you route.
Route has to be a child of Routes  */}
        <Route path="/" element={ <Users />} />
        <Route path="/places/new" element={ <NewPlace /> } />
      </Routes>
      <Navigate to="/" />
    </Router>
  );
};

export default App;
