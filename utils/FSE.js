/**
 * Created by OXOYO on 2018/3/10.
 *
 * 知识点数据
 */

module.exports = [
  {
    name: 'FSE',
    title: '全栈',
    description: 'Web全栈工程师技能树梳理',
    type: 'catalog',
    category: '',
    url: {
      site: '',
      github: ''
    },
    children: [
      {
        name: 'FE',
        title: '前端',
        description: '前端知识点',
        type: 'catalog',
        category: '',
        url: {
          site: '',
          github: ''
        },
        children: [
          {
            name: 'Language',
            title: '语言',
            description: '前端语言',
            type: 'catalog',
            category: 'language',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'HTML',
                title: 'HTML',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: '',
                  github: ''
                },
                children: [
                  {
                    name: 'HTML4',
                    title: 'HTML4',
                    description: '',
                    type: 'catalog',
                    category: 'language',
                    url: {
                      site: 'https://www.w3.org/html/',
                      github: ''
                    },
                    children: []
                  },
                  {
                    name: 'HTML5',
                    title: 'HTML5',
                    description: '',
                    type: 'catalog',
                    category: 'language',
                    url: {
                      site: 'https://www.w3.org/TR/html5/',
                      github: ''
                    },
                    children: []
                  }
                ]
              },
              {
                name: 'JavaScript',
                title: 'JavaScript',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://www.ecma-international.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'TypeScript',
                title: 'TypeScript',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://www.typescriptlang.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'CoffeeScript',
                title: 'CoffeeScript',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://coffeescript.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'CSS',
                title: 'CSS',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: '',
                  github: ''
                },
                children: [
                  {
                    name: 'CSS Preprocessor',
                    title: 'CSS Preprocessor',
                    description: '',
                    type: 'node',
                    category: 'css-preprocessor',
                    url: {
                      site: '',
                      github: ''
                    },
                    children: [
                      {
                        name: 'LESS',
                        title: 'LESS',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://lesscss.org/',
                          github: 'https://github.com/less'
                        },
                        children: []
                      },
                      {
                        name: 'SASS',
                        title: 'SASS',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://sass-lang.com/',
                          github: 'https://github.com/sass'
                        },
                        children: []
                      },
                      {
                        name: 'Stylus',
                        title: 'Stylus',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://stylus-lang.com/',
                          github: 'https://github.com/stylus/stylus/'
                        },
                        children: []
                      },
                      {
                        name: 'CSS-Crush',
                        title: 'CSS-Crush',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://the-echoplex.net/csscrush/',
                          github: 'https://github.com/peteboere/css-crush'
                        },
                        children: []
                      },
                      {
                        name: 'Myth',
                        title: 'Myth',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://www.myth.io/',
                          github: 'https://github.com/segmentio/myth'
                        },
                        children: []
                      },
                      {
                        name: 'Rework',
                        title: 'Rework',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: '',
                          github: 'https://github.com/reworkcss/rework'
                        },
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: 'Browser',
            title: '浏览器',
            description: '',
            type: 'catalog',
            category: 'debug-browser',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'IE',
                title: 'IE浏览器',
                description: '',
                type: 'catalog',
                category: 'debug-browser',
                url: {
                  site: 'https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads',
                  github: ''
                },
                children: []
              },
              {
                name: 'Chrome',
                title: 'Chrome浏览器',
                description: '',
                type: 'catalog',
                category: 'debug-browser',
                url: {
                  site: 'https://www.google.cn/chrome/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Firefox',
                title: 'Firefox浏览器',
                description: '',
                type: 'catalog',
                category: 'debug-browser',
                url: {
                  site: 'http://www.firefox.com.cn/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Safari',
                title: 'Safari浏览器',
                description: '',
                type: 'catalog',
                category: 'debug-browser',
                url: {
                  site: 'https://www.apple.com/cn/safari/',
                  github: ''
                },
                children: []
              }
            ]
          },
          {
            name: 'Debug tool',
            title: '调试工具',
            description: '',
            type: 'catalog',
            category: 'debug-tool',
            children: [
              {
                name: 'Fiddler',
                title: 'Fiddler',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'https://www.telerik.com/fiddler',
                  github: ''
                },
                children: []
              },
              {
                name: 'HttpWatch',
                title: 'HttpWatch',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'https://www.httpwatch.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'YSlow',
                title: 'YSlow',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'http://yslow.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'whistle',
                title: 'whistle',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: '',
                  github: 'https://github.com/avwo/whistle'
                },
                children: []
              },
              {
                name: 'wireshark',
                title: 'wireshark',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'https://www.wireshark.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'weinre',
                title: 'weinre',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'http://people.apache.org/~pmuellr/weinre/',
                  github: 'https://www.npmjs.com/package/weinre'
                },
                children: []
              }
            ]
          },
          {
            name: 'IDE',
            title: '编辑器',
            description: '',
            type: 'catalog',
            category: 'develop-tool',
            children: [
              {
                name: 'VIM',
                title: 'VIM',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://www.vim.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Webstorm',
                title: 'Webstorm',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'http://www.jetbrains.com/webstorm/?fromMenu',
                  github: ''
                },
                children: []
              },
              {
                name: 'Sublime',
                title: 'Sublime',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://www.sublimetext.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Notepad++',
                title: 'Notepad++',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://notepad-plus-plus.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'EditPlus',
                title: 'EditPlus',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://www.editplus.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'ATOM',
                title: 'ATOM',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://atom.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Brackets',
                title: 'Brackets',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'http://brackets.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'HBuilder',
                title: 'HBuilder',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'http://www.dcloud.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Ace',
                title: 'Ace',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://ace.c9.io/',
                  github: 'https://github.com/ajaxorg/ace'
                },
                children: []
              },
              {
                name: 'Visual Studio',
                title: 'Visual Studio',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://www.visualstudio.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Eclipse',
                title: 'Eclipse',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'http://www.eclipse.org/',
                  github: ''
                },
                children: []
              }
            ]
          },
          {
            name: 'Book',
            title: '前端书籍',
            description: '',
            type: 'catalog',
            category: 'book',
            children: [
              {
                name: '《JavaScript高级程序设计》',
                title: '《JavaScript高级程序设计》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《编写可维护的JavaScript》',
                title: '《编写可维护的JavaScript》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《jQuery 权威指南》',
                title: '《jQuery 权威指南》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《Javascript语言精粹》',
                title: '《Javascript语言精粹》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《锋利的jQuery》',
                title: '《锋利的jQuery》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript DOM 编程艺术》',
                title: '《JavaScript DOM 编程艺术》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《学习 JavaScript 数据结构与算法》',
                title: '《学习 JavaScript 数据结构与算法》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《ES6标准入门》',
                title: '《ES6标准入门》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript忍者秘籍》',
                title: '《JavaScript忍者秘籍》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《高性能 JavaScript》',
                title: '《高性能 JavaScript》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《HTTP权威指南》',
                title: '《HTTP权威指南》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《编写可维护的JavaScript》',
                title: '《编写可维护的JavaScript》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《HTML5高级程序设计》',
                title: '《HTML5高级程序设计》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《基于MVC的JavaScript Web富应用开发》',
                title: '《基于MVC的JavaScript Web富应用开发》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《你不知道的 JavaScript》',
                title: '《你不知道的 JavaScript》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript 设计模式》',
                title: '《JavaScript 设计模式》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《webkit技术内幕》',
                title: '《webkit技术内幕》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《web性能权威指南》',
                title: '《web性能权威指南》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript框架设计》',
                title: '《JavaScript框架设计》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript函数式编程》',
                title: '《JavaScript函数式编程》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《Node.js+MongoDB+AngularJS Web开发》',
                title: '《Node.js+MongoDB+AngularJS Web开发》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript快速全栈开发》',
                title: '《JavaScript快速全栈开发》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《数据结构与算法JavaScript描述》',
                title: '《数据结构与算法JavaScript描述》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              }
            ]
          },
          // Front-end engineering
          {
            name: 'Front-end engineering',
            title: '前端工程化',
            description: '前端工程化',
            type: 'catalog',
            category: 'front-end-engineering',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'Yeoman',
                title: 'Yeoman',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'http://yeoman.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Bower',
                title: 'Bower',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://bower.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Grunt',
                title: 'Grunt',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://gruntjs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Gulp',
                title: 'Gulp',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://gulpjs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Webpack',
                title: 'Webpack',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://webpack.js.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Browsersync',
                title: 'Browsersync',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://browsersync.io/',
                  github: '',
                  resources: [
                    {
                      title: 'Browsersync中文网',
                      description: '',
                      url: 'http://www.browsersync.cn/'
                    }
                  ]
                },
                children: []
              },
              {
                name: 'npm',
                title: 'npm',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://www.npmjs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'yarn',
                title: 'yarn',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://yarnpkg.com/en/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Travis Ci',
                title: 'Travis Ci',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://www.travis-ci.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Codecov',
                title: 'Codecov',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://codecov.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Mocha',
                title: 'Mocha',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://mochajs.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Chai',
                title: 'Chai',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'http://www.chaijs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'FIS',
                title: 'FIS',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'http://fis.baidu.com/',
                  github: 'https://github.com/fex-team/fis3'
                },
                children: []
              },
              {
                name: 'Rollup',
                title: 'Rollup',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://rollupjs.org',
                  github: ''
                },
                children: []
              },
              {
                name: 'Parcel',
                title: 'Parcel',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://parceljs.org/',
                  github: 'https://github.com/parcel-bundler/parcel'
                },
                children: []
              }
            ]
          },
          {
            name: 'FrameWork',
            title: '框架',
            description: '前端框架',
            type: 'catalog',
            category: 'front-end-framework',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'Angular',
                title: 'Angular',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://angularjs.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Vue',
                title: 'Vue',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://vuejs.org/',
                  github: 'https://github.com/vuejs/vue'
                },
                children: []
              },
              {
                name: 'React',
                title: 'React',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://reactjs.org/',
                  github: 'https://github.com/facebook/react'
                },
                children: []
              },
              {
                name: 'Bootstrap',
                title: 'Bootstrap',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://getbootstrap.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Purecss',
                title: 'Purecss',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://purecss.io/',
                  github: 'https://github.com/pure-css/pure'
                },
                children: []
              },
              {
                name: 'UIkit',
                title: 'UIkit',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://getuikit.com/',
                  github: 'https://github.com/uikit/uikit'
                },
                children: []
              },
              {
                name: 'Amazeui',
                title: 'Amazeui',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://amazeui.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Frozen UI',
                title: 'Frozen UI',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://frozenui.github.io/',
                  github: 'https://github.com/frozenui/frozenui'
                },
                children: []
              },
              {
                name: 'Semantic UI',
                title: 'Semantic UI',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://semantic-ui.com/',
                  github: 'https://github.com/semantic-org/semantic-ui/'
                },
                children: []
              },
              {
                name: 'KISSY',
                title: 'KISSY',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://docs.kissyui.com/',
                  github: 'https://github.com/kissyteam/kissy'
                },
                children: []
              },
              {
                name: 'bui',
                title: 'bui',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://www.builive.com/',
                  github: 'https://github.com/dxq613/bui'
                },
                children: []
              },
              {
                name: 'Layui',
                title: 'Layui',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://www.layui.com/',
                  github: 'https://github.com/sentsin/layui/'
                },
                children: []
              },
              {
                name: 'MUI',
                title: 'MUI',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://dev.dcloud.net.cn/mui/',
                  github: 'https://github.com/dcloudio/mui/'
                },
                children: []
              },
              {
                name: 'Avalon',
                title: 'Avalon',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://avalonjs.coding.me/',
                  github: 'https://github.com/RubyLouvre/avalon'
                },
                children: []
              },
              {
                name: 'WinJS',
                title: 'WinJS',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://try.buildwinjs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'SUI',
                title: 'SUI',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://sui.taobao.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'ELECTRON',
                title: 'ELECTRON',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://electronjs.org/',
                  github: 'https://github.com/electron'
                },
                children: []
              },
              {
                name: 'Ruff',
                title: 'Ruff',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://ruff.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'kendo-ui',
                title: 'kendo-ui',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://www.telerik.com/kendo-ui',
                  github: ''
                },
                children: []
              },
              {
                name: 'MontageJS',
                title: 'MontageJS',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://montagestudio.com/montagejs',
                  github: 'https://github.com/montagejs/montage'
                },
                children: []
              },
              {
                name: 'cordova',
                title: 'cordova',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://cordova.apache.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Nuclear',
                title: 'Nuclear',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: '',
                  github: 'https://github.com/AlloyTeam/Nuclear'
                },
                children: []
              },
              {
                name: 'Omijs',
                title: 'Omijs',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: '',
                  github: 'https://github.com/AlloyTeam/omi'
                },
                children: []
              },
              {
                name: 'QingUi',
                title: 'QingUi',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://qingui.uis.cc/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Foundation',
                title: 'Foundation',
                description: 'The most advanced responsive front-end framework in the world.',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://foundation.zurb.com/',
                  github: 'https://github.com/zurb/foundation-sites'
                },
                children: []
              }
            ]
          },
          {
            name: 'Documentation tool',
            title: '文档工具',
            description: '文档工具',
            type: 'catalog',
            category: 'documentation-tool',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'JSDoc',
                title: 'JSDoc',
                description: 'An API documentation generator for JavaScript.',
                type: 'catalog',
                category: 'documentation-tool',
                url: {
                  site: 'http://usejsdoc.org/',
                  github: 'https://github.com/jsdoc3/jsdoc'
                },
                children: []
              },
              {
                name: 'ESDoc',
                title: 'ESDoc',
                description: 'ESDoc is a documentation generator for JavaScript.',
                type: 'catalog',
                category: 'documentation-tool',
                url: {
                  site: 'https://esdoc.org/',
                  github: 'https://github.com/esdoc/esdoc'
                },
                children: []
              },
              {
                name: 'apiDoc',
                title: 'apiDoc',
                description: 'Generates a RESTful web API Documentation.',
                type: 'catalog',
                category: 'documentation-tool',
                url: {
                  site: 'http://apidocjs.com/',
                  github: 'https://github.com/apidoc/apidoc'
                },
                children: []
              },
              {
                name: 'GraphQL Voyager',
                title: 'GraphQL Voyager',
                description: 'Represent any GraphQL API as an interactive graph. ',
                type: 'catalog',
                category: 'documentation-tool',
                url: {
                  site: 'https://apis.guru/graphql-voyager/',
                  github: 'https://github.com/APIs-guru/graphql-voyager'
                },
                children: []
              }
            ]
          },
          {
            name: 'Database',
            title: '前端数据库',
            description: '前端数据库',
            type: 'catalog',
            category: 'front-end-database',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'PouchDB',
                title: 'PouchDB',
                description: 'PouchDB is a pocket-sized database.',
                type: 'catalog',
                category: 'front-end-database',
                url: {
                  site: 'https://pouchdb.com/',
                  github: 'https://github.com/pouchdb/pouchdb'
                },
                children: []
              },
              {
                name: 'IndexedDB',
                title: 'IndexedDB',
                description: '',
                type: 'catalog',
                category: 'front-end-database',
                url: {
                  site: 'https://www.w3.org/TR/IndexedDB/',
                  github: ''
                },
                children: []
              },
              {
                name: 'WebSql',
                title: 'WebSql',
                description: '',
                type: 'catalog',
                category: 'front-end-database',
                url: {
                  site: 'https://www.w3.org/TR/webdatabase/',
                  github: ''
                },
                children: []
              }
            ]
          },
          {
            name: 'Libraries',
            title: '前端类库',
            description: '前端数据库',
            type: 'catalog',
            category: 'front-end-libraries',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'Particles.js',
                title: 'Particles.js',
                description: 'A lightweight JavaScript library for creating particles.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'https://vincentgarreau.com/particles.js/',
                  github: 'https://github.com/VincentGarreau/particles.js/'
                },
                children: []
              },
              {
                name: 'Three.js',
                title: 'Three.js',
                description: 'Javascript 3D library.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'https://threejs.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Fullpage.js',
                title: 'Fullpage.js',
                description: 'fullPage plugin by Alvaro Trigo. Create full screen pages fast and simple.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'https://alvarotrigo.com/fullPage/',
                  github: 'https://github.com/alvarotrigo/fullPage.js/'
                },
                children: []
              },
              {
                name: 'Typed.js',
                title: 'Typed.js',
                description: 'A JavaScript Typing Animation Library.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'https://mattboldt.com/demos/typed-js/',
                  github: 'https://github.com/mattboldt/typed.js'
                },
                children: []
              },
              {
                name: 'Waypoints',
                title: 'Waypoints',
                description: 'Waypoints is a library that makes it easy to execute a function whenever you scroll to an element.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://imakewebthings.com/waypoints/',
                  github: 'https://github.com/imakewebthings/waypoints'
                },
                children: []
              },
              {
                name: 'Highlight.js',
                title: 'Highlight.js',
                description: 'Javascript syntax highlighter.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'https://highlightjs.org/',
                  github: 'https://github.com/isagalaev/highlight.js'
                },
                children: []
              },
              {
                name: 'Chart.js',
                title: 'Chart.js',
                description: 'Simple HTML5 Charts using the <canvas> tag.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://www.chartjs.org/',
                  github: 'https://github.com/chartjs/Chart.js'
                },
                children: []
              },
              {
                name: 'InstantClick',
                title: 'InstantClick',
                description: 'InstantClick makes following links in your website instant. ',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://instantclick.io',
                  github: 'https://github.com/dieulot/instantclick'
                },
                children: []
              },
              {
                name: 'Chartist',
                title: 'Chartist',
                description: 'Simple responsive charts.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://gionkunz.github.io/chartist-js/',
                  github: 'https://github.com/gionkunz/chartist-js'
                },
                children: []
              },
              {
                name: 'Motio',
                title: 'Motio',
                description: 'Small JavaScript library for sprite based animations and panning. ',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://darsa.in/motio',
                  github: 'https://github.com/darsain/motio'
                },
                children: []
              },
              {
                name: 'Animsition',
                title: 'Animsition',
                description: 'A simple and easy jQuery plugin for CSS animated page transitions.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://git.blivesta.com/animsition',
                  github: 'https://github.com/blivesta/animsition'
                },
                children: []
              },
              {
                name: 'Barba.js',
                title: 'Barba.js',
                description: "Create badass, fluid and smooth transition between your website's pages.",
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://barbajs.org/',
                  github: 'https://github.com/luruke/barba.js'
                },
                children: []
              },
              {
                name: 'TwentyTwenty',
                title: 'TwentyTwenty',
                description: 'jQuery Plugin to Compare Images.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'https://zurb.com/playground/twentytwenty',
                  github: 'https://github.com/zurb/twentytwenty'
                },
                children: []
              },
              {
                name: 'vivus.js',
                title: 'vivus.js',
                description: 'JavaScript library to make drawing animation on SVG.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: '',
                  github: 'https://github.com/maxwellito/vivus'
                },
                children: []
              },
              {
                name: 'WOW.js',
                title: 'WOW.js',
                description: 'Reveal CSS animation as you scroll down a page.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://mynameismatthieu.com/WOW/',
                  github: 'https://github.com/matthieua/WOW'
                },
                children: []
              },
              {
                name: 'Scrolline.js',
                title: 'Scrolline.js',
                description: 'A jQuery plugin. Create a scroll line bar indicator on the page.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://anthonyly.com/jquery.plugins/scrolline/',
                  github: 'https://github.com/anthonyly/Scrolline.js'
                },
                children: []
              },
              {
                name: 'Velocity',
                title: 'Velocity',
                description: 'Accelerated JavaScript animation.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://velocityjs.org/',
                  github: 'https://github.com/julianshapiro/velocity'
                },
                children: []
              },
              {
                name: 'AOS',
                title: 'AOS',
                description: 'Animate on scroll library',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://michalsnik.github.io/aos/',
                  github: 'https://github.com/michalsnik/aos'
                },
                children: []
              },
              {
                name: 'Handlebars.js',
                title: 'Handlebars.js',
                description: 'Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://handlebarsjs.com/',
                  github: 'https://github.com/wycats/handlebars.js/'
                },
                children: []
              },
              {
                name: 'jInvertScroll',
                title: 'jInvertScroll',
                description: 'A lightweight jQuery vertical scroll - horizontal move plugin with parallax effect. ',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://www.pixxelfactory.net/jInvertScroll',
                  github: 'https://github.com/pixxelfactory/jInvertScroll'
                },
                children: []
              },
              {
                name: 'One Page Scroll',
                title: 'One Page Scroll',
                description: 'Create an Apple-like one page scroller website (iPhone 5S website) with One Page Scroll plugin',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://www.thepetedesign.com/demos/onepage_scroll_demo.html',
                  github: 'https://github.com/peachananr/onepage-scroll'
                },
                children: []
              },
              {
                name: 'Parallax.js',
                title: 'Parallax.js',
                description: 'Parallax Engine that reacts to the orientation of a smart device',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://matthew.wagerfield.com/parallax/',
                  github: 'https://github.com/wagerfield/parallax'
                },
                children: []
              },
              {
                name: 'Typeahead.js',
                title: 'Typeahead.js',
                description: 'typeahead.js is a fast and fully-featured autocomplete library.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://twitter.github.com/typeahead.js/',
                  github: 'https://github.com/twitter/typeahead.js/'
                },
                children: []
              },
              {
                name: 'Dragdealer.js',
                title: 'Dragdealer.js',
                description: 'Drag-based JavaScript component, embracing endless UI solutions',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://skidding.github.io/dragdealer',
                  github: 'https://github.com/skidding/dragdealer'
                },
                children: []
              },
              {
                name: 'Bounce.js',
                title: 'Bounce.js',
                description: 'Create beautiful CSS3 powered animations in no time.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://bouncejs.com/',
                  github: 'https://github.com/tictail/bounce.js'
                },
                children: []
              },
              {
                name: 'pagePiling.js',
                title: 'pagePiling.js',
                description: 'pagePiling plugin by Alvaro Trigo. Create a scrolling pile of sections.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://alvarotrigo.com/pagePiling/',
                  github: 'https://github.com/alvarotrigo/pagePiling.js'
                },
                children: []
              },
              {
                name: 'multiScroll.js',
                title: 'multiScroll.js',
                description: 'multiscroll plugin by Alvaro Trigo. Create scrolling split websites.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://alvarotrigo.com/multiScroll/',
                  github: 'https://github.com/alvarotrigo/multiscroll.js'
                },
                children: []
              },
              {
                name: 'favico.js',
                title: 'favico.js',
                description: 'Make use of your favicon with badges, images or videos',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://lab.ejci.net/favico.js/',
                  github: 'https://github.com/ejci/favico.js'
                },
                children: []
              },
              {
                name: 'Midnight.js',
                title: 'Midnight.js',
                description: "Switch your nav's design on the fly",
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://aerolab.github.io/midnight.js/',
                  github: 'https://github.com/Aerolab/midnight.js'
                },
                children: []
              },
              {
                name: 'anime.js',
                title: 'anime.js',
                description: 'JavaScript Animation Engine',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://animejs.com',
                  github: 'https://github.com/juliangarnier/anime'
                },
                children: []
              },
              {
                name: 'Keycodes',
                title: 'Keycodes',
                description: 'Easy visualizer for JavaScript KeyCodes',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://keycode.info/',
                  github: 'https://github.com/wesbos/keycodes'
                },
                children: []
              },
              {
                name: 'Sortable',
                title: 'Sortable',
                description: 'Sortable — is a JavaScript library for reorderable drag-and-drop lists on modern browsers and touch devices. No jQuery. Supports Meteor, AngularJS, React, Polymer, Knockout and any CSS library, e.g. Bootstrap. ',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://rubaxa.github.io/Sortable/',
                  github: 'https://github.com/RubaXa/Sortable'
                },
                children: []
              },
              {
                name: 'Flexdatalist',
                title: 'Flexdatalist',
                description: 'Flexible input autocomplete/datalist plugin for jQuery',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://projects.sergiodinislopes.pt/flexdatalist/',
                  github: 'https://github.com/sergiodlopes/jquery-flexdatalist'
                },
                children: []
              },
              {
                name: 'Slideout.js',
                title: 'Slideout.js',
                description: 'A touch slideout navigation menu for your mobile web apps.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'https://slideout.js.org/',
                  github: 'https://github.com/mango/slideout'
                },
                children: []
              },
              {
                name: 'jQuery.my',
                title: 'jQuery.my',
                description: 'jQuery.my is a plugin that binds form controls with js data structures.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://jquerymy.com/',
                  github: 'https://github.com/ermouth/jQuery.my/'
                },
                children: []
              },
              {
                name: 'Cleave.js',
                title: 'Cleave.js',
                description: 'Format input text content when you are typing...',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://nosir.github.io/cleave.js/',
                  github: 'https://github.com/nosir/cleave.js'
                },
                children: []
              },
              {
                name: 'page.js',
                title: 'page.js',
                description: 'Micro client-side router inspired by the Express router',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: '',
                  github: 'https://github.com/visionmedia/page.js'
                },
                children: []
              },
              {
                name: 'Selectize.js',
                title: 'Selectize.js',
                description: "Selectize is the hybrid of a textbox and <select> box. It's jQuery based and it has autocomplete and native-feeling keyboard navigation; useful for tagging, contact lists, etc. ",
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://selectize.github.io/selectize.js/',
                  github: 'https://github.com/selectize/selectize.js/'
                },
                children: []
              },
              {
                name: 'jQuery Nice Select',
                title: 'jQuery Nice Select',
                description: 'A lightweight jQuery plugin that replaces native select elements with customizable dropdowns.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://hernansartorio.com/jquery-nice-select/',
                  github: 'https://github.com/hernansartorio/jquery-nice-select'
                },
                children: []
              },
              {
                name: 'Tether',
                title: 'Tether',
                description: 'A positioning engine to make overlays, tooltips and dropdowns bette',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://tether.io/',
                  github: 'https://github.com/HubSpot/tether'
                },
                children: []
              },
              {
                name: 'Shepherd',
                title: 'Shepherd',
                description: 'Guide your users through a tour of your app',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://github.hubspot.com/shepherd/',
                  github: 'https://github.com/HubSpot/shepherd'
                },
                children: []
              },
              {
                name: 'Tooltip',
                title: 'Tooltip',
                description: 'Tooltip.js is a Javascript and CSS library for creating styleable tooltips.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://github.hubspot.com/tooltip',
                  github: 'https://github.com/HubSpot/tooltip'
                },
                children: []
              },
              {
                name: 'Select2',
                title: 'Select2',
                description: 'Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'https://select2.org/',
                  github: 'https://github.com/select2/select2'
                },
                children: []
              },
              {
                name: 'iziToast',
                title: 'iziToast',
                description: 'Elegant, responsive, flexible and lightweight notification plugin with no dependencies.',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://izitoast.marcelodolce.com/',
                  github: 'https://github.com/dolce/iziToast'
                },
                children: []
              },
              {
                name: 'iziModal',
                title: 'iziModal',
                description: 'Elegant, responsive, flexible and lightweight modal plugin with jQuery. ',
                type: 'catalog',
                category: 'front-end-libraries',
                url: {
                  site: 'http://izimodal.marcelodolce.com/',
                  github: 'https://github.com/dolce/iziModal'
                },
                children: []
              }
            ]
          },
          {
            name: 'Other',
            title: '其他知识点',
            description: '其他知识点',
            type: 'catalog',
            category: 'Other',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'YouMightNotNeedJS',
                title: 'YouMightNotNeedJS',
                description: 'You might not need scripts at all.',
                type: 'catalog',
                category: 'Other',
                url: {
                  site: 'http://youmightnotneedjs.com/',
                  github: 'https://github.com/una/YouMightNotNeedJS/'
                },
                children: []
              },
              {
                name: 'YouMightNotNeedjQuery',
                title: 'YouMightNotNeedjQuery',
                description: 'You might not need scripts at all.',
                type: 'catalog',
                category: 'Other',
                url: {
                  site: 'http://youmightnotneedjquery.com/',
                  github: 'https://github.com/HubSpot/youmightnotneedjquery'
                },
                children: []
              },
              {
                name: 'You-Dont-Need-Lodash-Underscore',
                title: 'You-Dont-Need-Lodash-Underscore',
                description: 'List of JavaScript methods which you can use natively + ESLint Plugin',
                type: 'catalog',
                category: 'Other',
                url: {
                  site: '',
                  github: 'https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore'
                },
                children: []
              },
              {
                name: 'Bouncy Ball',
                title: 'Bouncy Ball',
                description: 'Compare web animation techniques by bouncing a ball with each one.',
                type: 'catalog',
                category: 'Other',
                url: {
                  site: 'http://sparkbox.github.io/bouncy-ball',
                  github: 'https://github.com/sparkbox/bouncy-ball'
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        name: 'BE',
        title: '后端',
        description: '后端知识点',
        type: 'catalog',
        category: '',
        url: {
          site: '',
          github: ''
        },
        children: [
          {
            name: 'Language',
            title: '语言',
            description: '后端语言',
            type: 'catalog',
            category: 'language',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'NodeJS',
                title: 'NodeJS',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'https://nodejs.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'PHP',
                title: 'PHP',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://php.net/',
                  github: ''
                },
                children: [
                  {
                    name: 'FrameWork',
                    title: 'PHP框架',
                    description: 'PHP框架',
                    type: 'catalog',
                    category: 'php-framework',
                    url: {
                      site: '',
                      github: ''
                    },
                    children: [
                      {
                        name: 'thinkPHP',
                        title: 'thinkPHP',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'http://www.thinkphp.cn/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'CodeIgniter',
                        title: 'CodeIgniter',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'https://www.codeigniter.com/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'YII',
                        title: 'YII',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'http://www.yiiframework.com/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'Zend Framework',
                        title: 'Zend Framework',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'https://framework.zend.com/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'Laravel',
                        title: 'Laravel',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'https://laravel.com/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'Phalcon',
                        title: 'Phalcon',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'https://phalconphp.com/zh/',
                          github: ''
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Java',
                title: 'Java',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://java.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Go',
                title: 'Go',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'https://golang.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Python',
                title: 'Python',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'https://www.python.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Swift',
                title: 'Swift',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'https://www.apple.com/cn/swift/',
                  github: ''
                },
                children: []
              }
            ]
          },
          {
            name: 'Database',
            title: 'Database',
            description: '',
            type: 'catalog',
            category: 'database',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'MySQL',
                title: 'MySQL',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'https://www.mysql.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'SQL Server',
                title: 'SQL Server',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'https://www.microsoft.com/zh-CN/sql-server/',
                  github: ''
                },
                children: []
              },
              {
                name: 'MongoDB',
                title: 'MongoDB',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'https://www.mongodb.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Redis',
                title: 'Redis',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'https://redis.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Memcached',
                title: 'Memcached',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'http://memcached.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'SSDB',
                title: 'SSDB',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'http://ssdb.io/zh_cn/',
                  github: 'https://github.com/ideawu/ssdb'
                },
                children: []
              }
            ]
          },
          {
            name: 'Web Server',
            title: 'Web Server',
            description: '',
            type: 'catalog',
            category: 'web-server',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'Apache',
                title: 'Apache',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://httpd.apache.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Nginx',
                title: 'Nginx',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://nginx.org/en/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Tomcat',
                title: 'Tomcat',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://tomcat.apache.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'IIS',
                title: 'IIS',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://www.iis.net/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Lighttpd',
                title: 'Lighttpd',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://www.lighttpd.net/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Zeus',
                title: 'Zeus',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: 'Cherokee',
                title: 'Cherokee',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://cherokee-project.com/',
                  github: 'https://github.com/cherokee/webserver'
                },
                children: []
              },
              {
                name: 'Appweb',
                title: 'Appweb',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://www.embedthis.com',
                  github: ''
                },
                children: []
              },
              {
                name: 'Jetty',
                title: 'Jetty',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://www.eclipse.org/jetty/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Resin',
                title: 'Resin',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://www.caucho.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'WebSphere',
                title: 'WebSphere',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://www.ibm.com/cloud/websphere-application-platform',
                  github: ''
                },
                children: []
              },
              {
                name: 'WebLogic',
                title: 'WebLogic',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://www.oracle.com/middleware/weblogic/index.html',
                  github: ''
                },
                children: []
              },
              {
                name: 'Tengine',
                title: 'Tengine',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://tengine.taobao.org/index_cn.html',
                  github: ''
                },
                children: []
              },
              {
                name: 'H2O',
                title: 'H2O',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://h2o.examp1e.net/',
                  github: 'https://github.com/h2o/h2o/'
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        name: 'Other',
        title: 'Other',
        description: '通用知识点、酷站',
        type: 'catalog',
        category: '',
        url: {
          site: '',
          github: ''
        },
        children: [
          {
            name: 'CheatSheets',
            title: 'CheatSheets',
            description: '小抄、备忘录',
            type: 'catalog',
            category: 'cheat-sheets',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'OverApi',
                title: 'OverApi',
                description: 'Collecting All Cheat Sheets',
                type: 'catalog',
                category: 'cheat-sheets',
                url: {
                  site: 'http://overapi.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'PythonSheets',
                title: 'PythonSheets',
                description: 'Python Cheat Sheet',
                type: 'catalog',
                category: 'cheat-sheets',
                url: {
                  site: 'https://www.pythonsheets.com/',
                  github: 'https://github.com/crazyguitar/pysheeet'
                },
                children: []
              },
              {
                name: 'Cheat-Sheets',
                title: 'Cheat-Sheets',
                description: 'All cheat sheets, round-ups, quick reference cards, quick reference guides and quick reference sheets in one page. The only one you need.',
                type: 'catalog',
                category: 'cheat-sheets',
                url: {
                  site: 'http://www.cheat-sheets.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'DevDocs',
                title: 'DevDocs',
                description: '',
                type: 'catalog',
                category: 'cheat-sheets',
                url: {
                  site: 'http://devdocs.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'IT eBooks',
                title: 'IT eBooks',
                description: '',
                type: 'catalog',
                category: 'cheat-sheets',
                url: {
                  site: 'http://www.it-ebooks.info/',
                  github: ''
                },
                children: []
              },
            ]
          },
          {
            name: 'CoolSite',
            title: 'CoolSite',
            description: '酷站',
            type: 'catalog',
            category: 'cool-site',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'JS1k',
                title: 'JS1k',
                description: 'JS1k: The JavaScript code golfing competition',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'https://js1k.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'HelloWorldCollection',
                title: 'HelloWorldCollection',
                description: '“Hello World”大全',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'http://netsmell.com/apps/helloworldcollection/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Converio',
                title: 'Converio',
                description: '文件转换器。在线且免费',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'https://convertio.co/zh/',
                  github: ''
                },
                children: []
              },
              {
                name: 'tinypng',
                title: 'tinypng',
                description: 'Smart PNG and JPEG compression',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'https://tinypng.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Rainy Mood',
                title: 'Rainy Mood',
                description: 'Helps you to focus, relax, and sleep',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'http://www.rainymood.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Chrome experiments',
                title: 'Chrome experiments',
                description: 'Creative code for the web.',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'https://experiments.withgoogle.com/chrome',
                  github: ''
                },
                children: []
              },
              {
                name: 'vrn',
                title: 'vrn',
                description: '3D Face Reconstruction from a Single Image',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'http://cvl-demos.cs.nott.ac.uk/vrn/',
                  github: 'https://github.com/AaronJackson/vrn'
                },
                children: []
              },
              {
                name: 'WordArt',
                title: 'WordArt',
                description: 'WordArt.com is an online word art creator that enables you to create amazing and unique word art with ease.',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'https://wordart.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'weavesilk',
                title: 'vrweavesilkn',
                description: 'interactive generative art',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'http://weavesilk.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'autodraw',
                title: 'autodraw',
                description: 'Fast drawing for everyone.',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'https://www.autodraw.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'easyicon',
                title: 'easyicon',
                description: '',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'http://www.easyicon.net/',
                  github: ''
                },
                children: []
              },
              {
                name: 'geektyper',
                title: 'geektyper',
                description: '',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'http://geektyper.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'hackcode',
                title: 'hackcode',
                description: '',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'http://hackcode.ishoulu.com/scp/',
                  github: ''
                },
                children: []
              },
              {
                name: 'codepen',
                title: 'codepen',
                description: 'CodePen is a social development environment for front-end designers and developers. ',
                type: 'catalog',
                category: 'cool-site',
                url: {
                  site: 'https://codepen.io/',
                  github: ''
                },
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
]
