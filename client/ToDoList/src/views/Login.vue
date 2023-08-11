<script>
import { mapActions } from 'pinia';
import { useToDoStore } from '../stores/toDo';

export default{
    data(){
        return{
            dataInput : {
                email : '',
                password : ''
            }
        }
    },
    methods : {
        ...mapActions(useToDoStore, ['doLogin']),

        login(){
            this.doLogin(this.dataInput)
        }
    }
}

</script>

<template>
    <div class="flex bg-cyan-900 h-screen w-screen">
        <div class="w-1/4 bg-amber-500 h-screen flex justify-center items-center">
            <a href="https://waizly.id/">
                <img src="../assets/1669786552237.png" class="max-w-full h-auto transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400" />
            </a>
        </div>
        <div class="w-3/4 bg-cyan-900 h-screen flex flex-col justify-center items-center">

            <div class="w-full h-screen font-sans bg-cover bg-landscape">
                <div class="container flex items-center justify-center flex-1 h-full mx-auto">
                    <div class="w-full max-w-lg">
                        <div class="leading-loose">
                            <form @submit.prevent="login" class="max-w-sm p-10 m-auto rounded shadow-xl bg-cyan-800">
                                <p class="mb-8 text-2xl font-light text-center text-white">
                                    Login
                                </p>
                                <div class="mb-2">
                                    <div class=" relative ">
                                        <input type="text" id="login-with-bg-email"
                                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            placeholder="email" 
                                            v-model="dataInput.email"
                                            />
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <div class=" relative ">
                                        <input type="password" id="login-with-bg-password"
                                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            placeholder="password" 
                                            v-model="dataInput.password"
                                            />
                                    </div>
                                </div>
                                <div class="flex items-center justify-center mt-4">
                                    <button type="submit"
                                        class="py-2 px-4 bg-cyan-900 transition ease-in-out delay-150 bg-cyan-900 hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 rounded-lg ">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
