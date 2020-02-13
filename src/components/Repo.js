import React, { Component } from "react";

export default class Repo extends Component {
	state = {
		hasLoaded: false,
		isLoading: false,
		showInfo: false,
		// commits: {},
	};
	toggleInfo = () => {
		this.state.showInfo
			? this.setState({ showInfo: false })
			: this.setState({ showInfo: true });
	};
	// updateState = async (prop, url) => {
	// 	await fetch(url)
	// 		.then(response => response.json())
	// 		.then(data => this.setState({ [prop]: data }));
	// };
	convertISO = iso => {
		//https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
		let date = new Date(iso);
		// let options = {
		//     day: '2-digit',
		//     month: 'narrow',

		// }
		return date.toDateString();
	};
	// componentDidMount() {
	// 	this.updateState("commits", this.props.repo.commits_url);
	// }
	render() {
		let repo = this.props.repo;
		return (
			<div className="repo" key={repo.id} onClick={this.toggleInfo}>
				<div className="repo-header">
					<a href={repo.html_url}>{repo.name}</a>
					<div className="stats-container">
						<p>
							<i class="fas fa-code-branch"></i>: {repo.forks_count}
						</p>
						<p>
							<i class="fas fa-star"></i>: {repo.stargazers_count}
						</p>
						<p>
							<i class="fas fa-eye"></i>: {repo.watchers_count}
						</p>
					</div>
				</div>
				<div className={"repo-info " + (!this.state.showInfo ? "hidden" : "")}>
					<ul>
						{repo.description ? (
							<li>
								<p>
									<span>Description: </span>
									{repo.description}
								</p>
							</li>
						) : null}
						<li>
							<p>
								<span>Issues: </span>
								{repo.open_issues_count}
							</p>
						</li>
						{/* <li>
							<p>
								<span>Commits: </span>
								{this.state.commits.length}
							</p>
						</li> */}
						<li>
							<p>
								<span>Last updated: </span>
								{this.convertISO(repo.updated_at)}
							</p>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
