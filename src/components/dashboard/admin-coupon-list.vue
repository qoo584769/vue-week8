<template>

  <div class="container m-auto position-relative">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" @click.prevent="ModalOpen(true)">
      建立優惠券
    </button>

    <table class="table">
      <thead>
        <th>優惠券名稱</th>
        <th>折扣碼</th>
        <th>優惠折扣</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
        <th>刪除</th>
      </thead>
      <tbody>
        <template v-for="item in AdminCouponList.data" :key="item.id">
          <tr class="">
            <td>{{item.title}}</td>
            <td>{{item.code}}</td>
            <td>{{item.percent}}</td>
            <td>{{new Date(parseInt(item.due_date)).toLocaleDateString()}}</td>
            <td>{{item.is_enabled?'已啟用':'未啟用'}}</td>
            <td><button type="button" class="btn btn-primary"
                @click.prevent="ModalOpen(false,item)">編輯</button>
            </td>
            <td><button type="button" class="btn btn-danger"
                @click.prevent="AdminDelCoupon(item.id)">刪除</button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <pagenation :PageData="AdminPagination" @out_getdata="AdminGetCouponsList"></pagenation>
  </div>

  <!-- Modal -->
  <div class="modal-bg modal-close" ref="ModalDOM">
    <div class="container mt-5 m-auto bg-white">
      <div class="p-4">
        <div class="d-flex">
          <h5 class="flex-grow-1" id="exampleModalLabel">優惠券新增 / 編輯</h5>
          <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"
            @click.prevent="ModalClose"></button>
        </div>
        <div class="">

          <label for="title" class="form-label">優惠券名稱</label>
          <input type="text" id="title" class="form-control" v-model="TempCoupon.data.title">

          <label for="code" class="form-label">優惠碼</label>
          <input type="text" id="code" class="form-control" v-model="TempCoupon.data.code">

          <label for="percent" class="form-label">優惠折扣</label>
          <input type="number" id="percent" class="form-control" min=0
            v-model.number="TempCoupon.data.percent">

          <label for="due_date" class="form-label">到期日</label>
          <input type="text" id="due_date" class="form-control" min=0
            v-model="TempCoupon.data.due_date" placeholder="請輸入yyyy/mm/dd">

          <label for="is_enabled" class="form-label">是否啟用</label>
          <input type="number" id="is_enabled" class="form-control" min=0
            v-model.number="TempCoupon.data.is_enabled" placeholder="請輸入 1 表示啟用 0 表示不啟用">

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
    // 判斷要新增還是編輯
    const IsNew = ref(false);
    // 存取後台優惠券列表的變數
    const AdminCouponList = reactive({
      data: [],
    });
      // 存取後台優惠券列表頁碼的變數
    const AdminPagination = reactive({
      data: {},
    });
      // modal的資料暫存
    const TempCoupon = reactive({
      data: {},
    });

    // modal開
    const ModalOpen = (isnew, item) => {
      if (isnew) {
        IsNew.value = isnew;
        TempCoupon.data = {};
      } else {
        IsNew.value = isnew;
        TempCoupon.data = { ...item };
        // eslint-disable-next-line radix
        TempCoupon.data.due_date = new Date(parseInt(item.due_date)).toLocaleDateString();
      }
      ModalDOM.value.classList.add('modal-show');
    };
      // modal關
    const ModalClose = () => {
      ModalDOM.value.classList.remove('modal-show');
    };
      // 取得後台優惠券列表的API
    const AdminGetCouponsList = (page = 1) => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/admin/coupons?page=${page}`).then((
        res,
      ) => {
        if (res.data.success) {
          AdminCouponList.data = res.data.coupons;
          AdminPagination.data = res.data.pagination;
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 建立優惠券的API
    const AdminCreateCoupon = () => {
      TempCoupon.data.due_date = Date.parse(TempCoupon.data.due_date);
      axios.post(`${process.env.VUE_APP_ALL_APIPATH}/admin/coupon`, TempCoupon).then((
        res,
      ) => {
        if (res.data.success) {
          alert(res.data.message);
          AdminGetCouponsList();
          ModalClose();
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 更新優惠券的API
    const AdminUpdateCoupon = () => {
      TempCoupon.data.due_date = Date.parse(TempCoupon.data.due_date);
      axios.put(`${process.env.VUE_APP_ALL_APIPATH}/admin/coupon/${TempCoupon.data.id}`,
        TempCoupon).then((
        res,
      ) => {
        if (res.data.success) {
          alert(res.data.message);
          AdminGetCouponsList();
          ModalClose();
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 刪除優惠券的API
    const AdminDelCoupon = (id) => {
      axios.delete(`${process.env.VUE_APP_ALL_APIPATH}/admin/coupon/${id}`).then((
        res,
      ) => {
        if (res.data.success) {
          alert(res.data.message);
          AdminGetCouponsList();
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // modal的確定按鈕
    const BtnSubmit = () => {
      if (IsNew.value) {
        AdminCreateCoupon();
      } else {
        AdminUpdateCoupon();
      }
    };

    onMounted(() => {
      AdminGetCouponsList();
    });

    return {
      ModalDOM,
      IsNew,
      TempCoupon,
      AdminCouponList,
      AdminPagination,

      AdminGetCouponsList,
      AdminCreateCoupon,
      AdminUpdateCoupon,
      AdminDelCoupon,

      BtnSubmit,

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
