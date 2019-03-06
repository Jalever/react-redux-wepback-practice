# React-Redux-Webpack-Practices

It's first time to upload files to Github with Git.

## 项目特点
* 第一次Redux简单实例
* 基本Webpack配置

## 更新（2019年3月5日）
* 添加express服务器

## 更新（2019年3月6日)
单页面应用(Single Page Application, SPA)与多页面应用(Multiple Page Application, MPA)
|  | 单页面应用(Single Page Application, SPA) | 多页面应用(Multiple Page Application, MPA) |
|:--:|:--:|:--:|
| 组成 | 一个外壳页面和多个页面片段组成 | 多个完整页面构成 |
| 资源共用(css,js) | 共用，只需在外壳部分加载 | 不共用，每个页面都需要加载 |
| 刷新方式 | 页面局部刷新或更改 | 整页刷新 |
| URL 模式 | a.com/#/pageone <br> a.com/#/pagetwo | a.com/pageone.html <br> a.com/pagetwo.html |
| 用户体验 | 页面片段间的切换快，用户体验良好 | 页面切换加载缓慢，流畅度不够，用户体验比较差 |
| 转场动画 | 容易实现 | 无法实现 |
| 数据传递 | 容易 | 依赖 url传参、或者cookie 、localStorage等 |
| 搜索引擎优化(SEO) | 需要单独方案、实现较为困难、不利于SEO检索 可利用服务器端渲染(SSR)优化 | 实现方法简易 |
| 试用范围 | 高要求的体验度、追求界面流畅的应用 | 适用于追求高度支持搜索引擎的应用 |
| 开发成本 | 较高，常需借助专业的框架 | 较低 ，但页面重复代码多 |
| 维护成本 | 相对容易 | 相对复杂 |


## 关于作者
```
  var thisMe = {
    nickName  : "Jalever Chen",
    site : "https://github.com/Jalever"
  }
```