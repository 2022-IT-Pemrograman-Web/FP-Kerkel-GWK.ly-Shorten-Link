<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from './components/Navbar.vue';
import'./assets/main.css'
export default {
  components: (Navbar)
}
</script>
<template>
    <div class="w-4/5 mx-auto mt--4"> 
      <Navbar />
      <RouterView />
    </div>
    <div>
      <RouterLink to="/"></RouterLink>
      <RouterLink to="/login"></RouterLink>
    </div>

</template>
