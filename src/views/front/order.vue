<template>
  <div class="container">
    <div class="row">
      <VForm v-slot="{ errors }" @submit="Checkout">

        <label for="name">姓名</label>
        <VField id="name" name="姓名" type="text" class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入 姓名" rules="required"
          v-model="UserData.data.user.name"></VField>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>

        <label for="email">Email</label>
        <VField id="email" name="email" type="email" class="form-control"
          :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
          v-model="UserData.data.user.email"></VField>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>

        <label for="tel">電話</label>
        <VField id="tel" name="電話" type="tel" class="form-control"
          :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入 電話" :rules="ValidateTel"
          v-model="UserData.data.user.tel"></VField>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>

        <label for="address">地址</label>
        <VField id="address" name="地址" type="text" class="form-control"
          :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入 地址" rules="required"
          v-model="UserData.data.user.address"></VField>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>

        <p>
          <label for="message">備註</label>
          <textarea id="message" v-model="UserData.data.message"></textarea>
        </p>

        <button type="submit" class="btn btn-primary">
          <i class="fas fa-spinner fa-pulse"></i>
          結帳
        </button>

      </VForm>
    </div>
  </div>
</template>

<script>
import {
  reactive,
} from '@vue/reactivity';
import {
  onMounted,
} from '@vue/runtime-core';
import axios from 'axios';
import {
  useRouter,
} from 'vue-router';

export default {
  setup() {
    const CartListData = reactive({
      data: {},
    });
      // 結帳的收件者資料
    const UserData = reactive({
      data: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    });

    const router = useRouter();
    // 取得購物車清單
    const GetCart = () => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            CartListData.data = res.data.data;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    };
      // 結帳付款
    const Checkout = () => {
      if (CartListData.data.carts.length !== 0) {
        axios.post(`${process.env.VUE_APP_ALL_APIPATH}/order`, UserData)
          .then((res) => {
            if (res.data.success) {
              alert(res.data.message);
              router.push({ path: `/order/${res.data.orderId}` });
            }
            alert(res.data.message);
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        alert('購物車無商品');
      }
    };

    // 驗證手機的函式
    const ValidateTel = (value) => {
      if (!value) {
        return '電話號碼為必填';
      }
      if (!/^09\d{8}$/.test(value)) {
        return '電話號碼格式錯誤';
      }
      return true;
    };
    onMounted(() => {
      GetCart();
    });
    return {
      UserData,
      CartListData,
      Checkout,
      ValidateTel,
    };
  },

};

</script>

<style lang="scss" scoped>
  @import '../../assets/_dashboard.scss';

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

</style>
