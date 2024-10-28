import React from 'react';

function Footer({ todos, setTodos, deleteTodo }) {
    const clearCompleted = () => {
        const newTodos = todos.filter(todo => !todo.done);
        setTodos(newTodos);
    }

    const showAll = () => {
        // Tüm todos'ları göster
        setTodos(todos); // Burada, tüm todos'ları göstermek için setTodos(todos) kullanın
    }

    const showActive = () => {
        const activeTodos = todos.filter(todo => !todo.done);
        setTodos(activeTodos);
    }

    const showCompleted = () => {
        const completedTodos = todos.filter(todo => todo.done);
        setTodos(completedTodos);
    }

    return (
        <>
            <span className="todo-count">
                <strong>{todos.filter(todo => !todo.done).length}</strong> item left
            </span>
            <ul className="filters">
                <li>
                    <a onClick={showAll}>All</a>
                </li>
                <li>
                    <a onClick={showActive}>Active</a>
                </li>
                <li>
                    <a onClick={showCompleted}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </>
    )
}

export default Footer;
