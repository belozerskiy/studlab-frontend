<template>
  <div class="login panel panel-default">
    <div class="panel-heading">
      <h4>Вход в панель управления.</h4>
    </div>
    <div class="panel-body">
      <form>

        <div 
          :class="[
            'form-group', 'input-group', 
            { 'has-error': hasPhoneError }, 
            { 'has-success': hasPhoneSuccess }
          ]
        ">
          <span class="input-group-addon" id="phone">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </span>
          <input 
            v-model="phone"
            v-mask="phoneMask"
            class="form-control" 
            type="tel" 
            name="phone"
            aria-describedby="phone"
            placeholder="+7(999)111-11-11"
          >       
        </div>
        
        <div 
          :class="[
            'form-group', 'input-group',
            { 'has-error': hasPasswordError },
            { 'has-success': hasPasswordSuccess }
          ]"
        > 
          <span class="input-group-addon" id="password">
            <i class="fa fa-lock" aria-hidden="true"></i>
          </span>
          <input 
            v-model="password"
            class="form-control" 
            type="password" 
            name="password"
            aria-describedby="password"
            placeholder="******"
          >
        </div>

        <transition 
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div 
            v-if="hasPhoneError"
            class="alert alert-danger" 
            role="alert"
          >
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Ошибка:</span>
            <span v-if="hasPhoneRequiredError">
              Номер телефона обязателен для заполнения.
            </span>
            <span v-if="hasPhoneMinLengthError">
              Номер телефона должен быть динной 11 символов.
            </span>
          </div>
        </transition>
        
        <transition 
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div 
            v-if="hasPasswordError"
            class="alert alert-danger" 
            role="alert"
          >
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Ошибка:</span>
            <span v-if="hasNotPasswordRequired">
              Пароль обязателен для заполнения.
            </span>
            <span v-if="hasPasswordMinLengthError">
              Минимальная длинна пароля 6 символов.
            </span>
          </div>
        </transition>
      </form>
    </div>
    
    <div class="panel-footer">
      <div class="pull-right">
        <button class="btn btn-primary">
          Войти
          <i class="fa fa-sign-in"></i>
        </button>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators'; 

export default {
  name: 'LoginForm',
  data(){
    return {
      isPhoneTouched: false,
      isPasswordTouched: false,
      phone: "",
      phoneMask: "+7(###)###-##-##",
      password: "",
      remember: false
    }
  },
  computed: {
    hasPhoneError(){
      return (!this.$v.phone.required || !this.$v.phone.minLength) 
        && this.isPhoneTouched;
    },
    hasPhoneRequiredError(){
      return !this.$v.phone.required && 
        this.isPhoneTouched
    },
    hasPhoneMinLengthError(){
      return !this.$v.phone.minLength && 
        this.isPhoneTouched
    },
    hasPhoneSuccess(){
      return this.$v.phone.required && this.$v.phone.minLength 
        && this.isPhoneTouched;
    },
    hasPasswordError(){
      return (!this.$v.password.required || !this.$v.password.minLength) 
        && this.isPasswordTouched;
    },
    hasPasswordSuccess(){
      return this.$v.password.required && this.$v.password.minLength 
        && this.isPasswordTouched;
    },
    hasNotPasswordRequired(){
      return !this.$v.password.required && 
        this.isPasswordTouched
    },
    hasPasswordMinLengthError(){
      return !this.$v.password.minLength && 
        this.isPasswordTouched
    },
  },
  validations: {
    phone: {
      required,
      minLength: minLength(16)
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  watch: {
    phone(){
      this.isPhoneTouched = true;
    },
    password(){
      this.isPasswordTouched = true;
    }
  }
}
</script>

<style scoped>
  .login {
    width: 320px;
  }
  .login .fa {
    width: 14px;
  }
</style>
