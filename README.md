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

# postcss解决css兼容问题
写到这里我们会突然想到一个点，就是css样式的兼容性问题，靠人工去写的话，你心里可能会有一句mmp不值当讲不当讲，哈哈，我们必须使用postcss来解决这个问题。

postcss是目前css兼容性的解决方案，会自动帮我们加入前缀，以使css样式在不同的浏览器能兼容，这里安装使用postcss-loader
```
{ test: /\.(less|css)?$/, loader: ["style-loader", "css-loader", "less-loader", "postcss-loader"]}
```
postcss-loader要写在最后(其实只要放在css-loader之后就可以)，写到这你以为就可以了吗？只能说 too young，postcss解决兼容性问题主要靠的其实是它的插件autoprefixer，我们还需要在根目录写一个postcss.config.js的配置文件，如下
```
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
};
```
写到这，我们就不用再担心css兼容性问题了，就想使用babel文件一样，这个文件会自动解析，我们不需要管它。
# svg图片的使用

我们在开发时，往往会遇到一些图标图片在不同情况下会失真，以及资源过多，我们需要减小图标类图片的大小，这时我们就需要引入svg，国内可能都会去使用阿里的iconfont库，从而引入svg图标，解决上面的问题

我们打开下载的素材文件夹，发现里面有一些.woff、.svg、.eot的文件，我们要想使用svg的图标还必须依赖这些文件，这时webpack不支持这些文件，我们需要引入新的loader
```
{ test: /\.(woff|svg|eot|ttf)?$/, loader: "url-loader" }下面我们就能愉快的使用svg图标了，不存在失真的情况，同时会很小
```

