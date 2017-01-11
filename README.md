<h2>inputClear.js简介<a href="http://www.shdnfw.com/plugin/inputClear/demo.html">input框的手动清空（inputClear.js）的使用示例</a></h2>
<p>inputClear.js是基于jquery封装开发用于实现input框的清空功能的js组件，用于格式化一个或多个input框，实现input框的清空</p>

<hr/>

<h3>1、开始工作：</h3>
<p>
  最先引入jquery (Bootstrap中文网开源项目免费 CDN 服务)：
</p>
```html
<script type="text/javascript" src="//cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>
```
<p>
  再次页面中引入：
</p>
```html
<script type="text/javascript" src="....../inputClear.js"></script>
```

<h3>2、使用：</h3>
<h4>html：</h4>
<p>
  （固定格式html准备）
</p>
```html
<div class="inputClear">
  <input type="text" placeholder="请填入姓名"/>
<span class="deleteEle"></span>
</div>
```

<h4>css（添加当前样式）：</h4>
```html
<link-tag rel="stylesheet" type="text/css" href="....../inputClear.css" />
```

<h4>js（实例化相应的密码显示框）：</h4>
```javascript
var _input = new inputClear('inputClear');
```

<h3>3、说明：</h3>
<p>
  其中inputClear.css为该组件样式必须引进，当你需要更改input框样式的时候，请按需适当修改即可
</p>

<h3>4、兼容性：</h3>
<p>
  兼容IE8及以上浏览器
</p>
