<template>
    <div id="nav" class="sticky-top">
  <div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">UNATHI QOLWENI</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/"><i class="bi bi-house-heart"></i>Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/about"><i class="bi bi-person-fill"></i>About</router-link>
        </li>
        <li class="nav-item">
        <router-link to="/projects"><i class="bi bi-award-fill"></i>Projects</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/resume"><i class="bi bi-book-fill"></i>Resume</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/testimonials"><i class="bi bi-building"></i>Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact"><i class="bi bi-person-lines-fill"></i>Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
<router-view/>


</div>

</template>


<script>
export default {
  
}
</script>


<style scoped>



@media only screen and (min-width: 992px) {
  #nav {
  padding: 30px;
  /* margin-left:200px ; */
  width: 100%;
  height: 100%;
  align-content: center;
  align-items: center;
  padding: 20px;
 background-color: teal
}

#nav a {
font-weight: bold;
color: black;
font-size:larger ;
text-decoration: none;
padding: 10px;
/* border-radius: 4px; */
margin-left: 40px;


}

#nav a.router-link-exact-active {
color: white;
background:crimson;
align-items: center;
}

}


</style>
