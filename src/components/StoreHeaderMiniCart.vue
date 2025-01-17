<template>
  <div class="dropdown position-relative cart">
    <button
      type="button"
      id="cart-button"
      class="btn"
      @mousedown.stop="cartIsShown = !cartIsShown"
      @mouseenter="cartIsShown = true"
      @focus="cartIsShown = true"
    >
      <i class="bi bi-cart fs-4 text-classic-green"></i>
      <span
        v-if="this.cart.carts?.length"
        class="position-absolute top-28 start-75 translate-middle badge rounded-pill bg-danger"
      >
        {{ this.cart.carts?.length ?? '0' }}
        <span class="visually-hidden">商品數量</span>
      </span>
    </button>
    <Transition>
      <div
        v-if="cartIsShown"
        class="container-fluid border position-absolute end-50 bg-white overflow-auto mh-70"
        style="width: 20rem"
        @mouseleave="cartIsShown = false"
        @blur="cartIsShown = false"
      >
        <!-- cart-title -->
        <div class="row py-2 border-bottom">
          <div class="col">購物車</div>
        </div>
        <!-- card-item -->
        <div class="card border-0" style="max-width: 540px">
          <p v-if="this.cart.carts?.length === 0" colspan="4" class="p-2">
            您的購物車目前沒有任何商品，<router-link
              to="/thermos/classic/details/classic-green"
              class="text-decoration-none link-classic-green fw-medium"
              @click="cartIsShown = !cartIsShown"
              >去購物</router-link
            >
          </p>
          <div
            v-for="item in cart.carts"
            :key="item.product.id"
            class="row g-0 align-items-center position-relative"
            :class="{
              'td-deleted': cartDeletedItem === item.id,
              'text-muted': cartDeletedItem === item.id,
            }"
          >
            <div class="col-5 border text-center" style="max-width: 114px; max-height: 112px">
              <img
                :src="item.product.imageUrl"
                class="img-fluid p-2 rounded"
                :alt="`${item.product.title}圖片`"
                style="max-height: 112px"
              />
            </div>
            <div class="col-7">
              <div class="card-body">
                <h5 class="card-title fs-6">{{ item.product.title }}</h5>
                <p class="card-text m-0">NT$ {{ item.product.price }}</p>
                <span class="card-text align-middle">
                  數量：
                  <StoreProductInput
                    v-if="cartLoadingItem !== item.product.id"
                    :hasOperators="false"
                    :productId="item.product.id"
                    :qty="item.qty"
                    @update:value="(newValue) => updateQty(newValue, item.product.id, item.id)"
                  />
                  <div
                    v-if="cartLoadingItem === item.product.id"
                    class="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </span>
                <button
                  v-if="cartDeletedItem !== item.id"
                  type="button"
                  class="btn bi bi-trash float-end btn-deleted"
                  @click="overlayCartItem(item.id)"
                ></button>
                <div
                  v-if="cartDeletedItem === item.id"
                  class="spinner-border spinner-border-sm text-dark float-end m-2"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
            <div
              v-if="item.id === cartDeletedItem"
              class="overlay w-100 h-100 position-absolute top-0 start-0"
            >
              <div class="w-100 position-absolute top-50 start-50 translate-middle">
                <p class="text-center text-light">確定要刪除嗎？</p>
                <div class="d-flex justify-content-center" role="group" aria-label="Basic example">
                  <button
                    type="button"
                    class="btn btn-danger me-1"
                    @click="deleteCartItem(item.id)"
                  >
                    刪除產品
                  </button>
                  <button type="button" class="btn btn-light ms-1" @click="cancelOverlay">
                    返回
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- cart-footer -->
        <div class="row border-top">
          <div class="col-12 py-2 d-flex justify-content-between">
            <p>合計</p>
            <p class="fw-medium">NT$ {{ cart.total?.toLocaleString('en-us') }}</p>
          </div>
          <div class="col-12">
            <div class="btn-group w-100">
              <router-link
                :to="{ path: '/user/cart' }"
                class="btn btn-outline-secondary w-45 mr-2 mb-3"
                @click="cartIsShown = false"
                >查看購物車</router-link
              >
              <router-link
                :to="{ path: '/user/cart/order' }"
                class="btn btn-dark w-45 ms-2 mb-3"
                :class="{ disabled: !this.cart.carts?.length }"
                @click="cartIsShown = false"
                >結帳</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';
import { mapState, mapActions, mapWritableState } from 'pinia';
import statusStore from '@/stores/statusStore';
import StoreProductInput from './StoreProductInput.vue';

export default {
  components: {
    StoreProductInput,
  },
  computed: {
    ...mapState(useCartStore, ['cart']),
    ...mapState(statusStore, ['cartLoadingItem']),
    ...mapWritableState(statusStore, ['cartDeletedItem']),
    ...mapWritableState(statusStore, ['cartIsShown']),
  },
  methods: {
    async updateQty(qty, productId, cartItemId) {
      await this.updateCartItem({ productId, qty }, cartItemId);
    },
    ...mapActions(useCartStore, [
      'getCartList',
      'deleteCartItem',
      'updateCartItem',
      'overlayCartItem',
      'cancelOverlay',
    ]),
  },
  async created() {
    await this.getCartList();
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  left: auto;
  right: 0;
}

.cart {
  z-index: 1001;
}

.td-deleted {
  background-color: #e9ecef;
}

.btn-deleted {
  transition: background-color 0.3s;
  &:hover {
    background-color: #f8f9fa !important;
  }
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
