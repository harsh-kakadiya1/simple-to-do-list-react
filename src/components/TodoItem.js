import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-item">
      <div 
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>
      <button 
        className="delete-button" 
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;