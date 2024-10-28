import React from 'react';
import '../styles.css';

function List({ todos, toggleCheck, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className={todo.done ? 'completed' : ''}>
          <div className="view">
            <input
              type="checkbox"
              className="toggle"
              checked={todo.done} // 'checked' yerine 'done' kullanılıyor
              onChange={() => toggleCheck(index)} // Pass index instead of todo.id
            />
            <label>{todo.text}</label>
            <button className="destroy" onClick={() => deleteTodo(index)}></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;