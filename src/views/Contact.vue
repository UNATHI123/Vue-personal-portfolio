<template > 
<div class="container">
    <section id="contact" class="contact">
             <div class="section-title">
               <h2>Contact</h2>
              </div>
         <div class="info">
             
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Cape Town , Western Cape</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>uqolweni@gmal.com</p>
              </div>
        
              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+277 8004 135</p>
               </div>
        </div>
         
        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
     <form id="contact" @submit.prevent="handleSubmit" class="vue-email-form">
		<div class="row">
        <div class="form-group col-md-6">
            <label for="name">Your Name</label>
            <input type="text" name="name" class="form-control" id="name" v-model="text">
        </div>

          <div class="form-group col-md-6">
            <label for="name">Your Email</label>
            <input type="email" class="form-control" name="email" id="email" v-model="email">
          </div>
   
            <div class="form-group"> 
                  <label for="name">Telephone</label>
                  <input type="text" class="form-control" name="tel" id="tel"  v-model="tel" >
            </div>

            <div class="form-group">
                  <label for="name">Message</label>
                  <textarea class="form-control" name="message" rows="10" v-model="textarea" ></textarea>
            </div>
	          <button name="submit" type="submit" id="contact-submit">Submit Message</button>
	
  	</div>
</form>
    </div>

 </section>
  </div>
   
   
</template>
<script>
export default {
 data(){
	 return{
		 text:"",
		 email:"",
		 tel:"",
		 textarea:""
		
	 }
 } ,
 methods:{
	handleSubmit(){
   console.log(this.text,this.email,this.tel,this.textarea),

    fetch('http://localhost:7000/contact', {
  method: 'POST',
  body: JSON.stringify({
   text:  this.text,
   email: this.email,
   tel: this.tel,
   textarea: this.textarea
   }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => alert(json.msg))
  .catch((e)=>alert(e.msg));

		
	 },
 }  
}

</script>

<style  scoped>

.contact {
  padding-bottom: 130px;
}
.contact .info {
  padding: 30px;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}
.contact .info i {
  font-size: 20px;
  color: #149ddd;
  float: left;
  width: 44px;
  height: 44px;
  background: #dff3fc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #050d18;
}
.contact .info p {
  padding: 0 0 10px 60px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #173b6c;
}
.contact .info .email p {
  padding-top: 5px;
}
.contact .info .social-links {
  padding-left: 60px;
}
.contact .info .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  margin-right: 10px;
}
.contact .info .social-links a:hover {
  background: #149ddd;
  color: #fff;
}
.contact .info .email:hover i, .contact .info .address:hover i, .contact .info .phone:hover i {
  background: #149ddd;
  color: #fff;
}
.contact .vue-email-form {
  width: 100%;
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}
.contact .vue-email-form .form-group {
  padding-bottom: 8px;
}

.contact .vue-email-form .form-group {
  margin-bottom: 15px;
}
.contact .php-email-form label {
  padding-bottom: 8px;
}
.contact .vue-email-form input, .contact .vue-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.contact .vue-email-form input {
  height: 44px;
}
.contact .php-email-form textarea {
  padding: 10px 15px;
}
.contact .vue-email-form button[type=submit] {
  background: #149ddd;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
}
.contact .vue-email-form button[type=submit]:hover {
  background: #37b3ed;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>