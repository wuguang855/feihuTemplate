# 飞虎互动React框架

#### 介绍
飞虎互动React框架
 
## 文件结构

```
├── README.md				项目介绍
├── mock					Mock数据目录   
├── package.json			npm包配置文件 
├── proxy.config.js			开发时代理配置文件
├── public					依赖的外部文件（第三方库） 
└── src						开发目录	
       ├── assets			项目依赖的静态文件比如图片等
       │   └── yay.jpg
       ├── components		组件所在文件
       │   └── Example.js
       ├── const			常量
       │   └── index.js     
       ├── index.css		全局样式文件
       ├── index.ejs		人口模板文件
       ├── index.js			入口js文件
       ├── models			models
       │   └── example.js
       ├── pages        	所有页面
       │   └── Index     	页面
       │       ├── index.js     页面js文件
       │       └── index.less   页面less文件
       ├── router.js			路由配置文件
       ├── services				services
       │   └── example.js       api接口调用案例
       └── utils        		工具方法
           ├── api.js			接口封装（服务端交互）
           ├── encrypt.js   	加密
           ├── log.js       	统一处理日志
           ├── request.js   	axios全局配置
           └── store.js			数据存储封装

```
#### 安装教程

```
fh-cli init  
```

#### 使用说明

#### 参与贡献
