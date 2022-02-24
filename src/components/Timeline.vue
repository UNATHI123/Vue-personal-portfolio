<template >
  <div id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        

        <div class="row">
          <div class="col-lg-6">
          
            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>STUDENT</h4>
              <h5>2021 - Present</h5>
              <p><em>Life Choices Coding Academy</em></p>
              <p>MODULES :</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>GIT</li>
                <li>MYSQL</li>
                <li>Javascript</li>
                <li>Node.JS</li>
                <li>Vue.JS</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>NATIONAL SENIOR CERTIFICATE</h4>
              <h5>2015 - 2018</h5>
              <p><em>Zwelodumo Senior Secondary School</em></p>
              <p> Major subjects were:</p>
              <ul>
                <li>Mathematics</li>
                <li>Physical Sciences</li>
                <li>Life Sciences</li>
                <li>Geography</li>
              </ul>
            </div>
            
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Waitress & Cashier</h4>
              <h5>2019 - 2020</h5>
              <p><em>Cubana   Latino Cafe </em></p>
              <p>Duties :</p>
              <ul>
                <li>Collecting ,Delivering of Food & Beverages</li>
                <li>Handling Payment Transactions Cash and Electronical</li>
                <li>Cleaning work section & Setting up tables</li>
                <li>Marketing products on promotions</li>
             </ul>
            </div>
            <div class="resume-item">
              <h4>Tutor/Assistant</h4>
              <h5>2019 -Present </h5>
              <p><em>Enriching Minds GPFM </em></p>
              <ul> 
                <li>Life Sciences & Geography</li>
                <li>Grade 10 - 12</li>
                <li>2 hours per day on School  Holiday</li>
               
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="d-flex justify-content-center">

      <h3>REFERENCES</h3>
    </div>
   
</template>
<script>
export default {
   
}
</script>
<style scoped>

.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color:white;
}
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid white;
  position: relative;
}
.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: white;
  margin-bottom: 10px;
}
.resume .resume-item h5 {
  font-size: 16px;
  background: #f7f8f9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}
.resume .resume-item ul {
  padding-left: 20px;
}
.resume .resume-item ul li {
  padding-bottom: 10px;
}
.resume .resume-item:last-child {
  padding-bottom: 0;
}
.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #2c3e50;
}

</style>