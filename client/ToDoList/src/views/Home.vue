<script>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import { mapActions, mapState } from 'pinia';
import { useToDoStore } from '../stores/toDo';

export default{
  data(){
    return{
      search : ''
    }
  },
    components : {
        Sidebar,
        Navbar,
        Card
    },
  methods : {
    ...mapActions(useToDoStore, ['fetchTodo']),

  },
  async created(){
    await this.fetchTodo()
  },
  computed : {
    ...mapState(useToDoStore, ['toDos']),

    filteredPosts(){
      return this.toDos.filter(el => el.todo.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}

</script>

<template>

<Navbar/>
<Sidebar/>

<div class="p-4 sm:ml-64 mt-2">
    <div class=" relative mt-12 mb-2">
      <input v-model="search" type="text" id="rounded-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search"/>
    </div>
   <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 ">
      <div class="grid grid-cols-4 gap-4 mb-4">
        <Card v-for="toDo in filteredPosts" :key="toDo.id" :toDo="toDo"/>

      </div>
     
   </div>

</div>

</template>
