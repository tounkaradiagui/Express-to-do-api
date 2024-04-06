import axios from "axios";
import { useEffect, useState } from "react";

const Welcome = () => {

  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/api/todo").then((res) => {
      setTodo(res.data.data);
      setLoading(false);
      console.log(res.data)
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    })
  },[])

  return (
    <div>
      {loading ? (
        "Chargement de la liste en cours"
      ) : (
        <div>
          {todo?.map((item,) => {
              <div key={item._id}>
                <h4>{todo?.title}</h4>
              </div>
            })
          }
        </div>
      )}
    </div>
  )
}

export default Welcome
