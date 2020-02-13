import React, { Component } from "react";
import "./App.scss";

import Results from "./components/Results";

export default class App extends Component {
	state = {
		hasLoaded: false,
		isLoading: false,
		searchVal: "", //the submitted search string
		userData: {},
	};
	onSearchType = e => {
		e.preventDefault();
		this.setState({ searchVal: e.target.value });
	};
	onSearchSubmit = e => {
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
				<header className="App-header">
					<h1>
						My <span>Github</span> Searcher
					</h1>
				</header>
				<form action="">
					<input
						className={"search-bar"}
						type="text"
						value={this.state.searchVal}
						placeholder="Search for your Github superhero!"
						// onKeyUp={this.onSearchType} //Changed to onChange
						onChange={this.onSearchType}
					/>
					<input
						className="search-btn"
						type="submit"
						value="Search"
						onClick={this.onSearchSubmit}
					/>
				</form>
				{this.state.hasLoaded ? (
					<Results userData={this.state.userData} resetSearch={this.resetSearch} />
				) : null}
			</div>
		);
	}
}
