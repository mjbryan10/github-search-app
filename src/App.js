import React, { Component } from "react";
import "./App.scss";

import Result from './components/Result';

export default class App extends Component {
  state = {
    hasLoaded: false,
    isLoading: false,
    searchVal: "" //the submitted search string
  }
  onSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }
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
						placeholder="Search for your Github superhero!"
					/>
					<input className="search-btn" type="submit" value="Search" onClick={this.onSearch} />
				</form>
        {this.state.hasLoaded ? <Result  /> : null}
			</div>
		);
	}
}
