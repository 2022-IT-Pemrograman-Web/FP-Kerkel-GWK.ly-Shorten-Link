<template>
	<div class="
      
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
      border border-green-800
    ">
		<section class="
				w-full
				focus:border-green-800 focus:ring-1 focus:ring-green-800 focus
				outline-none
				text-white
				placehorder
				rounded-lg
				pl-4
				py-2
				mb-4
				">
        <h1 class="text-3xl text-center font-bold">SHORT YOUR LINK</h1>
        <br>
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
        required name="content"
        id="content"
				placeholder="Input Your Link"
				v-model="input_content"
				/>
          
          <button
				class="w-full bg-green-700 rounded-lg"
				type="submit"
				value="SUBMIT"
				>
				GO
			</button>
    </form>
    <br>
      <section class="todo-list">
        <h1 class="text-3xl text-center font-bold">YOUR CUSTOM LINK :</h1>
        <div class="list" id="todo-list">
  
          <div v-for="todo in lists" :class="`todo-item ${todo.done && 'done'}`" :key="todo">
            <div class="todo-content">
              {{todo.content}}
            </div>
  
            <div class="flex justify-center w-full bg-red-700 rounded-lg"
				type="delete"
				value="SUBMIT">
              <button class="delete" @click="removeTodo(todo)">Delete</button>
            </div>
          </div>
  
        </div>
      </section>
		</section>


	</div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import { initializeApp } from "firebase/app"
import { getFirestore, collection, updateDoc, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdIagc9GdlcuLxdEw-bEHuqD4sJ0sjGwA",
  authDomain: "final-project-34ef4.firebaseapp.com",
  projectId: "final-project-34ef4",
  storageBucket: "final-project-34ef4.appspot.com",
  messagingSenderId: "846988045629",
  appId: "1:846988045629:web:a19958fb0a945a1fb42954",
  measurementId: "G-T0397YQ14C"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default{
  data() {
    return {
      lists: [],
	  name: "goan",
	  categor: "",
	  input_content:""

    }
  },
  methods: {
    async addTodo() {
      try {
        const newDoc = await addDoc(collection(db, "task"),{
          id: "",
          content: this.input_content,
          category: this.categor,
          done: false
        })
        await updateDoc(doc(db, "task", newDoc.id), {id: newDoc.id})
        this.load()
      }
      catch(e) {
        console.log("Gagal menambahkan", e)
      }
    },

	async removeTodo(todo) {
		await deleteDoc(doc(db,"task", todo.id))
		this.load()
	},

	selected(slot) {
		this.categor=slot
	},

	async updatedone(todo){
		await updateDoc(doc(db, "task", todo.id), {
			done: !todo.done
		} 
	)
	},
	async load(){
      try {
        const querySnapshot = await getDocs(collection(db, "task"))
        this.lists = []
        querySnapshot.forEach((doc) => {
          this.lists.push(doc.data())
        })
      }
      catch(err){
        console.log(err.message)
      }
    },
},
	mounted () {
	this.load()
	}
}

</script>

