import axios from "axios";
import {ref} from "vue";


export const getCategory = (payload) => {
    const allCategories = ref([])

    const categories = async () => {
        await axios.get("http://127.0.0.1:8000/api/category")
            .then((res) => {
                allCategories.value = res.data
                return allCategories
            })
            .catch((err) => console.log(err))
            .finally(()=>{
                return allCategories
            })
    };

    return {
        categories,
        allCategories
    }
}