<template>
  <div class="container-footer bg-color">
    <div class="row-footer">
      <span class="footer-text">© 2021 H&F</span>
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

  .bg-color {
    background: #ccc;
  }

  .row-footer {
    text-align: center;
  }

  .footer-text {
    height: 100px;
    display: block;
    margin: auto;
    line-height: 100px;
  }

</style>
