import axios from "axios";

export const getAPI=async () =>{

    const respone=await axios.get("https://fakestoreapi.com/products");
    return respone.data;

}
