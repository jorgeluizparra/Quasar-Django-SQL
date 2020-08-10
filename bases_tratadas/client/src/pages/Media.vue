<template>
  <q-page class="q-pa-md">
    <transition
      appear
      enter-active-class="animated fadeInLeft"
    >
      <div class="text-h4 q-mb-md">Media de precos</div>
    </transition>
    <transition
      appear
      enter-active-class="animated fadeInRight"
    >
      <q-list bordered separator>
        <q-item
          v-for="media in medias"
          :key="media.id"
          clickable
          v-ripple>
          <q-item-section><b>{{ media.neighbourhood_group }}</b> R${{ media.price }}</q-item-section>
        </q-item>
      </q-list>
    </transition>
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
      medias:''
    }
  },
  methods: {
    getMedias(){
        axios
        .get('http://127.0.0.1:8000/api/medias/')
        .then(response => {
            this.medias = response.data.results
            // console.log(response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    }
  },
  mounted() {
    this.getMedias()
  },
}
</script>
