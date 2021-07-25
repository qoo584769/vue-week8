<template>
  <div class="container">
    <div class="row">
      <div class="m-auto">
        在這裡，可以找到你想要的
      </div>
    </div>

    <div class="row">

      <div class="card-vertical">
        <div class="card-icon">
          <i class="material-icons md-dark fz-48">
            weekend
          </i>
        </div>
        <div class="card-content">
          <div class="card-title">
            <h3>沙發 / sofa</h3>
          </div>
          <div class="card-text">
            <p>兼具優雅與時尚設計，適合疲憊時小憩一下</p>
          </div>
          <button type="button" class="btn">
            <router-link :to="{name:'products'}">更多...</router-link>
          </button>
        </div>
      </div>

      <div class="card-vertical">
        <div class="card-icon">
          <i class="material-icons md-dark fz-48">
            kitchen
          </i>
        </div>
        <div class="card-content">
          <div class="card-title">
            <h3>櫃子 / cabinet</h3>
          </div>
          <div class="card-text">
            <p>兼具優雅與時尚設計，適合疲憊時小憩一下</p>
          </div>
          <button type="button" class="btn">
            <router-link :to="{name:'products'}">更多...</router-link>
          </button>
        </div>
      </div>

      <div class="card-vertical">
        <div class="card-icon">
          <i class="material-icons md-dark fz-48">
            chair_alt
          </i>
        </div>
        <div class="card-content">
          <div class="card-title">
            <h3>椅子 / chair</h3>
          </div>
          <div class="card-text">
            <p>兼具優雅與時尚設計，適合疲憊時小憩一下</p>
          </div>
          <button type="button" class="btn">
            <router-link :to="{name:'products'}">更多...</router-link>
          </button>
        </div>
      </div>

      <div class="card-vertical">
        <div class="card-icon">
          <i class="material-icons md-dark fz-48">
            bed
          </i>
        </div>
        <div class="card-content">
          <div class="card-title">
            <h3>床俱 / bed</h3>
          </div>
          <div class="card-text">
            <p>兼具優雅與時尚設計，適合疲憊時小憩一下</p>
          </div>
          <button type="button" class="btn">
            <router-link :to="{name:'products'}">更多...</router-link>
          </button>
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

  .material-icons.md-dark {
    color: rgba(0, 0, 0, 0.54);
  }

  .material-icons.fz-48 {
    font-size: 96px;
  }

  a {
    display: block;
    width: 100%;
  }

</style>
