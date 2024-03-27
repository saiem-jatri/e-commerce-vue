import axios from "axios";
import {ref} from "vue";


export const getProducts = (payload) => {
    const allProducts = ref([])

    const products = async () => {
        await axios.get("http://127.0.0.1:8000/api/products")
            .then((res) => {
                allProducts.value = res.data
                return allProducts
            })
            .catch((err) => console.log(err))
    };

    products();

    return {
        products,
        allProducts
    }
}