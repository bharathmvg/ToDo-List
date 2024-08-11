const Header = () => {
  return <header>ToDo List</header>;
};

const Footer = ({ items }) => {
  return (
    <footer>
      {items.length} {items.length === 1 ? "item" : "items"} left
    </footer>
  );
};

export { Header, Footer };
