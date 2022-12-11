<script>
// import db from '../../../backend/firestore.js';
// const db = require("../../../backend/firestore.js")

export default {
  name: 'Direct',
  props: {
  },
  mounted(){
    db.collection('shorten_test').where('short', '==', this.$route.params.short).onSnapshot((full) => {
      if(full.empty){
        this.$router.push({name: '404'});
      } else {
        window.location.replace(full.docs[0].data().url);
      }
    })
  }
}
</script>

