<template>
  <h1>Sign In</h1>
  <form>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <p v-if="errMsg">{{errMsg}}</p>
    <button @click="register">Submit</button>
    <button @click="signInWithGoogle">Sign In With Google</button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router'
const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter()

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Succ. reg.", data)
        router.push('/feed')
      })
      .catch((error) => {
        console.log(error.code)
        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email";
            break;
          case "auth/user-not-found":
            errMsg.value = "No account with that email was found";
            break;
          case "auth/wrong-password":
            errMsg.value = "Incorrect password";
            break
          default:
            errMsg.value = "Email or password was incorrect";
            break
        }
      })
}
const signInWithGoogle = () => {

}



</script>

<style scoped>

</style>