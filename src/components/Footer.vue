<template>
    <div class="footer-container justify-content-center">
      <div class="container-fluid" id="footer">
        <div class="row align-items-center">
          <div class="col">
            <p class="text-white text-center">Bella Italia &copy; {{ currentYear }}</p>
            <ul class="list-inline social-icons text-center">
              <li class="list-inline-item">
                <a href="https://www.facebook.com/tarylee.walbrugh.7" class="text-white"><i class="bi bi-facebook"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/nathaliewillemse21" class="text-white"><i class="bi bi-github"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/tarynleewalbrugh/" class="text-white"><i class="bi bi-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
  </script>

<style src="@/assets/css/style.css">
</style>
