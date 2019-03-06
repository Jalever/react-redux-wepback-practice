# React-Redux-Webpack-Practices

It's first time to upload files to Github with Git.

## 项目特点
* 第一次Redux简单实例
* 基本Webpack配置

## 更新（2019年3月6日)
单页面应用(Single Page Application, SPA)与多页面应用(Multiple Page Application, MPA)
<table style="border:1px solid #ccc;border-collapse:collapse;text-align:center;">
    <thead>
        <tr style="border:1px solid #000">
            <td style="border:1px solid #ccc"></td>
            <td style="border:1px solid #ccc">单页面应用(Single Page Application, SPA)</td>
            <td style="border:1px solid #ccc">多页面应用(Multiple Page Application, MPA)</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">组成</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">一个外壳页面和多个页面片段组成</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">多个完整页面构成</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">资源共用(css,js)</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">共用，只需在外壳部分加载</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">不共用，每个页面都需要加载</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">刷新方式</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">页面局部刷新或更改</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">整页刷新</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">URL 模式</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">a.com/#/pageone <br> a.com/#/pagetwo</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">a.com/pageone.html <br> a.com/pagetwo.html</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">用户体验</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">页面片段间的切换快，用户体验良好</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">页面切换加载缓慢，流畅度不够，用户体验比较差</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">转场动画</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">容易实现</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">无法实现</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">数据传递</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">容易</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">依赖 url传参、或者cookie 、localStorage等</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">刷新方式</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">页面局部刷新或更改</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">整页刷新</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">搜索引擎优化(SEO)</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">需要单独方案、实现较为困难、不利于SEO检索 可利用服务器端渲染(SSR)优化</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">实现方法简易</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">试用范围</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">高要求的体验度、追求界面流畅的应用</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">适用于追求高度支持搜索引擎的应用</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">开发成本</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">较高，常需借助专业的框架</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">较低 ，但页面重复代码多</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">维护成本</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">相对容易</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">相对复杂</td>
        </tr>
    </tbody>
</table>

## 更新（2019年3月5日）
* 添加express服务器

## 关于作者
```
  var thisMe = {
    nickName  : "Jalever Chen",
    site : "https://github.com/Jalever"
  }
```