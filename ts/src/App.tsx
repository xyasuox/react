import "./App.css";
import { TodoList } from "./pages/TodoList";
import { TodoEdit } from "./pages/TodoEdit";
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom"

axios.defaults.baseURL = "http://localhost:4000/api/";

function App() {
  return (
    <BrowserRouter>
     <div className="content">
       <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/edit/:id" element={<TodoEdit />} />
       </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
