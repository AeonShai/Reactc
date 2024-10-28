import React, { useState } from 'react';

function Task({ todos, addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo([...todos, { text: task, checked: false }]);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        autoFocus
      />
    </form>
  );
}

export default Task;
