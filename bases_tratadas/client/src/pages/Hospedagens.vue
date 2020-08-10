<template>
  <q-page class="q-pa-md">
      <div class="q-mb-md">
        <q-btn
          v-show="hospedagens.previous"
          @click="getHospedagens(hospedagens.previous)"
          class="q-mr-md"
          color="primary"
          icon="arrow_back_ios"
          label="Back" />
        <q-btn
          @click="getHospedagens(hospedagens.next)"
          v-show="hospedagens.next"
          color="primary"
          icon="arrow_forward_ios"
          label="Next" />
      </div>
      <div class="flex">
        <card 
        v-for="(hospedagem, key) in hospedagens.results"
        :key="key"
        :hospedagem="hospedagem"/>
      </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PageHospedagens',
  components: {
    card: require('components/Card').default
  },
  data() {
    return {
      hospedagens:''
    }
  },
  methods: {
    getHospedagens(page){
        axios
        .get(page)
        .then(response => {
            this.hospedagens = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }
  },
  mounted() {
    this.getHospedagens('http://127.0.0.1:8000/api/residencias/?page=1')
  },
}
</script>
