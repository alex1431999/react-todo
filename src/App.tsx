import React from 'react';
import './App.css';
import { Todos, Todo } from './components/todos/todos';

const todos: Todo[] = [
  {
    key: 0,
    text: 'test',
  },
  {
    key: 1,
    text: 'test2',
  }
]

interface IState {
  todos: Todo[],
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = { todos };

    this.onDone = this.onDone.bind(this);
  }

  onDone(todo: Todo) {
    const todosFiltered = this.state.todos.filter(todoCurrent => todoCurrent.key !== todo.key);
    this.setState({ todos: todosFiltered });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} onDone={this.onDone}></Todos>
      </div>
    );
  }
}

export default App;
