<template>
  <div id="app">
    <div class="page-frame fixed-border-left"></div>
    <div class="page-frame fixed-border-right"></div>
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
  --blue-3: #528ecc;
  --blue-4: #93B3E3;
  --background-global: #EFF4FB;
}
body {
  background-color: var(--background-global);
  padding: 5px;
  font-size: 14px;
  font-family: 'Noto Sans TC', sans-serif;
}
p {
  margin: 0 0 10px;
}
.page-frame {
  border-color: var(--blue-3);
  border-style: solid;

  &.fixed-border-top, &.fixed-border-bottom,
  &.fixed-border-left, &.fixed-border-right {
    position: fixed;
    left: 0px;
    width: 100%;
    z-index: 1;
  }
  &.fixed-border-top {
    top: 0px;
  }
  &.fixed-border-bottom {
    bottom: 0px;
  }
  &.fixed-border-left, &.fixed-border-right {
    top: 0px;
    height: 100%;
    width: 5px;
  }
  &.fixed-border-right {
    right: 0px;
    left: auto;
  }
}
#app {
  padding-top: 70px;
}

@media (max-width: 767.98px) {
  body {
    padding: 0px;
  }
  .page-frame {
    border: none;
  }
}
</style>
