import Vue from "vue";
import Router from "vue-router";
import Login from "@/pages/Login";
import Main from "@/pages/Main";
import Students from "@/pages/Students";
import Teachers from "@/pages/Teachers";
import TeacherCreate from "@/pages/TeacherCreate";
import StudentCreate from "@/pages/StudentCreate";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/login", name: "Login", component: Login, default: true },
    {
      path: "/",
      name: "Main",
      component: Main,
      children: [
        { path: "/students", name: "Students", component: Students },
        {
          path: "/student/create",
          name: "StudentCreate",
          component: StudentCreate
        },
        { path: "/teachers", name: "Teachers", component: Teachers },
        {
          path: "teacher/create",
          name: TeacherCreate,
          component: TeacherCreate
        },
        { path: "/settings", name: "Settings", component: Students },
        { path: "/stats", name: "Stats", component: Students },
        { path: "*", redirect: "/login" }
      ]
    }
  ]
});
