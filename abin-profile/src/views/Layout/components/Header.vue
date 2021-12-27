<template>
  <header>
    <b-navbar class="navbar-expand-lg" toggleable fixed>
      <div class="d-flex flex-grow-1">
        <b-navbar-brand class="mr-auto tab-circle-left active" href="/home">
          ABIN WORKS
        </b-navbar-brand>
      </div>

      <div 
        id="myNavbar"
        class="collapse navbar-collapse flex-grow-1 text-right"
        style="justify-content: end;">
        <b-navbar-nav class="ml-auto flex-nowrap pc-navbar">
          <b-nav-item href="/home" active>Home</b-nav-item>
          <b-nav-item href="/about">ABOUT</b-nav-item>
          <b-nav-item href="/works">WORKS</b-nav-item>
          <b-nav-item href="/contact">CONTACT</b-nav-item>
        </b-navbar-nav>
      </div>


      <!-- <b-navbar-toggle target="navbar-toggle-collapse" class="mx-auto">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Link 1</b-nav-item>
          <b-nav-item href="#">Link 2</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  /* new start */
  header {
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
  /* new end */


  .navbar-default {
      background-color: #EFF4FB;
      border-color: transparent;
  }
  .navbar-default .navbar-nav > li > a {
      color: #93B3E3;
  }
  .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus,
  .navbar-default .navbar-toggle .icon-bar {
      color: #548FCE;
  }
  .navbar-default .navbar-toggle .icon-bar {
      background-color: #548FCE;
  }
  .navbar-default .navbar-toggle {
      border-color: transparent;
  }
  .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
      background-color: #f7faff;
  }

  .all-rights-reserved {
      position: relative;
      width: 100%;
      margin: 30px 0px;
      text-align: center;
      color: #548FCE;
  }
  .works-web {
      display: none;
  }
  .works-web > a > p {
      position: relative;
      top: 75px;
      transform: rotate(90deg);
      color:#548FCE;
      letter-spacing: 1px;
  }
  .works-mobile {
      display: inline-block;
      margin-left: 15px;
      margin-top: 8px;
  }
  /* .tab-circle {
      position: relative;
      top: 7px;
      margin-right: 10px;
      display: inline-block;
  } */
  .pcBorder {
      display: none;
  }
  .navbar-header {
      box-shadow: 0px 0px 4px 1px #d7dde5;
  }
  @media (min-width: 768px) {
      .nav.navbar-nav.navbar-horizontal {
          padding-top: 15px;
      }
      .works-web {
          position: fixed;
          top: 80px;
          left: 0px;
          z-index: 10;
          display: none;
      }
      /* .works-mobile .tab-circle {
          position: relative;
          top: 7px;
          margin-right: 10px;
          display: inline-block;
      } */
      .navbar-header {
          position: absolute;
          left: 0px;
          float: none;
          box-shadow: none;
      }
      /* .tab-circle {
          top: 0px;
          width: 15px;
          height: 15px;
          background: transparent;
          border-radius: 100%;
          border: 5px #528ecc solid;
          margin: auto;
          margin-bottom: 5px;
          display: block;
      } */
      .pcBorder {
          display: block;
      }
  }
  @media (min-width: 992px) {
      .all-rights-reserved {
          position: fixed;
          bottom: 40px;
          left: 40px;
          display: block;
          text-align: left;
          margin: 0px;
      }
  }
  @media (min-width: 1400px) {
      .works-web {
          display: block;
      }
      .works-mobile {
          display: none;
      }
  }
  .navbarShadow {
      box-shadow: 0px 0px 8px #337ab7;
  }
  .works-mobile > a:hover {
      color: #548FCE;
  }
</style>
