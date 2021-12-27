<template>
  <footer class="myfooter">
    <!-- 問與答/隱私權政策/條款與細則 -->
    <nav class="nav justify-content-center footer-navigationBar">
      <a :class="'nav-link text-reset ' + faqCSS" href="#/faq">FAQ</a>
      <a :class="'nav-link text-reset ' + privacyPolicyCSS" href="#/privacyPolicy">隱私權政策</a>
      <a :class="'nav-link text-reset ' + termsConditionsCSS" href="#/termsConditions">條款與細則</a>
    </nav>

    <!-- 公司地址/電話 -->
    <address class="address">
      <div class="container-fluid mycontainer">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6 border-right">公司地址：台北市中正區杭州南路1段15之1號22樓</div>
          <div class="col-12 col-sm-6">公司電話：02-2391-7778</div>
        </div>
      </div>
    </address>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      faqCSS: '',
      privacyPolicyCSS: '',
      termsConditionsCSS: ''
    }
  },
  watch: {
    '$route.name': {
      handler(newVal, oldVal) {
        this.initCss(newVal)
      }
    }
  },
  mounted() {
    this.initCss(this.$route.name)
    console.log()
  },
  methods: {
    initCss(page) {
      switch (page) {
        case 'FAQ':
          this.faqCSS = 'active'
          this.privacyPolicyCSS = ''
          this.termsConditionsCSS = ''
          break
        case 'PrivacyPolicy':
          this.faqCSS = ''
          this.privacyPolicyCSS = 'active'
          this.termsConditionsCSS = ''
          break
        case 'TermsConditions':
          this.faqCSS = ''
          this.privacyPolicyCSS = ''
          this.termsConditionsCSS = 'active'
          break
        default:
          this.faqCSS = ''
          this.privacyPolicyCSS = ''
          this.termsConditionsCSS = ''
          break
      }
    }
  }
}
</script>
