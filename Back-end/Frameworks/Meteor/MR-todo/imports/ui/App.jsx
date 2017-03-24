import React, { Component } from 'react';
import Task from './Task.jsx';

// App component - representa la app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    // Ejecutamos la función de generar la tarea para todas las de la colección
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  // Render del componente principal que incluye los renders de las tareas
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
