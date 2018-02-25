<template>
  <stepper :steps="steps"></stepper>
</template>

<script>
import StepOne from '@/components/StepOne';
import StepTwo from '@/components/StepTwo';
import Stepper from '@/components/Stepper';

export default {
  name: 'TeacherCreate',
  data(){
    return {
      steps: [
        { number: 1, name: 'First Step', component: StepOne },
        { number: 2, name: 'Second Step', component: StepTwo },
      ]
    }
  },
  components: { Stepper },
}
</script>

<style>
</style>
