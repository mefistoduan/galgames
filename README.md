# galgames

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
####

流程图

开始 => 初始化数据 （eventId = 0 ）=> readEvent(i) => 下一句 （ for(content[i]) ）=> t = event.nextword()
                                                 => 读取 eventId的role和text等数据


cid:自身编号
rid:角色编号
text:文本
delay:延迟
speed:速度

nextevent:下一事件


####
一个页面框架用来写H5的galgame游戏

作者：八方龙杀阵 mefisto

开发进度列表：

# 界面
1.随对话更换任务头像
2.对话框提供选择不同支线剧情
3.字符逐个显示的动画
4.读取数据的功能实现
5.
