<!-- src/views/Login.vue -->
<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field v-model="email" label="Email" required></v-text-field>
      <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/login', {
          email: this.email,
          password: this.password,
        });
        console.log('Respuesta del servidor:', response);
        // Maneja el éxito del login
        this.$router.push('/home');
      } catch (error) {
        // Maneja el error del login
        console.error(error);
      }
    },
  },
};
</script>
