import "./App.css";
import { TodoList } from "./pages/TodoList";
import { TodoEdit } from "./pages/TodoEdit";
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { TodoIdProvider } from "./store/TodoIdContext";

axios.defaults.baseURL = "http://localhost:4000/api/";

function App() {
  return (
    <TodoIdProvider>
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/edit" element={<TodoEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TodoIdProvider>
  );
}

export default App;
