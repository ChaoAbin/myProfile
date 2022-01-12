<template>
  <div class="home">
    <img src="@/assets/images/icon/home.png" style="width: 100%; position: absolute; top: 0px; left: 0px;">
    <img src="@/assets/images/icon/home.png" style="width: 100%; top: 0px; left: 0px; visibility: hidden;">

    <div class="absolute-center content-block">
      <div class="absolute-center"> 
        <div class="content-title">
          <p>{{ new Date().getFullYear() }}</p>
          <span>ABIN WORKS</span>
          <img style="margin-left: 15px;" src="@/assets/images/icon/icon_phone.png">
          <img style="margin-left: 15px;" src="@/assets/images/icon/icon_pc.png">
        </div>
        <br>
        <div class="content-desc">
          <p>JavaScript . Bootstrap . VueJS . ReactJS</p>
          <p>Groovy . Grails . JAVA . NodeJS . Python</p>
          <p>PHP . CodeIgniter . Slim . Laravel</p>
          <p>MySQL . MongoDB</p>
          <p>Android</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
  .home {
    position: relative;
    top: 0px;
    bottom: 0px;
    width: 100%;
    max-width: 757px;
    margin: auto;
  }
  .absolute-center {
    position: absolute;
    margin: auto;
    top: 0px;
    bottom: 0px; 
    right: 0px;
    left: 0px;
  }
  .content-title {
    font-size: 14pt;
    color: var(--blue-2);
  }
  .content-desc {
    font-size: 12pt;
    color: var(--blue-4);
  }
  .content-block {
    width: 60%;
    height: 55%;
    min-width: 250px;
  }
  .absolute-center.content-block {
    top: 6%;
    left: 15%;
  }
  /* xs - Extra small devices (portrait phones, less than 576px) */
  @media (max-width: 575.98px) {
    .content-title {
      font-size: 14pt;
    }
    .content-desc {
      font-size: 10pt;
    }
    .content-block {
      height: 64%;
    }
    .absolute-center.content-block {
      top: 0px;
      left: 15%;
    }
  }

  /* sm - Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    .content-title {
      font-size: 17pt;
    }
    .content-desc {
      font-size: 13pt;
    }
    .content-block {
      height: 50%;
    }
    .absolute-center.content-block {
      top: 6%;
      left: 15%;
    }
  }

  /* md - Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {  }
  @media (min-width: 768px) {
    .content-title {
      font-size: 20pt;
    }
    .content-desc {
      font-size: 16pt;
    }
  }
  /* lg - Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1199.98px) {  }

  /* xl - Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {  }
</style>
