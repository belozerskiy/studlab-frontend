<template>
  <div class="panel panel-default">
    <div v-if="withHeader" class="panel-heading">
      <slot name="header"></slot>
    </div>
    <div class="panel-body">
      <slot name="body"></slot>
    </div>
    <div v-if="withFooter" class="panel-footer">
      <slot name="footer"></slot> 
    </div>
  </div>
</template>
<script>
export default {
  name: 'Panel',
  props: {
    'with-header': { type: Boolean, default: false },
    'with-footer': { type: Boolean, default: false },
  },
}
</script>
<style>
</style>
