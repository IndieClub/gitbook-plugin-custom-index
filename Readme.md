# 介绍

一个简单的配置主页的插件,会把进入网站的默认index.html修改为你想要的,而不是单纯的readme.md

```json
"pluginsConfig": {
"custom-index": {
  "index": "index-to-replace.html"
  }
}
```

## Pipe速学

```

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

```

## Gitbook插件开发

Block
Hooks
Filters

-[ ] 阅读更多的gitbook插件,编写更简单的教程

### InsertLog

```js

require(['gitbook', 'jQuery'], function (gitbook, $) {
  var url = ''
  var style = ''
  var insertLogo = function (url, style) {
    $('.book-summary').children().eq(0).before('<div class="book-logo"><img src="' + url + '" style="' + style + '"></div>')
  }
  gitbook.events.bind('start', function (e, config) {
    url = config['insert-logo']['url']
    style = config['insert-logo']['style']
  })

  gitbook.events.bind("page.change", function() {
    insertLogo(url, style)
  })
})

```