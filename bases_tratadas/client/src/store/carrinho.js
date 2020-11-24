import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    itens: []
}

const mutations = {
    adicionarItem(state, item){
        state.itens.push(item)
        console.log(state.itens)
    }
}

const actions = {
    adicionarItem({commit}, item) {
        commit('adicionarItem', item)
    }
}

const getters = {
    itensCarrinho: (state) => {
        return state.itens
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}