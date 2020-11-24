<template>
  <q-page class="q-pa-md">
    <transition
      appear
      enter-active-class="animated fadeInLeft"
    >
      <div class="text-h4 q-mb-md">Seu carrinho</div>
    </transition>
    <card 
      v-for="(item, key) in itensCarrinho"
      :key="key"
      :hospedagem="item"/>
    
  </q-page>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'PageHospedagens',
  components: {
    card: require('components/Card').default
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('carrinho', ['itensCarrinho'])
  },
  methods: {}
}
</script>
