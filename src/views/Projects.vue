<template>
  <h1>Projects</h1>
<div class="card-container">
<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="card"  v-for="project of projects" :key="project"> 
  <div class="col">
    <div class="card h-100">
      <img src="{{project.img}}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{project.title}}</h5>
    <p class="card-text">{{project.details}}</p>
      <button class="button type3">
    View Site
  </button>
   <button class="button type1">
   View Github
  </button>
  </div>
    </div>
  </div>
  </div>
  </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            projects:[]
        }
    },
    mounted(){
        fetch('http://localhost:3000/projects')
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
    .project h2{
        background: white;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .project h2:hover{
        background: grey;
    }
    .project a{
        text-decoration: none;
    }




.button {
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
}
.button.type1 {
  color: #566473;
}
.button.type1.type1::after, .button.type1.type1::before {
  content: "";
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: 2px solid;
  transition: all 0.6s ease;
  border-radius: 2px;
}
.button.type1.type1::after {
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #566473;
  border-right-color: #566473;
}
.button.type1.type1::before {
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: #566473;
  border-left-color: #566473;
}
.button.type1.type1:hover:after, .button.type1.type1:hover:before {
  width: 100%;
  height: 100%;
}

.button.type3 {
  color: #435a6b;
}
.button.type3.type3::after, .button.type3.type3::before {
  content: "";
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: 2px solid;
  transition: all 0.6s ease;
  border-radius: 2px;
}
.button.type3.type3::after {
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #435a6b;
  border-right-color: #435a6b;
}
.button.type3.type3::before {
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: #435a6b;
  border-left-color: #435a6b;
}
.button.type3.type3:hover:after, .button.type3.type3:hover:before {
  border-bottom-color: #435a6b;
  border-right-color: #435a6b;
  border-top-color: #435a6b;
  border-left-color: #435a6b;
  width: 100%;
  height: 100%;
}
</style>