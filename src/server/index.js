import axios from "axios"
const BASE_URL=import.meta.env.VITE_GUESS_URL


export async function getAllCategories() {
    try {
        const res=await axios.get(`${BASE_URL}/categories/all`)
        return res.data
    } catch (error) {
        return alert('Serverde problem var')
    }
}

