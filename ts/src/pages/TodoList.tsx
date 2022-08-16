import './TodoList.css';
import React from "react";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Todo } from "../model/Todo";
import axios from 'axios';

export const TodoList:React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const navigate = useNavigate();

  useEffect(()=>{
    (async()=>{
      const response = await axios.get("/todos");
      setTodoList(response.data);
  })()
},[setTodoList])

  const changeTitle = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    setTitle(e.target.value);
  };

  const changeDescription = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    setDescription(e.target.value);
  };

  const addTodoList = async() => {
    // const newTodoList = [];
    // for (const todo of todoList) {
    //   newTodoList.push(todo);
    // }
    const newTodoList = [...todoList];
    const request:Todo={
      title:title,
      description:description
    }
    const response = await axios.post("/todos", request);
    request.id = response.data;
    newTodoList.push(request);
    setTodoList(newTodoList);
  }

  const deleteTodoList = async ( todo:Todo ) => {
    const newTodoList = [...todoList];
    await axios.delete(`/todos/${todo.id}`);
    const index = newTodoList.findIndex((newTodo) => newTodo.id === todo.id);
    newTodoList.splice(index, 1);
    console.warn(todo.title)
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>TODO App</h1>
      <div className="input_area">
        <Input value={title} onChange={changeTitle} />
        <Input value={description} onChange={changeDescription} />
        <Button onClick = {addTodoList}/>
      </div>

      <div className="todo_area">
        <h2 className="todo_area_title">TODO List</h2>
        <div className="todo_list">
          {todoList.map(( todo:Todo ) => {
            return (
              <div key={todo.id} className="todo_card" onClick={()=>navigate(`/edit/${todo.id}`)}>
                <h2 className="todo_title">{todo.title}
                  <img 
                    src="img/dust_box.png" 
                    alt="削除ボタン" 
                    className="delete_button" 
                    onClick={(e)=>{
                      e.stopPropagation();
                      deleteTodoList(todo)
                      }}/>
                </h2>
                <p className="todo_content">{todo.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

