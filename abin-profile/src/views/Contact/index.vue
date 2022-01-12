<template>
  <div class="contact-content col-xss-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div style="position: relative; display: inline-block; width: 335px; height: 690px;">
      <img class="iphone7" src="@/assets/images/icon/black-iphone-7.png" style="width: 100%; position: absolute; top: 0px; left: 0px;">
      <div style="position: absolute; left: 17px; top: 80px; width: 300px; height: 530px; overflow-y: scroll;">
        <div style="position: relative;">
          <img class="img-fluid about-head" src="@/assets/images/head_2018_06_24.jpg">
          <div class="name-block" style="background: gray;opacity: 0.6;"></div>
          <div class="name-block" style="color: white; text-align: left; padding-left: 10px; padding-top: 10px;">
            <p style="line-height: 26pt;font-size: 32pt;">ABIN</p>
            <p style="font-size: 16pt;margin-bottom: 0px;line-height: 12pt;">曹宏斌</p>
          </div>
        </div>
        <div style=" background: white; padding: 20px;text-align: left;">
          <template v-for="(contact, index) in contactList">
            <div :key="index">
              <div style="position: relative; margin-top: 20px;">
                <b-icon 
                  :icon="contact.icon"
                  class="icon"></b-icon>
                <img v-if="contact.image" :src="require(`@/assets/images/icon/${contact.image}`)" style="position: absolute; width: 25px;">
                <div style="display: inline-block; margin-left: 45px;">
                    <p style="margin-bottom: 5px;">{{ contact.val }}</p>
                    <p style="color: gray;">{{ contact.subType }}</p>
                    <img src="@/assets/images/icon/Chat-Icon-File.png" style="position: absolute;right: 0px;top: 0px;width: 25px;">
                  </div>
                </div>
              <div class="gray-border"></div>
            </div>
          </template>

          <!-- <div style="position: relative;">
            <div class="glyphicon glyphicon-earphone" style="position: absolute; top: 7px; left: 0px; color: #3F4DB8; margin-right: 20px; font-size: 16pt;"></div>
            <div style="display: inline-block; margin-left: 45px;">
              <p style="margin-bottom: 5px;">0909-393-711</p><p style="color: gray;">Mobile</p>
              <img src="@/assets/images/icon/Chat-Icon-File.png" style="position: absolute;right: 0px;top: 0px;width: 25px;">
            </div>
          </div>
          <div class="gray-border"></div>
          <div style="position: relative; margin-top: 20px;">
            <div class="glyphicon glyphicon-envelope" style="position: absolute; top: 7px; left: 0px; color: #3F4DB8; margin-right: 20px; font-size: 16pt;"></div>
          <div style="display: inline-block; margin-left: 45px;">
              <p style="margin-bottom: 5px;">aaa51507@gmail.com</p><p style="color: gray;">Personal</p>
              <img src="@/assets/images/icon/Chat-Icon-File.png" style="position: absolute;right: 0px;top: 0px;width: 25px;">
            </div>
          </div>
          <div class="gray-border"></div>
          <div style="position: relative; margin-top: 20px;">
            <img src="@/assets/images/icon/Line_logo.png" style="position: absolute; width: 25px;">
            <div style="display: inline-block; margin-left: 45px;">
              <p style="margin-bottom: 5px;">ID: 22830534</p><p style="color: gray;">Personal</p>
              <img src="@/assets/images/icon/Chat-Icon-File.png" style="position: absolute;right: 0px;top: 0px;width: 25px;">
            </div>
          </div>
          <div class="gray-border"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {
      contactList: [{
        type: "Mobile",
        subType: "Mobile",
        val: "0909-393-711",
        icon: "telephone-fill",
        image: ""
      },{
        type: "Email",
        subType: "Personal",
        val: "aaa51507@gmail.com",
        icon: "envelope-fill",
        image: ""
      },{
        type: "Line",
        subType: "Personal",
        val: "ID: 22830534",
        icon: "glyphicon-envelope",
        image: "Line_logo.png"
      }]
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
  .contact-content {
    margin-top: 0px;
    text-align: center;
  }
  .name-block {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 80px;
  }
  .gray-border {
    border-top: 1px #4B79BD dotted;
  }
  @media (min-width: 768px) {
    .contact-content {
      margin-top: 60px;
    }
  }
  .icon {
    position: absolute;
    top: 7px;
    left: 0px;
    color: #3F4DB8;
    margin-right: 20px;
    font-size: 16pt;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
</style>
