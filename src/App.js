import React, { useState, useEffect } from 'react';
import './App.css';
import './LoginForm.css';
// import SuperHeroCardGrid from './components/super-hero-card/SuperHeroCardGrid';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import HomePage from './pages/HomePage';


function App() {

  const [loginOk, setLoginOk] = useState(false);
  const [customerSignUp, setCustomerSignUp] = useState(
    { email: '', password: ''}
  );

  const handleChange = (event) => {
      setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://challenge-react.alkemy.org/', customerSignUp)
      .then(function (response) {
        setLoginOk(!loginOk)
      })
      .catch(function (error) {
          console.log('Login Incorrecto')
      })
    }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            {loginOk ? <HomePage/> : <LoginPage customerSignUp={customerSignUp} handleChange={handleChange} handleSubmit={handleSubmit}/>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
