<template>
  <div class="container m-auto">
    <form action="" class="login-form" @submit.prevent="login">
      <label for="account">帳號</label>
      <input type="email" id="account" v-model="data.username" />

      <label for="password">密碼</label>
      <input type="password" id="password" v-model="data.password" />

      <br />

      <input type="submit" value="登入" id="btn_login" />
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import {
  useRouter,
} from 'vue-router';
import {
  reactive,
} from '@vue/reactivity';
import {
  onMounted,
} from '@vue/runtime-core';

export default {

  setup() {
    const data = reactive({
      username: '',
      password: '',
    });

    const router = useRouter();
    const login = () => {
      if (data.username !== '' && data.password !== '') {
        axios.post(`${process.env.VUE_APP_APIPATH}/admin/signin`, data)
          .then((res) => {
            if (res.data.success) {
              const {
                token,
                expired,
              } = res.data;
              document.cookie = `henToken=${token};expires=${new Date(expired)}`;
              router.push({
                name: 'Admin',
              });
            } else {
              alert(`${res.data.message}`);
            }
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        alert('帳號密碼為必填');
      }
    };
      // 已經登入就不能再登入一次
    const init = () => {
      const token = document.cookie.replace(
        // eslint-disable-next-line no-useless-escape
        /(?:(?:^|.*;\s*)henToken\s*\=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      axios.defaults.headers.common.Authorization = token;
      axios.post(`${process.env.VUE_APP_APIPATH}/api/user/check`).then((res) => {
        if (res.data.success) {
          router.push({
            name: 'admin-product-list',
          });
        } else {
          // alert(res.data.message);
          router.push({
            name: 'Login',
          });
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    onMounted(() => {
      init();
    });

    return {
      data,
      login,
    };
  },

};

</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

</style>
