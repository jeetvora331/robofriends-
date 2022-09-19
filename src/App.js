import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
	constructor() {
		super();
		this.state = {
			state_robots: robots,
			searchField: "",
		};
	}

	onSearch = (event) => {
		this.setState({ searchField: event.target.value });
	};
	render() {
		const newRobots = this.state.state_robots.filter((rob) => {
			return rob.name
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase());
		});
		console.log(newRobots);
		return (
			<div className="tc">
				<SearchBox onSearch={this.onSearch} />
				<CardList var_robots={newRobots} />
			</div>
		);
	}
}

export default App;
