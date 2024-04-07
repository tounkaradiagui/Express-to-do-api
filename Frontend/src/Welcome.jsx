import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
// import {MdOutlineAddBox} from 'react-icons/md'


const Welcome = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/api/todo").then((res) => {
        setTodos(res.data.data);
        setLoading(false);
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 ml-5'>Liste de tâches</h1>
        <Link to='/todo/create' className='text-sky-800 text-xl mr-5'>Ajouter une tache</Link>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : (
      <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>ID</th>
            <th className='border border-slate-600 rounded-md'>Titre</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Statut</th>
            <th className='border border-slate-600 rounded-md'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => (
            <tr key={todo._id} className="h-8">
              <td className='border border-slate-700 rounded-md text-center'>
                {todo._id}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {todo.title}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {todo.status}
              </td>
              <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                <div className='justify-between'>
                  <Link to={`/todo/edit/${todo._id}`} className="mr-6">
                    Modifier
                  </Link>
                  <Link to={`/todo/delete/${todo._id}`}>
                    Supprimer
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}  
    </div>
  );
};

export default Welcome;
