<template>
  <div class="page">
      <button class="btn btn-secondary px-3 py-1 m-2"
        :disabled="props.PageData.data.has_pre == false"
        @click.prevent="PageGetData(props.PageData.data.current_page - 1)">上一頁</button>

      <button class="btn btn-primary px-3 py-1 m-2" v-for="item in props.PageData.data.total_pages"
        :key="item" :class="{'active' : item == props.PageData.data.current_page}"
        @click.prevent="PageGetData(item)">{{item}}</button>

      <button class="btn btn-secondary px-3 py-1 m-2"
        :disabled="props.PageData.data.has_next == false"
        @click.prevent="PageGetData(props.PageData.data.current_page + 1)">下一頁</button>
    </div>
</template>

<script>
export default {
  name: 'Pagenation',
  components: {},
  props: {
    PageData: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, {
    emit,
  }) {
    const PageGetData = (item) => {
      // 換頁
      if (item !== props.PageData.data.current_page) {
        // 傳出去的名稱不能有大寫 標籤的名稱一律小寫 不然就要加上一橫 aaa-vvv
        emit('out_getdata', item);
      }
    };

    return {
      props,
      PageGetData,
    };
  },

};

</script>

<style lang="scss" scoped>
@import '../../assets/_dashboard.scss';
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

</style>
