import React, { Component, PropTypes } from 'react';

// Task component - representa a un único objeto todo
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

// propTypes se utiliza para definir el tipo del atributo
// También podemos indicar el tipo de variable (string, number, ...)
// Si hay un error -> Imprime por consola si falla alguna validación
Task.propTypes = {
  task: PropTypes.object.isRequired,
};
