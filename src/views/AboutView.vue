<template>
  <div class="container">
    <div>
      <h2 id="userHeading" class="display-4 mt-4 mb-4 hed1">About us</h2>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="custom-img-container">
          <img class="img-fluid custom-img" src="https://i.ibb.co/jWq7VKS/wine.jpg" alt="wine">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h3 class="text">Our Story</h3>
        <p class="distext-white-50">At Bella Italia, we are passionate about delivering the finest selection of Italian wines to connoisseurs and enthusiasts worldwide. Our journey began with a vision to showcase the rich heritage, exquisite flavors, and unparalleled craftsmanship of Italian wine making.
       </p>
      </div>
      <div class="col-md-6">
        <h3 class="text">Our Mission </h3>
        <p class="distext-white-50">Our mission is to curate an exceptional collection of Italian wines that embodies the essence of Italy's diverse terroirs, traditional wine making techniques, and innovative approaches. We strive to provide our customers with a memorable experience, offering them access to exclusive labels, limited editions, and hidden gems from renowned wine regions across Italy.
        </p>
      </div>
      <div class="col-md-6">
        <h3 class="text">Why Choose Us? </h3>
        <p class="distext-white-50"> **Authenticity:** We source our wines directly from esteemed vineyards and trusted producers, ensuring authenticity and quality with every bottle.
  
         - **Expert Curation:** Our team of sommeliers and wine experts meticulously selects each wine, focusing on authenticity, terroir expression, and exceptional quality.
         
         - **Exceptional Service:** We are committed to providing personalized service and expert advice, guiding our customers through their wine journey and helping them discover the perfect bottle for every occasion.
         
         - **Community Engagement:** We believe in fostering a vibrant community of wine lovers and enthusiasts, sharing our passion for Italian wines through educational events, tastings, and exclusive experiences.
        </p>
      </div>
      <div class="col-md-6">
        <h3 class="text">Our Promise </h3>
        <p class="distext-white-50">At  Bella Italia , we are dedicated to offering an unparalleled selection of Italian wines, unparalleled customer service, and an unforgettable wine experience. Join us on a journey through Italy's vineyards, and let us elevate your wine experience to new heights.
       </p>
      </div>
    </div>
    <div class="wine-glass"></div>
    <div class="glass-stem"></div>
    <div class="glass-base"></div>
  </div>
</template>

<style scoped>
.wine-glass {
  background-image: url('https://github.com/fullstack2002/wine-glass/blob/main/images/wine.png?raw=true');
  width: 50px;
  height: 50px;
  border: 3px solid rgba(190, 190, 190, 0.5);
  border-radius: 0 0 50% 50%;
  animation: fill 3s infinite;
  background-repeat: repeat-x;
}
@keyframes fill {
  0% {
    background-position: 0px 50px;
  }
  20% {
    background-position: -5px 45px;
  }
  40% {
    background-position: -50px 30px;
  }
  80% {
    background-position: -100px 3px;
  }
  100% {
    background-position: 0px 50px;
  }
}
.glass-stem {
  width: 5px;
  height: 40px;
  background: brown;
  margin-left: 0.6cm;
}
.glass-base {
  width: 38px;
  height: 10px;
  border-radius: 50%;
  background: brown;
  margin-left: 0.1cm;
}
.custom-img-container {
  height: 50vh; /* Set height to 50% of the viewport height */
}
.custom-img {
  max-height: 100%; /* Ensure image is responsive and fills its container */
  width: auto; /* Maintain aspect ratio */
}
.distext-white-50 {
  color: black; /* Change text color */
}
@media (max-width: 767px) {
  .custom-img-container {
    height: 30vh; /* Adjust height for smaller screens */
  }
}
.distext-white-50 {
  /* margin-top: 110px; */
  color: black; /* Change text color */
  background-color: rgba(255, 255, 255, 0.5); /* Set background color with transparency */
  padding: 20px; /* Add padding for better readability */ /* Adjust margin top as needed */
}
.custom-img {
  max-width: 100%; /* Set maximum width to 200 pixels */
  max-height: 100%; /* Ensure image is responsive and fills its container */
  width: auto; /* Maintain aspect ratio */
}
</style>
