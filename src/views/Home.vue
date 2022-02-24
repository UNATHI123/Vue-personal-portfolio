<template>
 <header id="header">
    <div class="container">
      <h1>UNATHI QOLWENI</h1>
     <h2>I'm a passionate <span>web-developer</span> from Cape Town</h2>
    
      <div class="social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
</header>
</template>

<script>
export default {

 
}
</script>

<style scoped>
template{
  background-image: url("https://i.postimg.cc/wB81mzys/Snapchat-871611848.jpg");
  background-size: cover;
  opacity: 0.5;
}
img{
 display: block;
  margin-left: auto;
  margin-right: auto;
}

#header {
  transition: ease-in-out 0.3s;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 997;
  overflow-y: auto;
 
}
#header * {
  transition: ease-in-out 0.3s;
}
#header h1 {
  font-size: 48px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  
}
#header h1 a, #header h1 a:hover {
  color:black;
  line-height: 1;
  display: inline-block;
}
#header h2 {
  font-size: 24px;
  margin-top: 20px;
  color:black;
}
#header h2 span {
  color:black;
  border-bottom: 2px solid crimson;
  padding-bottom: 6px;
}

#header .social-links {
  margin-top: 40px;
  display: flex;
}
#header .social-links a {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  color:black;
  line-height: 1;
  margin-right: 8px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
#header .social-links a:hover {
  background: crimson;
}
@media (max-width: 992px) {
  #header h1 {
    font-size: 36px;
  }
  #header h2 {
    font-size: 20px;
    line-height: 30px;
  }
  #header .social-links {
    margin-top: 15px;
  }
  #header .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

/* Header Top */
#header.header-top {
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  

}
#header.header-top .social-links, #header.header-top h2 {
  display: none;
}
#header.header-top h1 {
  margin-right: auto;
  font-size: 36px;
}
#header.header-top .container {
  display: flex;
  align-items: center;
}
#header.header-top .navbar {
  margin: 0;
}
@media (max-width: 768px) {
  #header.header-top {
    height: 60px;
    margin-top: auto;
  }
  #header.header-top h1 {
    font-size: 26px;
  }
  #header {
 top: -130px;
}

}

img{
  width: 300px;
  height: 300px;


}

  

</style>
