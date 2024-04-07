import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteTodo = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()

  const handleDelete = () => {
    setLoading(true)
    axios.delete(`http://localhost:3000/api/todo/delete/${id}`).then(() => {
    setLoading(false)
    alert("La tâche a été supprimée")
    navigate('/')
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className='p-4'>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h3>Voulez-vous vraiment supprimer cette tâche ?</h3>
          <button onClick={handleDelete} className='p-4 bg-red-600 text-white m-8 w-full'>Oui</button>
          <button onClick={() => navigate('/')} className='p-4 bg-sky-600 text-white m-8 w-full'>Annuler</button>
        </div>
      )}
    </div>
  )
}

export default DeleteTodo
