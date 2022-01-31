<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../assets/Img/unathi.jpg" class="img-fluid rounded-start" alt="unathi">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">UNATHI QOLWENI</h5>
        <p class="card-text"> </p>
        <p><em>Hello, there I am an insipring web developer.My passion for computer & coding was introduced when I was attending a career exhibition that's when I became super immersed with Technology development in this particular industry.  </em></p>
      </div>
    </div>
  </div>
</div>
    </div>
  <div class="container">
  <div class="row">
    <div class="col">

    <span>HTML 5</span>
     <div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
</div><br>
<div class="progress">
  <span>CSS</span>
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div><br>
<span>GIT</span>
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </div>
    <span>MYSQL</span>
    <div class="col">
  <div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div><br>
<span>JavaScript</span>
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div><br>
<span>Bootsrap</span>
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </div>
  </div>
  </div> 
  <Footer />
</template>
<style>
p{
  justify-content: end;
}
</style>

<script>
import Footer from '../components/Footer.vue'
export default {
 components:{Footer} 
}
</script>
