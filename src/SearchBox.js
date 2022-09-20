import React from "react";

const SearchBox = ({ onSearch }) => {
	return (
		<div className="pa2">
			<input
				className=" bg-washed-yellow  pa2 br shadow-5"
				type="search"
				placeholder="Enter Name"
				onChange={onSearch}
			/>
		</div>
	);
};

export default SearchBox;
