/**
 * Created by OXOYO on 2018/3/10.
 *
 * 知识点数据
 */

module.exports = [
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
                  site: '',
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
                  site: '',
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
              site: '',
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
                name: 'LESS',
                title: 'LESS',
                description: '',
                type: 'node',
                category: 'language',
                url: {
                  site: '',
                  github: ''
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
                  site: '',
                  github: ''
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
                  site: '',
                  github: ''
                },
                children: []
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
      }
    ]
  }
]
