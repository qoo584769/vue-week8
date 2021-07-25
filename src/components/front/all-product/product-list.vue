<template>
  <div class="container">
    <ul class="row">
      <li class="product-card" v-for="item in ProductList.data" :key="item.id">
        <div class="product-card-img-block">
          <img :src='item.imageUrl' alt="">
        </div>

        <div class="product-card-content">
          <div class="product-card-content-title">{{item.title}}</div>
          <div class="product-card-content-text">{{item.description}}</div>
          <div class="product-card-content-price">
            <span v-if="!item.price">價格 : {{item.origin_price}}</span>
            <span v-if="item.price" class="text-decoration-line-through">折價前 :
              {{item.origin_price}}</span>
            <br>
            <span v-if="item.price">折價後 : {{item.price}}</span>
          </div>

          <router-link :to="{ name: 'detail', params: { id: `${item.id}` }}"
            class="product-card-content-btn">查看更多</router-link>

          <button type="button" class="product-card-content-btn"
            @click.prevent="AddToCart(item.id)">加入購物車</button>
        </div>
      </li>
    </ul>
    <!--
      <div class="product-card">
        <div class="product-card-img-block">
          <img src="https://fakeimg.pl/400x300/" alt="">
        </div>

        <div class="product-card-content">
          <div class="product-card-content-title">名稱</div>
          <div class="product-card-content-text">說明</div>
          <div class="product-card-content-price">
            <span>特價</span>
            <span>原價</span>
          </div>
          <button type="button" class="product-card-content-btn">查看更多</button>
          <button type="button" class="product-card-content-btn">加入購物車</button>
        </div>
      </div>

      <div class="product-card">
        <div class="product-card-img-block">
          <img src="https://fakeimg.pl/400x300/" alt="">
        </div>

        <div class="product-card-content">
          <div class="product-card-content-title">名稱</div>
          <div class="product-card-content-text">說明</div>
          <div class="product-card-content-price">
            <span>特價</span>
            <span>原價</span>
          </div>
          <button type="button" class="product-card-content-btn">查看更多</button>
          <button type="button" class="product-card-content-btn">加入購物車</button>
        </div>
      </div>

      <div class="product-card">
        <div class="product-card-img-block">
          <img src="https://fakeimg.pl/400x300/" alt="">
        </div>

        <div class="product-card-content">
          <div class="product-card-content-title">名稱</div>
          <div class="product-card-content-text">說明</div>
          <div class="product-card-content-price">
            <span>特價</span>
            <span>原價</span>
          </div>
          <button type="button" class="product-card-content-btn">查看更多</button>
          <button type="button" class="product-card-content-btn">加入購物車</button>
        </div>
      </div>

      <div class="product-card">
        <div class="product-card-img-block">
          <img src="https://fakeimg.pl/400x300/" alt="">
        </div>

        <div class="product-card-content">
          <div class="product-card-content-title">名稱</div>
          <div class="product-card-content-text">說明</div>
          <div class="product-card-content-price">
            <span>特價</span>
            <span>原價</span>
          </div>
          <button type="button" class="product-card-content-btn">查看更多</button>
          <button type="button" class="product-card-content-btn">加入購物車</button>
        </div>
      </div> -->

  </div>
</template>

<script>
import axios from 'axios';
import {
  reactive,
} from '@vue/reactivity';
import {
  onMounted,
} from '@vue/runtime-core';

export default {

  setup() {
    // 存商品列表
    const ProductList = reactive({
      data: [],
    });
      // 存頁碼
    const Pagination = reactive({
      data: {},
    });
      // 加入購物車參數
    const CartData = reactive({
      data: {
        product_id: '',
        qty: 1,
      },
    });
      // 取得商品列表的API
    const GetProductList = (page = 1) => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/products?page=${page}`).then((res) => {
        if (res.data.success) {
          ProductList.data = res.data.products;
          Pagination.data = res.data.pagination;
          console.log(ProductList.data);
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 加入購物車
    const AddToCart = (id) => {
      CartData.data.product_id = id;
      axios.post(`${process.env.VUE_APP_ALL_APIPATH}/cart`, CartData).then((res) => {
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
      GetProductList();
    });
    return {
      ProductList,
      CartData,
      AddToCart,
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
    display: block;
    width: 400px;
    height: auto;
  }

  .product-card {
    width: 400px;

    .product-card-img-block {
      width: 400px;
      height: 250px;
      max-width: 100%;
      overflow: hidden;
    }
  }

</style>
