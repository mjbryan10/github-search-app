import React, { Component } from "react";

export default class Repo extends Component {
	state = {
		hasLoaded: false,
		isLoading: false,
		showInfo: false,
	};
	toggleInfo = () => {
		this.state.showInfo
			? this.setState({ showInfo: false })
			: this.setState({ showInfo: true });
	};
	convertISO = iso => {
		let date = new Date(iso);
		return date.toDateString();
	};
	render() {
		let {
			id,
			html_url,
			name,
			forks_count,
			stargazers_count,
			watchers_count,
			description,
			open_issues_count,
			updated_at,
		} = this.props.repo;
		return (
			<div className="repo" key={id} onClick={this.toggleInfo}>
				<div className="repo-header">
					<a href={html_url}>{name}</a>
					<div className="stats-container">
						<p>
							<i className="fas fa-code-branch"></i>: {forks_count}
						</p>
						<p>
							<i className="fas fa-star"></i>: {stargazers_count}
						</p>
						<p>
							<i className="fas fa-eye"></i>: {watchers_count}
						</p>
					</div>
				</div>
				<div className={"repo-info " + (!this.state.showInfo ? "hidden" : "")}>
					<ul>
						{description ? (
							<li>
								<p>
									<span>Description: </span>
									{description}
								</p>
							</li>
						) : null}
						<li>
							<p>
								<span>Issues: </span>
								{open_issues_count}
							</p>
						</li>
						<li>
							<p>
								<span>Last updated: </span>
								{this.convertISO(updated_at)}
							</p>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
