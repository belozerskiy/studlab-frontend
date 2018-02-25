<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  body {
    background: #ddd;
  }
  #app {
    position: absolute;
    height: 100%;
    width: 100%;  
  }
</style>
