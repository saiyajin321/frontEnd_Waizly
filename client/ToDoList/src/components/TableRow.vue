<script>
import { mapActions, mapState } from 'pinia';
import { useToDoStore} from '../stores/toDo'

export default {
    data(){
        return{
            status : false,
            todoId : 0
        }
    },
    props : {
        myToDo : { ...mapState(useToDoStore, ['myToDos'])}
    },
    methods : {
        ...mapActions(useToDoStore, ['deleteTodo', 'patchTodo']),
        delete(id){
            this.deleteTodo(id)
        },
        patch(event){
            this.patchTodo( event.target.value, this.myToDo.id,);
        }
    }

}
</script>

<template>

<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ myToDo.activities }}
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ myToDo.status }}
                    </th>
                    <td class="px-6 py-4">

                        <label class="text-gray-700" for="animals">
                            <select id="patch"
                                @change.prevent="patch($event)"
                                class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                name="animals">
                                <option selected disabled >
                                    change
                                </option>
                                <option :value="true">
                                    Done
                                </option>
                                <option :value="false">
                                   Not Done
                                </option>
                            </select>
                        </label>

                    </td>
                    <button @click.prevent="deleteTodo(myToDo.id)" class="mt-2">
                        <svg class="text-gray-400 ml-5 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>

                    </button>
                </tr>
                
</template>