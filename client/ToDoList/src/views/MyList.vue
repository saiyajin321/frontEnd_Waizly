<script>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
import Table from '../components/Table.vue'
import { mapActions, mapState } from 'pinia'
import { useToDoStore } from '../stores/toDo'


export default{
    components : {
        Sidebar,
        Navbar,
        Table
    },
    methods : {
      ...mapActions(useToDoStore, ['fetchMyList'])
    },

    async created(){
      await this.fetchMyList()
    },

    computed:{
      ...mapState(useToDoStore, ['myToDos'])
    }
}

</script>

<template>
<Navbar/>
<Sidebar/>
<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
      <div class="grid grid-cols-1 gap-4 mb-4">
        <Table/>


      </div>
     
   </div>
</div>

    
</template>