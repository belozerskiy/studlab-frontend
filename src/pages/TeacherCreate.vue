<template>
  <stepper
    :steps="steps"
  > 
    <step :number="1" active>
      <h1>Test</h1>
    </step>
    <step :number="2">
      <h1>Test 2</h1>
    </step>
  </stepper>
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
