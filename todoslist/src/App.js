import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './MyComponent/Header';
import {Footer} from './MyComponent/Footer';
import Todos from './MyComponent/Todos';
import AddToDo from './MyComponent/AddToDo';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    console.log('I am onDelete of todo', todo);
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    setTodos(todos.filter((e) => e !== todo));
    localStorage.getItem('todos', JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log('I am adding todo', title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.getItem('todos', JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="MyTodosList" searchBar={false} />
      <AddToDo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
