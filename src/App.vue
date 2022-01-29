<template>
<div id="nav">
 <ul class="nav justify-content-end">
  <li class="nav-item">
     <router-link to="/">Home</router-link> |
      </li>
  <li class="nav-item">
     <router-link to="/about">About</router-link>|
  </li>
  <li class="nav-item">
  <router-link to="/skills">Skills</router-link>|
  </li>
  <li class="nav-item">
  <router-link to="/projects">Projects</router-link>|
  </li>

  <li class="nav-item">
  <router-link to="/resume">Resume</router-link>|
  </li>
  <li class="nav-item">
 <router-link to="/testimonials">Testimonials</router-link>||
  </li>
  <li class="nav-item">
  <router-link to="/contact">Contact</router-link>
  </li>
</ul>     
    </div>
<router-view/>

</template>
<script>
export default {
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
  margin-left: 700px;
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  

}

#nav a.router-link-exact-active {
  color:crimson;

}



</style>
