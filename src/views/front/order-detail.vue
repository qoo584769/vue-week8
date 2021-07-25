<template>
<Navbar></Navbar>
  <div class="container pt-5">

    <div class="row text-center">
      <p class="">
        <span>收件人姓名 :</span>
        <br>
        <br>
        <span>{{ Order.data.user.name}}</span>
      </p>
      <p class="">
        <span>收件人信箱</span>
        <br>
        <br>
        <span>{{Order.data.user.email}}</span>
      </p>
      <p class="">
        <span>收件人電話</span>
        <br>
        <br>
        <span>{{Order.data.user.tel}}</span>
      </p>
      <p class="">
        <span>收件人地址</span>
        <br>
        <br>
        <span>{{Order.data.user.address}}</span>
      </p>
      <p class="">
        <span>備註</span>
        <br>
        <br>
        <span>{{Order.data.message}}</span>
      </p>

      <button type="button" class="btn" @click.prevent="OrderPay">確認結帳</button>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import axios from 'axios';
import {
  useRoute, useRouter,
} from 'vue-router';
import {
  reactive, ref,
} from '@vue/reactivity';
import {
  onMounted,
} from '@vue/runtime-core';
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const Order = reactive({
      data: {
        name: '',
        tel: '',
        address: '',
        email: '',
      },
    });
    const OrderId = ref('');
    const GetOrderDetail = (id) => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/order/${id}`).then((res) => {
        if (res.data.success) {
          Order.data = res.data.order;
          console.log(Order.data);
          console.log(Order.data.user.name);
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    const OrderPay = () => {
      axios.post(`${process.env.VUE_APP_ALL_APIPATH}/pay/${OrderId.value}`).then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          router.push({ path: '/' });
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    onMounted(() => {
      OrderId.value = route.params.id;
      GetOrderDetail(OrderId.value);
    });
    return {
      Order,
      OrderPay,
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

  .text-center {
    text-align: center;
  }

  .btn {
    display: block;
    width: 100px;
    padding: 8px;
    border: 1px solid #000;
    margin: auto;
  }

</style>
