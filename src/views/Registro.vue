<template>
  <div class="sign-up">
    <p>Crie uma nova conta</p>
    <input
      type="text"
      placeholder="Email"
      v-model="email"
    >
    <br>
    <input
      type="password"
      placeholder="Senha"
      v-model="senha"
    >
    <br>
    <button @click="signUp">Registrar</button>
    <span>
      ou retorne ao
      <router-link to="/login"> Login.</router-link>
    </span>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      senha: '',
    };
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
        () => {
          this.$router.replace('home'),
            alert('Sua conta foi cadastrata com sucesso!')
        },
        (err) => {
          alert('Aconteceu algo inesperado. ' + err.message)
        }
      );
    },
  },
};
</script>
