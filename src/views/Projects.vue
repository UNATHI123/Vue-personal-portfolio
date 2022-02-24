<template>
<div class="container">
 <div class="section-title">
        <h2>Projects</h2>
        <p>my work</p>
      </div>
<div class="card-container">
<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="card"  v-for="project of projects" :key="project.id" > 
  <div class="col">
    <div class="card h-100">
      <img :src="project.img" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{project.title}}</h5>
    <p class="card-text">{{project.details}}</p>
      <a class="button type3" :href="project.live" target="_blank">View Site</a>
    <a class="button type1" :href="project.github" target="_blank">View Github</a>
    
  </div>
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
        fetch('https://unathi-api.herokuapp.com/projects')
        .then(res => res.json())
        .then(data => {
          this.projects = data
          console.log(data)
          
          })
        .catch(err => console.log(err.message))


        
    }
}
</script>

<style scoped>
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
  color: crimson;
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
  border-bottom-color: yellow;
  border-right-color: yellow;
}
.button.type1.type1::before {
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: yellow;
  border-left-color: yellow;
}
.button.type1.type1:hover:after, .button.type1.type1:hover:before {
  width: 100%;
  height: 100%;
}

.button.type3 {
  color: crimson;
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
  border-bottom-color:crimson;
  border-right-color: crimson;
}
.button.type3.type3::before {
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: crimson;
  border-left-color: crimson;
}
.button.type3.type3:hover:after, .button.type3.type3:hover:before {
  border-bottom-color:crimson;
  border-right-color: crimso;
  border-top-color: crimson;
  border-left-color:crimson;
  width: 100%;
  height: 100%;
}


.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: crimson;
  font-family: "Poppins", sans-serif;
}
.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #4ceb95;
  margin: 4px 10px;
}
.section-title p {
  margin: 0;
  margin: -15px 0 15px 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color:black;
}
@media only screen and (min-width: 992px) {
  .container{
    margin-top:40px; 
  }
}
</style>