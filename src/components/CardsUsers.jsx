import Gift from "../icons/Gift"
import Pencil from "../icons/Pencil"
import Trash from "../icons/Trash"

const CardsUsers = ({user, setUpdatedUser, deleteUser, toggleModal}) => {

    const handleDelete = () => {
        deleteUser(`/users`, user.id)
    }

    const handleUpdatedUser = () => {
        setUpdatedUser(user)
        toggleModal()
    }

    // console.log(user)

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
            <img src={user.image_url} alt="asd" />
            <div className="card_changeState">
                <Trash className="icon" onClick={handleDelete}/>
                <Pencil className="icon" onClick={handleUpdatedUser} />
            </div>
        </section>
    )
}

export default CardsUsers