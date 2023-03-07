import TodoWrapper from "./components/TodoWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<TodoWrapper />
			<ToastContainer
				position="bottom-center"
				autoClose={3500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				theme="colored"
			/>
		</div>
	);
}

export default App;
