<template>
  <div class="container">
    <div class="row">
      <div class="bg">
        <img
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="" class="bg-img">
      </div>
    </div>

    <div class="row">
      <ul class="product-select">
        <li><button type="button">全部商品</button></li>
        <li><button type="button">沙發</button></li>
        <li><button type="button">櫃子</button></li>
        <li><button type="button">椅子</button></li>
        <li><button type="button">床</button></li>
      </ul>
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

  img {
    display: block;
  }

  .bg {
    width: 100%;
    height: 400px;
    overflow: hidden;
    margin-bottom: 48px;
  }

  .bg-img {
    width: 100%;
    max-width: 1440px;
    height: auto;
    object-position: 100% -500px;
  }

  .product-select {
    display: flex;
    margin: auto;

    li {
      width: 100px;
      border: 1px solid #ccc;
      text-align: center;
    }

    button {
      width: 100%;
      padding: 8px;
      background: #fff;
      border: none;
    }

    button:hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }

</style>
