<script>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import { mapActions, mapState } from 'pinia';
import { useToDoStore } from '../stores/toDo';

export default{
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
    ...mapState(useToDoStore, ['toDos'])
  }
}

</script>

<template>

<Navbar/>
<Sidebar/>

<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
      <div class="grid grid-cols-4 gap-4 mb-4">
        <Card v-for="toDo in toDos" :key="toDo.id" :toDo="toDo"/>

      </div>
     
   </div>
</div>

</template>
