import React, { Component } from "react";
import "./App.scss";

import Search from "./components/Search";
import Results from "./components/Results";

import ScrollUp from "./components/scroll/ScrollUp";
import Loader from "./components/loader/Loader";

export default class App extends Component {
	state = {
		hasLoaded: false,
		isLoading: false,
		searchVal: "", //the submitted search string
		userData: {}, //Data fetched from GitHub API
	};
	onSearchType = e => {
		//Updates state with search String
		e.preventDefault();
		this.setState({ searchVal: e.target.value });
	};
	onSearchSubmit = e => {
		//Validates search string, then fetches data + updates state
		e.preventDefault();
		if (this.state.searchVal) {
			this.setState({ hasLoaded: false, isLoading: true });
			this.getResults(this.state.searchVal).then(userData => {
				this.setState({ userData, hasLoaded: true, isLoading: false });
			});
		} else {
			window.alert("Enter some text then hit search.");
		}
	};
	resetSearch = () => {
		this.setState({ hasLoaded: false, searchVal: "" });
	};
	getResults = async searchVal => { //Fetches users
		try {
			let response = await fetch(`https://api.github.com/search/users?q=${searchVal}`);
			let data = await response.json();
			return data;
		} catch (err) {
			console.error(err);
		}
	};
	render() {
		let { searchVal, isLoading, hasLoaded, userData } = this.state;
		return (
			<div className="App">
				<div className="content-container">
					<header className="App-header">
						<h1>
							My <span>GitHub</span> Searcher
						</h1>
					</header>
					<Search
						searchVal={searchVal}
						onSearchType={this.onSearchType}
						onSearchSubmit={this.onSearchSubmit}
					/>
					{isLoading ? <Loader /> : null}
					{hasLoaded && userData.items.length ? (
						<Results userData={userData} resetSearch={this.resetSearch} />
					) : null}
					{hasLoaded && !userData.items.length ? (
						<p>Oops! Something went wrong, please try again or checkback later.</p>
					) : null}
				</div>
				<ScrollUp />
				<footer>
					<p>Created by Matthew James Bryan</p>
					<p>
						Powered by <a href="https://developer.github.com/v3/">GitHub API v3</a>
					</p>
					<p>
						Logo created by{" "}
						<a href="https://www.freepik.com/free-photos-vectors/design">freepik</a>
					</p>
				</footer>
			</div>
		);
	}
}
