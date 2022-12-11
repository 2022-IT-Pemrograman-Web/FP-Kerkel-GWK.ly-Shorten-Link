<script>
// import db from '../../../backend/firestore.js';
// const db = require("../../../backend/firestore.js")
import { initializeApp } from "firebase/app";
import axios from "axios";


export default {
  name: 'Direct',
  props: {
  },
  mounted(){
    // db.collection('shorten_test').where('short', '==', this.$route.params.short).onSnapshot((full) => {
    //   if(full.empty){
    //     this.$route.push({name: '404'});
    //   } else {
    //     window.location.replace(full.docs[0].data().full);
    //   }
    // })
    try {
        axios.get("http://localhost:3000/shorts/"+this.$route.params.short).then((res) => {
          console.log(res.data);
          window.location.replace(res.data[0].full)
          
        });
      } catch (err) {
        console.log(err);
      }
  }
}
</script>
<template>
  
</template>

