import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ExercisesList from './components/exercises-list';
import EditExercise from './components/edit-Exercise';
import CreateExercise from './components/create-Exercise';
import CreateUser from './components/create-User';

function App() {
  return (
    <Router>
      <NavBar />
      <br />
      <div className='container'>
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id' exact component={EditExercise} />
        <Route path='/create' exact component={CreateExercise} />
        <Route path='/user' exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
