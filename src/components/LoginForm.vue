<template>
  <form @submit.prevent="login">
    <input type="text" v-model="username" placeholder="Username or Email">
    <input type="password" v-model="password" placeholder="Password">
    <button type="submit">Login</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      emailAdd: '',
      userPwd: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
 
      setTimeout(() => {
        this.$router.push('/'); // Redirect to homepage after successful login
      }, 1000);
    }
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
