### 项目目录如下
~~~
├─build
│  ├─build.js
│  ├─check-versions.js
│  ├─utils.js
│  ├─vue-loader.conf.js
│  ├─webpack.base.conf.js
│  ├─webpack.dev.conf.js
│  └─webpack.prod.conf.js
├─config
│  ├─dev.env.js
│  ├─index.js
│  ├─prod.env.js
│  └─test.env.js
├─dist
│  ├─static
│  │   ├─css
│  │   └─js
│  ├─index.html
│  └─webPage1.html
├─src
│  ├─assets
│  │  ├─css
│  │  └─img
│  ├─components
│  └─modules
│      ├─index
│      │  ├─router
│      │  │   └─index.js
│      │  ├─index.html        //index.html的模板
│      │  ├─index.js          //index.html的入口文件
│      │  └─index.vue
│      └─webPage1
│         ├─webPage1.html
│         ├─webPage1.js
│         └─webPage1.vue
├─static
└─test
~~~

从当前index页面跳转到report页面，只需直接在链接之处直接引用a链接，设置href为report.html即可
