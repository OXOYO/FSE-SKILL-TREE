/**
 * Created by OXOYO on 2018/3/10.
 *
 * 转换工具
 */

const fs = require('fs')
const nodeEcharts = require('node-echarts')
const config = require('./config')

// 数据源
const dataSource = require(config.dataSource)
// 当前时间
const timeNow = (new Date()).getTime()
// 换行符
const lineBreak = '\n\n'
// 日期格式化
const formatDate = function (time, fmt = 'yyyy-MM-dd hh:mm') {
  // 10位时间戳格式化
  let timeStr = time + ''
  if (timeStr.length < 13) {
    time = time * (Math.pow(10, 13 - timeStr.length))
  }
  time = parseInt(time)
  if (isNaN(time)) {
    return ''
  }
  let date = new Date(time)
  let padLeftZero = (str) => {
    return ('00' + str).substr(str.length)
  }
  let doFormatDate = (date, fmt) => {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let obj = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in obj) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = obj[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
      }
    }
    return fmt
  }

  return doFormatDate(date, fmt)
}
// 格式化信息
const formatMsg = function (target) {
  let getBLen = function(str) {
    if (str == null) return 0
    if (typeof str !== 'string'){
      str += ''
    }
    return str.replace(/[^\x00-\xff]/g, '01').length
  }
  let len = getBLen(target)
  let max = len > 30 ? len + 10 : 30
  let template = (new Array(max)).join(' ')
  let res = target + template.substr(len, template.length)
  return res
}
// 转为markdonw文件
const convert2MD = function () {
  if (!dataSource.length) {
    console.warn('The data source cannot be empty!')
  }
  let fileContentArr = []
  let count = 1
  let getSize = function (count) {
    let arr = new Array(count > 6 ? 6 : count).fill('#')
    return arr.join('') + ' '
  }
  let getTitle = function (text, isLineBreak, count, isCount) {
    let countStr = isCount ? getSize(count) : ''
    let tmpArr = []
    tmpArr.push(countStr + text + '  ')
    if (isLineBreak) {
      tmpArr.push(lineBreak)
    }
    return tmpArr
  }
  let getDescription = function (text) {
    let tmpArr = []
    tmpArr.push('  ' + text)
    tmpArr.push(lineBreak)
    return tmpArr
  }
  let getUrl = function (urlList) {
    let tmpArr = []
    for (let [key, value] of Object.entries(urlList)) {
      if (value) {
        let tmpStr = '[' + key + '](' + value + ')  '
        tmpArr.push(tmpStr)
      }
    }
    tmpArr.push(lineBreak)
    return tmpArr
  }
  let handlerItemInfo = function (item, count, isCount) {
    // 生成目录
    let tmpArr = []
    // 处理标题
    tmpArr.push(...getTitle(item.title, item.type === 'catalog', count, isCount))
    // 处理url
    if (item.url && Object.keys(item.url).length) {
      let res = getUrl(item.url)
      if (res && res.length) {
        tmpArr.push(...res)
      }
    }
    // 处理描述
    if (item.description) {
      tmpArr.push(...getDescription(item.description))
    }
    // 插入换行符
    tmpArr.push(lineBreak)
    return tmpArr
  }
  let handler = function (list, count) {
    list.map(item => {
      // 判断是否为目录
      if (item && Object.keys(item).length) {
        if (item.type === 'catalog') {
          // 生成目录
          let dirArr = handlerItemInfo(item, count, true)
          fileContentArr.push(...dirArr)
          if (item.children && item.children.length) {
            handler(item.children, count + 1)
          }
        } else if (item.type === 'node') {
          // 生成节点
          let nodeArr = handlerItemInfo(item, count, false)
          fileContentArr.push(...nodeArr)
        }
      }
    })
  }
  // 处理数据源
  handler(dataSource, count)
  // 读取头部
  let headerMD = fs.readFileSync(config.headerMD)
  // 更新时间
  let updateInfo = '更新时间：' + formatDate(timeNow)
  let previewImg = '![FSE](./utils/FSE.png)'
  fileContentArr = [
    headerMD,
    lineBreak,
    updateInfo,
    lineBreak,
    previewImg,
    lineBreak,
    ...fileContentArr
  ]
  // 写文件
  let writeFile = function (fileName, content, filePath) {
    filePath = filePath ? filePath : '../'
    // 写入文件
    fs.writeFile(filePath + fileName, content, function (err) {
      if (err) {
        return console.error(err)
      } else {
        let msg = []
        msg.push(formatMsg(fileName) + ' created success!')

        let stat = fs.statSync(filePath + fileName)
        if (stat.isFile()) {
          // 文件大小:
          msg.push('size: ' + stat.size)
        }
        console.log(msg.join(' '))
      }
    })
  }
  // 生成README.md
  writeFile(config.mdFileName, fileContentArr.join(''), config.mdFilePath)
}

const convert2Img = function () {
  if (!dataSource.length) {
    console.warn('The data source cannot be empty!')
  }
  nodeEcharts({
    width: 1200,
    height: 2000,
    option: {
      title: {
        show: true,
        text: [
          config.projectInfo.name,
          config.projectInfo.title
        ].join(' '),
        subtext: [
          'author：',
          config.authorInfo.name,
          lineBreak,
          'github：',
          config.authorInfo.github,
          lineBreak,
          'QQ群：',
          config.authorInfo.qqGroup,
          lineBreak,
          '更新时间：',
          formatDate(timeNow)
        ].join('')
      },
      series: [
        {
          type: 'tree',
          data: dataSource,
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',
          symbolSize: 10,
          label: {
            normal: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 20
            }
          },
          leaves: {
            label: {
              normal: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            }
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
          initialTreeDepth: -1
        }
      ],
      backgroundColor: '#F5F3EB'
    },
    path:  __dirname + '/' + config.imgFileName,
  })
}

// 执行转换
// 转为脑图图片
convert2Img()
// 转为markdown文件
convert2MD()
// 退出命令行
setTimeout(function () {
  process.exit()
}, 1000)
