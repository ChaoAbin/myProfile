<template>
  <div class="about">
    <div class="row head-block">
        <div class="col-xss-12 col-xs-12 col-sm-12 col-md-3 col-lg-3" style="text-align: center;">
            <img class="my-photo" src="@/assets/images/head_2022_03.jpg">
        </div>

        <div class="col-xss-12 col-xs-12 col-sm-12 col-md-9 col-lg-9">
            <h1 class="name">曹宏斌 Abin</h1>
            <h2 id="title" style="font-weight: bold; font-size: 16pt; margin-bottom: 10px;">網頁全端工程師</h2>
            <h3 style="font-weight: bold; font-size: 12pt; margin-bottom: 10px;">擅長使用 JavaScript、PHP、Groovy……等各種程式語言。</h3>
            <p>現職於IIT內的系統維運人員，擅長團隊合作，主要負責PHP、Grails的系統維運與RWD網頁開發，從網頁前端開始學習相關的IT技術，html/css/jquery一直到現在RWD的設計切版，都非常的拿手，伺服器方面，使用Linux作業系統與PHP/MySQL來進行開發，藉此可更瞭解伺服器的相關應用，熟悉這些工具之後，才能在與業主提案討論時，快速的提供意見，讓我在溝通與合作的技巧更卓越，解決問題的能力，和案件時程的規劃，皆有專業的水準。</p>
            <p>可獨立作業，從與業主接洽需求、系統分析、資料庫的規劃、網頁切版，擁有八年多的設計經歷，一路從網頁前端，進步到全端網站設計師，具有豐富的實戰經驗，已經準備好要找個舞台來好好施展身手了。</p>
            <div class="contact">
                <p><b-icon icon="telephone"></b-icon>0909393711</p>
                <p><b-icon icon="envelope"></b-icon>aaa51507@gmail.com</p>
            </div>
        </div>
    </div>

    <div class="row skill">
      <div class="col-xss-12 col-xs-12 col-sm-12 col-md-4" style="margin-top: 20px;">
        <h3>Front-End</h3>
        <hr/>
        <p>JavaScript: Vue/React/微信小程序/Backbone/jQuery</p>
        <p>HTML</p>
        <p>CSS: SASS/SCSS/Bootstrap</p>
        <p>Ajax/RESTful API</p>
        <p>App WebView</p>
      </div>

      <div class="col-xss-12 col-xs-12 col-sm-12 col-md-4" style="margin-top: 20px;">
        <h3>Back-End</h3>
        <hr/>
        <p>PHP: Laravel/CodeIgniter/Slim/OpenCart/Composer</p>
        <p>NodeJs: express/npm/pm2</p>
        <p>Groovy: Java/Grails</p>
        <p>Python: django</p>
      </div>

      <div class="col-xss-12 col-xs-12 col-sm-12 col-md-4" style="margin-top: 20px;">
        <h3>System</h3>
        <hr/>
        <p>Linux: CentOS/Ubuntu</p>
        <p>Web Servers: Apache HTTP Server/Nginx Web Server/Apache Tomcat/NodeJS</p>
        <p>Cloud platform: firebase/Hicloud(中華電信)</p>
        <p>Shell Script</p>
      </div>

      <div class="col-xss-12 col-xs-12 col-sm-12 col-md-4" style="margin-top: 20px;">
        <h3>Database</h3>
        <hr/>
        <p>MySQL: DbVisualizer/phpMyadmin</p>
        <p>MongoDB: Robo 3T</p>
      </div>

      <div class="col-xss-12 col-xs-12 col-sm-12 col-md-4" style="margin-top: 20px;">
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

    <div class="col-xs-12 col-sm-12 col-md-8 offset-md-2 history">
        <div class="row" v-for="(val, key) in _history" :key="key" style="position: relative;">
            <div class="col-xs-2 col-sm-1 item-bullet"></div>
            <div class="col-xs-10 col-sm-11 item">
                <h5><b>{{ val.company }}</b></h5>
                <h6><b>{{ val.title }} {{ val.time }}</b></h6>
                <p>{{ val.desc }}</p>
                <div 
                    v-for="(project, pKey) in val.projects"
                    :key="pKey"
                    class="work-list">
                    <b-button v-b-toggle="`about-${key}-${pKey}`" class="project-name">
                        {{ project.name }}
                    </b-button>
                    <a v-if="project.link" target="_blank" :href="project.link" class="project-link">
                        <b-icon icon="box-arrow-down-right" />
                    </a>
                    <b-collapse :id="`about-${key}-${pKey}`" visible="true">
                        <ul>
                            <li v-for="(r, rKey) in project.responsible" :key="rKey">
                                {{ r }}
                            </li>
                        </ul>
                        <!-- <p>
                            <span>Skills: </span>
                            <span>{{ project.skill }}</span>
                        </p> -->
                    </b-collapse>
                </div>
            </div>
        </div>
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
    .head-block {
        color: var(--blue-2);

        .name {
            font-size: 24pt;
        }
        .my-photo {
            width: 100%;
            max-width: 200px;
        }
        .contact {
            font-size: 12pt;
            svg {
                margin-right: 10px;
            }
        }
    }
    .skill {
        h3, hr {
            color: var(--blue-2);
        }
    }

    /* time line */
    .item-bullet {
        position: static;
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
    .item {
        letter-spacing: 1px;
        padding-bottom: 10px;

        h3, h4, h5, h6 {
            line-height: 26px;
            font-weight: bold;
            color: var(--blue-2);
            margin: 0px 0px 10px 0px;
        }
        h6 {
            font-size: 16px;
        }
        .work-list, ul {
            padding-top: 15px;
            margin-bottom: 0px;
        }
        .project-name {
            background-color: var(--blue-1);
            border-color: var(--blue-1);
            &:focus {
                box-shadow: none;
            }
        }
        .project-link {
            transform: rotate(270deg);
            display: inline-block;
            line-height: 38px;
            font-size: 19px;
            margin-left: 10px;
            margin-bottom: 0px;
        }
        // a {
        //     font-size: 16px;
        //     display: block;
        //     margin: 20px 0px 10px 0px;
        // }
        li {
            list-style: none;

            &::before {
                content: "-";
                text-indent: -5px;
            }
        }
        ul, li {
            padding-left: 0px;
            font-size: 16px;
            color: #81A5CC;
        }
    }
</style>
