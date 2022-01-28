<template>
  <h1>Home Page</h1>
   <div class="position-absolute top-50 start-50 translate-middle">
     <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" >
     <h1 class="display-1">UNATHI QOLWENI</h1>
     <h4>Aspiring Web Developer based in Cape Town , Western Cape willing to relocate</h4>
    

   </div>
   <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  components: {Footer},
 
}
</script>

<style >
  img{
    border-radius: 150px;
    height: 300px;
    width: 300px;
  }
  h1{
    font-weight: bolder;
  }
</style>
