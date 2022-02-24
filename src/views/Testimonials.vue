<template>
<div class="testimonial">
      <div class="card" v-for="testimonial of testimonials" :key="testimonial.id">
        <div class="layer"></div>
          <div class="content">
          <p>“{{testimonial.text}}”</p>
        <div class="image">
          <img :src="testimonial.img">
        </div>
        <div class="details">
          <h2>
            {{testimonial.name}}
            <br>
            <span>{{testimonial.title}}</span>
          </h2>
        </div>
      </div></div>
    </div>
</template>

<script>
export default {
    components:{},
    data(){
      return{
        testimonials:null
      }
    },
     mounted(){
        fetch('https://unathi-api.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => this.testimonials = data)
        .catch(err => console.log(err.message))
    }
}
</script>
<style  scoped>
 
.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
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