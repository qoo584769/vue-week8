<template>
  <Navbar></Navbar>
  <ProductNav></ProductNav>
  <ProductList></ProductList>
  <Footer></Footer>
  <div>

  </div>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import ProductNav from '@/components/front/all-product/all-product-nav.vue';
import ProductList from '@/components/front/all-product/product-list.vue';
import Footer from '@/components/front/Footer.vue';

export default {

  components: {
    Navbar,
    ProductNav,
    ProductList,
    Footer,
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
