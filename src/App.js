import logo from "./logo.svg";
import "./App.css";
import { Main } from "./components/Main";
import ContextState from "./context/ContextState";

function App() {
	return (
		<ContextState>
			<div className='App'>
				<Main />
			</div>
		</ContextState>
	);
}

export default App;
