import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";

function App() {
	return (
		<DataProvider>
			<div className="App">
				<Header />
				<SearchItem />
				<AddItem />
				<Content />
				<Footer />
			</div>
		</DataProvider>
	);
}

export default App;
