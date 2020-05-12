<template>
  <div class="bg-red-100">
    <div class="h-screen flex flex-col">
      <header class="flex flex-shrink-0 h-12">
        <div class="flex flex-1 px-4 py-3 bg-gray-700 lg:w-64">
          
          <button class="block text-gray-400 hover:text-gray-200 sm:hidden" @click="toggleMenu">
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
              <path
                d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h7a1 1 0 100-2H4z"
              />
            </svg>
          </button>

          <button class="sm:flex sm:items-center">
            <span
              class="lg:inline ml-4 mr-2 text-sm font-medium text-white"
            >{{$static.metadata.siteName}}</span>
          </button>

        </div>
      </header>

      <div class="flex-1 flex overflow-hidden">
        <div id="categories-navbar"
        :class="isMenuOpen ? 'translate-x-0 ease-out duration-300' : '-translate-x-full ease-in duration-200'"
          class="z-30 fixed inset-y-0 left-0 w-64 bg-gray-100 border-r overflow-y-auto sm:static sm:block sm:translate-x-0 sm:transition-none transform"
        >
          <div class="absolute top-0 left-0 pl-4 pt-3 sm:hidden">
            <button class="block text-gray-600 hover:text-gray-800" @click="toggleMenu">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path
                  d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"
                />
              </svg>
            </button>
          </div>

          <nav class="mt-16 sm:mt-0">
            <Sidebar />
          </nav>
        </div>

        <main class="flex-1 flex bg-gray-200">
          <div class="flex-1 flex flex-col w-0 overflow-hidden">
            
            <slot />
            
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from "~/components/Sidebar.vue";
export default {
  components: {
    Sidebar
  },
  
  data() {
    return {
      isMenuOpen: false,
    }
  },

  methods: {
    toggleMenu (){
      this.isMenuOpen = !this.isMenuOpen
    }
  },
};
</script>

<style>

</style>
