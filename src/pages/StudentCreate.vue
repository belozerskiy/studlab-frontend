<template>
  <stepper :steps="steps"></stepper>
</template>

<script>
import Stepper from '@/components/Reusable/Stepper'; 
import PersonalInfo from '@/components/StudentSteps/PersonalInfo'; 
import PersonalCourse from '@/components/StudentSteps/PersonalCourse';
import PersonalSchedule from '@/components/StudentSteps/PersonalSchedule';

export default {
  name: 'StudentCreate',
  components: { Stepper },
  data(){
    return {
      steps: [
        { name: 'Основная информация', component: PersonalInfo },
        { name: 'Индивидуальная программа', component: PersonalCourse },
        { name: 'Расписание', component: PersonalSchedule }
      ]
    }
  },
}
</script>
