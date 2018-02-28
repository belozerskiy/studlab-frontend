<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <student-bar 
            @add-student="createStudent"
            @del-student="removeStudent"
          ></student-bar>
        </div>
        <div class="panel-body">
          <student-list></student-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudentBar from '@/components/StudentBar';
import StudentList from '@/components/StudentList';

export default {
  name: 'Students',
  components: { StudentList, StudentBar },
  methods: {
    createStudent(){
      this.$router.push('student/create');
    }
  }
}
</script>

<style scoped>
  .container-fluid {
    width: 100%;
    height: 100%;
  }
</style>
