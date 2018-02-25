<template>
  <div class="main">
    <div class="header">
      <slot name="navbar"></slot>    
    </div>
    <div class="container-fluid">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainLayout'
}
</script>
<style>
.main {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
}
.main .header {
  margin-bottom: 15px;
}
.container-fluid {
  width: 100%;
  height: 100%;
}
</style>