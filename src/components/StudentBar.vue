<template>
  <div class="teacher-bar">
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-success" @click="$emit('add-student')">
        <i class="fa fa-user-plus"></i>
      </button>
      <button type="button" class="btn btn-danger">
        <i class="fa fa-user-times"></i>
      </button>
    </div>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Поиск...">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Поиск</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentBar'
}
</script>

<style scoped>
  .teacher-bar {
    display: flex;
  }
  div:nth-child(1) {
    display: flex;  
  }
  div:nth-child(2) {
    display: flex;
    width: 100%;
    margin-left: 10px;
  }
  .input-group-btn {
    width: auto !important;
  }
</style>
