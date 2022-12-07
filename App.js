import './App.css';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/home/index'

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>teste</h1>
      </div>
      <div>
      <Router>
        <Routes>
          <Route path="/" component={<Home /> } />
          {/* <Route path="/login" element={<Login /> } /> */}
        </Routes>
      </Router>
      </div>
     </React.Fragment>
  );
}

export default App;
