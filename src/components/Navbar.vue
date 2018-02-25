<template>
  <div class="navbar navbar-inverse">
    <div class="container-fluid">
      <ul class="nav navbar-nav">
        <li v-for="{ path, name } in nav" :key="path" :class="{ active: path == '/teachers' }">
          <router-link :to="path">{{ name }}</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li :class="['dropdown', { open } ]" 
          @click="dropdown"
        >
        <a class="dropdown-toggle" 
          data-toggle="dropdown" 
          role="button" 
          aria-haspopup="true" 
          aria-expanded="true"
        >
          Белозерский М.А. 
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#">Профиль</a></li>
          <li role="separator" class="divider"></li>
          <li>
            <router-link to="/login">
              Выйти
              <i class="fa fa-sign-out"></i>
            </router-link>
          </li>
        </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {
      open: false,
      nav: [
        { name: 'Ученики', path: '/students' },
        { name: 'Учителя', path: '/teachers' },
        { name: 'Занятия', path: '/lessons' },
        { name: 'Тесты', path: '/tests' }
      ],
    }
  },
  methods: {
    dropdown(){
      this.open = !this.open;
    }
  }
}
</script>

<style scoped>
  .navbar-right {
    margin-right: 0px;
  }
</style>
