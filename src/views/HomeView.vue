<template>
  <div class="home-container">
    <div class="content">
      <h1>Welcome to Bella Italia</h1>
      <p>Innventory made easy</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust as needed to fit your content */
  background-image: url('https://i.ibb.co/Wzm2Xwd/wineyard.jpg')
  
}

.content {
  text-align: center;
  font-family: "Playfair Display", serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: italic;
}

h1 {
  font-size: 2.5rem; /* Adjust font size */
  margin-bottom: 20px; /* Add spacing between elements */
}

p {
  font-size: 1.2rem; /* Adjust font size */
}
</style>

