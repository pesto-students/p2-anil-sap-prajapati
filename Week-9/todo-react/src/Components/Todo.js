import TodoForm from "./TodoForm";
import React, {useState} from 'react';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });
  
    const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };
  
    if (edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
  
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className='icons'>
          <li
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
            >Delete</li>
          <li
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
          >
            Edit
          </li>
        </div>
      </div>
    ));
  };
  
  export default Todo;