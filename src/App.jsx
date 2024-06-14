import { useEffect, useState } from "react"
import useApi from "./hooks/useApi"
import Form from "./components/Form"
import CardsUsers from "./components/CardsUsers"

function App() {

  const [dataApi, getUsers, addUser, updateUser, deleteUser] = useApi()
  const [getUpdatedUser, setUpdatedUser] = useState()
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getUsers('/users')
  }, [])
  
  const toggleModal = () => {
    if(isModalOpen){
      setUpdatedUser()
      setModalOpen(!isModalOpen)
    }else{
      setModalOpen(!isModalOpen)
    }
  };

  return (
    <div className="app_main">
      <div className="app_box_header">
        <h1>Usuarios</h1>

        <button className="btn_create_user" onClick={toggleModal}>
          + Crear nuevo usuario
        </button>
      </div>

      {isModalOpen && (
        <Form 
          addUser={addUser}
          getUpdatedUser={getUpdatedUser}
          updateUser={updateUser}
          setUpdatedUser={setUpdatedUser}
          toggleModal={toggleModal}
        />
      )}

      <main className="app_users">
        {dataApi?.map(user => (
          <CardsUsers key={user.id} user={user} setUpdatedUser={setUpdatedUser} deleteUser={deleteUser} toggleModal={toggleModal}/>
        ))}
      </main>
    </div>
  )
}

export default App
