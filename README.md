# Web Components - 关于前端组件化的思考

* Web Components 产生的背景
* Web Components 是什么
* Web Components 怎么搞
* Web Components 优缺点
* Web Components 组件库介绍

## Web Components 产生的背景

需求催动生产力。

简单的div 或 table信息展示已经远远不能满足现代web需求了。因为现代Web成为了不仅仅是一个阅读的地方，还是个做事的地方。

做事就有复杂的逻辑和状态，状态如何维护？UI怎么复用甚至移植到别的项目？

React, Angular, Vue 是现代web优秀的引导者。

数据怎么管理他们有各自不同的实现思路，但是有一个明确的共同点：声明式的UI，即 (State => UI).

前两者分别有大厂支持，Vue 本来也就是介于两者之间的实用主义者。他们加上各种各样的框架和库也衍生出一个纷繁复杂、四分五裂的组件生态。这种分裂常常将一些团队钉死在某个特定的框架上，哪怕时间、技术的更迭也不会轻易地改变。

解决这种割裂的形势，让 Web 组件模型统一化，这项工作已经在努力推进中。最早的努力当数 “Web Component” 规范说明 circa 2011 的出现，并在同年的 Fronteers Conference 大会上由 Alex Russell 将之宣之于众。该 Web Component 规范的产生和发展，旨在提供一种权威的、浏览器能理解的方式来创建组件。

Web Components 会一统江湖吗？

## Web Components 是什么

想一想 `<video>` 标签，它是不是封装了视频流和一系列的按钮和其他控制器？简单易用！

就是这个思路，定义自己的标签，并把功能和样式都完全封闭起来。

直接扩展 `HTML` 元素，这就是 `Web Components`。也可以叫 `Dynamic HTML`。

由Google积极推动的一种浏览器标准化组件。一种封装功能的定制元素。

它解决了功能封装与代码移植的问题。

Web Components 并不是一项新技术，它是对技术的整合而提出的应用规范。

Web Components由三项主要技术组成：

* Custom elements（自定义元素）
* Shadow DOM（影子DOM）
* HTML templates（HTML模板）

进阶，生命周期回调函数：

* constructor：构造器
* connectedCallback：当 custom element首次插入文档DOM时，被调用。
* disconnectedCallback：当 custom element从文档DOM中删除时，被调用。
* adoptedCallback：当 custom element被移动到新的文档时，被调用。
* attributeChangedCallback: 当 custom element增加、删除、修改自身属性时，被调用。

属性变化监听事件：

```
static get observedAttributes() { return ['attr1'] }
```

## Web Components 怎么搞

像所有现代JS Frameworks一样

Keeping the UI in sync with the state

**State => UI**

## Web Components 优缺点及前景猜想

优点:

* 样式封闭，直接继承自documentHTMLElement
* JS环境封闭，不存在全局污染或冲突问题
* 这是 Web 标准，SEO也更友好

缺点:

* 关注度和成熟度还不够
* 状态管理又成为新的挑战

Web Components 的优点和缺点都比较明显。但是当我们重新审视什么是 `web` 的时候，你会发现，它在根本上仍然是承接 HTTP 文档的阅读器啊。

那 HTTP 是什么呢？HTML文档! 不论 JS 有多少花样，始终还是要围绕 Web 的根基 DOM 展开。这就是 Web Components 的最大优势。

目前来看，如果网站的主要功用是传递信息，那么 Web Components 是合适的。

[主流框架对 Web Components 的融合度](https://custom-elements-everywhere.com/)

## Web Components 组件库介绍

#### [hybrids](https://hybrids.js.org/#/)

Hybrids is a UI library for creating web components with unique declarative and functional approach based on plain objects and pure functions.

#### [LitElement](https://lit-element.polymer-project.org/)

A simple base class for creating fast, lightweight web components

#### [Polymer Project](https://www.polymer-project.org/)

Libraries, tools, and standards for a better web: LitElement, lit-html, web components...

#### [@polymer/paper-card demo](https://www.webcomponents.org/element/@polymer/paper-card)
A built-in polymer element demo

#### [Riot.js](https://riot.js.org/)

Simple and elegant component-based UI library

#### [Svelte](https://svelte.dev/)

直接的方式，干净的代码，值得性能强迫症关注

## 参考资料
* [Web Components 入门实例教程 * 阮一峰](http://www.ruanyifeng.com/blog/2019/08/web_components.html)
* [An Introduction to Web Components](https://css-tricks.com/an-introduction-to-web-components/)
* [Web Components Document on Google](https://developers.google.com/web/fundamentals/web-components/customelements)
