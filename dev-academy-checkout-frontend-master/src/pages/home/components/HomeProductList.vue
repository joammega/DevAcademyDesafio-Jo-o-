<template>
    <div class="home-product-list">
        <h2 class="title">Produtos</h2>
        <div class="product-list-container">
            <button @click="toggleModal()" class="modal-button"><span class="text">Cadastre um novo produto</span></button>
            <home-product-list-item class="product-item" v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HomeProductListItem from './HomeProductListItem'

const { mapState, mapActions, mapMutations } = createNamespacedHelpers('products')

export default {
    name: 'HomeProductList',
    components: {
        HomeProductListItem
    },
    computed: {
        ...mapState(['products'])
    },
    created() {
        this.fetchAllProducts();
    },
    methods: {
        ...mapMutations(['toggleModal']),
        ...mapActions(['fetchAllProducts'])
    },
}
</script>

<style lang="stylus" scoped>
.modal-button
    width 100%
    height 40px
    border-radius 4px
    border 1px solid #eee
    background-color #edeef2
    font-size 1rem
    cursor pointer
    user-select none

    &:hover
        background-color gray
.home-product-list
    width 100%
    background-color #fff
    border-radius 4px

.product-list-container
    max-height 60vh
    overflow-y auto

.title
    text-align left
    padding 0px 20px

.product-item + .product-item
    border-top 1px solid #e6e6e6

</style>