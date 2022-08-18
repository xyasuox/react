import "./TodoEdit.css";
import React from "react";
import { useState ,useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Todo } from "../model/Todo";
import { TodoIdContext } from "../store/TodoIdContext";
import axios from 'axios';

export const TodoEdit:React.FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {todoId} = useContext(TodoIdContext);

    // const urlParams = useParams<{id:string}>();
    // const id = parseInt(urlParams.id as string);

    const navigate = useNavigate();

    useEffect(()=>{
        (async()=>{
          const response = await axios.get<Todo>(`/todos/${todoId}`);
          setTitle(response.data.title);
          setDescription(response.data.description);
      })()
    })

    const titleChanged=( e:React.ChangeEvent<HTMLInputElement> ) => {
        setTitle(e.target.value);
    }
    
    const descriptionChanged=( e:React.ChangeEvent<HTMLTextAreaElement> )=>{
        setDescription(e.target.value);
    }

    const saveClick = async () => {
        const request:Todo = {
            title:title,
            description:description
        }
        await axios.put(`/todos/${todoId}`, request);
        navigate("/");
    }

    return (
        <>
         <h1>編集画面</h1>
         <input 
           type="text"
           className="todo_title_input"
           value={title}
           onChange={titleChanged}
         />
         <textarea
           className="todo_description_input"
           value={description}
           onChange={descriptionChanged}
         />
         <button className="todo_save_button" onClick={saveClick}>保存</button> 
        </>
    )
}