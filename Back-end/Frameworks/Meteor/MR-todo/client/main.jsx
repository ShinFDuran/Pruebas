import React from 'react';
import { render } from 'react-dom';

// Se importa la aplicación
import App from '../imports/ui/App.jsx';

// Se renderiza la app en el div que la contendrá: #render-target
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
