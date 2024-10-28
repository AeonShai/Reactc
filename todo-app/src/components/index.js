import React, { useEffect } from 'react';
import Task from './Form';
import List from './List';
import './styles.css';
import Footer from './Operations/footer';

function Todos() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn about React',
      done: true // 'checked' yerine 'done' kullanılıyor
    },
    {
      text: 'Meet friend for lunch',
      done: false
    },
    {
      text: 'Build really cool todo app',
      done: false
    }
  ]);

  const toggleCheck = (index) => {
    const updatedTodos = todos.map((todo, i) => (
      i === index ? { ...todo, done: !todo.done } : todo
    ));
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Task todos={todos} addTodo={setTodos} />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={(e) => {
            const isChecked = e.target.checked;
            setTodos(todos.map(todo => ({ ...todo, done: isChecked }))); // 'checked' yerine 'done' kullanılıyor
          }}
          checked={todos.length > 0 && todos.every(todo => todo.done)} // 'checked' yerine 'done' kullanılıyor
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <List todos={todos} toggleCheck={toggleCheck} deleteTodo={deleteTodo} />
      </section>
          <footer className="footer">
            <Footer todos={todos} toggleCheck={toggleCheck} deleteTodo={deleteTodo} setTodos={setTodos}/>
          </footer>
    </section>
  );
}

export default Todos;
