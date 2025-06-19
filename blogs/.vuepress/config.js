module.exports = {
  "base": "/wenyiLove/",
  "title": "文艺的屋",
  "description": "Welcome to wenyiLove",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/wman.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e072087a21b1865aa670ebe1fe0b6bcb";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "icon": "reco-other",
        "items" : [
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/admire_fish?type=blog",
            "icon": "reco-csdn"
          },
          {
            "text": "Bilibili",
            "link": "https://space.bilibili.com/1716109772",
            "icon": "reco-bilibili"
          },
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/wman.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "呆呆",
    "authorAvatar": "/man.jpg",
    "startYear": "2025",
    "valineConfig": {
      "appId": 'j3CX5j5vlcVzGdVS9U2zf4Cl-gzGzoHsz',// your appId
      "appKey": 'Eokc1nYgk7E8DdaePLHmpO41', // your appKey
      "placeholder": '留下gravatar绑定的邮箱可以显示头像噢~',
      "pageSize": 10,
      "visitor": true
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  "locales": {
    '/': {
      "lang": "zh-CN"
    }
  },
  "plugins":[
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        "theme":[
          'miku', 'whiteCat', 'wanko', 'blackCat', 'z16'
        ],
        "clean":false,
        "messages":{
          "welcome": '欢迎文艺回家',
          "home": '心里的花，我想要带你回家。',
          "theme": '好吧，希望你能喜欢我的其他小伙伴。',
          "close": '你不喜欢我了吗？痴痴地望着你。'
        },
        "modelStyle":{ right: '90px', bottom: '20px', opacity: '1' },
        "messageStyle": { right: '68px', bottom: '230px' },
        "mobile": {
          show: false // 是否在移动设备上显示(default: false)
        },
        // "width": 250,
        // "height": 320
      }
    ],
    ['dynamic-title',{
      showText: '(/≧▽≦/)欢迎回来~',
      hideText: '(●—●)bye bye~',
      recoverTime: 1000,
    }],
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
    [
      'copyright',
      {
        authorName: '呆呆', // 选中的文字将无法被复制
        minLength: 30, // 如果长度超过  30 个字符
      },
    ],
    ["ribbon-animation", {
      size: 90,   // 默认数据        
      opacity: 0.3,  //  透明度   
      zIndex: -1,   //  层级       
      opt: {           // 色带HSL饱和度       
        colorSaturation: "80%",      // 色带HSL亮度量    
        colorBrightness: "60%",    // 带状颜色不透明度  
        colorAlpha: 0.65, // 在HSL颜色空间中循环显示颜色的速度有多快   
        colorCycleSpeed: 6,         // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)          
        verticalPosition: "center",           // 到达屏幕另一侧的速度有多快          
        horizontalSpeed: 200,           // 在任何给定时间，屏幕上会保留多少条带         
        ribbonCount: 2,           // 添加笔划以及色带填充颜色          
        strokeSize: 0,           // 通过页面滚动上的因子垂直移动色带          
        parallaxAmount: -0.5,           // 随着时间的推移，为每个功能区添加动画效果           
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示         
      ribbonAnimationShow: true  // 滑动彩带       
    }],
  ]
}