import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [ todos, setTodos ] = useState([]);

    const addTodo = todo =>{
        if( !todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };
    
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
    };
    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
      return (
    <div>
        <h1> List your Task </h1>
        <TodoForm onSubmit={addTodo}></TodoForm>
        <Todo
            todos={todos}
            updateTodo = {updateTodo}
            removeTodo = {removeTodo}
            completeTodo = {completeTodo} >
        </Todo>
    </div>
  )
}

export default TodoList