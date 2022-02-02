<template >

  <div class="footer" >
    <div class="copyright">
    <p> Copyright 2022 - Made with love by Unathi </p>
    </div>
    <div class="social">
        <a href="mailto:uqolweni@gmail.com" class="support">Contact Me</a>
        <a href="#" class="face">f</a>
        <a href="#" class="tweet">t</a>
        <a href="#" class="linked">in</a>
     </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped >
    @import url(https://fonts.googleapis.com/css?family=Raleway);
/* Colors */

.footer {
  width: 100%;
  display: inline-block;
  height: 70px;
  background-color:#2c3e50;
  position: fixed;
  bottom: 0;
  left: 0;

 


 
}
.footer .copyright {
  width: 50%;
  float: left;

}
@media (max-width: 600px) {
  footer .copyright {
    width: 100%;
  }
}
 .copyright p {
  padding-left: 10%;
  color: white;
  font-size: 0.7em;
  line-height: 70px;
  text-transform: capitalize;
  letter-spacing: 1px;
}
@media (max-width: 600px) {
 .copyright p {
    text-align: center;
    padding: 0;
  }
}
.social {
  width: 25%;
  float: right;
}
@media (max-width: 600px) {
 .social {
    width: 100%;
  }
}
 .social a {
  float: left;
  line-height: 70px;
  text-decoration: none;
  color: white;
  text-align: center;
  font-weight: bold;
  -moz-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
}
 .social a:hover {
  background-color: #222;
  -moz-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
}

.linked {
  background-color: #1E83AE;
  font-size: 1.2em;
  width: 20%;
}

.face {
  background-color: #3D5B94;
  font-size: 1.2em;
  width: 20%;
}

.tweet {
  background-color: #3DACDD;
  font-size: 1.2em;
  width: 20%;
}

.support {
  background-color: #6dcd9a;
  font-size: 0.8em;
  width: 40%;
}

</style>