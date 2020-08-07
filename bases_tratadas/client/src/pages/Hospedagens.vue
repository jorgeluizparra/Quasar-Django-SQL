<template>
  <q-page class="flex q-pa-md">
      <card 
        v-for="(hospedagem, key) in showHospedagens"
        :key="key"
        :hospedagem="hospedagem"/>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: 'PageHospedagens',
  components: {
    card: require('components/Card').default
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters('hospedagens', ['showHospedagens'])
  },
}
</script>
