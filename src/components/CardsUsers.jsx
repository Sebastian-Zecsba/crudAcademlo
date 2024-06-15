import Gift from "../icons/Gift"
import Pencil from "../icons/Pencil"
import Trash from "../icons/Trash"
import LazyLoad from 'react-lazyload'

const CardsUsers = ({user, setGetUserById, toggleModal, deleteToggleModal}) => {

    const deleteUser = () => {
        setGetUserById(user)
        deleteToggleModal()
    }

    const handleUpdatedUser = () => {
        setGetUserById(user)
        toggleModal()
    }

    return (
        <section className="card_user">
            <div className="card_names">
                <h1>{user.first_name}</h1>
                <h1>{user.last_name}</h1>
            </div>
                <hr />
            <div className="card_email">
                <h2>CORREO</h2>
                <p>{user.email}</p>
            </div>
            <div className="card_birthday">
                <h2>CUMPLEAÑOS</h2>
                <div className="box_birthday">
                    <Gift />
                    <p>{user.birthday}</p>
                </div>
            </div>
            <LazyLoad>
                <img src={user.image_url} alt="asd" />
            </LazyLoad>
            <div className="card_changeState">
                <Trash className="icon" onClick={deleteUser}/>
                <Pencil className="icon" onClick={handleUpdatedUser} />
            </div>
        </section>
    )
}

export default CardsUsers