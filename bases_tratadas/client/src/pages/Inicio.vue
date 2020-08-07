<template>
  <q-page class="q-pa-sm">
    <transition
      appear
      enter-active-class="animated fadeInLeft"
    >
      <imagens :imagens="imagens"/>
    </transition>
    <transition
      appear
      enter-active-class="animated fadeInRight"
    >
      <div class="q-mt-sm">
        <q-form>
          <q-input
            filled
            v-model="pesquisa"
            label="Qual é o seu destino ?" />
          <q-btn
            class="q-mt-sm"
            type="submit"
            color="primary"
            label="Pesquisar" />
        </q-form>
      </div>
    </transition>
  </q-page>
</template>

<script>
export default {
  name: 'PageInicial',
  components:{
    'imagens': require('components/Carousel').default,
  },
  data() {
    return {
      pesquisa: '',
      imagens: {
        1:{
          "id": 1,
          "path": "https://i1.wp.com/infocul.pt/wp-content/uploads/2020/03/thumb.jpg?fit=650%2C365&ssl=1"
        },
        2:{
          "id": 2,
          "path": "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/casal-viajando-capa2019-01-820x430.jpg"
        },
      }
    }
  },
}
</script>

<style lang="css">

</style>