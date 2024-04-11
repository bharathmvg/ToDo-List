import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import DataContext from "../context/DataContext";

const Content = () => {
	const { items, handleCheck, handleDelete, searchResults } = useContext(DataContext);

	return (
		<main>
			{items.length ? (
				<ul className="items">
					{searchResults.map((item) => (
						<li className="item" key={item.id}>
							<input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
							<label style={item.checked ? { textDecoration: "line-through" } : null}>
								{item.desc}
							</label>
							<FaTrashAlt tabIndex="0" onClick={() => handleDelete(item.id)} />
						</li>
					))}
				</ul>
			) : (
				<p
					style={{
						textAlign: "center",
						marginTop: "50px",
						fontSize: "20px",
						letterSpacing: "0.5px",
					}}>
					Your List Is Empty...
				</p>
			)}
		</main>
	);
};

export default Content;
