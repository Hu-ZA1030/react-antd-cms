#### 一，安装react 脚手架
官网：https://create-react-app.dev/
安装： cnpm install create-react-app -g

创建项目 ： creat-react-app 项目名

#### 1,注意
脚手架生成之后，工程项目有部分文件是隐藏状态，当执行 npm run eject 就会把所有的文件都显示出来，但是！！！就这样简单的执行命令是会保错！，原因是：还原到的文件过程中会覆盖先一些文件，所以会保错，
解决方案：将项目上传到本地git仓库
    git init    git add .    git commit -m "first"

    集成：
        react-router-dom
        axios
        sass
        anted

#### 2,修改工程项目端口号：
./script/start 里面可以修改端口号 

#### 3,配置别名：
```
# webpack.config.js文件中修改 resolve>alias
'@':path.resolve(__dirname,'../src')
```

#### 4,favion制作
在免费的在线制作网站，下载 32*32 的尺寸大小

#### sass 集成
网站：https://create-react-app.dev/
安装：
```
cnpm install node-sass -D
```

#### axios
下载：
``` cnpm install axios -S
```
封装 axios


代理：
安装 cnpm install http-proxy-middleware --save
传建文件：setupProxy.js


#### 安装路由
安装： cnpm install react-router-dom -S