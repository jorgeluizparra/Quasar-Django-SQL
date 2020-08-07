import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    itens: {
    //     1:{
    //         "id":2539,
    //         "img": "https://www.j8.com.br/vista.imobi/fotos/59006/ij8imovei59006_191198.jpg",
    //         "name":"Clean & quiet apt home by the park",
    //         "host_id":2787,
    //         "host_name":"John",
    //         "neighbourhood":"Kensington",
    //         "latitude":40.64749,
    //         "longitude":-73.97237,
    //         "room_type":"Private room",
    //         "price":149,
    //         "minimum_nights":1,
    //         "number_of_reviews":9,
    //         "last_review":"2018-10-19",
    //         "reviews_per_month":0.21,
    //         "calculated_host_listings_count":6,
    //         "availability_365":365,
    //         "neighbourhood_group":"Brooklyn"
    //     },
    //     2:{
    //         "id":5698,
    //         "img": "https://www.j8.com.br/vista.imobi/fotos/59006/ij8imovei59006_191198.jpg",
    //         "name":"Clean & quiet apt home by the park",
    //         "host_id":2787,
    //         "host_name":"John",
    //         "neighbourhood":"Kensington",
    //         "latitude":40.64749,
    //         "longitude":-73.97237,
    //         "room_type":"Private room",
    //         "price":149,
    //         "minimum_nights":1,
    //         "number_of_reviews":9,
    //         "last_review":"2018-10-19",
    //         "reviews_per_month":0.21,
    //         "calculated_host_listings_count":6,
    //         "availability_365":365,
    //         "neighbourhood_group":"Brooklyn"
    //     },
    }
}

const mutations = {
    adicionarItem(state, payload){
        Vue.set(state.itens, payload.id, payload.item)
    }
}

const actions = {
    adicionarItem({commit}, item) {
        let itemId = uid()
        let payload = {
            id: itemId,
            item: item
        }
        commit('adicionarItem', payload)
    }
}

const getters = {
    itensCarrinho: (state) => {
        let number = Object.keys(state.itens).length
        if (number > 0) {
            return number
        }
        else{
            return 0
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}