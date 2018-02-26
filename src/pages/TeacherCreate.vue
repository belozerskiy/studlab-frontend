<template>
  <stepper 
    :steps="steps"
    @stepper-done="done"
  >
  </stepper>
</template>

<script>
import StepOne from '@/components/StepOne';
import StepTwo from '@/components/StepTwo';
import Stepper from '@/components/Stepper';

export default {
  name: 'TeacherCreate',
  components: { Stepper },
  data(){
    return {
      steps: [
        { name: 'Регистрация', component: StepOne },
        { name: 'Основные данные', component: StepTwo },
        { name: 'Верификация', component: StepTwo },
      ]
    }
  },
  methods: {
    done() { console.log('Stepper has done all work...') }
  }
}
</script>

<style>
</style>
