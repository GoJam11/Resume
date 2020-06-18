import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueI18n from "vue-i18n";
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/font-awesome.min.css";

import R from "./components/Resume.vue";

//Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [{ path: "/", component: R }],
});

const i18n = new VueI18n({
  locale: "cn",
  messages: {
    cn: {
      name: "孙果",
      s: "的简历",
      intention: {
        t: "求职意向",
        c: "Web前端工程师",
      },
      email: "邮箱：",
      tel: "电话：",
      wechat: "微信：",
      contact: "联系方式",
    },
    en: {
      name: "Sun Guo",
      s: "",

      intention: {
        t: "Intention",
        c: "Software Develop Engineer",
      },
      email: "E-mail: ",
      tel: "Tel: (+86)",
      wechat: "Wechat: ",
      contact: "Contact",
    },
  },
});

new Vue({
  render: (h) => h(App),
  router,
  i18n,
}).$mount("#app");
