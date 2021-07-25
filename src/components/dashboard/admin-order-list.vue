<template>
  <div class="container m-auto position-relative">

    <button type="button" class="btn btn-danger" @click.prevent="AdminDelAllOrder">
      刪除全部訂單
    </button>

    <table class="table">
      <thead>
        <th>訂單ID</th>
        <th>總價</th>
        <th>訂單商品</th>
        <th>收件者資料</th>
        <th>是否付款</th>
        <th>編輯</th>
        <th>刪除</th>
      </thead>
      <tbody>
        <template v-for="item in AdminOrderList.data" :key="item.id">
          <tr class="">
            <td>{{item.id}}</td>
            <td>{{item.total}}</td>
            <td><button class="btn btn-secondary">還在想如何呈現</button></td>
            <td><button class="btn btn-secondary">還在想如何呈現</button></td>
            <td>{{item.is_paid?'已付款':'未付款'}}</td>
            <td><button type="button" class="btn btn-primary"
                @click.prevent="ModalOpen(item)">編輯</button>
            </td>
            <td><button type="button" class="btn btn-danger"
                @click.prevent="AdminDelSingleOrder(item.id)">刪除</button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <pagenation :PageData="AdminPagination" @out_getdata="AdminGetOrderList"></pagenation>
  </div>

  <!-- Modal -->
  <div class="modal-bg modal-close" ref="ModalDOM">
    <div class="container mt-5 m-auto bg-white">
      <div class="p-4">
        <div class="d-flex">
          <h5 class="flex-grow-1" id="exampleModalLabel">訂單編輯</h5>
          <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"
            @click.prevent="ModalClose"></button>
        </div>
        <div class="">

          <label for="total" class="form-label">訂單金額</label>
          <input type="text" id="total" class="form-control" v-model.number="TempOrder.data.total">

          <label for="is_paid" class="form-label">是否付款</label>
          <input type="text" id="is_paid" class="form-control" v-model="TempOrder.data.is_paid">

        </div>
        <div class="">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            @click.prevent="ModalClose">取消</button>
          <button type="button" class="btn btn-primary" @click.prevent="BtnSubmit">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {
  reactive,
  ref,
} from '@vue/reactivity';
import {
  onMounted,
} from '@vue/runtime-core';
import pagenation from '@/components/common/pagination.vue';

export default {
  components: {
    pagenation,
  },
  setup() {
    // 抓取modal的DOM元素
    const ModalDOM = ref(null);
    // 存取後台訂單列表的變數
    const AdminOrderList = reactive({
      data: [],
    });
      // 存取後台頁碼的變數
    const AdminPagination = reactive({
      data: {},
    });
      // modal的資料暫存
    const TempOrder = reactive({
      data: {},
    });

    // modal開
    const ModalOpen = (item) => {
      TempOrder.data = item;
      ModalDOM.value.classList.add('modal-show');
    };
      // modal關
    const ModalClose = () => {
      ModalDOM.value.classList.remove('modal-show');
    };
      // 取得後台訂單列表的API
    const AdminGetOrderList = (page = 1) => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/admin/orders?page=${page}`).then((
        res,
      ) => {
        if (res.data.success) {
          AdminOrderList.data = res.data.orders;
          AdminPagination.data = res.data.pagination;
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 更新訂單的API
    const AdminUpdateProduct = () => {
      if (TempOrder.data.is_paid === 'true') {
        TempOrder.data.is_paid = Boolean(1);
      } else {
        TempOrder.data.is_paid = Boolean(0);
      }
      axios.put(`${process.env.VUE_APP_ALL_APIPATH}/admin/order/${TempOrder.data.id}`,
        TempOrder).then((
        res,
      ) => {
        if (res.data.success) {
          alert(res.data.message);
          AdminGetOrderList();
          ModalClose();
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 刪除單一訂單的API
    const AdminDelSingleOrder = (id) => {
      axios.delete(`${process.env.VUE_APP_ALL_APIPATH}/admin/order/${id}`).then((
        res,
      ) => {
        if (res.data.success) {
          alert(res.data.message);
          AdminGetOrderList();
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 刪除全部訂單的API
    const AdminDelAllOrder = () => {
      axios.delete(`${process.env.VUE_APP_ALL_APIPATH}/admin/orders/all`).then((
        res,
      ) => {
        if (res.data.success) {
          alert(res.data.message);
          AdminGetOrderList();
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // modal的確定按鈕
    const BtnSubmit = () => {
      AdminUpdateProduct();
    };
    onMounted(() => {
      AdminGetOrderList();
    });

    return {
      AdminGetOrderList,
      AdminDelSingleOrder,
      AdminDelAllOrder,
      AdminOrderList,
      AdminPagination,
      BtnSubmit,

      TempOrder,
      ModalDOM,

      ModalOpen,
      ModalClose,
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

  .modal-bg {
    background: rgba(0, 0, 0, 0.8);
  }

  .modal-close {
    display: none;
  }

  .modal-show {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
