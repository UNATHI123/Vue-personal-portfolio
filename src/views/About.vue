<template>    
<div class="about-me container">
<div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="../assets/Img/unathi.jpg" class="img-fluid" alt="Unathi1-1" height="8000px" width="800px">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Programming&amp;web <i class="bi bi-code-slash"></i></h3>
            <p class="fst-italic">
              I am an insipring web developer.My passion for computer & coding was introduced when I was attending a career exhibition that's when I  became super immersed with Technology development in this particular industry. </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>29 July 2000</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>languages:</strong> IsiXhosa & English <span></span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0780048135</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span> Western Cape,Cape Town</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Highest Grade:</strong> <span>NSC Grade12</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>uqolweni@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>Currently I'm a student that aspires to be a great full-stack developer.My greatest aspiration is not only to learn, but to open door for other female coders such as me in this Male dominated industry,I am eager to learn, always keen on inventing my self into becoming the best within my capabilities, Social active individual that takes initiative in always improvising where needed.
          </p>
          </div>
         </div>
         </div>
        <section>
           <div class="d-flex justify-content-center">
            <h2>Skills<i class="bi bi-activity"></i></h2>
           </div>


           <div class="container-fluid">
            <ul class="bar-graph"> 
  <li>
    <p>HTML 5</p>
    <div class="bar-wrap"><span class="bar-fill" style="width: 90%;"></span></div>
  </li> 
  <li>
    <p>CSS</p>
    <div class="bar-wrap"><span class="bar-fill" style="width: 70%;"></span></div>
  </li> 
  <li>
    <p>GIT</p>
    <div class="bar-wrap"><span class="bar-fill"  style="width: 60%;"></span></div>
  </li> 
  <li>
    <p>MYSQL</p>
    <div class="bar-wrap"><span class="bar-fill" style="width: 80%;"></span></div>
  </li> 

  <li>
    <p>BOOTSTRAP</p>
    <div class="bar-wrap"><span class="bar-fill" style="width: 90%;"></span></div>
  </li> 
<li>
    <p>JAVASCRPT</p>
    <div class="bar-wrap"><span class="bar-fill" style="width: 50%;"></span></div>
  </li> 
<li>
    <p>VUE.JS</p>
    <div class="bar-wrap"><span class="bar-fill" style="width: 40%;"></span></div>
  </li> 
</ul>

</div>
          </section>

  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
 components:{Footer} 
}
</script>
<style scoped>
@keyframes bar-fill {
  0% {
    width: 0;
  }
}
@-webkit-keyframes bar-fill {
  0% {
    width: 0;
  }
}
@-moz-keyframes bar-fill {
  0% {
    width: 0;
  }
}
@-o-keyframes bar-fill {
  0% {
    width: 0;
  }
}
.bar-graph {
  list-style: none;
  margin: 50px 0px auto;
}

.bar-wrap {
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  -ms-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background-color: #2c3e50(0, 155, 202, 0.2);
  border: 1px solid #2c3e50(0, 155, 202, 0.8);
  margin-bottom: 10px;
}

.bar-fill {
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  -ms-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  -moz-animation: bar-fill 1s;
  -webkit-animation: bar-fill 1s;
  -ms-animation: bar-fill 1s;
  animation: bar-fill 1s;
  background-color: #2c3e50;
  display: block;
  height: 15px;
  width: 0px;
}

p {
  font-family: 'Helvetica';
  font-size: 16px;
  font-weight: 100;
  text-transform: uppercase;
}

</style>
