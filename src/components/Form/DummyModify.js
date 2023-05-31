import React, { useEffect, useState } from "react";
import "./form.css";

const Modify = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const addTodo = () => {
    const newTodo = {
      userId: 1,
      title: "This is a new data added by Aayu",
      completed: false,
    };

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos([...todos, json]));
  };

  const deleteTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    }).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  const updateTodo = (id) => {
    const updatedTodo = {
      userId: 1,
      title: "This is a new data updated by Aayu",
      completed: false,
    };
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedTodo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            return json;
          }
          return todo;
        });
        setTodos(updatedTodos);
      });
  };

  return (
    <div className="container">
      <button onClick={addTodo} className="customButtonAdd">
        Add Detail
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="customDeleteButton"
            >
              Delete
            </button>
            <button
              onClick={() =>
                updateTodo(todo.id, { ...todo, completed: !todo.completed })
              }
              className="customUpdateButton"
            >
              Update
            </button>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modify;
