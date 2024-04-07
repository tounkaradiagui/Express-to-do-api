import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditTodo = () => {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:3000/api/todo/${id}`).then((res) => {
      setTitle(res.data.title)
      setStatus(res.data.status)
      setLoading(false)
    }).catch((error) => {
      console.log(error);
      setLoading(false)
    })
  }, [id]);

  const handleEdit = () => {
    const data = {title, status}
    setLoading(true)
    axios.put(`http://localhost:3000/api/todo/update/${id}`, data).then((res) => {
    setLoading(false)
    alert('La tache a été modifiée avec succès !')
    navigate('/')
    console.log(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='p-4'>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <form onSubmit={handleEdit}>
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <h1 className="text-xl my-4 font-bold">Mettre à jour une tâche</h1>
            <div className='my-4'>
              <label htmlFor="" className='text-xl mr-4 text-gray-500'>Titre</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
            </div>

            <div className='my-4'>
              <label htmlFor="" className='text-xl mr-4 text-gray-500'>Statut</label>
              <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
            </div>

            <button type='submit' className='p-2 bg-sky-300 m-8'>Valider</button>
          </div> 
        </form>
      )}
    </div>
  )
}

export default EditTodo
