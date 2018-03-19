/**
 * Created by OXOYO on 2018/3/12.
 */

module.exports = {
  // 数据源
  dataSource: './FSE.js',
  // 生成MD文件配置
  md: [
    {
      // 输出
      output: {
        // 生成目录
        path: '../',
        // 生成文件名
        fileName: 'README.md',
        info: {
          author: 'OXOYO',
          github: 'https://github.com/OXOYO/FSE-SKILL-TREE',
          'QQ群': '333765077',
          qqGroupTitle: 'Web全栈大神群',
          qqGroupLink: 'https://jq.qq.com/?_wv=1027&k=53iWbrr'
        }
      }
    }
  ],
  // 生成图片文件配置
  img : [
    {
      // 输出
      output: {
        fileName: 'FSE.png',
        isShowTitle: true,
        info: {
          author: 'OXOYO',
          github: 'https://github.com/OXOYO/FSE-SKILL-TREE',
          'Web全栈QQ群': '333765077'
        }
      }
    },
    {
      // 输出
      output: {
        fileName: 'FSE_preview.png',
        isShowTitle: true,
        info: {
          author: ''
        }
      }
    }
  ],
  // 语言包
  lang: {},
  // 项目信息
  projectInfo: {
    name: 'FSE-SKILL-TREE',
    title: 'Web全栈工程师技能树梳理',
    description: '各个分支正在细化中，欢迎Star、PR。',
    qqGroupLink: '点击链接加入群【Web全栈QQ群】：https://jq.qq.com/?_wv=1027&k=53iWbrr'
  }
}
