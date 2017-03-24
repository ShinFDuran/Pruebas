import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

// App component - representa la app
class App extends Component {
  renderTasks() {
    // Ejecutamos la función de generar la tarea para todas las de la colección
    return this.props.tasks.map((task) => (
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

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
