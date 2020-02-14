import React from "react";

export default function Search(props) {
	let { searchVal, onSearchType, onSearchSubmit } = props;
	return (
		<form>
			<input
				className={"search-bar"}
				type="text"
				value={searchVal}
				placeholder="Search for your Github superhero!"
				onChange={onSearchType}
			/>
			<input className="search-btn" type="submit" value="Search" onClick={onSearchSubmit} />
		</form>
	);
}
