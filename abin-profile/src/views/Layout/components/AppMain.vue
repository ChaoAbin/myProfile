<template>
  <section class="main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="key">
          <template v-slot:breadcrumb>
            <!-- <Breadcrumb /> -->
          </template>
        </router-view>
      </keep-alive>
    </transition>
    <transition name="fade-transform" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive" :key="key">
        <template v-slot:breadcrumb>
          <!-- <Breadcrumb /> -->
        </template>
      </router-view>
    </transition>
  </section>
</template>

<script>
// import Breadcrumb from './Breadcrumb'

export default {
  name: 'AppMain',
  components: {
    // Breadcrumb
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
