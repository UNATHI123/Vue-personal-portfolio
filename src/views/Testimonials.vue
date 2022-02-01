<template >
  
  <div class="container-fluid"> 
    <h2>Testimonials</h2>
<!-- horizontal -->
<div class="flip">
  <div class="front" style="background-image: url(https://i.postimg.cc/Rh8MTSLM/Zanele2-min.jpg)">
       
       <h1 class="text-shadow">Zanele Moni</h1>
    </div>
    <div class="back">
       <h2>Collegue</h2>
       <p>I met Unathi from life choices academy, she is a smart, hard working individual who is always keen to learn. Unathi is a very interesting person to work with, She is always happy and give positive energy to the team.</p>
    </div>
</div>
<div class="flip">
    <div class="front" style="background-image: url(https://i.postimg.cc/3wB0FG4Y/Kyle1-min.jpg)">
       <h1 class="text-shadow">Kyle Mc'Bryant</h1>
    </div>
    <div class="back">
       <h2>Collegue</h2>
       <p>Unathi pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process she is responsive, and willing to work through issues as they arise. It’s obvious she takes tremendous pride in her work, and I wouldn’t hesitate to recommend or work with her again.</p>
    </div>
</div>
<div class="flip">
    <div class="front" style="background-image: url(https://i.postimg.cc/kgSpGJVx/kago-min.jpg)">
       <h1 class="text-shadow">Kago Pooe</h1>
    </div>
    <div class="back">
       <h2>Collegue</h2>
       <p>Unathi does a remarkable job of quickly identifying errors in a project, and can easily brainstorm ideas on how it can be improved. She is really amazing.</p>
    </div>
</div>

<br>
<br>

<!-- vertical -->
  

<div class="flip flip-vertical">
    <div class="front" style="background-image: url(https://i.postimg.cc/CLFjpZmX/alex.jpg)">
       <h1 class="text-shadow">Alex Sexwale</h1>
    </div>
    <div class="back">
       <h2>Lecturer</h2>
       <p>Unathi doesn't talk much she is always focused on her work,and she is hard working as well as determined</p>
    </div>
</div>
<div class="flip flip-vertical">
    <div class="front" style="background-image: url(https://i.postimg.cc/Hx0Jkymf/Bongani2-min.jpg)">
       <h1 class="text-shadow">Bongani Nomangola</h1>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Unathi is a vision-focused individual that is determined to learn more and gain more experience from her surroundings.She is dedicated to given assignments and strives to be the best that she can be.
          </p>
    </div>
</div>
<div class="flip flip-vertical">
   <div class="front" style="background-image: url(https://i.postimg.cc/Mpk8drVm/Amaarah2-min.jpg)">
       
       <h1 class="text-shadow">Amaarah January</h1>
    </div>
    <div class="back">
       <h2>Collegue</h2>
       <p>Unathi is a hardworking, patient individual. She works extremely well with others and is a natural born leader. Her personality is so unique and she will be a great asset to have in any work environment.</p>
    </div>
</div>


  </div>
<div class="fixed-bottom">
       <Footer />
    </div>
</template>
<script>

import Footer from '../components/Footer'
export default {
    components:{ Footer}
}
</script>
<style  scoped>
 .container-fluid{
   margin-bottom: 100px;
   margin-top: 80px;
 }   
h1 {
  font-size: 2.2em;
color: white;
}

.flip {
  position: relative;
}
.flip > .front,
.flip > .back {
  display: block;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
}
.flip > .front {
  transform: rotateY(0deg);
}
.flip > .back {
  position: absolute;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg);
}
.flip:hover > .front {
  transform: rotateY(180deg);
}
.flip:hover > .back {
  opacity: 1;
  transform: rotateY(0deg);
}
.flip.flip-vertical > .back {
  transform: rotateX(-180deg);
}
.flip.flip-vertical:hover > .front {
  transform: rotateX(180deg);
}
.flip.flip-vertical:hover > .back {
  transform: rotateX(0deg);
}

.flip {
  position: relative;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 1em;
  width: 400px;
}
.flip > .front,
.flip > .back {
  display: block;
  color: crimson;
  width: inherit;
  background-size: cover !important;
  background-position: center !important;
  height: 220px;
  padding: 1em 2em;
  background:grey;
  border-radius: 10px;
}
.flip > .front p,
.flip > .back p {
  font-size: 0.9125rem;
  line-height: 160%;
  color:black;
}

.text-shadow {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}
</style>