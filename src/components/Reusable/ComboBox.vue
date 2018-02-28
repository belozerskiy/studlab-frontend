<template>
<div 
  :class="
  [
    'form-group', 
    'input-group', 
    'input-append', 
    'dropdown', 
    'combobox', 
    { required: options.required }
  ]"
  data-initialize="combobox"
>
  <label 
    v-if="isLabel" 
    class="control-label" 
    :for="options.name">{{ options.label }}:
  </label>
  <input 
    type="text" 
    class="form-control" 
    :id="options.name" 
    :ref="comboBoxName"
    @onresize="onResize"
  >
  <div 
    :class="[
      'input-group-btn', 
      { 'add-padding': isLabel }, 
      { 'open': show }
    ]"
  >
    <button 
      type="button" 
      class="btn btn-default dropdown-toggle" 
      data-toggle="dropdown"
      :aria-expanded="show"
      @click="onClick"
    >
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu dropdown-menu-right" 
      :style="inputSize"
    >
      <li 
        v-for="{ id, title } in options.list" 
        :key="id"
        :class="{ 'selected': isSelected(id) }"
        @click="selectItem(id, title)"
      >
        <a>{{ title }}</a>
      </li>   
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'ComboBox',
  props: { 
    options: { 
      type: Object, 
      props: { 
        required: { type: Boolean, default: false }, 
        label: { type: String, default: ""}, 
        for: { type: String, default: ""}
      }
    }
  },
  data(){
    return {
      inputSize: { width: 0 },
      show: false,
      selected: "",
    }
  },
  mounted(){
    const comboBox = this.$refs[this.comboBoxName];
    this.onResize(comboBox);

    window.addEventListener(
      'resize', 
      () => this.onResize(comboBox), 
    true);
  },
  computed: {
    comboBoxName(){
      return `combo-box-${this.options.name}`
    },
    isLabel(){
      return this.options.label !== undefined && this.options.label.length > 0;
    },
  },
  methods: {
    onResize({ clientWidth }){
      this.inputSize = { width: clientWidth + 35 + 'px' }
    },
    onClick(){
      this.show = !this.show;
    },
    selectItem(id, title){
      this.$refs[this.comboBoxName].value = title;
      this.selected = id;
      this.onClick();
    },
    isSelected(id){
      return id === this.selected;
    }
  },
}
</script>

<style>
  .add-padding {
    padding-top: 25px;
  }
</style>

