<template>

<div class="navBar">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/skills">Skills</router-link>|
    <router-link to="/projects">Projects</router-link>|
    <router-link to="/resume">Resume</router-link>|
    <router-link to="/testimonials">Testimonials</router-link>|
    <router-link to="/contact">Contact</router-link>
  </div>
</div>
<router-view/>

</template>

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

div.navBar {
 justify-content: end;
}

</style>
