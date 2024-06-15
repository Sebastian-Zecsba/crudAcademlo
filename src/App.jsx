import { useEffect, useState } from "react"
import useApi from "./hooks/useApi"
import Form from "./components/Form"
import CardsUsers from "./components/CardsUsers"
import ConfirmDelete from "./components/ConfirmDelete"

function App() {

  const [dataApi, getUsers, addUser, updateUser, deleteUser] = useApi()
  const [getUserById, setGetUserById] = useState()
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false)

  useEffect(() => {
    getUsers('/users')
  }, [])
  
  const toggleModal = () => {
    if(isModalOpen){
      setGetUserById()
      setModalOpen(!isModalOpen)
    }else{
      setModalOpen(!isModalOpen)
    }
  };

  const deleteToggleModal = () => {
    if(isDeleteOpen){
      setGetUserById()
      setDeleteOpen(!isDeleteOpen)
    }else{
      setDeleteOpen(!isDeleteOpen)
    }
  }

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
          getUserById={getUserById}
          updateUser={updateUser}
          setGetUserById={setGetUserById}
          toggleModal={toggleModal}
        />
      )}

      {isDeleteOpen && (
        <ConfirmDelete 
          deleteUser={deleteUser}
          getUserById={getUserById}
          deleteToggleModal={deleteToggleModal}
          setGetUserById={setGetUserById}
        />
      )}

      <main className={dataApi ? "app_users" : 'box_loader'}>
        {dataApi ? 
          (dataApi?.map(user => (
            <CardsUsers 
              key={user.id} 
              user={user} 
              setGetUserById={setGetUserById} 
              deleteUser={deleteUser} 
              toggleModal={toggleModal}
              deleteToggleModal={deleteToggleModal}
            />
          ))) 
        : 
          <div>
            <span className="loader"></span>
          </div>
        }
      </main>
    </div>
  )
}

export default App
