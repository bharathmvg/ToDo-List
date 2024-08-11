import React, { useState } from "react";
import { Header, Footer } from "./components/Layout";
import Main from "./components/Main";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todoList"))
  );

  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Header />
      <AddItem items={items} setItems={setItems} />
      <SearchItem search={search} setSearch={setSearch} />
      <Main
        items={items.filter((item) =>
          item.desc.toLowerCase().includes(search.toLowerCase())
        )}
        setItems={setItems}
      />
      <Footer items={items} />
    </div>
  );
};

export default App;
