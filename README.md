Toast
=========

###Options

* content: 显示内容
* timeout：消失时间，默认为3000ms，设置为false时，则不会消失，必须手动destroy
* useMask: 是否背景遮罩，默认为false
* className: 自定义样式

###Api

* destroy：摧毁对象

###静态方法

* show(content[, mask, timeout, classname])：创建一个简单的toast，并显示

* notice(content[, mask, timeout, classname])：创建一个Notice类型的toast，并显示

* error(content[, mask, timeout, classname])：创建一个error类型的toast，并显示

* success(content[, mask, timeout, classname])：创建一个success类型的toast，并显示

* loading(content[, mask, timeout, classname])：创建一个loading类型的toast，并显示