import React, { useContext } from "react";
import { FaListCheck } from "react-icons/fa6";
import DataContext from "../context/DataContext";

const Header = () => {
	const { title } = useContext(DataContext);

	return (
		<header>
			<FaListCheck /> {title}
		</header>
	);
};

Header.defaultProps = {
	title: "Default Title",
};

export default Header;
