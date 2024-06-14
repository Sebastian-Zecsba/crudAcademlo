import { useEffect } from "react"
import { useForm } from "react-hook-form"

const Form = ({addUser, getUpdatedUser, updateUser, setUpdatedUser, toggleModal}) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(getUpdatedUser)
    }, [getUpdatedUser])

    const submit = (data) => {
        if(getUpdatedUser){
            updateUser('/users', data, getUpdatedUser.id)
            setUpdatedUser()
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
                <h1>{getUpdatedUser ? 'Actualizar Usuario' : 'Nuevo Usuario'}</h1>
                <div className={getUpdatedUser ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="first_name">Nombre</label>
                    <input type="text" id="first_name" placeholder="Nombre" {...register('first_name')}/>
                </div>

                <div className={getUpdatedUser ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="last_name">Apellido</label>
                    <input type="text" id="last_name" placeholder="Apellido" {...register('last_name')}/>
                </div>

                <div className={getUpdatedUser ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="email">Correo electronico</label>
                    <input type="text" id="email" placeholder="Correo electronico" {...register('email')}/>
                </div>

                <div className={getUpdatedUser ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Contraseña" {...register('password')}/>
                </div>

                <div className={getUpdatedUser ? `box_inputs_placeholder` : `box_inputs`}>
                    <label htmlFor="birthday">Cumpleaños</label>
                    <input type="date" id="birthday" placeholder="Cumpleaños" {...register('birthday')} className="input_birthday"/>
                </div>

                <div>
                    <input 
                        type="file"
                        {...register('image')}
                    />
                </div>

                <button className="btn-add-user">{getUpdatedUser ? 'Actualizar usuario' : 'Agregar usuario'}</button>
            </form>
        </div>
    </div>
  )
}

export default Form