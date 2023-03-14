import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  // const [todo, setTodo] = useState<string | number>(""); // to set more then one
  // const [todo, setTodo] = useState<string[]>(""); // to set arr
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]); // arr of todos

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todos) {
      setTodos([
        ...todos, 
        {
          id: Date.now(), 
          todo: todo, 
          isDone: false
        }
      ]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
