<template>
  <form>
    <div class="form-group">
      <label for="phone">Телефон</label>
      <input 
        v-model="phone"
        v-mask="phoneMask" 
        type="text" 
        class="form-control" 
        id="phone" 
        placeholder="+7(999)111-11-11"
      >
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">ФИО</label>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
    </div>
    
    <div class="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" id="exampleInputFile">
      <p class="help-block">Example block-level help text here.</p>
    </div>

    <div class="checkbox">
      <label>
        <input type="checkbox"> Check me out
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ParentInfoForm',
  data(){
    return {
      phone: "",
      phoneMask: "+7(###)###-##-##"
    }
  }
}
</script>
