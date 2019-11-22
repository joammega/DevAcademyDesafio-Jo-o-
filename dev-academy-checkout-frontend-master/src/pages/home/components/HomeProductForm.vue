<template>
    <div class="form-conteiner">
        <h3>Registro de Produtos</h3>
        <form @submit.prevent="saveProduct">
            <div class="form-group">
                <label for="Name">Nome</label>
                <input type="text" id="Name" v-model="form.name" required/>
            </div>
            <div class="form-group">
                <label for="Brand">Marca</label>
                <input type="text" id="Brand" v-model="form.brand" required/>
            </div>
            <div class="form-group">
                <label for="Description">Descrição</label>
                <input type="text" id="Descripition" v-model="form.description" required/>
            </div>
            <div class="form-group">
                <label for="Price">Preço</label>
                <input type="number" id="Price" v-model="form.price"  required/>
            </div>
            <div class="form-group">
                <button class="submit-button">Pagar</button>
            </div>

        </form>
        <loading v-if="isLoading" />
    </div>
    
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { Loading } from '@/components'

const { mapState, mapActions } = createNamespacedHelpers('products')

export default {
    name: 'Checkout',
    components: {
        Loading
    },
    computed: {
        ...mapState({
            form: 'productForm',
            isLoading: 'isLoading'
        })
    },
    methods: {
        ...mapActions(['saveProduct'])
    }
}
</script>


<style lang="stylus" scoped>
    .form-conteiner
        width 50%
        height 80%
        background-color white
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        overflow scroll
    .form-group
        display flex
        flex-direction column
        width 50%
        margin auto

        label
            margin 4px   

        input, select 
            width 100%
            height 32px
            border 2px solid #eee
            border-radius 4px
            background-color #fff
            padding 1px 0
            box-sizing content-box

    .submit-button
        margin 6px
        width 100%
        height 50px
        border-radius 4px
        border 2px solid #eee
        background-color #edeef2
        font-size 1rem

        &:hover
            background-color gray
</style>