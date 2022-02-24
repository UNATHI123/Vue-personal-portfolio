<template>    
<div class="container">
      <div class="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>

       <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="../assets/Img/unathi.jpg" class="img-fluid" alt="Unathi1-1" height="300px" width="300px">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer </h3>
            <p class="fw-bolder">
              I am an insipring web developer. My passion for computer & coding was introduced when I was attending a career exhibition that's when I  became super immersed with Technology development in this particular industry. </p>
            <div class="row">
              <div class="col-lg-6">
                <ul class="list">
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>29 July 2000</span></li><br>
                  <li><i class="bi bi-chevron-right"></i> <strong>languages:</strong> IsiXhosa & English <span></span></li><br>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+27780048135</span></li><br>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul class="list">
                   <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>uqolweni@gmail.com</span></li><br>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li><br>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span> Western Cape,Cape Town</span></li><br>

                </ul>
              </div>
            </div>
            <p class="fw-bolder">Currently I'm a student that aspires to be a great full-stack developer.My greatest aspiration is not only to learn, but to open door for other female coders such as me in this Male dominated industry,I am eager to learn, always keen on inventing my self into becoming the best within my capabilities, Social active individual that takes initiative in always improvising where needed.
          </p>
          </div>
         </div>
         </div>
       <section id="skills" class="skills section-bg">
           <div class="d-flex justify-content-center">
            <h2>Skills</h2>
           </div>
<!-- SKILLLS -->

         <div class="container-fluid">
            <div class="row skills-content">
              <div class="col-lg-6" data-aos="fade-up">
                 <div class="progress">
              <span class="skill">HTML <i class="val">Proficient</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 90%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">CSS <i class="val">Competent</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 70%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">MYSQL <i class="val">Competent</i></span>
              <div class="progress-bar-wrap">
          <div class="progress-bar bg-danger" role="progressbar" style="width: 60%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

  <div class="progress">
              <span class="skill">JavaScript <i class="val">Competent</i></span>
              <div class="progress-bar-wrap">
          <div class="progress-bar bg-danger" role="progressbar" style="width: 60%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div class="progress">
              <span class="skill">GIT  <i class="val">Proficient</i></span>
              <div class="progress-bar-wrap">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Bootsrap <i class="val">Proficient</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Vue.Js <i class="val">Advanced Beginner</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 50%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

  <div class="progress">
              <span class="skill">Node.Js <i class="val">Advanced Beginner</i></span>
              <div class="progress-bar-wrap">
          <div class="progress-bar bg-danger" role="progressbar" style="width: 60%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
            </div>
        </div>
</section>
 
  <Footer />
</template>

<script>

export default {
  
}
</script>
<style scoped>
*{
  color: white;
}
.skills .progress {
  height: 60px;
  display: block;
  background: none;
  border-radius: 0;
}
.skills .progress .skill {
  padding: 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color:white;
}
.skills .progress .skill .val {
  float: right;
  font-style: normal;
}
.skills .progress-bar-wrap {
  background: #dce8f8;
  height: 10px;
}
.skills .progress-bar {
  width: 1px;
  height: 10px;
  transition: 0.9s;
  background-color: #149ddd;
}
@media only screen and (min-width: 992px) {
  .container{
    margin-top:40px; 
  }
}
 ul.list {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}
.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color:Crimson;
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
  color:white;
}
</style>
