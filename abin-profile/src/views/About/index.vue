<template>
  <div class="about">
    <div class="col-xss-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 profile-text" style="position: relative;">
        <p id="title" style="font-weight: bold; font-size: 15pt; margin-bottom: 20px; ">網頁全端工程師，擅長使用 JavaScript、PHP、Groovy……等各種程式語言。</p>

        <p>現職於IIT內的系統維運人員，擅長團隊合作，主要負責PHP、Grails的系統維運與RWD網頁開發，從網頁前端開始學習相關的IT技術，html/css/jquery一直到現在RWD的設計切版，都非常的拿手，伺服器方面，使用Linux作業系統與PHP/MySQL來進行開發，藉此可更瞭解伺服器的相關應用，熟悉這些工具之後，才能在與業主提案討論時，快速的提供意見，讓我在溝通與合作的技巧更卓越，解決問題的能力，和案件時程的規劃，皆有專業的水準。</p>
        <p>可獨立作業，從與業主接洽需求、系統分析、資料庫的規劃、網頁切版，擁有八年多的設計經歷，一路從網頁前端，進步到全端網站設計師，具有豐富的實戰經驗，已經準備好要找個舞台來好好施展身手了。</p>
    </div>

    <div class="col-xss-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 profile-img">
        <div class="heand">
            <img class="img-responsive my-photo" src="@/assets/images/head_2018_06_25.png">
            <div class="name-block">
                <p class="name-en">Abin</p>
                <p class="name-ch">曹宏斌</p>
            </div>
        </div>
    </div>

    <div class="clearfix"></div>

    <h2>技能</h2>
    <div class="row">
      <div class="col-4">
        <h3>Front-End</h3>
        <hr/>
        <p>JavaScript: Vue/React/微信小程序/Backbone/jQuery</p>
        <p>HTML</p>
        <p>CSS: SASS/SCSS/Bootstrap</p>
        <p>Ajax/RESTful API</p>
        <p>App WebView</p>
      </div>

      <div class="col-4">
        <h3>Back-End</h3>
        <hr/>
        <p>PHP: Laravel/CodeIgniter/Slim/OpenCart/Composer</p>
        <p>NodeJs: express/npm/pm2</p>
        <p>Groovy: Java/Grails</p>
        <p>Python: django</p>
      </div>

      <div class="col-4">
        <h3>Database</h3>
        <hr/>
        <p>Linux: CentOS/Ubuntu</p>
        <p>Web Servers: Apache HTTP Server/Nginx Web Server/Apache Tomcat/NodeJS</p>
        <p>Cloud platform: firebase/Hicloud(中華電信)</p>
        <p>Shell Script</p>
      </div>

      <div class="col-4">
        <h3>System</h3>
        <hr/>
        <p>MySQL: DbVisualizer/phpMyadmin</p>
        <p>MongoDB: Robo 3T</p>
      </div>

      <div class="col-4">
        <h3>Other</h3>
        <hr/>
        <p>Version Control: Git/SVN/SourceTree</p>
        <p>IDE: VScode/Sublime/notepad++</p>
        <p>Tools: Postman/VMWare</p>
        <p>Android WebView App</p>
        <p>ElectronJs</p>
      </div>
    </div>

    <div class="dot-line"></div>



    <div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 history">
        <div class="row" v-for="(val, key) in _history" :key="key" style="position: relative;">
            <div class="col-xs-2 col-sm-1 item-bullet"></div>
            <div class="col-xs-10 col-sm-11 item">
                <h3><b>{{ val.company }} {{ val.title }}</b></h3>
                <h3><b>{{ val.time }}</b></h3>
                <div>
                  工作內容簡述
                </div>
                <ul class="work-list">
                  負責的專案
                  --特別的貢獻
                </ul>
                <div>
                  相關技術(MySQL VueJs)
                </div>
            </div>
        </div>
    </div>

    <div>
      看作品集頁
    </div>

  </div>
</template>

<script>
import History from '@/source/history.json'

export default {
  name: 'About',
  components: {
  },
  computed: {
    _history() {
      return History
    }
  },
  mounted() {
    console.log('History: ', History)
  },
  methods: {
    sort_by_key(array, key) {
      return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
  }
}
</script>

<style lang="scss" scoped>
    /* common */
    .block, .block img, .dot-line  {
        position: relative;
        width: 100%;
    }
    .dot-line {
        margin: 60px 0px;
        border-top: 2px #4B79BD dotted;
    }
    
    /* header block */
    .heand {
        position: relative;
        color: #548FCE;
    }
    .my-photo {
        width: 100%;
    }
    .name-block {
        position: absolute;
        height: 100px;
        left: -20px;
        top: 0px;
        bottom: 90px;
        margin: auto;
    }
    .name-block p {
        margin-bottom: 0px;
    }
    .name-en {
        font-size: 48px;
    }
    .name-ch {
        font-size: 20px;
    }
    .profile-img {
        float: right;
    }
    .profile-text {
        float: left;
        color: #548FCE;
    }
    .phone-pc-block {
        position: absolute;
        right: 0px;
        bottom: 0px;
    }

    /* time line */
    .item-bullet {
        position: static;
    }
    .history .row {
        margin-bottom: 25px;
    }
    .row:before, .row:after {
        content: " ";
        display: table;
    }
    .row:after {
        clear: both;
    }
    .history .row:last-child .item-bullet:after {
        opacity: 0;
    }
    .item-bullet:after {
        content: '';
        width: 1px;
        height: 100%;
        background-color: #548FCE;
        display: block;
        margin-left: 7.5px;
        top: 10px;
        z-index: 0;
    }
    .item-bullet:before, .item-bullet:after {
        position: absolute;
        left: 4.1666666667%;
    }
    .item-bullet:before {
        content: ' ';
        width: 15px;
        height: 15px;
        border-radius: 50%;
        text-align: center;
        display: inline-block;
        background-color: #548FCE;
        margin-top: 10px;
        margin-left: 0.5px;
        z-index: 1;
    }
    .item h3 {
        font-size: 18px;
        line-height: 26px;
        font-weight: bold;
        color: #548FCE;
        margin: 0px 0px 10px 0px;
    }
    .item li {
        list-style: none;
    }
    .item ul, .item li {
        padding-left: 0px;
        font-size: 16px;
        color: #81A5CC;
    }
    .item .description li {
        color: #548FCE;
 
        letter-spacing: 1px;
    }

    /* profile list */
    .profile-list {
        height: auto;
    }
    .profile-list:hover .profile-content {
        animation: none;
    }
    .profile-content {
        position: relative;
        box-shadow: 0px 4px 9px #ABBDCF;
        background: white;
        border-radius: 8px;
    }
    /* .profile-list:hover .profile-content {
        animation-name: mouseOverProfile;
        animation-duration:2s;
        animation-iteration-count:infinite;
        animation-timing-function:step-start;
    } */
    .all-rights-reserved {
        display: none;
    }
    .profile-title, .profile-sub-title {
        font-size: 15px;
        color: #548FCE;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .profile-sub-title {
        width: 100%;
        height: 20px;
        margin-bottom: 10px;
    }
    .profile-desc {
        font-size: 13px;
        color: #93B3E3;
        height: 37px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .nav > li > a.profile-type-link:hover {
        background-color: transparent;
    }
    .nav > li > a.profile-type-link {
        padding: 0px;
    }

    @keyframes mouseOverProfile {
        0%{
            top: 0px;
        }
        100%{
            top: -20px;
        }
    }
    .customized .see-detail {
        position: relative;
        width: 100%;
        height: auto;
        left: 0px;
        top: 0px;
        border-radius: 0px 0px 8px 8px;
    }
    .customized .see-detail-content {
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 10%;
        color: #FFFFFF;
        letter-spacing: 1px;
    }
    .see-detail-content h3 {
        color: #ffffff;
        font-weight: 500;
        text-align: left;
        margin: 0px 0px 22px 0px;
    }
    .see-detail.customized-1 {
        background-color: #656CEE;
    }
    .see-detail.customized-2 {
        background-color: #38B1E3;
    }
    .see-detail.customized-1 .see-detail-content button {
        color: #656CEE;
    }
    .see-detail.customized-1 .see-detail-content button:hover {
        color: #fff;
        background-color: #444BCD;
        border: 1px solid #fff;
    }
    .see-detail.customized-2 .see-detail-content button:hover {
        color: #fff;
        background-color: #088CC2;
        border: 1px solid #fff;
    }
    .customized .see-detail-content {
        padding: 5%;
    }
    .see-detail-content button {
        padding: 10px 0px;
        position: absolute;
        bottom: 0px;
        width: 80%;
        background: #FFFFFF;
        border-radius: 10px;
        left: 0px;
        margin: 0px 5% 10% 10%;
        border: none;
    }
    .customized img {
        border-radius: 8px 8px 0px 0px;
    }
    .customized .see-detail-content a,
    .customized .see-detail-content a button {
        position: relative;
        width: 100%;
        min-height: 46px;
        margin: 0px;
        display: inline
    }

    @media (max-width: 767px) {
	    .timeline {
            left: 0px;
        }
        .name-block {
            left: 0px;
        }
    }
    @media (min-width: 992px) {
        /* header block */
        .profile-img.col-md-6 {
            float: left;
        }
        .profile-text.col-md-6 {
            float: right;
        }
    }
</style>
