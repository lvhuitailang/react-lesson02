import Axios from "axios";

import apis from "./apis";

const ajax = Axios.create({
    baseURL:apis.baseURL
});

export const getTodos = ()=>{
    return ajax.get(apis.todos);
}

