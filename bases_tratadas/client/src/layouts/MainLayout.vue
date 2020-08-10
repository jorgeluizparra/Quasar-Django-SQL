<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
    
      <q-toolbar class="text-white bg-primary">
        <q-toolbar-title class="q-ml-md">
          <div class="text-h4">A Viajem</div>
        </q-toolbar-title>
        <q-btn
          flat
          color="white"
          round
          icon="shopping_cart"
          class="q-ma-sm">
            <q-badge
              color="black"
              floating>
              {{itensCarrinho}}
            </q-badge>
        </q-btn>
      </q-toolbar>

      <q-toolbar 
        id="top-nav"
        dense
        class="bg-accent text-primary">
        <q-tabs v-model="tab">
          <q-route-tab
            v-for="page in pages"
            :key="page.title"
            :name="page.title"
            :label="page.title"
            :to="page.link" />
        </q-tabs>
      </q-toolbar>
    
    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs
          v-model="tab"
          dense
          class="bg-accent text-primary"
        >
          <q-route-tab
            v-for="page in pages"
            :key="page.title"
            :name="page.title"
            :icon="page.icon"
            :label="page.title"
            :to="page.link" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex"

const linksData = [
  {
    title: 'Pagina inicial',
    icon: 'house',
    link: '/'
  },
  {
    title: 'Hospedagens',
    icon: 'list',
    link: '/hospedagens'
  },
  {
    title: 'Media de preco',
    icon: 'monetization_on',
    link: '/media'
  },
];

export default {
  name: 'MainLayout',
  data () {
    return {
      pages: linksData,
      tab: 'Pagina inicial'
    }
  },
  computed: {
    ...mapGetters('carrinho', ['itensCarrinho'])
  },
}
</script>

<style lang="css">
  @media screen and (min-width: 768px){
    .q-footer {
      display: none;
    }
  }
  @media screen and (max-width: 768px){
    #top-nav {
      display: none;
    }
  }
</style>
