<script>
import { RouterLink } from 'vue-router';
import Swal from 'sweetalert2'
export default{
  methods : {
    doLogout(){
      localStorage.clear()
      this.$router.push('/login')
      Swal.fire({
        title : 'Logging out',
        icon : 'warning'
      })
    }
  }
}

</script>

<template>

    
<nav class="fixed top-0 z-50 w-full bg-amber-500 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start">
        <RouterLink to="/">
            <a href="https://flowbite.com" class="flex ml-2 md:mr-24 ">
              <img src="../assets/1669786552237-removebg-preview.png" class="h-10 mr-3" alt="FlowBite Logo" />
              <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">To Do</span>
            </a>
        </RouterLink>
      </div>

      <div class=" relative ">
    <input type="text" id="rounded-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search"/>
    </div>

      <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
              <button @click.prevent="doLogout" type="button" class="flex text-sm rounded-full focus:ring-gray-300 dark:focus:ring-gray-600" >
                  <div>Logout</div>
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

</template>