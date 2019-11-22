import { productService } from '@/services'

const state = {
    isLoading:false,
    productForm:{
        name: '',
        brand: '',
        description: '',
        price: 0
    },
    productModal:false,
    products: []
}

const getters = {
    totalValue(state) {
        return state.products.reduce((total, product) => total + product.quantity * product.price, 0)
    }
}

const actions = {
    fetchAllProducts({ commit }) {
        return productService.getAll().then(response => {
            const products = [...response.data].map(product => ({ ...product, quantity: 0 }))
            commit('setProducts', products)
        })
    },
    saveProduct({ state, commit }) {
        commit('setLoading', true)
        return productService.save(state.productForm).then(response => {
            console.log(response)
        }).finally(() => {
            commit('setLoading', false)
            location.reload()
        })
    },
    getById({commit},productid){
        return productService.getId(productid).then(response =>{
            const productRecovery = response.data
            console.log(response.data);
            commit('setProduct', productRecovery);
            commit('toggleModal');
        })

    }
}

const mutations = {
    decreaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        if (product.quantity > 0)
            product.quantity--
    },
    increaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        product.quantity++
    },
    setProducts(state, payload) {
        state.products = payload
    },
    toggleModal(state){
        state.productModal = !state.productModal
    },
    setLoading(state, value) {
        state.isLoading = value
    },
    setProduct(state, payload){

        state.productForm = payload
        
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  