<template>
  <div class="wizard" data-initialize="wizard" id="myWizard">
    <div class="steps-container">
      <ul class="steps">
        <li 
          v-for="({ name }, index) in steps" 
          :key="index"
          :data-step="index"
          :data-name="name"
          :class="{ active: currentStep == index }"
        >
          <span class="badge">{{ index + 1 }}</span>{{ name }}
          <span class="chevron"></span>
        </li>
      </ul>
    </div>
    <div class="actions">
      <button 
        type="button" 
        :class="['btn', 'btn-default', 'btn-prev', { 'disabled': !isPrevBtnActive }]"
        @click="prev"
      >
        <span class="glyphicon glyphicon-arrow-left"></span>
        Назад
      </button>
      <button 
        type="button" 
        :class="['btn','btn-primary','btn-next', { 'disabled': !isNextBtnActive }]" 
        data-last="Complete"
        @click="next"
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
  computed: {
    lengthOfSteps(){
      return this.steps.length - 1;
    }
  },
  mounted(){
    this.currentStep = 0;
    this.currentComponent = this.steps[this.currentStep].component; 
  },
  methods: {
    next(){
      
      if(this.currentStep < this.lengthOfSteps){
        this.currentStep += 1;
        this.currentComponent = this.steps[this.currentStep].component;
      } 

      if(this.currentStep > 0 && this.isPrevBtnActive === false){
        this.isPrevBtnActive = true;
      }

      if(this.currentStep === this.lengthOfSteps) {
        this.isNextBtnActive = false;
      }
    },
    prev(){
      if(this.currentStep === this.lengthOfSteps && this.isNextBtnActive === false){ 
        this.isNextBtnActive = true; 
      }

      if(this.currentStep > 0){
        this.currentStep -= 1;
        this.currentComponent = this.steps[this.currentStep].component;
      }
      
      if(this.currentStep === 0) {
        this.isPrevBtnActive = false;
      }
    }
  },
}
</script>

<style>
  .fuelux .wizard>.actions {
    z-index: 999;
  }
</style>
