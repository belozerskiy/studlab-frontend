<template>
  <div class="login container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CenterContainer'
}
</script>
<style scoped>
.login.container {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

