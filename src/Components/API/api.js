import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://bloggy-api.herokuapp.com/'
})
export const userApi={
    getPosts ()  {
        return instance.get(`posts`).then(response=>{return response.data});
    },
    editPosts(){
        return instance.get(`posts`).then(response=>{return response.data});
    },
    deletePosts(){
        return instance.delete(`posts`).then(response=>{return response.data});
    }
    
}