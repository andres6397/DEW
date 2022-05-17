<template>
  <div class="about">
    <CrearEventoPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import CrearEventoPage from '@/components/CrearEventoPage.vue'

export default {
  name: 'CrearEvento',
  components: {
    CrearEventoPage
  }
}
</script>