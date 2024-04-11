import { createContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const title = "ToDo List";

	const [items, setItems] = useState([]);

	const [newItem, setNewItem] = useState("");

	const [searchItem, setSearchItem] = useState("");

	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const response = await axios.get("http://localhost:3500/items");
			setItems(response.data);
		};

		fetchItems();
	}, [items]);

	useEffect(() => {
		const filteredItems = items.filter((item) =>
			item.desc.toLowerCase().includes(searchItem.toLowerCase())
		);

		setSearchResults(filteredItems);
	}, [searchItem, items]);

	const addItem = async (desc) => {
		const id = items.length ? String(Number(items[items.length - 1].id) + 1) : "1";
		const newItem = { id, checked: false, desc };
		try {
			const response = await axios.post(`http://localhost:3500/items`, newItem);
			const listItems = [...items, response.data];
			setItems(listItems);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addItem(newItem);
		setNewItem("");
	};

	const handleCheck = async (id) => {
		const item = items.find((item) => item.id === id);
		const updatedItem = { ...item, checked: !item.checked };
		try {
			const response = await axios.put(`http://localhost:3500/items/${id}`, updatedItem);
			setItems(items.map((item) => (item.id === id ? { ...response.data } : item)));
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	const handleDelete = async (id) => {
		const listItems = items.filter((item) => item.id !== id);
		await axios.delete(`http://localhost:3500/items/${id}`);
		setItems(listItems);
	};

	return (
		<DataContext.Provider
			value={{
				title,
				items,
				setItems,
				handleCheck,
				handleDelete,
				handleSubmit,
				newItem,
				setNewItem,
				searchItem,
				setSearchItem,
				searchResults,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
