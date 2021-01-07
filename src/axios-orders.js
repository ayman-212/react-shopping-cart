import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-shopping-cart-db1ea-default-rtdb.firebaseio.com/"
});

export default instance;