<template>
  <div class="project">
    {{ $route.params.project }}
  </div>
</template>

<script>
import Portfolio from '@/source/portfolio.js'

export default {
  name: 'Project',
  components: {
  },
  computed: {
  },
  mounted() {
    let project = Portfolio.find(el => el.name === this.$route.params.project)
    if (!project) {
      this.$router.push({ path: '/portfolio' })
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
