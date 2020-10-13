import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdvancedNavBar from './components/NavBar';

function App() {
  return (
    <Router>
			<div id='body'>
				{/* <NavBar /> */}
        <AdvancedNavBar />
				<Switch>
					<Route path='/' exact></Route>
					<Route path="/companies" exact></Route>
					<Route path="/market-news" exact ></Route>
					<Route path="/stocks" exact></Route>
          			<Route path="/profile" exact ></Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
