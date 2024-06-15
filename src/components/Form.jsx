import { useEffect } from "react"
import { useForm } from "react-hook-form"

const Form = ({addUser, getUserById, updateUser, setGetUserById, toggleModal}) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(getUserById)
    }, [getUserById])

    const submit = (data) => {
        if(getUserById){
            updateUser('/users', data, getUserById.id)
            setGetUserById()
        }else{
            addUser('/users', data)
        }
        toggleModal()
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
            image: null
        })
    }

  return (
    <div className="form">
        <div className="form_content">
            <button className="btn_close" onClick={toggleModal}>X</button>
            <form onSubmit={handleSubmit(submit)} >
                <h1>{getUserById ? 'Actualizar Usuario' : 'Nuevo Usuario'}</h1>
                <div className={getUserById ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="first_name">Nombre</label>
                    <input type="text" id="first_name" placeholder="Nombre" {...register('first_name')}/>
                </div>

                <div className={getUserById ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="last_name">Apellido</label>
                    <input type="text" id="last_name" placeholder="Apellido" {...register('last_name')}/>
                </div>

                <div className={getUserById ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="email">Correo electronico</label>
                    <input type="text" id="email" placeholder="Correo electronico" {...register('email')}/>
                </div>

                <div className={getUserById ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Contraseña" {...register('password')}/>
                </div>

                <div className={getUserById ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="birthday">Cumpleaños</label>
                    <input type="date" id="birthday" placeholder="Cumpleaños" {...register('birthday')} className="input_birthday"/>
                </div>

                <div className={getUserById ? `box_inputs_placeholder` : `box_inputs`}>
                    <input 
                        type="file"
                        {...register('image')}
                    />
                </div>

                <button className="btn-add-user">{getUserById ? 'Actualizar usuario' : 'Agregar usuario'}</button>
            </form>
        </div>
    </div>
  )
}

export default Form