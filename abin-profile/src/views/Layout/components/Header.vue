<template>
  <header :class="`${(showNavbarShadow ? 'navbar-shadow': '')}`">
    <b-navbar class="navbar-expand-md container-xl" toggleable fixed>
      <div class="d-flex flex-grow-1">
        <b-navbar-brand class="mr-auto tab-circle-left active" href="/home">
          ABIN WORKS
        </b-navbar-brand>
      </div>

      <b-navbar-toggle target="nav_collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav_collapse" style="justify-content: end;" is-nav>
        <b-navbar-nav class="ml-auto flex-nowrap pc-navbar">
          <b-nav-item
            v-for="(link, index) in links"
            :key="index"
            :to="link.toLowerCase()"
            :active="($route.path.indexOf(link.toLowerCase()) !== -1)">{{ link }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>

export default {
  name: 'Header',
  computed: {
  },
  data() {
    return {
      links: [
        'Home', 'About', 'Portfolio', 'Contact'
      ],
      showNavbarShadow: (window.scrollY ? true : false)
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      this.showNavbarShadow = (window.scrollY ? true : false)
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    width: calc(100% - 10px);
    top: 5px;
    left: 0px;
    right: 0px;
    z-index: 10;
    background-color: var(--background-global);
    margin: auto;

    a.navbar-brand, .nav-item .nav-link {
      position: relative;
      color: var(--blue-2);
      font-size: 14px;
    }
    a.navbar-brand:hover, .nav-item a.nav-link:hover,
    .tab-circle:hover::before, .tab-circle-left:hover::before {
      color: var(--blue-1);
    }
  }
  // 小圈圈
  .tab-circle, .tab-circle-left, .pc-navbar .nav-item a {
    &.active {
      color: var(--blue-1);
    }
    &::before {
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      content: '';
      width: 15px;
      height: 15px;
      background: transparent;
      border-radius: 100%;
      border: 5px var(--blue-2) solid;
      margin: auto;
      display: none;
    }

    &.active::before {
      display: block;
    }
  }
  .tab-circle-left {
    padding-left: 25px;

    &::before {
      right: auto;
      bottom: 3px;
    }
  }
  .tab-circle-top, .pc-navbar .nav-item a {
    padding-top: 25px;
    
    &::before {
      top: 5px;
      bottom: auto;
    }
  }
  .navbar-toggler {
    color: var(--blue-1);
    border-color: var(--blue-1);
  }
  // 避免變粗
  .navbar-toggler:focus {
    box-shadow: none;
  }
  .navbar-shadow {
    box-shadow: 0px 0px 8px var(--blue-1);
  }

  @media (min-width: 576px) {
    .container-sm, .container {
      max-width: 100%;
    }
  }
  @media (max-width: 767.98px) {
    header {
      width: 100%;
      top: 0px;
      left: 0px;
    }
    .navbar-collapse {
      margin-top: 0.5rem;
      .pc-navbar {
        .nav-item a {
          padding: 10px 0px 10px 25px;
          top: 0px;
          left: 5px;

          &::before {
            left: 0px;
            right: auto;
            bottom: auto;
            top: 13px;
          }
        }
      }
    }
  }
</style>
