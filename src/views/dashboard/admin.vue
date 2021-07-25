<template>
    <div class="container m-auto">
        後台
        <router-link :to="{name:'admin-product-list'}" class="btn btn-primary m-1">產品列表</router-link>
        <router-link :to="{name:'admin-order-list'}" class="btn btn-primary m-1">訂單列表</router-link>
        <router-link :to="{name:'admin-coupon-list'}" class="btn btn-primary m-1">優惠券列表</router-link>
        <button type="button" class='btn btn-danger' @click.prevent="logout">登出</button>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted } from '@vue/runtime-core';

export default {

  setup() {
    const router = useRouter();
    // 進入畫面初始化用
    const init = () => {
      const token = document.cookie.replace(
        // eslint-disable-next-line no-useless-escape
        /(?:(?:^|.*;\s*)henToken\s*\=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      axios.defaults.headers.common.Authorization = token;
      axios.post(`${process.env.VUE_APP_APIPATH}/api/user/check`).then((res) => {
        if (res.data.success) {
          router.push({ name: 'admin-product-list' });
        } else {
          alert(res.data.message);
          router.push({ name: 'Login' });
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    // 登出
    const logout = () => {
      axios.post(`${process.env.VUE_APP_APIPATH}/logout`).then((res) => {
        if (res.data.success) {
          router.push({ name: 'Login' });
        } else {
          alert(res.data.message);
          router.push({ name: 'Login' });
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    onMounted(() => {
      init();
    });
    return {
      logout,
    };
  },

};

</script>

<style lang="scss" scoped>
@import '../../assets/_dashboard.scss';
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}

</style>
