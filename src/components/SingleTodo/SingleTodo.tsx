import React from 'react';
import { Todo } from '../../model';
import './SingleTodo.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
  return (
    <div>SingleTodo</div>
  )
}

export default SingleTodo;