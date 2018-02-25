import Vue from "vue";
import Vuelidate from "vuelidate";
import VMask from "v-mask";
import App from "./App";
import router from "./router";

import "../node_modules/animate.css/animate.min.css";

Vue.config.productionTip = false;

Vue.use(VMask);
Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
