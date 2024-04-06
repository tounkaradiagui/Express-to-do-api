import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import CreateTodo from './pages/CreateTodo';
import EditTodo from './pages/EditTodo';
import DeleteTodo from './pages/DeleteTodo';

function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<Welcome />}/>
        <Route  path="/todo/create" element={<CreateTodo />}/>
        <Route  path="/todo/edit/:id" element={<EditTodo />}/>
        <Route  path="/todo/delete/:id" element={<DeleteTodo />}/>
      </Routes>
    </>
  )
}

export default App
