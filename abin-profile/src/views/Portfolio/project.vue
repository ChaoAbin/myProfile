<template>
  <div class="project">
    <div
      v-for="p in list"
      :key="p.id"
      :ref="p.id"
      class="row" style="margin-bottom: 1000px;">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h1>
          {{ p.name }}
        </h1>
      </div>
    </div>
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
  data() {
    return {
      project: {},
      list: [],
      hasScrollIntoView: false
    }
  },
  mounted() {
    window.pp = this
    let project = Portfolio.find(el => el.name === this.$route.params.project)
    if (!project) {
      this.$router.push({ path: '/portfolio' })
      this.$destroy(true)
    }
    this.project = project
    this.list = Portfolio.filter(el => el.company === this.project.company)
  },
  methods: {
  },
  updated() {
    if (this.list.length && !this.hasScrollIntoView) {
      window.scroll(0, this.$refs[this.project.id][0].offsetTop - document.getElementsByTagName('header')[0].clientHeight - 30)
      this.hasScrollIntoView = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
