import React, { useContext, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import DataContext from "../context/DataContext";

const AddItem = () => {
	const { newItem, setNewItem, handleSubmit } = useContext(DataContext);
	const inputRef = useRef();

	return (
		<form className="addForm" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add Item"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button type="submit">
				<FaPlus onClick={() => inputRef.current.focus()} />
			</button>
		</form>
	);
};

export default AddItem;
