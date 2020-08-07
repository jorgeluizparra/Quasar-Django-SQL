<template>
  <q-page>
    <div id="linha" class="q-pa-md">
      <div>
        <imagens :imagens="hospedagem.img"/>
      </div>

      <div class="q-pl-md">

        <div class="q-mb-sm">
          <div class="q-mt-xs q-mb-xs">Hospedagem: {{$route.params.id}}</div>
          <informacoes :informacoes="hospedagem"/>
          <div>(Preço médio/região: R${{ mediaPreco.price | preco }}/Noite)</div>
        </div>

        <q-form @submit.prevent="verDisponibilidade()">
          <label for="periodo.entrada">Data de entrada:</label>
          <q-input filled v-model="periodo.entrada" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="periodo.entrada" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <label for="periodo.entrada">Data de saida:</label>
          <q-input filled v-model="periodo.saida" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="periodo.saida" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-btn type="submit" color="primary" label="Ver disponibilidade" />
        </q-form>
        <div
          v-show="dataDisponivel"
          class="q-mt-sm">
          <div class=" text-h6 text-positive q-pb-xs">Data disponivel! Reserve agora e garanta esta data.</div>
          <q-btn
            @click="adicionarItem(hospedagem)"
            type="button"
            color="primary"
            label="Reservar" />
        </div>

      </div>

      <div class="q-pa-md">
        <div class="text-h6">Mais informacoes:</div>
        <div>Vizinhanca: {{ hospedagem.neighbourhood }}</div>
        <div>Numero minimo de noites: {{ hospedagem.minimum_nights }}</div>
        <div>Quantidade de avaliacoes: {{ hospedagem.number_of_reviews }}</div>
        <div>Ultima avaliacao: {{ hospedagem.last_review | dataBonita }}</div>
        <div>Disponibilidade: {{ hospedagem.availability_365 }} Dias/Ano</div>
      
      </div>

    </div>
  </q-page>
</template>

<script>
import {mapActions} from 'vuex'
import { date } from 'quasar'

export default {
  name: 'PageHospedagem',
  components:{
    'imagens': require('components/Carousel').default,
    'informacoes': require('components/Cabecalho').default,
  },
  data() {
    return {
      dataDisponivel: false,
      periodo:{
        entrada: '',
        saida:''
      },
      hospedagem: {
        "id":2539,
        "img": {
          1:{
            "id": 1,
            "path": "https://www.j8.com.br/vista.imobi/fotos/59006/ij8imovei59006_191198.jpg"
          },
          2:{
            "id": 2,
            "path": "https://www.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1-1024x576.jpg"
          },
        },
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
      mediaPreco: {
        "neighbourhood_group":"Brooklyn",
        "room_type":"Private room",
        "price":73.3495619524
      }
    }
  },
  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: { lat: this.hospedagem.latitude, lng: this.hospedagem.longitude }
      }
    },
    media() {
      
    }
  },
  methods: {
    ...mapActions('carrinho', ['adicionarItem']),
    verDisponibilidade() {
      this.dataDisponivel = true
    }
  },
  filters: {
    dataBonita(value) {
      let dataFormatada = date.formatDate(value, 'D/MM/YYYY')
      return dataFormatada
    },
    preco(value) {
      return value.toFixed(2)
    }
  }
}
</script>
      
<style lang="css">
  @media screen and (min-width: 768px){
    #linha {
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }
  
</style>
