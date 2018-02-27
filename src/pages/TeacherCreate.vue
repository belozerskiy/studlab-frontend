<template>
  <stepper 
    :steps="steps"
    @stepper-done="done"
  >
  </stepper>
</template>

<script>
import Stepper from '@/components/Reusable/Stepper';

export default {
  name: 'TeacherCreate',
  components: { Stepper },
  data(){
    return {
      steps: []
    }
  },
  methods: {
    done() { console.log('Stepper has done all work...') }
  }
}
</script>

<style>
</style>
