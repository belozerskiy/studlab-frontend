<template>
  <login-layout>
      <login-form />
  </login-layout>
</template>

<script>
import LoginForm from '@/components/LoginForm';
import LoginLayout from '@/layout/LoginLayout';

export default {
  name: 'Login',
  components: { LoginForm, LoginLayout }
}
</script>

<style>
</style>
