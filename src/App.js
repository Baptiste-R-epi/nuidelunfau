import './App.css';
import Router from "./router";
import Header from "./components/Header";

export default function App() {
	return (
		<div className="App">
			<Header />
			<Router />
		</div>
	);
}