import axios from "axios"

const state = {
    hospedagens: {
        2539:{
            "id":2539,
            "img": "https://www.j8.com.br/vista.imobi/fotos/59006/ij8imovei59006_191198.jpg",
            "name":"Clean & quiet apt home by the park",
            "host_id":2787,
            "host_name":"John",
            "neighbourhood":"Kensington",
            "latitude":40.64749,
            "longitude":-73.97237,
            "room_type":"Private room",
            "price":149,
            "minimum_nights":1,
            "number_of_reviews":9,
            "last_review":"2018-10-19",
            "reviews_per_month":0.21,
            "calculated_host_listings_count":6,
            "availability_365":365,
            "neighbourhood_group":"Brooklyn"
        },
        5698:{
            "id":5698,
            "img": "https://www.j8.com.br/vista.imobi/fotos/59006/ij8imovei59006_191198.jpg",
            "name":"Clean & quiet apt home by the park",
            "host_id":2787,
            "host_name":"John",
            "neighbourhood":"Kensington",
            "latitude":40.64749,
            "longitude":-73.97237,
            "room_type":"Private room",
            "price":149,
            "minimum_nights":1,
            "number_of_reviews":9,
            "last_review":"2018-10-19",
            "reviews_per_month":0.21,
            "calculated_host_listings_count":6,
            "availability_365":365,
            "neighbourhood_group":"Brooklyn"
        },
        7854:{
            "id":7854,
            "img": "https://www.j8.com.br/vista.imobi/fotos/59006/ij8imovei59006_191198.jpg",
            "name":"Clean & quiet apt home by the park",
            "host_id":2787,
            "host_name":"John",
            "neighbourhood":"Kensington",
            "latitude":40.64749,
            "longitude":-73.97237,
            "room_type":"Private room",
            "price":149,
            "minimum_nights":1,
            "number_of_reviews":9,
            "last_review":"2018-10-19",
            "reviews_per_month":0.21,
            "calculated_host_listings_count":6,
            "availability_365":365,
            "neighbourhood_group":"Brooklyn"
        },
    }
}

const mutations = {

}

const actions = {
    
}

const getters = {
    showHospedagens: (state) => {
        return state.hospedagens
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}