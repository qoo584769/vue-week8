<template>
  <Navbar></Navbar>
  <ProductNav></ProductNav>
  <ProductList></ProductList>
  <div>

  </div>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import ProductNav from '@/components/front/all-product/all-product-nav.vue';
import ProductList from '@/components/front/all-product/product-list.vue';

export default {

  components: {
    Navbar,
    ProductNav,
    ProductList,
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

</style>
