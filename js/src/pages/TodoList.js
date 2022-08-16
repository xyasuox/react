import './TodoList.css';
import { useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";

export const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState(
    [
      {
        title:"牛乳を買うw",
        description:"ハローズで買ってくる、ついでに冷蔵庫の牛乳腐ってるので捨てる。",
      },
      {
        title:"米を炊く",
        description:"18:30 くらいに炊きあがるように設定しておく。",
      },
    ]
  );

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const addTodoList = () => {
    // const newTodoList = [];
    // for (const todo of todoList) {
    //   newTodoList.push(todo);
    // }
    const newTodoList = [...todoList];
    newTodoList.push({title:title, description:description});
    setTodoList(newTodoList);
  }

  const deleteTodoList = (todo) => {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((newTodo) => newTodo.title === todo.title);
    newTodoList.splice(index, 1);
    console.warn(todo.title)
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>TODO App</h1>
      <div className="input_area">
        <Input title={title} onChange={changeTitle} />
        <Input description={description} onChange={changeDescription} />
        <Button onClick = {addTodoList}/>
      </div>

      <div className="todo_area">
        <h2 className="todo_area_title">TODO List</h2>
        <div className="todo_list">
          {todoList.map(( todo ) => {
            return (
              <div key={todo.title} className="todo_card">
                <h2 className="todo_title">{todo.title}<img src="img/dust_box.png" alt="削除ボタン" className="delete_button" onClick={()=>deleteTodoList(todo)}/></h2>
                <p className="todo_content">{todo.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

