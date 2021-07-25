<template>
  <div class="container-nav">
    <div class="row-nav">

      <div class="logo">
        <span>H&F</span>
      </div>

      <div>
        <ul class="nav-item">
          <li class="nav-item-index">
            <router-link :to="{name:'index'}"> 首頁 </router-link>
          </li>
          <li class="nav-item-product-list">
            <router-link :to="{name:'products'}"> 傢俱總覽 </router-link>
          </li>
          <!-- <li class="nav-item-about">
            <router-link :to="{name:'about'}"> 關於我們 </router-link>
          </li> -->
          <li class="nav-item-cart">
            <router-link :to="{name:'cart'}">
              <i class="material-icons">shopping_cart</i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  components: {

  },

  setup() {
    return {};
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

  .container-nav {
    z-index: 10;
  }

</style>
