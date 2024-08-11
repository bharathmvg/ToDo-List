import { useState } from "react";
import { MdAdd } from "react-icons/md";

const AddItem = ({ items, setItems }) => {
  const [newItem, setNewItem] = useState("");

  const addItem = (desc) => {
    const id = items.length === 0 ? "1" : items[items.length - 1].id + 1;
    const newItem = { id, checked: false, desc };
    const listItems = [...items, newItem];
    setItems(listItems);
    // localStorage.setItem("todoList", JSON.stringify(listItems));
  };

  const handleSubmit = () => {
    if(!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <MdAdd className="add-btn" role="button" onClick={handleSubmit}>
        Add
      </MdAdd>
    </form>
  );
};

export default AddItem;
