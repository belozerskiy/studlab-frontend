<template>
  <form>

    <div class="form-group">
      <label for="phone">Телефон</label>
      <input 
        v-model="phone"
        v-mask="phoneMask" 
        type="text" 
        class="form-control" 
        id="parent-phone" 
        placeholder="+7(999)111-11-11"
      >
    </div>
    
    <div class="form-group">
      <label for="fio">ФИО</label>
      <input 
        v-model="fullname"
        type="text" 
        class="form-control" 
        id="parent-fullname" 
        placeholder="Сусанин Иван Васильевич"
      >
    </div>
    
    <pre>{{ $v }}</pre>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { isFullname } from '@/validators';

export default {
  name: 'ParentInfoForm',
  data(){
    return {
      phone: "",
      phoneMask: "+7(###)###-##-##",
      fullname: "",
    }
  },
  validations(){
    return {
      fullname: { required, isFullname },
      phone: { required }
    }
  }
}
</script>
