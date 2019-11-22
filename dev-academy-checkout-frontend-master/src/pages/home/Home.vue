<template>
    <div class="home">
        <home-product-modal v-if="productModal" class="product-modal"/>
        <home-product-list class="product-list" />
        <home-payment-summary class="payment-summary" />
    </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const {mapState} = createNamespacedHelpers('products')

import HomeProductList from "./components/HomeProductList";
import HomePaymentSummary from "./components/HomePaymentSummary";
import HomeProductModal from "./components/HomeProductModal";

export default {
    name: "Home",
    components: {
        HomeProductList,
        HomePaymentSummary,
        HomeProductModal
    },
    computed:{
        ...mapState({productModal: 'productModal'})
    }
};
</script>

<style lang="stylus">
.home
    width 100%
.product-modal
    width 100%
    height 100%
    position fixed
    top 0 
    left 0
    background-color rgba(190, 188, 188, 0.500) 
    z-index 1000

@media screen and (min-width: 950px)
    .home
        display flex
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

    .product-list
        margin-right  2%

@media screen and (min-width: 1300px)
    .home
        display flex
        width 70%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

</style>
