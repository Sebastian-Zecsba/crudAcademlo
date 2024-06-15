import { useState } from "react"
import axios from "axios"
import { storage } from "../config/firebaseConfig"
import { uploadBytes, ref, getDownloadURL } from "@firebase/storage"

const useApi = () => {
    const [dataApi, setDataApi] = useState()

    const getUsers = (path) => {
        const url = `https://users-crud.academlo.tech/${path}/`
        axios.get(url)
            .then(res => setDataApi(res.data))
            .catch(err => console.log(err))
    }

    const addUser = async (path, data) => {
        
        try {
            const file = data.image[0]; // Verifica que data.image sea un array y toma el primer elemento
            const storageRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            const urlStorage = await getDownloadURL(snapshot.ref);
            
            data.image_url = urlStorage 
            
            const url = `https://users-crud.academlo.tech/${path}/`
            const response = await axios.post(url, data)

            setDataApi([...dataApi, response.data])
            console.log(response.data)
            
        } catch (err) {
            console.log(err)
        }
    }

    const updateUser = (path, data, id) => {
        const url = `https://users-crud.academlo.tech/${path}/${id}/`
        axios.patch(url, data)
            .then(res => {
                setDataApi(dataApi.map(user => user.id === id ? res.data : user))
                console.log('Acuatializado')
            })
            .catch(err => console.log(err))
    }

    const deleteUser = (path, id) => {
        const url = `https://users-crud.academlo.tech/${path}/${id}/`
        axios.delete(url)
            .then(res => {
                setDataApi(dataApi.filter(user => user.id !== id ))
                console.log('User deleted', res.data)
            })
    }

    return [ dataApi, getUsers, addUser, updateUser, deleteUser ]
}

export default useApi