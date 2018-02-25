<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <teacher-bar></teacher-bar>
        </div>
        <div class="panel-body">
          <teacher-list></teacher-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherBar from '@/components/TeacherBar';
import TeacherList from '@/components/TeacherList';

export default {
  name: 'Teachers',
  components: { TeacherList, TeacherBar }
}
</script>

<style scoped>
  .container-fluid {
    width: 100%;
    height: 100%;
  }
</style>
