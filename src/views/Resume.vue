<template><div class="container">
 <div class="section-title">
        <h2>Resume</h2>
        <p>Education & Experiance</p>
      </div>
    <div>
        <Timeline />
    </div>
    <div class="container-fluid">
 
    <div class="row">
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Life Choices Coding Academy</h6>
                    <h2 class="text-right"><span>021 696 4157</span></h2>
                    <p class="m-b-0"><span class="f-right">lifechoices.co.za</span></p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Cubana Havanna Lounge</h6>
                    <h2 class="text-right"><span>021 421 1109</span></h2>
                    <p class="m-b-0">Website<span class="f-right">cubana.co.za</span></p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Volunteering</h6>
                    <h2 class="text-right"><span> 073 668 8835</span></h2>
                    <p class="m-b-0">Email<span class="f-right">sandicube@gmail.com</span></p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Zwelodumo S.S.S</h6>
                    <h2 class="text-right"><span>475389952</span></h2>
                    <p class="m-b-0">Location<span class="f-right">Eastern Cape </span></p>
                </div>
            </div>
        </div>
	</div>
</div>
          </div>
    <div class="fixed-bottom">
        <Footer /> 
    </div>
</template>
<script>
import Timeline from '../components/Timeline.vue'

export default {
  components: { Timeline },

}
</script>
<style scoped>
.order-card {
    color:black;
}

.bg-c-blue {
    background: linear-gradient(45deg,#2c3e50,#73b4ff);
}

.bg-c-green {
    background: linear-gradient(45deg,#4aa561b4,#59e0c5);
}

.bg-c-yellow {
    background: linear-gradient(45deg,#FFB649,#ffcb20);
}

.bg-c-pink {
    background: linear-gradient(45deg,#FF5380,#ff862a);
}


.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    border: none;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.card .card-block {
    padding: 25px;
}

.order-card i {
    font-size: 26px;
}

.f-left {
    float: left;
}

.f-right {
    float: right;
}
.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  font-family: "Poppins", sans-serif;
}
.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: crimson;
  margin: 4px 10px;
  color: #fff;
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
@media only screen and (min-width: 992px) {
  .container{
    margin-top:40px; 
  }
}  
</style>