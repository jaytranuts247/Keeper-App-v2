import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { useSpring, animated } from "react-spring";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

function App() {
	return (
		<AuthState>
			<AlertState>
				<Router>
					<div className="App">
						<Header />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
						</Switch>

						<Footer />
					</div>
				</Router>
			</AlertState>
		</AuthState>
	);
}

export default App;
