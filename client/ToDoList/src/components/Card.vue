<script>
import { mapActions, mapState } from 'pinia';
import { useToDoStore } from '../stores/toDo';

export default{
    props : {
        toDo : { ...mapState(useToDoStore, ['toDos'])}
    },
    methods : {
        ...mapActions(useToDoStore, ['addToDo']),

        addingTodo(id){
            this.addToDo(id)
        }
    }
}
</script>

<template>


<div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
    <p class="text-gray-600 dark:text-white">
        <span class="text-lg font-bold text-cyan-900">
            “
        </span>
        {{ toDo.todo }}
        <span class="text-lg font-bold text-cyan-900">
            ”
        </span>
    </p>
    <div class="flex items-center justify-end mt-4">
        <div class="ml-2">
            
<button @click.prevent="addingTodo(toDo.id)" type="button" class="text-white bg-gradient-to-r from-cyan-900 via-white-600 to-amber-500 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Add</button>
        </div>
    </div>
</div>

</template>