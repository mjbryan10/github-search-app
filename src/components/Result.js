import React, { Component } from "react";
import Repos from './Repos'

export default class Result extends Component {
	state = {
		isLoading: false,
		hasLoaded: false,
		followers: {},
		repos: {},
	};
	updateState = async (prop, url) => {
		await fetch(url)
			.then(response => response.json())
			.then(data => this.setState({ [prop]: data }));
	};
	componentDidMount() {
		let { userData } = this.props;
		this.updateState('followers', userData.followers_url);
		this.updateState('repos', userData.repos_url);
	}
	render() {
		let { userData, resetSearch } = this.props;
		let { followers, repos } = this.state;
		let { login, avatar_url } = userData;
		return (
			<div className="result-container" key={userData.id}>
				<input
					className="result-reset"
					type="button"
					value="X"
					onClick={resetSearch}
				/>
				<div className="result-header">
					<img src={avatar_url} alt="User Logo" className={(avatar_url ? "" : "default-bg")} />
					<div className="result-bio">
						<h3>{login}</h3>
						<p>Followers: {followers.length}</p>
						<p>Repositories: {repos.length}</p>
					</div>
				</div>
				<Repos repos={repos} />
			</div>
		);
	}
}
