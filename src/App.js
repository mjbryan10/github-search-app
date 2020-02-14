import React, { Component } from "react";
import "./App.scss";

import Results from "./components/Results";

import ScrollUp from "./components/scroll/ScrollUp";
import Loader from "./components/loader/Loader";

export default class App extends Component {
	state = {
		hasLoaded: false,
		isLoading: false,
		searchVal: "", //the submitted search string
		userData: {} //Data fetched from GitHub API
	};
	onSearchType = e => {
		//Updates state with search String
		e.preventDefault();
		this.setState({ searchVal: e.target.value });
	};
	onSearchSubmit = e => {
		//Validates if search can be made
		e.preventDefault();
		if (this.state.searchVal) {
			this.searchUsers(this.state.searchVal);
		} else {
			window.alert("Enter some text then hit search.");
		}
	};
	resetSearch = () => {
		this.setState({ hasLoaded: false, searchVal: "" });
	};
	searchUsers = searchVal => {
		//Fetches data then updates state accordingly
		this.setState({ hasLoaded: false });
		this.setState({ isLoading: true });
		fetch(`https://api.github.com/search/users?q=${searchVal}`)
			.then(response => response.json())
			.then(userData => {
				this.setState({ userData });
				this.setState({ hasLoaded: true });
				this.setState({ isLoading: false });
			})
			.catch(error => console.error(error));
	};
	render() {
		return (
			<div className="App">
				<div className="content-container">
					<header className="App-header">
						<h1>
							My <span>GitHub</span> Searcher
						</h1>
					</header>
					<form action="">
						<input
							className={"search-bar"}
							type="text"
							value={this.state.searchVal}
							placeholder="Search for your Github superhero!"
							onChange={this.onSearchType}
						/>
						<input
							className="search-btn"
							type="submit"
							value="Search"
							onClick={this.onSearchSubmit}
						/>
					</form>
					{this.state.isLoading ? <Loader /> : null}
					{this.state.hasLoaded && this.state.userData.items.length ? (
						<Results userData={this.state.userData} resetSearch={this.resetSearch} />
					) : null}
					{this.state.hasLoaded && !this.state.userData.items.length ? (
						<p>Oops! Something went wrong, please try again or checkback later.</p>
					) : null}
				</div>
				<ScrollUp />
				<footer>
					<p>Created by Matthew James Bryan</p>
					<p>
						Powered by <a href="https://developer.github.com/v3/">GitHub API v3</a>
					</p>
					<p>Logo created by <a href="https://www.freepik.com/free-photos-vectors/design">freepik</a></p>
				</footer>
			</div>
		);
	}
}
