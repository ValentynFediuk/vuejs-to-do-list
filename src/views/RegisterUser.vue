<template>
<h1>Create an Account</h1>
  <form>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="register">Submit</button>
    <button @click="signInWithGoogle">Sign In With Google</button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import {useRouter} from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    console.log("Succ. reg.", data)
    router.push('/feed')
  })
  .catch((error) => {
    console.log(error.code)
    alert(error.message)
  })
}
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user)
      router.push("/feed")
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<style scoped>

</style>