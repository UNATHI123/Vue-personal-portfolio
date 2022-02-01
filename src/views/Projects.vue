<template >


  <div>
  <h1>{{title}}</h1>
  </div>
  <div class="fixed-bottom">
    <Footer />
  </div>


</template>
<script>
import Footer from '../components/Footer'
export default {
  components:{Footer},
  data(){
    return{
    
    projects:[
        {"id":1,"title":"Point of Sales Project", "details":"Vue Js", "url":""} ,  
        {"id":2,"title":"Vue Calculator", "details":"Vue Js", "url":""},
        {"id":3,"title":"Reaction Game", "details":"Vue Js", "url":""},
        {"id":4,"title":"Array Crud", "details":"Vue Js", "url":""},
        {"id":5,"title":"Mock Portfolio", "details":"Bootsrap", "url":""},
        {"id":6,"title":"Flip Cards", "details":"HTML/CSS", "url":""}
       
    ]

    }
  },
  mounted() {
    // fetch('http://localhost:3000/projects')
    // .then(res => res.json())
    // .then(data => this.projects = data)
    // .catch(err => console.log(err.message))

  },
}
</script>
<style>
  
</style>