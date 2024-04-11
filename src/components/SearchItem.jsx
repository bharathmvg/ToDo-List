import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const SearchItem = () => {
	const { searchItem, setSearchItem } = useContext(DataContext);

	return (
		<form className="searchForm" onSubmit={(e) => e.preventDefault()}>
			<input
				type="text"
				placeholder="Search Item"
				value={searchItem}
				onChange={(e) => setSearchItem(e.target.value)}
			/>
		</form>
	);
};

export default SearchItem;
