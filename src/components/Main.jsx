import { FaTrashAlt } from "react-icons/fa";

const Main = ({ items, setItems }) => {
  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todoList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todoList", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.desc}
              </label>
              <FaTrashAlt
                className="trash"
                role="button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </FaTrashAlt>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">
          Your list is empty
        </p>
      )}
    </main>
  );
};

export default Main;
