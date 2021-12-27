<template>
  <div class="bg products-home">
    <Header />
    <app-main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import AppMain from './components/AppMain'
import Footer from './components/Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    AppMain,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
