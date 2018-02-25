<template>
  <div class="wizard" data-initialize="wizard" id="myWizard">
    <div class="steps-container">
      <ul class="steps">
        <li 
          v-for="{ name, number } in steps" 
          :key="number"
          :data-step="number"
          :data-name="name"
          :class="{ active: currentStep == number }"
        >
          <span class="badge">{{ number }}</span>{{ name }}
          <span class="chevron"></span>
        </li>
      </ul>
    </div>
    <div class="actions">
      <button 
        type="button" 
        class="btn btn-default btn-prev"
      >
        <span class="glyphicon glyphicon-arrow-left"></span>
        Назад
      </button>
      <button 
        type="button" 
        class="btn btn-primary btn-next" 
        data-last="Complete"
      >
        Вперед
        <span class="glyphicon glyphicon-arrow-right"></span>
      </button>
    </div>
    <div class="step-content">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    steps: { type: Array },
  },
  data(){
    return {
      currentStep: "",
      currentComponent: "",
      isNextBtnActive: true,
      isPrevBtnActive: false,
    }
  },
  mounted(){
    this.currentStep = this.steps[0].number;
    this.currentComponent = this.steps[0].component; 
  },
  methods: {
    next(){},
    prev(){}
  },
}
</script>

<style>
  .fuelux .wizard>.actions {
    z-index: 999;
  }
</style>
