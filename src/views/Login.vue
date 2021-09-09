<template>
  <div class="login">
    <Form @submit="login">
      <Label for-id="emailInput">Введите Email</Label>
      <Input id="emailInput" v-model="email"/>
      <Label for-id="passwordInput">Введите пароль</Label>
      <Input id="passwordInput" type="password" v-model="password"/>
      <SubmitButton :is-active="isActive">Войти</SubmitButton>
    </Form>
  </div>
</template>

<script>
import Input from "@/components/Typography/Form/Input";
import Form from "@/components/Typography/Form/Form";
import Label from "@/components/Typography/Form/Label";
import SubmitButton from "@/components/Typography/Form/SubmitButton";
export default {
  name: "Login",
  components: {SubmitButton, Label, Form, Input},
  data(){
    return{
      email: "",
      password: ""
    }
  },
  computed:{
    isActive: function (){
      return !!this.email && !!this.password
    }
  },
  methods: {
    login: async function () {
      await this.$store.dispatch('login', {email: this.email, password: this.password})
      await this.$router.push('/')
    },
    sendR: async function () {
      await this.$store.dispatch('register', {email: "vahnin13@gmail.com", password: "qwerty123456789", name: "Anton"})
    }
  }
}
</script>

<style scoped>

</style>
