import React, { Component } from "react";
import "./App.scss";

import Result from './components/Result';

export default class App extends Component {
  state = {
    hasLoaded: false,
    isLoading: false,
    searchVal: "" //the submitted search string
  }
  onSearchType = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({ searchVal:e.target.value })
  }
  onSearchSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchVal) {
      this.setState({ hasLoaded: true })
    } else {
      window.alert('Enter some text then hit search.')
    }
  }
  resetSearch = () => {
    this.setState({ hasLoaded: false, searchVal: "" })
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
            // value={this.state.searchVal} //TODO: reset the search bar on reset!
            placeholder="Search for your Github superhero!"
            onKeyUp={this.onSearchType}
					/>
					<input className="search-btn" type="submit" value="Search" onClick={this.onSearchSubmit} />
				</form>
        {this.state.hasLoaded ? <Result searchVal={this.state.searchVal} resetSearch={this.resetSearch} /> : null}
			</div>
		);
	}
}
