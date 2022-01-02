<template>
  <div id="app">
    <div class="page-frame fixed-border-top"></div>
    <div class="page-frame fixed-border-bottom"></div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  updated() {
  },
  mounted() {
  },
  destroyed() {
  }
}
</script>

<style lang="scss">
:root {
  --blue-1: #337ab7;
  --blue-2: #548FCE;
  --bule-3: #528ecc;
  --background-global: #EFF4FB;
}
body {
  background-color: var(--background-global);

  &.page-frame {
    border-width: 0px 5px 0px 5px;
  }
}
.page-frame {
  border-color: var(--bule-3);
  border-style: solid;

  &.fixed-border-top, &.fixed-border-bottom {
    position: fixed;
    left: 0px;
    width: 100%;
  }
  &.fixed-border-top {
    top: 0px;
  }
  &.fixed-border-bottom {
    bottom: 0px;
  }
}
#app {
  padding-top: 70px;
}
</style>
