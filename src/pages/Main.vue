<template>
  <main-layout>
    <navbar slot="navbar"></navbar>
    <router-view slot="content"></router-view>
  </main-layout>
</template>

<script>
import Navbar from '@/components/Navbar'
import MainLayout from '@/layout/MainLayout'

export default {
  name: 'Main',
  components: { MainLayout, Navbar }
}
</script>

<style>
  .navbar {
    margin-bottom: 0px;
    border-radius: 0px;
  }
</style>
