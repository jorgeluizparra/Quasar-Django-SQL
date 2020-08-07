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
                    :color="liked | color"
                    @click="like(liked)"
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
export default {
    props: ['hospedagem'],
    data() {
        return {
            liked: false,
            img: 'https://www.j8.com.br/vista.imobi/fotos/59006/ij8imovei59006_191198.jpg'
        }
    },
    methods: {
        like(){
            this.liked = !this.liked
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