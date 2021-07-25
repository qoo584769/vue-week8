<template>
  <div class="container m-auto">
    <div class="row">
      <div class="col">

        <table class="table">
          <thead class="">
            <th class="" width:150>圖片</th>
            <th class="">名稱</th>
            <th class="">商品說明</th>
            <th class="">商品內容</th>
            <th class="">價格</th>
            <th class="">加到購物車</th>
          </thead>
          <tbody class="">
            <tr class="">
              <td class="img-block"><img :src='ProductDetail.data.imageUrl' alt=""></td>
              <td class="">{{ProductDetail.data.title}}</td>
              <td>{{ProductDetail.data.description}}</td>
              <td>{{ProductDetail.data.content}}</td>
              <td class="">
                <span v-if="!ProductDetail.data.price">價格 :
                  {{ProductDetail.data.origin_price}}</span>
                <span v-if="ProductDetail.data.price" class="text-decoration-line-through">折價前 :
                  {{ProductDetail.data.origin_price}}</span>
                <br>
                <span v-if="ProductDetail.data.price">折價後 : {{ProductDetail.data.price}}</span>
              </td>
              <td class="">
                <input type="number" min=1 v-model.number="CartData.data.qty">
                <button class="btn btn-primary"
                  @click.prevent="AddCart(ProductDetail.data.id)">加入購物車</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import {
  onMounted,
  reactive,
} from '@vue/runtime-core';
import {
  useRoute,
} from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    //   使用router的route
    const route = useRoute();
    // 存商品列表
    const ProductDetail = reactive({
      data: {},
    });
      // 加入購物車參數
    const CartData = reactive({
      data: {
        product_id: '',
        qty: 1,
      },
    });
      // 取得商品詳細的API
    const GetProductDetail = (id) => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/product/${id}`).then((res) => {
        if (res.data.success) {
          ProductDetail.data = res.data.product;
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 加入購物車
    const AddCart = (id) => {
      CartData.data.product_id = id;
      axios.post(`${process.env.VUE_APP_ALL_APIPATH}/cart/`, CartData).then((res) => {
        if (res.data.success) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    onMounted(() => {
      GetProductDetail(route.params.id);
    });
    return {
      ProductDetail,
      CartData,
      AddCart,
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

  img {
    max-width: 100%;
    height: auto;
  }

  .img-block {
    width: 300px;
  }

</style>
