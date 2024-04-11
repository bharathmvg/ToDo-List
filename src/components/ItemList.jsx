import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const ItemList = () => {
	const { items } = useContext(DataContext);

	return <div>ItemList</div>;
};

export default ItemList;
