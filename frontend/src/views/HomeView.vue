<template>
  <div>
    <nav
      class="
        bg-white
        border-gray-200
        px-2
        sm:px-4
        py-2.5
        rounded
        dark:bg-gray-900
      "
    >
      <div
        class="
          w-full
          container
          flex flex-wrap
          items-center
          justify-between
          mx-auto
        "
      >
        <a class="flex items-center">
          <img
            src="https://cdn.discordapp.com/attachments/755395371429003315/1050316898081964072/WhatsApp_Image_2022-12-07_at_23.32_1.png"
            class="h-6 mr-3 sm:h-9"
          />
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >GWK.ly</span
          >
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="
              ease-in-out
              duration-300
              text-white
              bg-gradient-to-r
              from-green-900
              to-green-600
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              mr-3
              md:mr-0
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
            @click="signOut"
          >
            Log Out
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="
              inline-flex
              items-center
              p-2
              text-sm text-gray-500
              rounded-lg
              md:hidden
              hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-200
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
            "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="
            items-center
            justify-between
            hidden
            w-full
            md:flex md:w-auto md:order-1
          "
          id="navbar-cta"
        >
          <ul
            class="
              flex flex-col
              p-4
              mt-4
              border border-gray-100
              rounded-lg
              bg-gray-50
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-white
              dark:bg-gray-800
              md:dark:bg-gray-900
              dark:border-gray-700
            "
          >
            <li>
              <a
                href="/home"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-white
                  bg-green-700
                  rounded
                  md:bg-transparent md:text-emerald-400 md:p-0
                  dark:text-white
                "
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/about"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:hover:text-green-700
                  md:p-0
                  md:dark:hover:text-white
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >About</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!-- <div class="rounded-full">
    <h1 style="font-family: Montserrat" class="max-h-96 text-5xl font-bold mt-0 mb-6 text-center text-emerald-400 py-20 px-6">OUR TEAM</h1>
    </div> -->
    <div>
      <h1 style="font-family: Georgia" class="max-h-96 text-5xl font-bold mt-0 mb-6 text-center text-emerald-400 py-20 px-6">GWK.ly</h1>
      <div
        class="
          rounded-lg
          bg-gray-900
          w-full
          items-center
          lg:w-5/12
          mt-auto
          mb-20
          mx-auto
          xl:p-10
          lg:p-8
          relative
          flex
          justify-center
          lg:flex-row
          hover:shadow-md
          border border-emerald-400
        "
      >
        <section
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
        >
          <h1 class="text-3xl text-center font-bold">SHORT YOUR LINK</h1>
          <br/>
          <br/>
          <form id="new-todo-form" @submit.prevent="addTodo">
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
              type="text"
              required
              name="content"
              id="content"
              placeholder="Input Your Link"
              v-model="full"
            />
            <!-- <input
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
              type="text"
              required
              name="content"
              id="content"
              placeholder="Input Your Name"
              v-model="input_content2"
            /> -->

            <button
              class="w-full bg-green-700 rounded-lg"
              type="submit"
              value="SUBMIT"
            >
              GO
            </button>
          </form>
          <br/>
          <br/>
          <br/>
          <section class="todo-list">
            <h1 class="text-3xl text-center font-bold">YOUR SHORTEN LINK :</h1>
            <div class="list" id="todo-list">
              <br/>
              <div
                v-for="todo in lists"
                :class="`todo-item ${todo.done && 'done'}`"
                :key="todo"
              >
              <br/>
                <div class="todo-content text-green-400">
                  http://localhost:5173/direct/{{ todo.short }}
                </div>
                <div class="todo-content text-red-400">
                  {{ todo.full }}
                </div>
                <!-- <div class="todo-content">
                  <a href="http://localhost:5731/{{ todo.short }}">http://localhost:5731/{{todo.short}}</a>
                  <a href="http://localhost:5731/=@model{{ todo.short }}">http://localhost:5731/{{todo.short}}</a>
                </div> -->
                <br/>
                <div 
                  class="flex justify-center w-full bg-red-700 rounded-lg"
                  type="delete"
                  value="SUBMIT"
                >
                  <button class="delete" @click="removeTodo(todo)">
                    Delete
                  </button>
                </div>
                <br/>
                <div
                  class="flex justify-center w-full bg-yellow-500 rounded-lg"
                  type="delete"
                  value="SUBMIT"
                >
                  <button class="delete" @click="todo.edit=!todo.edit">
                    Edit
                  </button>
                </div>
                <br/>

                <div v-if="todo.edit">
                  <form id="new-todo-form" @submit.prevent="addTodo">
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
                      type="text"
                      required
                      name="content"
                      id="content"
                      placeholder="Input Your New Link"
                      v-model="new_real_link"
            />
            <!-- <input
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
              type="text"
              required
              name="content"
              id="content"
              placeholder="Input Your Name"
              v-model="input_content2"
            /> -->

                  <button @click="edit(new_real_link, todo.id)"
                  class="w-full bg-green-700 rounded-lg"
                  type="submit"
                  value="SUBMIT"
                  >
                  GO
                  </button>
                  </form>
                </div>

              <div 
              class="flex justify-center w-full text-emerald-400">
              <p>=================================================</p>
              </div>
            </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import { initializeApp } from "firebase/app";
import axios from "axios";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  updateDoc,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdIagc9GdlcuLxdEw-bEHuqD4sJ0sjGwA",
  authDomain: "final-project-34ef4.firebaseapp.com",
  projectId: "final-project-34ef4",
  storageBucket: "final-project-34ef4.appspot.com",
  messagingSenderId: "846988045629",
  appId: "1:846988045629:web:a19958fb0a945a1fb42954",
  measurementId: "G-T0397YQ14C",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export default {
  data() {
    return {
      lists: [],
      name: "goan",
      full: "",
      edit: false,
      new_real_link:"",
      // custom_path: "",
    };
  },
  methods: {
    async addTodo() {
      // String Randomize
      let r = (Math.random() + 1).toString(36).substring(7);
      try {
        await axios.post ("http://localhost:3000/shorts/",{
          random_link: r,
          full: this.full
        })
         
        // // await axios.post("http://localhost:3000/shorts/",
        // const newDoc = await addDoc(collection(db, "task"), {
        //   // id: "",
        //   real_link: this.real_link,
        //   random_link: r,
        //   // done: false
        // });
        // console.log(newDoc)
        // await updateDoc(doc(db, "task", newDoc.id), { id: newDoc.id })
        this.load();
      } catch (e) {
        console.log("Gagal menambahkan", e);
      }
    },

    signOut() {
      auth
        .signOut()
        .then(() => {
          console.log("Sign Out completed");
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },

    async removeTodo(todo) {
      const id = todo.id 
      await axios.delete("http://localhost:3000/shorts/" + id)
      // await deleteDoc(doc(db, "shorten_test", todo.id));
      this.load();
    },

    selected(slot) {
      this.categor = slot;
    },

    async updatedone(todo) {
      await updateDoc(doc(db, "shorten_test", todo.id), {
        done: !todo.done,
      });
    },
//==================================================================
    async edit(new_real_link, id) {
    
      try {
        await axios.put ("http://localhost:3000/edit",{
          full: new_real_link,
          id: id
        })
         
        // // await axios.post("http://localhost:3000/shorts/",
        // const newDoc = await addDoc(collection(db, "task"), {
        //   // id: "",
        //   real_link: this.real_link,
        //   random_link: r,
        //   // done: false
        // });
        // console.log(newDoc)
        // await updateDoc(doc(db, "task", newDoc.id), { id: newDoc.id })
        this.load();
      } catch (e) {
        console.log("Gagal mengedit", e);
      }
    },

    // async updateItem(id, customPath, realLink) {
    //             console.log(customPath)
    //             console.log(realLink)
    //             if (this.newCustomPath == '') {
    //                 this.newCustomPath = customPath.replace("http://sew.ey:5173/")
    //             }
    //             if (this.newRealLink == '') {
    //                 this.newRealLink = realLink
    //             }
    //             const res = await axios.post(iphost + "/api/update", {
    //                 newCustomPath: this.newCustomPath,
    //                 newRealLink: this.newRealLink,
    //                 id: id
    //             })
    //             this.links = [];
    //             this.getLinks()
    //             this.newCustomPath = ''
    //             this.newRealLink = ''
    //         },
    
    async load() {
      try {
        axios.get("http://localhost:3000/shorts").then((res) => {
          console.log(res.data);
          this.lists = res.data;
          console.log(this.lists);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.load();
  },
};
</script>

 