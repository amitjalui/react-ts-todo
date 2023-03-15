// NOTE: uses of useReducer example file

import React, { useReducer } from 'react';
import { Todo } from '../model';

type Actions = 
  | {type: 'add', payload: string}
  | {type: 'remove', payload: number}
  | {type: 'done', payload: number};

  // state = [{}, {}, {}]
const todoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: new Date(),
          todo: action.payload,
          isDone: false
        }
      ];
    case "remove":
      return state.filter(todo => todo.id !== action.payload);
    case "done":
      return state.map(todo => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo)
  }
}

const TodoReducer = () => {
  // const [state, dispatch] = useReducer(todoReducer, [])
  
  return (
    <div>TodoReducer</div>
  )
}

export default TodoReducer