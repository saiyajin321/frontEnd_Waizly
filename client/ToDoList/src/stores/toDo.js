import axios from 'axios'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
const base_url = 'http://localhost:3000'

export const useToDoStore = defineStore('toDo', {
    state : () => ({
        toDos : [],
        myToDos : []
    }),

    actions : {
        async doLogin(dataInput){

            try {
                const { data } = await axios ({
                    url : `${base_url}/user/login`,
                    method : 'POST',
                    data : dataInput
                })
                localStorage.access_token = data.access_token
                localStorage.username = data.username
                Swal.fire({
                    title : 'Login Success',
                    text : 'Welcome',
                    icon : 'success'
                })
                this.router.push('/')
            } catch (err) {
                Swal.fire('WRONG EMAIL/PASSWORD')
            }
        },

        async fetchTodo(){
            try {
                const { data } = await axios ({
                    url : `${base_url}/todo/todo`,
                    method : 'GET',
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                this.toDos = data
            } catch (err) {
                console.log(err)
            }
        },

        async addToDo(ToDoId){
            try {
                const { data } = await axios ({
                    url : `${base_url}/todo/todo`,
                    method : 'POST',
                    data : {ToDoId},
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                Swal.fire({
                    title : 'Added to your list',
                    text : 'Good Luck',
                    icon : 'success'
                })
            } catch (err) {
                console.log(err);
            }
        },

        async fetchMyList(){
            try {
                const { data } = await axios ({
                    url : `${base_url}/todo/myTodo`,
                    method : 'GET',
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                this.myToDos = data
            } catch (err) {
                console.log(err);
            }
        },

        async deleteTodo(id){
            try {
                const { data } = await axios ({
                    url : `${base_url}/todo/myTodo/${id}`,
                    method : 'DELETE',
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                Swal.fire({
                    title : 'Deleted',
                    text : 'Better Luck Next Time',
                    icon : 'warning'
                })
                this.router.push('/')
            } catch (err) {
                console.log(err);
            }
        },

        async patchTodo(status, id){
            console.log(status, id);
            try {
                const { data } = await axios({
                    url : `${base_url}/todo/myTodo/${id}`,
                    method : 'PATCH',
                    data : {status},
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                Swal.fire('Status Updated')
                this.router.push('/')
            } catch (err) {
                console.log(err);
            }
        }
    }
})