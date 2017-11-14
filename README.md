# webpack
# 开始

在我们对于webpack不是特别熟练的时候，我们可能不会写全配置文件，往往是用到什么再去添加，下面我们就按照这个步骤彻底学会使用webpack。
```
module.exports = {
    entry: './src/index.js' // 这里是项目入口文件地址
    ouput: {
        path: __dirname + "/dist", // 这里是项目输出的路径,__dirname表示当前文件的位置
        filename: "js/"+"[name].js" // 这里是生成文件的名称，可起你想要的名字
    }
}
```

# loader
这就是我们最初一个骨架，下面我们再添加一些配置，比如你使用的是react，那么你就需要添加react的相关loader，这里以typescript编写的react为例。
```
module.exports = {
    entry: './src/index.js' // 这里是项目入口文件地址
    ouput: {
        path: __dirname + "/dist", // 这里是项目输出的路径,__dirname表示当前文件的位置
        filename: "js/"+"[name].js" // 这里是生成文件的名称，可起你想要的名字
    }，
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
}
```
# css/css预处理语言(less、sass、stylus)
webpack是将一个个文件分拆成一个个模块(module)来进行编译打包的，我们所有的处理文件内容的东西都要放在module里，rules即规则。rules里面的两个loader都是编译.tsx文件及处理错误信息的。

在你写好了组件之后，你需要开始编写样式，但无论是css还是使用less、sass等预处理语言，webpack都是无法直接处理的，我们安装并使用相应的loader。下面以less和css为例。
```
 {test: /\.(less|css)?$/, loader: ["style-loader", "css-loader", "less-loader"]}
 ```
 webpack会按照从右到左的顺序执行loader，我们新解析less，之后进行css的打包编译。如果你不适用less等预处理语言，安装css-loader和style-loader即可。

* style-loader 将css插入到页面的style标签
* css-loader 是处理css文件中的url()等
* less-loader 是将less文件编译成css
