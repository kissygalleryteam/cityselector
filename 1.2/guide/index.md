## 综述

cityselector是一个简单的城市选择器，支持国内国际城市，支持overlay模式和select联动模式。

- 版本 : 1.2
- kissy版本 : 1.3
- author : 霸先
- email : freyaoo@gmail.com

## 演示

[DEMO](http://gallery.kissyui.com/cityselector/1.2/demo/index.html)

## 快速使用

### 初始化组件

	<div id="foo"></div>
	<script>
		//1.2默认自带了国内城市数据
	    KISSY.use('gallery/cityselector/1.2/index', function (S,CitySelector) {
	        var citySelector = new CitySelector({
         		render : '#foo' //cityselector将渲染到div#foo里
         	});
	    });
	</script>

### 使用国外数据

	<div id="foo"></div>
	<script>
		//国外数据需要单独引入
	    KISSY.use('gallery/cityselector/1.2/index,gallery/cityselector/1.2/foreign', function (S,CitySelector,ForeignData) {
	        var citySelector = new CitySelector({
	        	data : ForeignData, //设置数据为国外数据
         		render : '#foo' //cityselector将渲染到div#foo里
         	});
	    });
	</script>

### 使用overlay模式(与input绑定)

	<input id="foo" type="text">
	<script>
		//国外数据需要单独引入
	    KISSY.use('gallery/cityselector/1.2/index,gallery/cityselector/1.2/foreign', function (S,CitySelector,ForeignData) {
	        var citySelector = new CitySelector({
	        	data : ForeignData, //设置数据为国外数据
         		node : '#foo' //触发cityselector的input节点
         	});
	    });
	</script>

### 使用select联动方式

	<select id="foo3"></select>
    <select id="foo4"></select>
    <script>
        KISSY.use('gallery/cityselector/1.2/index',function(S,CitySelector){
            var tmp = new CitySelector({
				linkage : true, //启用联动模式
				countrySelect : '#foo3', //国家或者省份select
				citySelect : '#foo4', //城市select
				defaultLinkageCountry : '山西' //默认选中国家或省份
            });
        });
    </script>

### 其他进阶设置

	<input id="foo" type="text">
	<script>
		//国外数据需要单独引入
	    KISSY.use('gallery/cityselector/1.2/index,gallery/cityselector/1.2/foreign', function (S,CitySelector,ForeignData) {
	        var citySelector = new CitySelector({
	        	data : ForeignData, //设置数据为国外数据
         		node : '#foo', //触发cityselector的input节点
         		autoWidth : true, //cityselector的宽度与input保持一致
         		multiple : true, //支持城市多选
         		canProvinceSelect : true, //可以选择省份(国外数据对应国家)
         		prefixCls : 'myclass' //自定义样式使用
         	});
	    });
	</script>

## API说明

[http://gallery.kissyui.com/cityselector/1.2/api/index.html](http://gallery.kissyui.com/cityselector/1.2/api/index.html)
