export default [{
    "id": "iit_missu",
    "name": "missu",
    "type": "website",
    "company": "香港商英迪思",
    "project": "Miss覓思-購物網",
    "description": "app訊息推播的後台，可發送推播訊息給手機，且可依據選擇的條件進行發送或預約發送。",
    "icon": "img/profile_icon/Missu_icon.jpg",
    "responsible": [{
        "frontend": [        
            "規劃Vue專案的基本架構與資料夾結構",
            "--Vuex、Mixins、Router、Models、VueI18n、axios、Components、run mode...",
            "串接前後台RESTful API，實現登入/登出、註冊、購物、結帳、訂單瀏覽...等相關功能",
            "Ajax使用axios library，並規劃request interceptors",
            "運用Vue Router和Vuex完成路由管理和狀態管理",
            "利用mixins減少重複的程式邏輯",
            "使用VueI18n + Store進行多國語系的轉換",
            "寫一些共用的Component讓團隊的其他人可方便使用",
            "定義環境變數與package script，讓開發與部屬更加容易",
            "使用vue pdf產生pdf檔案，並傳輸檔案給Native，讓app可以下載檔案",
            "定義/串接Native與Js的API，讓App也可以使用超商地圖功能"
        ],
        "backend": [
            "規劃Grails專案的基本架構與資料庫設計",
            "--MVC架構、i18n、init test data、導入spring security rest api...",
            "使用spring security rest api 開發登入系統",
            "開發RESTful API (登入/登出、註冊、購物、結帳、訂單瀏覽...等相關功能)",
            "規劃交易流程與相關錯誤處理",
            "規劃相關排程並使用Grails quartz監控排程狀況",
            "串接金流: 綠界、國聲科技(GSPAY)、永豐(豐收款)",
            "串接物流: 綠界、智信數位(GoodDeal)",
            "串接發票: 綠界、國聲科技(GSPAY)",
            "串接SMTP服務: Gmail、公司的SMTP Server",
            "將訂單與會員資料同步至獎金系統"
        ],
        "else": [
            "建置工程團隊使用的Git Workflow",
            "建置API/系統規則文件已便後續維運",
            "協助修復獎金系統相關Bug"
        ]
    }],
    "link": {
        "web": "https://www.mmshop.com.tw/",
        "googlePlay": "",
        "appleStore": ""
    },
    "images": [{
        "src": "img/iit/PNSServer_01.jpg",
        "desc": "首頁"
    }],
    "front": [{
        "lan": "html、css",
        "lib": null
    },{
        "lan": "javascript",
        "lib": ["jquery"]
    }]
    , "end": [{
        "lan": "PHP",
        "lib": ["phpjobscheduler", "GCM", "APNS"]
    }],
    "db": ["MySQL"],
    "dataType": null,
    "ps": "",
    "dateStart": "2020/12",
    "dateEnd": "Now"
}]
