<template>
  <div
    class="
    rounded-lg
      bg-gray-800
      w-full
      items-center
      lg:w-5/12
      my-44
	  mx-auto
      xl:p-10
      lg:p-8
      relative
      flex
      justify-center
      lg:flex-row
      hover:shadow-md
      border border-green-800"
      >
    <section class="card">
      <div class="container">
        <h1 class="text-4xl text-center font-bold">REGISTER</h1>
        <form class="submit" @submit.prevent="handleSubmit()">
          <div class="mt-8">
            <input
              class="
                w-full
                focus:border-green-800 focus:ring-1 focus:ring-green-800 focus
                outline-none
                text-white
                placehorder
                rounded-lg
                pl-4
                py-2
                mb-4
              "
              type="email"
              placeholder="Email address"
              v-model="email" required
            />
            <input
              class="
                w-full
                focus:border-green-800 focus:ring-1 focus:ring-green-800 focus
                outline-none
                text-white
                placehorder
                rounded-lg
                pl-4
                py-2
                mb-4
              "
              type="password"
              placeholder="Password"
              v-model="password" required
            />

            <button
              class="w-full bg-green-700 rounded-lg"
              type="submit"
              value="Register"
             
            >
              REGISTER
            </button>
            <div v-if="error">{{ error }}</div>
            <div class="flex flex-col justify-center items-center mt-2">
				<p class=" mt-2">Already Have An Account?</p>
				<RouterLink class="text-blue-800" to="/">Login Now</RouterLink>
			</div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("register", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };

return { handleSubmit, email, password, error };
},
};
</script>