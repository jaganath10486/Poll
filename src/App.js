import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Styles/reset.css'
import Home from './Components/Home';
import CreateVote from './Components/CreateVote';
import Vote from './Components/Vote';
import Voting from './Components/Voting';

import { Appprovider } from './Context/ContextApi';

import React, { useReducer, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PollManagement from './Components/PollManagement';

const reducerFunction = (state, action) => {
  let updatedVote;
  let polls;
  switch (action.type) {
    case 'ADD':
      return [...state, action.value];

    case 'VOTE':
      console.log(state);
      console.log(action.value);
      updatedVote = state.filter((item) => item.uid == action.value.uid)
      polls = state.filter((item) => item.uid != action.value.uid)
      console.log(updatedVote);
      updatedVote[0].votes.append({ 'user': action.value['user'], 'vote': action.value['vote'] })
      return [...polls, updatedVote]

    default:
      return state;
  }
}

function App() {
  const initiallizestate = [];
  const [votes, dispatch] = useReducer(reducerFunction, initiallizestate);

  return (
    <div className="App">
      <Appprovider value={{ votes, dispatch }}>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='create-vote' element={<CreateVote />} />
          <Route path='vote' element={<Voting />}></Route>
          <Route path='vote/:uid' element={<Vote />} />
          <Route path='poll-management' element={ <PollManagement/> } ></Route>
        </Routes>
      </Appprovider>
    </div>
  );
}

export default App;
