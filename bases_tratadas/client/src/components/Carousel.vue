<template>
    <div>
        <q-carousel
          class="rounded-borders"
          animated
          v-model="slide"
          arrows
          navigation
          infinite
        >
          <q-carousel-slide
            v-for="img in imagens"
            :key="img.key"
            :name="img.id"
            :img-src="img.path" />
        </q-carousel>
    </div>
</template>

<script>
export default {
    props: ['imagens'],
    data() {
      return {
        slide: 1,
      }
    },
}
</script>

<style lang="css">
  @media screen and (max-width: 768px){
    .q-carousel {
      max-height: 250px;
    }
  }
</style>