import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const Footer = () => {
	const { items } = useContext(DataContext);

	return (
		<footer>
			{items.length} {items.length === 1 ? "task" : "tasks"} left
		</footer>
	);
};

export default Footer;
