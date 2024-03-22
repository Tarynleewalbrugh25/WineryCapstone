<template>
  <div>
    <NavBar/>
    <main class="container-fluid">
      <router-view/>
    </main>
    <Footer/>
    <Spinner v-if="loading" /> <!-- Add the Spinner component here -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

import Spinner from './components/Spinner.vue';

export default {
  components: {
    NavBar,
    Footer,
    Spinner
  },
  data() {
    return {
      loading: false
    };
  }
};
</script>
<style src="@/assets/css/style.css">


</style>