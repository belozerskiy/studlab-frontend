<template>
  <form>
    
    <div class="form-group required">
      <label class="control-label" for="phone">Телефон:</label>
      <input 
        v-model="phone"
        v-mask="phoneMask" 
        type="text" 
        class="form-control" 
        id="phone" 
        name="phone"
        placeholder="+7(999)111-11-11"
      >
    </div>

    <div class="form-group required">
      <label class="control-label" for="password">Пароль:</label>
      <input 
        :type="showPassword ? 'text' : 'password'" 
        class="form-control" 
        id="password"
        v-model="password" 
        placeholder="Сусанин Игорь Иванович"
      >
    </div>

    <div class="form-group required">
      <label class="control-label" for="fullname">ФИО:</label>
      <input 
        type="text" 
        class="form-control" 
        id="fullname"
        v-model="fullname" 
        placeholder="Сусанин Игорь Иванович"
      >
    </div>

    <div class="form-group required">
      <label class="control-label" for="email">Электронная почта:</label>
      <input 
        type="text" 
        class="form-control" 
        id="email"
        v-model="email" 
        placeholder="igorIvanonich96@mail.ru"
      >
    </div>
    
    <div class="form-group required">
      <label class="control-label" for="target">Цель:</label>
      <input 
        type="text" 
        class="form-control" 
        id="target"
        v-model="target" 
        placeholder="Сусанин Игорь Иванович"
      >
    </div>

    <div class="form-group required">
      <label class="control-label" for="class">Класс:</label>
      <input 
        type="text" 
        class="form-control" 
        id="class"
        v-model="classes" 
        placeholder="Сусанин Игорь Иванович"
      >
    </div>
    
    <combo-box :options="options"></combo-box>

    <pre>{{ $v }}</pre>
  </form>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import { isFullname } from '@/validators';
import ComboBox from '@/components/Reusable/ComboBox';

export default {
  name: "PersonalInfoForm",
  components: { ComboBox },
  data(){
    return {
      options: { 
        label: 'Образование', 
        name: 'education',
        list: [
          { id: 'middle', title: 'Среднее'}, 
          { id: 'middle-profile', title: 'Среднее профильное' },
          { id: 'incomplete-higher', title: 'Неоконченное высшее' }, 
          { id: 'complete-higher', title: 'Оконченное высшее' }
        ]
      },
      phone: "",
      phoneMask: "+7(###)###-##-##",
      fullname: "",
      password: "",
      showPassword: false,
      email: "",
      classes: "",
      target: ""
    }
  },
  validations(){
    return {
      fullname: {
        required,
        isFullname
      }
    }
  },
};
</script>

<style>
.form-group.required .control-label:after { 
   content:" *";
   color:red;
}
</style>
