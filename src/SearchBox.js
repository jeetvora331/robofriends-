import React from "react";

const SearchBox = ({ onSearch }) => {
	return (
		<div className="pa2">
			<input type="search" placeholder="Enter Name" onChange={onSearch} />
		</div>
	);
};

export default SearchBox;
