var fs = require('fs');
var path = require('path');

module.exports = {
    hooks: {
        //当所有页面转化后,执行以下函数
        "finish": function() {
            this.log.debug.ln('finish', this.options.pluginsConfig['custom-index']);
            //读取需要替换的文件所在的位置
            var replacement = this.options.pluginsConfig['custom-index'].index;
            //配置有效
            if (replacement) {
                //取得文件路径
                var replacement_path = path.join(process.cwd(), replacement);
                var index_path = path.join(process.cwd(),"_book", 'index.html');
                //书本主页index.html存在
                if (fs.existsSync(index_path)) {
                    //把replacement的内容,写入index_path的内容
                    fs.createReadStream(replacement_path).pipe(fs.createWriteStream(index_path));
                }
            }
        }
    }
};

/**
 * "custom-index": {
            "index": "index-to-replace"
        }
**/