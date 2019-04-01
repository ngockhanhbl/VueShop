import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
        { invId: 1, name: 'An Item Cosy Gucci', image: '//placehold.it/200', price: 999,typepd:'quan' },
        { invId: 2, name: 'Thing', image: '//placehold.it/200', price: 1499,typepd:'quan' },
        { invId: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499,typepd:'ao' },
        { invId: 4, name: 'Other thing', image: '//placehold.it/200', price: 299,typepd:'ao' },
        { invId: 5, name: 'An Item Mohamessy', image: '//placehold.it/200', price: 959,typepd:'quan' },
        { invId: 6, name: 'Thing', image: '//placehold.it/200', price: 1499,typepd:'quan' },
        { invId: 7, name: 'Doo-dad Babaa', image: '//placehold.it/200', price: 493,typepd:'ao' },
        { invId: 8, name: 'Other thing Gucci', image: '//placehold.it/200', price: 199,typepd:'ao' },
      ],
      inCart: [],
      search:'',
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
    tong:state =>state.inCart.price,
  },
  mutations: {
    ADD_TO_CART(state, invId) {state.inCart.push(invId);},
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
    SEARCH_ITEM(state,text){state.search = text},
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    searchItem(context,text){context.commit('SEARCH_ITEM',text);},
  },
});