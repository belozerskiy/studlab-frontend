<template>
  <form>
    <div class="form-group required">
      <label class="control-label" for="phone">Телефон</label>
      <input 
        v-model="phone"
        v-mask="phoneMask" 
        type="text" 
        class="form-control" 
        id="phone" 
        name="phone"
        required="required"
        placeholder="+7(999)111-11-11"
      >
    </div>

    <div class="form-group">
      <label for="fullname">ФИО</label>
      <input 
        type="text" 
        class="form-control" 
        id="fullname"
        v-model="fullname" 
        placeholder="Сусанин Игорь Иванович"
      >
    </div>
    
  </form>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import { isFullname } from '@/validators';

export default {
  name: "PersonalInfoForm",
  data(){
    return {
      phone: "",
      phoneMask: "+7(###)###-##-##",
      fullname: "",
    }
  },
  validations(){
    return {
      fullname: {
        required,
        isFullname
      }
    }
  }
};
</script>

<style>
.form-group.required .control-label:after { 
   content:" *";
   color:red;
}
</style>
