<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/feed">Feed</router-link>
    <router-link to="/register-user">Register</router-link>
    <router-link to="/sign-in">Login</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
  <router-view />
</template>

<script setup>
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useRouter} from "vue-router";

const router = useRouter()
const isLoggedIn = ref(false)

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bilbo&display=swap');

  body {
    background: black;
    color: snow;
    font-family: 'Bilbo', cursive;
    font-size: 20px;
  }

  button {
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  a:hover {
    background: snow;
    color: black;
  }
  button:hover {
    background: green;
    color: snow;
  }

  input {
    font-family: 'Bilbo', cursive;
    font-size: 20px;
    padding: 5px;
    border-radius: 15px;
    border: 5px solid #2d2a2a;
  }

  input:focus {
    outline: none;
  }
  nav {
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background: #2d2a2a;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  nav > a {
    background: green;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.5s ease-out;
    text-transform: uppercase;
    font-family: 'Bilbo', cursive;
    color: snow;
  }

  h1 {
    text-align: center;
  }
  form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  form > * {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 15px;
    font-family: 'Bilbo', cursive;
    text-transform: uppercase;
    text-align: center;
  }

</style>