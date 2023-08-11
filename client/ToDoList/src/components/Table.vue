<script>
import { mapActions, mapState } from 'pinia';
import TableRow from '../components/TableRow.vue'
import { useToDoStore } from '../stores/toDo';


export default{
    components : {
        TableRow
    },
    methods : {
      ...mapActions(useToDoStore, ['fetchMyList'])
    },

    async created(){
      await this.fetchMyList()
    },

    computed:{
      ...mapState(useToDoStore, ['myToDos'])
    },
    
}

</script>

<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        To Do
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Finished
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Change
                    </th>
                    <th scope="col" class="px-6 py-3">
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <TableRow v-for="myToDo in myToDos" :key="myToDo.id" :myToDo="myToDo"/>
            </tbody>
        </table>
    </div>
</template>