import { createApp } from 'vue';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import VeeValidateRules from '@vee-validate/rules'; // 規則
import { localize, setLocale } from '@vee-validate/i18n';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(router);

// 把驗證套件規則全部載進來
Object.keys(VeeValidateRules).forEach((rule) => {
  defineRule(rule, VeeValidateRules[rule]);
});

configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});

setLocale('zh_TW');

// 註冊驗證元件
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
