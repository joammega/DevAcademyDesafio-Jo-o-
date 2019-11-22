<template>
  <div class="background-modal">
    <button class="exit" @click="toggleModal()">
      <span class="text">X</span>
    </button>
    <home-product-form/>
  </div>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("products");

import HomeProductForm from './HomeProductForm'

export default {
  name: "HomeProductModal",
  components:{
      HomeProductForm
  },
  methods:{
      ...mapMutations(['toggleModal'])
  }
};
</script>


<style lang='stylus' scoped>
.exit {
  background-color: white;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>