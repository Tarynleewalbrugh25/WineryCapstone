<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <button type="button" @click="navigateToSignup">Sign Up</button>
  </div>
</template>

<script>
export default {
  methods:{
    navigateToSignup() {
    this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
</style>

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    
    navigateToSignup() {
      this.$router.push('/signup');
    }
  }
};