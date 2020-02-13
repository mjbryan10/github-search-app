import React, { Component } from "react";
import Repos from './Repos'

export default class Result extends Component {
	state = {
		isLoading: false,
		hasLoaded: false,
		followers: {},
		repos: {},
	};
	// fetchData = async (url) => {

	// 	let responseData = {};
	// 	responseData = await fetch(url)
	// 		.then(response => response.json())
	// 		.then(data => responseData = data);
	// 	return responseData;
	// };
	updateState = async (prop, url) => {
		await fetch(url)
			.then(response => response.json())
			.then(data => this.setState({ [prop]: data }));
	};
	componentDidMount() {
		let userData = this.props.userData;
		// this.setState({followers: this.fetchData(userData.followers_url).length})
		this.updateState('followers', userData.followers_url);
		this.updateState('repos', userData.repos_url);
	}
	render() {
		let userData = this.props.userData;
		let userName = userData.login;
		return (
			<div className="result-container" key={userData.id}>
				<input
					className="result-reset"
					type="button"
					value="X"
					onClick={this.props.resetSearch}
				/>
				<div className="result-header">
					<img src={userData.avatar_url} alt="" height="" />
					<div className="result-bio">
						<h3>{userName}</h3>
						<p>Followers: {this.state.followers.length}</p>
						<p>Repositories: {this.state.repos.length}</p>
					</div>
				</div>
				<Repos repos={this.state.repos} />
			</div>
		);
	}
}
