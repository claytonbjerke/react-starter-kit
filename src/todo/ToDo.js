import React from 'react';
import {List, Map} from 'immutable';

import ToDoApp from './ToDoApp';

export default React.createClass({

  getItems() {
    const todos = List.of(
      Map({id: 1, text: 'React', status: 'active', editing: false}),
      Map({id: 2, text: 'Redux', status: 'active', editing: false}),
      Map({id: 3, text: 'Immutable', status: 'completed', editing: false})
    );

    return todos;
  },

  render() {

    const filter = 'all';

    return (
      <ToDoApp todos={this.getItems()} filter={filter} />
    )
  }
})
