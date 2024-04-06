import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CreateTodo = () => {
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const data = { title};

        // Empêcher la soumission du formulaire si le champ est vide.
        if (data.title === "") return;

        setLoading(true);

        axios.post('http://localhost:3000/api/todo/create', data)
            .then((res) => {
                console.log(res.data);
                alert("La tâche a été créé avec succès!");
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                alert("Erreur de création de la tâche");
                setLoading(false);
        });
    
    }

    return (
        <div className='container'>
            {loading ? (
                <p>Chargement...</p>
                ) : (
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mt-7 mx-auto'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl'>Création d'une tache</h1>
                            <Link to='/' className='text-sky-800 text-xl mr-5'>Retour aux tâches</Link>
                        </div>
                        <div className='my-4'>
                            <label htmlFor="" className='text-xl mr-4 text-gray-500'>Titre</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
                        </div>
                        <button type='submit' className='p-2 bg-sky-300 m-8'>Enregistrer</button>
                    </div>
                </form>
            )}
            
        </div>
    )
}

export default CreateTodo
