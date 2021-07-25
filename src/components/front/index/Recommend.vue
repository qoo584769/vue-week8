<template>
  <div class="container">
    <div class="row">
      <div class="m-auto">
        精選好物
      </div>
    </div>

    <div class="row">
      <div class="card-horizontal">
        <img
          src="https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          alt="">
        <div class="card-content">
          <div class="card-title">
            <h3> 燈飾 </h3>
          </div>
          <div class="card-text">一盞燈，一頓飯，暫時忘掉一天的繁忙</div>
          <button type="bytton" class="btn">
            <router-link :to="{name:'products'}">更多...</router-link>
          </button>
        </div>

        <div class="card-horizontal order">
          <img
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="">
          <div class="card-content">
            <div class="card-title">
              <h3> 衛浴 </h3>
            </div>
            <div class="card-text">忙了一天，泡澡消除一天的疲憊，讓身心靈都能放鬆</div>
            <button type="bytton" class="btn">
              <router-link :to="{name:'products'}">更多...</router-link>
            </button>

          </div>
        </div>
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

  a {
    display: block;
    width: 100%;
  }

</style>
