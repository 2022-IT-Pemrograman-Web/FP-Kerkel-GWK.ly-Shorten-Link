<script>
import { RouterLink, RouterView } from "vue-router";
import'./assets/main.css'
export default {
}
</script>
<template>
  <div>
    <div class="w-full mx-auto mt--4"> 
      <Navbar />
      <RouterView />
    </div>


    <RouterLink to="/"></RouterLink>
    <RouterLink to="/login"></RouterLink>
  </div>

</template>
