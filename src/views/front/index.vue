<template>
  <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Reason></Reason>
      <Recommend></Recommend>
      <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Banner from '@/components/front/index/Banner.vue';
import Reason from '@/components/front/index/Reason.vue';
import Recommend from '@/components/front/index/Recommend.vue';
import Footer from '@/components/front/Footer.vue';

export default {

  components: {
    Navbar,
    Banner,
    Reason,
    Recommend,
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

.pic{
    height: 500px;
    background: #000;
}
</style>
