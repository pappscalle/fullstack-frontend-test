import { Component } from 'react';
import TodoApp from './components/TodoApp.jsx';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World!
        <TodoApp/>
      </div>
    );
  }
}

export default App;
