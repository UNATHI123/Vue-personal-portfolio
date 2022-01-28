<template >
    <div>
       <div class="timeline">
   <div class="container container-left">
       <div class="image" style="background-image:url('https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
       <div class="content">
         <span>September 2021 - Current</span>
<h2>Life Choices Coding Academy</h2>
<p> 
   </p>
       </div>
   </div>
   <div class="container container-right">
       <div class="image" style="background-image:url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"></div>
       <div class="content">
         <span>2019 - 2021 Waitress</span>
<h2> Cubana Havanna Lounge </h2>
<p>
   </p>
       </div>
   </div>
   <div class="container container-left">
       <div class="image" style="background-image:url('https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"></div>
       <div class="content">
         <span>2020- 2021</span>
<h2>Volunteering as Sunday School Teacher</h2>
<p>
   </p>
       </div>
  </div>
   <div class="container container-right">
       <div class="image" style="background-image:url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"></div>
       <div class="content">
         <span>2015 - 2018</span>
<h2>Zwelodumo Senior Secondary School</h2>
<p>
   </p>
       </div>
   </div>
     
</div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans:wght@400;700&display=swap');

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   background-color: #EDF2F7;
   font-family: 'Noto Sans', sans-serif;
   font-size: 1em;
   color: #4A5568;
}

.timeline {
   position: relative;
   max-width: 1200px; /* Restrict the width on large screens */
   margin: 0 auto; /* Center the content */
   padding: 30px;
}

/* This creates the actual line */
.timeline::after {
   content: '';
   position: absolute;
   width: 6px;
   background-color: white;
   top: 0;
   bottom: 0;
   left: 50%;
   margin-left: -3px;
   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.container {
   position: relative;
   width: 50%;
}

.container-left {
  left: 0;
  text-align: right;
  /* Moves the events away from the timeline */
  padding-right: 70px;
}

.container-right {
  left: 50%;
  text-align: left;
  /* Moves the events away from the timeline */
  padding-left: 70px;
}

/* These set up the initial boxes */
.content {
   padding: 30px;
   background-color: white;
   position: relative;
   border-radius: 6px;
   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* This sets up the pointy sections connecting the timeline and events */
.container .content::before {
   content: " ";
   height: 0;
   position: absolute;
   top: 35px;
   width: 0;
   z-index: 1;
   border: medium solid white;
}

/*  The next two sections position the pointy connectors - check out CSS triangles using borders on CSS-Tricks for more info */
.container-left .content::before {
   right: -10px;
   border-width: 10px 0 10px 10px;
   border-color: transparent transparent transparent white;
}

.container-right .content::before {
   left: -10px;
   border-width: 10px 10px 10px 0;
   border-color: transparent white transparent transparent;
}

.image {
   width:90px;
   height:90px;
   background-size:cover;
   background-position:center;
   border:solid 5px #ffffff;
   border-radius:50px;
   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Set up the positioning for the images */

.image {
  position: absolute;
  z-index: 2;
}

.container-left .image {
   right: 0;
   margin-right: -45px;
}

.container-right .image {
   left: 0;
   margin-left: -45px;
}

/* Styles for the text boxes */
.content span {
   color: #2C7A7B;
   font-size: 1.1em;
   font-weight: bold;
}

.content h2 {
   font-size: 1.8em;
   padding-top: 5px;
}

.content p {
   line-height: 1.6;
   padding-top: 5px;
}

@media screen and (max-width: 767px) {
   /* Add styles to change the behaviour for screens smaller than 767px width */
  .timeline::after {
   left: 65px;
}

.container {
   width: 100%;
   padding-left: 100px;
   padding-right: 0px;
margin-top: 30px;
}

.container-right {
   left: 0%;
}

.container-left {
   text-align: left;
}

/* Top margins are added to all containers except the first */
.container:first-of-type {
   margin-top: 0px;
}

.container .image {
   left:-10px;
   top: 0px;
   margin-left: 0;
   margin-right: 0;
}

.container-left .content::before {
   left: -10px;
   right: auto;
   border-width: 10px 10px 10px 0;
   border-color: transparent white transparent transparent;
}
}

@media screen and (max-width: 480px) {
   .container {
       padding-left: 0px;
       padding-top: 105px;
     z-index: 3;
   }
  
  .container .content::before {
   left: 25px;
   top: -10px;
   border: medium solid white;
   border-width: 0 10px 10px 10px;
   border-color: transparent transparent white transparent;
}
}  
</style>