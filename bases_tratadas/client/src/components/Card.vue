<template>
    <div>
        <transition
            appear
            enter-active-class="animated fadeInUp"
            >
            <q-card 
                class="my-card q-ma-sm"
                >
                <q-btn
                    :color="likeData.status | color"
                    @click="like()"
                    class="absolute"
                    flat
                    round
                    icon="favorite" />
                <img :src="img">

                <q-card-section>
                    <div class="text-h6">{{ hospedagem.name }}</div>
                    <div class="text-subtitle2">{{ hospedagem.room_type }} localizado no {{ hospedagem.neighbourhood }}</div>
                    <div> Anfitrião: {{ hospedagem.host_name }}</div>
                    <div class="text-h6 text-primary"> Preço: R${{ hospedagem.price }}/Noite</div>
                </q-card-section>
                <q-card-actions>
                    <q-btn
                        :to="'hospedagem/'+ hospedagem.id"
                        flat
                        class="text-primary">
                    Abrir
                    </q-btn>
                </q-card-actions>
            </q-card>
        </transition>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['hospedagem'],
    data() {
        return {
            img: 'https://www.j8.com.br/vista.imobi/fotos/59006/ij8imovei59006_191198.jpg',
            likeData: ''
        }
    },
    mounted() {
        this.setLikeData()
    },
    methods: {
        setLikeData(){
            if(this.hospedagem.likes == null){
                this.likeData = {
                    id: '',
                    residencia: this.hospedagem.id,
                    status: false,
                }
            }
            else {
                this.likeData = this.hospedagem.likes
            }
        },
        like(){
            if(this.likeData.status){
                // console.log(this.likeData.id)
                axios
                .delete('http://127.0.0.1:8000/api/like/' + this.hospedagem.likes.id + '/')
                .then(response => {
                    this.likeData.status = false
                })
                .catch(error => {
                    console.log(error)
                })
            }
            else {
                this.likeData.status = true
                axios
                .post('http://127.0.0.1:8000/api/like/', this.likeData)
                .then(response => {
                    // console.log(response)
                    this.likeData.id = response.data.id
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    },
    filters: {
        color(value){
            if(value == true){
                return 'red';
            }
            else{
                return 'secondary'
            }
        }
    },
}
</script>

<style lang="css">
    .q-card {
        max-width: 300px;
        height: fit-content;
    }
</style>