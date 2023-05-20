import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo'

function App() {

  const [nameInput, setNameInput] = useState('');

  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        name: 'Learn React'
      },
      {
        id: 2,
        name: 'Create dog app'
      },
      {
        id: 3,
        name: 'Facing an interview'
      },
    ]
  );

  const deleteTodo = (id) => {
    // const temp = todos.filter(todo => todo.id !== id);
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const addTodo = () => {
    setTodos(prev => {
      const temList = [...prev];
      temList.push({
        id: temList.length + 1,
        name: nameInput
      })
      return temList;
    })
    setNameInput('');
  }

  return (
    <div className="App">
      {
        todos.map(todo => (
            <Todo name={todo.name} id={todo.id} deleteTodo={deleteTodo} />
        ))
      }
      <form>
        <label>Name</label>
        <br />
        <input value={nameInput} onChange={(event) => {
          setNameInput(event.target.value)
        }} />
        <button type="button" onClick={addTodo}>Add</button>
      </form>
    </div>
  );
}

export default App;
