import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          {/* react-router-dom version 6 no longer supports the use of components directly. Use an element to specify the component you route.
  Route has to be a child of Routes  */}
          <Route path="/" element={ <Users />} />
          <Route path="/places/new" element={ <NewPlace /> } />
        </Routes>
      </main>
      <Navigate to="/" />
    </Router>
  );
};

export default App;
