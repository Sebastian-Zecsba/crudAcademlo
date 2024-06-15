const ConfirmDelete = ({getUserById, deleteUser, deleteToggleModal, setGetUserById}) => {

    const handleDelete = () => {
        deleteUser('/users', getUserById.id)
        deleteToggleModal()
        setGetUserById()
    }

    return (
        <div className="box_confirm_delete">
            <div className="box_delete_content">
                <button className="btn_close" onClick={deleteToggleModal}>X</button>
                <div>
                    <h1>Eliminar usuario</h1>
                    <p>¿Estas seguro de elinar a <b>{getUserById.first_name}</b>? este proceso no se puede revertir.</p>
                </div>
                <button className="btn-add-user" onClick={handleDelete}>Si</button>
            </div>
        </div>
    )
}

export default ConfirmDelete