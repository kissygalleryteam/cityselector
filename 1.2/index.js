/**
* 城市选择器，支持国内和国际城市，也可以自定义城市数据
*
* @module cityselector
* @author freyaoo@gmail.com
* @version 1.2
*/
KISSY.add(function(S,Node,Event,Richbase,Overlay,Xtpl,DomesticData){
	'use strict';

    var CURCLS = 'ks-cityselector-cur',
        ALLCLS = 'ks-cityselector-all',
        WIDTH = 'width',
        HEIGHT = 'height',
        CHECKED = 'checked',
        PROVINCE = 'province',
        CITY = 'city',
        DISABLEDCLS = 'ks-cityselector-disabled',
        LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        TMPL = new Xtpl('<div class="{{prefix}}cityselector {{#if provinceselect}}ks-cityselector-province-select{{/if}}" id="{{prefix}}cityselector{{uniqueId}}" style="width:{{width}}px;height:{{height}}px;">'+'<div class="ks-cityselector-content">'+
            '<div class="ks-cityselector-nav" id="ks-cityselector{{uniqueId}}-nav">'+
                '<span class="ks-cityselector-all ks-cityselector-cur ks-cityselector-letter-filter" id="ks-cityselector{{uniqueId}}-letter-all" data-value="all">全部</span>'+
                '{{#each letters}}<span id="ks-cityselector{{uniqueId}}-letter-{{name}}" data-value="{{name}}" class="ks-cityselector-letter-filter{{#if disabled}} ks-cityselector-disabled{{/if}}">{{name}}</span>{{/each}}'+
            '</div>' +
            '<div class="ks-cityselector-citylist" id="ks-cityselector{{uniqueId}}-citylist" style="height:{{listheight}}px;"><ul>' +
                '{{#each data}}<li class="ks-cityselector-province-{{firstLetter}}{{#if city}} {{else}} ks-cityselector-nocity{{/if}}">'+
                    '<div class="ks-cityselector-province">'+
                        '<label for="ks-cityselector{{uniqueId}}-province-{{provinceId}}">'+
                            '<span class="ks-cityselector-letter">{{firstLetter}}</span>'+
                            '<span class="ks-cityselector-province-name">{{#if provinceselect}}<input type="checkbox" class="ks-cityselector-select-province" id="ks-cityselector{{uniqueId}}-province-{{provinceId}}" data-id="{{provinceId}}" name="ks-cityselector-province" value="{{name}}">{{/if}}{{name}}</span>'+
                        '</label>'+                     
                    '</div>'+
                    '{{#if city}}<div class="ks-cityselector-city">'+
                    '{{#each city}}<span>'+
                        '<input type="checkbox" id="ks-cityselector{{uniqueId}}-city-{{cityId}}" value="{{name}}" data-id="{{cityId}}" name="ks-cityselector-city" class="ks-cityselector-select-city">'+
                        '<label for="ks-cityselector{{uniqueId}}-city-{{cityId}}">{{name}}</label>'+
                    '</span>{{/each}}'+
                    '</div>{{/if}}'+
                '</li>{{/each}}' +
            '</ul></div>'+
        '</div></div>');
    /**
    * 城市选择器constructor

        <input id="#foo" type="text">    
        KISSY.use('gallery/cityselector/1.2/index',function(S,CitySelector){
        var cityselector = new CitySelector({
            node : '#foo'
        });

    *
    * @class CitySelector
    * @extends RichBase
    * @constructor   
    */

	var CitySelector = Richbase.extend({
    	initializer : function(){
    		var _ = this;
            _._node = S.one(_.get('node'));
            _._renderNode = S.one(_.get('render'));
            if(!_.get('linkage')){
            	if(!_._node && !_._renderNode){
	                S.log('cityselector::node and render are not find,cityselector init failured!');
	                return;
	            }
	            if(!_.get('data')){
	            	S.log('cityselector::cityselector\'s data is undefined,cityselector init failured!');
	            	return;
	            }
            }            
            _._id = S.guid();
            _._selected = []; 
            _._selectedValues = [];
            if(_.get('linkage')){
            	if(!_.get('countrySelect') || !_.get('citySelect')){
            		S.log('cityselector::countrySelect and citySelect is needed!');
            		return;
            	}
            	_.countryNode = S.one(_.get('countrySelect'));
            	_.cityNode = S.one(_.get('citySelect'));
            	_._prepareLinkageData();
            	_._renderLinkage();
            	_._bindLinkage();
            }else{
            	_.render();
	            _._node && _._checkCity();
	            _._bind();
            }           
    	},
        destructor : function(){
        	var _ = this;
            _._navEl.undelegate('click');
            _._listEl.undelegate('click');
            _._selected = undefined;
            _._selectedValues = undefined;
            _._formatData = undefined;
            _._provinces = undefined;
            _._citys = undefined;
            _._contentEl.remove();
        },
        /**
        * 绑定需要的事件
        *
        * @method _bind
        * @private
        */
        _bind : function(){
            var _ = this;
            _._navEl.delegate('click','.ks-cityselector-letter-filter',_._letterFilter,_);
            _._listEl.delegate('click','.ks-cityselector-province',_._toggleOrExpand,_);
            _._listEl.delegate('click','.ks-cityselector-select-city',_._selectCity,_);
            _._listEl.delegate('click','.ks-cityselector-select-province',_._selectProvince,_);
            if(_._overlay){
                Event.on('body','click',function(){
                    _._overlay.hide();
                });
                _._contentEl.on('click',function(e){
                    e.stopPropagation();
                });
                _._node.on('click',function(e){
                    e.stopPropagation();
                });
            }
        },
        /**
		绑定城市联动事件

		@method _bindLinkage
		@private
        */
        _bindLinkage : function(){
        	var _ = this;
        	_.countryNode.on('change',function(e){
        		var city = _.countryNode.val(),
        			citys = _.linkageData[city].city;
        		_.cityNode[0].options.length = 0;
        		S.each(citys,function(item,index){
        			var op = new Option(item.name,item.name);
        			op.setAttribute('data-code',item.code);
        			_.cityNode[0].options.add(op);
        		});
        	},_);
        },
        /**
        * 预处理城市数据，主要是为了后面的dom操作方便
        *
        * @method _prepareData
        * @private
		@return {array} letters 字母数组
        */
        _prepareData : function(){
            var _ = this,
                letters = {};
            _._formatData = {};
            _._provinces = {};
            _._citys = {};
            S.each(_.get('data'),function(item){
                var firstLetter = item.pinyin.charAt(0).toUpperCase(),
                    city = [];
                item.firstLetter = firstLetter;
                item.id = S.guid();
                item.provinceId = item.id;
                letters[firstLetter] = 1;
                S.each(item.city,function(val){
                    city.push(val.name);
                    val.id = S.guid();
                    val.cityId = val.id;
                    _._citys[val.name] = val.id;
                    _._formatData[val.id] = S.merge(val,{
                        type : CITY,
                        province : item.name
                    });
                });
                _._provinces[item.name] = item.id;
                _._formatData[item.id] = S.merge(item,{
                    type : PROVINCE,
                    city : city
                })
            });
            return letters;
        },
        /**
		预处理联动数据

		@method _prepareLinkageData
		@private
        */
        _prepareLinkageData : function(){
        	var _ = this,
        		data = _.get('data');
        	_.linkageData = {};
        	S.each(data,function(item){
        		_.linkageData[item.name] = {
        			name : item.name,
        			code : item.code,
        			city : item.city ? item.city : [item]
        		}
        	});
        },
        /**
		渲染联动数据

		@method _renderLinkage
		@private
        */
        _renderLinkage : function(){
        	var _ = this,
        		defaultCountry,
        		defaultCountryData,
        		citys;
        	if(_.get('defaultLinkageCountry')){
        		defaultCountry = _.get('defaultLinkageCountry');
        	}else{
        		defaultCountry = _.get('data')[0].name;
        	}
        	defaultCountryData = _.linkageData[defaultCountry];
        	_.countryNode[0].options.length = 0;
        	S.each(_.linkageData,function(val,key){
        		var op = new Option(val.name,val.name);
        		op.setAttribute('data-code',val.code);
        		_.countryNode[0].options.add(op);
        	});
        	if(_.get('defaultLinkageCountry')){
        		_.countryNode[0].value = defaultCountry;
        	}
        	if(defaultCountryData){        		
        		S.each(defaultCountryData.city,function(item,index){
        			var op = new Option(item.name,item.name);
        			op.setAttribute('data-code',item.code);
        			_.cityNode[0].options.add(op);
        		});
        	}
        },
        /**
        * 渲染城市选择器
        *
        * @method render
        * @return {CitySelector} this,当前实例
        * @chainable
        */
        render : function(){
            var _ = this,
                cityData = this.get('data'),
                ret = {},
                letters = _._prepareData(),
                w = this.get('autoWidth') ? this._node && this._node.width() : this.get(WIDTH),
                len = LETTERS.length,
                tmp = [];
            
            for(var i = 0;i < len;i++){
                var letter = LETTERS.charAt(i);
                tmp.push({
                    name : letter,
                    disabled : !letters[letter]
                });
            }

            var obj = {
                prefix : this.get('prefixCls'),
                provinceselect : this.get('canProvinceSelect'),
                letters : tmp,
                data : cityData,
                uniqueId : this._id,
                width : w,
                height : this.get(HEIGHT),
                listheight : this.get(HEIGHT) - 50
            };
            
            this._contentEl = S.one(TMPL.render(obj));
            this._navEl = this._contentEl.one('#ks-cityselector'+this._id+'-nav');
            this._listEl = this._contentEl.one('#ks-cityselector'+this._id+'-citylist');
            if(this._renderNode){
                this._renderNode.append(this._contentEl);
            }else{
                this._overlay = new Overlay.Popup({
                    prefixCls : 'ks-cityselector-',
                    width : w,
                    trigger : this._node,
                    visible : false,
                    align : {
                        node : this._node,
                        points : ['bl','tl'],
                        offset :[-1,0]
                    },
                    content : this._contentEl
                });
              
                this._overlay.on('show',function(){
                    _._checkCity();
                });
            }
            return this;
        },
        /**
        * 选择字母筛选触发的处理方法
        *
        * @method _letterFilter
        * @param {Event} e 
        * @private
        */
        _letterFilter : function(e){
            var tar = S.one(e.target),
                filter = tar.attr('data-value');
            if(tar.hasClass(CURCLS)){
                return;
            }
            this._setLetter(filter);
        },
        /**
        * 根据指定的字母处理dom
        *
        * @method _setLetter
        * @param {String} letter 指定的字母,26个字母加单词'all'
        * @private
        */
        _setLetter : function(letter){
            var curLetter = this._navEl.one('span.'+CURCLS),
                tar = S.one('#ks-cityselector'+this._id+'-letter-'+letter),
                list = this._listEl,
                provinces = list.all('li');
            if(tar.hasClass(DISABLEDCLS)){
                return;
            }
            curLetter.removeClass(CURCLS);
            tar.addClass(CURCLS);
            /**
            当用户切换首字母时触发
            @event letterchange
            @param {event} e 提供用户当前选择的首字母
            <dl>
            <dt>letter</dt><dd>用户选中的字母，如'x','a','all'</dd>
            </dl>
            */
            this.fire('letterchange',{
                letter : letter
            });
            if(tar.hasClass(ALLCLS)){
                provinces.show();
                return;
            }                   
            
            provinces.hide();
            this._listEl.all('li.ks-cityselector-province-'+letter).show();
        },
        /**
        * 收起或展开省下面的城市
        *
        * @method _toggleOrExpand
        * @param {event} e 
        * @private
        */
        _toggleOrExpand : function(e){
            var tar = S.one(e.target),
                li = tar.parent('li');
            li.toggleClass('ks-cityselector-expand');
        },
        /**
        * 根据输入框里已存在的城市选中城市选择器中的城市
        *
        * @method _checkCity
        * @private
        */
        _checkCity : function(){
            var _ = this,
                val = this._node.val().split(',');
            S.each(val,function(item){
                item && _.select(item);
            });
        },
        /**
        * 选中城市时的事件执行
        *
        * @method _selectCity
        * @param {event} e 
        * @private
        */
        _selectCity : function(e){
            var tar = S.one(e.target);
            if(tar.prop(CHECKED)){
                this.select(tar.val());                              
            }else{
                this.unSelect(tar.val());                
            }
        },
        /**
        * 选中省(国际对应国家)时的事件执行
        *
        * @method _selectProvince
        * @param {event} e 
        * @private
        */
        _selectProvince : function(e){
            var tar = S.one(e.target);
            if(tar.prop(CHECKED)){
                this.select(tar.val());
            }else{
                this.unSelect(tar.val());
            }           
        },
        /**
        * 根据传入的节点和类型填充input
        *
        * @method _fillInput
        * @param {Node} 触发事件的input[type=checkbox]节点 
        * @param {String} 类型{city|province}
        * @private
        */
        _fillInput : function(tar,type){
        	if(!this._node){
        		return;
        	}
            var val = S.trim(this._node.val()),
                newVal = tar.val();
            if(val.indexOf(newVal) <= -1){
                if(this.get('multiple')){
                    if(val && !/,$/.test(val)){
                        this._node.val(val + ',' + newVal);
                    }else{
                        this._node.val(val + newVal + ',');
                    }
                }else{
                    this._node.val(newVal);
                }                
            }
        },
        /**
        * 根据传入的节点取消城市选择
        *
        * @method _delCity
        * @param {Node} tar input节点 
        * @private
        */
        _delCity : function(tar){
            var oldVal = S.trim(this._node.val());
            this._node.val(oldVal.replace(new RegExp(tar.val()+',?','g'),''));
        },
        /**
        * 设置'autoWidth'属性时执行
        *
        * @method _onSetAutoWidth
        * @private
        */
        _onSetAutoWidth : function(){
            if(this.get('autoWidth') && this._node){
                this._contentEl.css(WIDTH,this._node.width());
            }else{
                this._onSetWidth();
            }            
        },
        /**
        * 设置'width'属性时执行
        *
        * @method _onSetWidth
        * @private
        */
        _onSetWidth : function(){
        	if(this.get('linkage')){
        		return;
        	}
            this._contentEl.css(WIDTH,this.get(WIDTH));
        },
        /**
        * 设置'height'属性时执行
        *
        * @method _onSetAutoHeight
        * @private
        */
        _onSetHeight : function(){
        	if(this.get('linkage')){
        		return;
        	}
            var h = this.get(HEIGHT);
            this._contentEl.css(HEIGHT,h);
            this._listEl.css(HEIGHT,h - 50);
        },
        /**
        * 根据指定的字母切换到相应字母filter
        *
        * @method setLetter
        * @param {String} letter 指定的字母,'abcdefghijklmnopqrstuvwxyz'加单词'all'
        * @return {CitySelector} this，当前实例
        * @example 

        cityselector.setLetter('x'); //选中所有以'X'为拼音首字母的省
        cityselector.setLetter('all'); //选中全部

        * @chainable
        */
        setLetter : function(letter){
            if(letter == 'all'){
                this._setLetter(letter);
                return this;
            }
            if(S.isString(letter) && letter.length == 1 && LETTERS.indexOf(letter) > -1){
                this._setLetter(letter);
            }
            return this;
        },
        /**
        * 显示城市选择器
        *
        * @method show
        * @return {CitySelector} this，当前实例
        * @chainable
        */
        show : function(){
            this._contentEl.show();
            return this;
        },
        /**
        * 隐藏城市选择器
        *
        * @method hide
        * @return {CitySelector} this，当前实例
        * @chainable
        */
        hide : function(){
            this._contentEl.hide();
            return this;
        },
        /**
        * 选中指定城市
        *
        * @method select
        * @param {Array|String} string 城市名称，如'北京'或['北京','太原']
        * @return {CitySelector} this，当前实例
        * @example

        var cityselector = new CitySelector(config);
        cityselector.select('北京'); //会选中北京
        cityselector.select(['北京','杭州']); //会选中北京和杭州

        * @chainable
        */
        select : function(string){
            var _ = this;
            if(S.isArray(string)){
                S.each(string,function(item){
                    _.select(item);
                });
            }else{
                var node,
                    type,
                    id,
                    city = S.one('#ks-cityselector'+this._id+'-city-'+this._citys[string]),
                    province = S.one('#ks-cityselector'+this._id+'-province-'+this._provinces[string]);
                if(city){
                    node = city;
                    type = CITY;
                    id = this._citys[string];
                }else if(province){
                    node = province;
                    type = PROVINCE;
                    id = this._provinces[string];
                }
                if(node){
                    node.prop(CHECKED,true);
                    /**
                    当用户选择时触发
                    @event select
                    @param {event} e 提供用户选择的一些信息
                    <dl>
                    <dt>type</dt><dd>用户选中的类型，'city'或'province'</dd>
                    <dt>value</dt><dd>用户选中的值，'北京'</dd>
                    <dt>raw</dt><dd>用户选中的值对应的元数据</dd>
                    </dl>
                    */
                    this.fire('select',{
                        data : {
                            type : type,
                            value : string,
                            raw : this._formatData[id]
                        }                    
                    });
                    if(this.get('multiple')){
                        this._selected.push(node);
                        this._selectedValues.push(string);
                    }else{
                        this._selected[0] && this._selected[0].prop(CHECKED,false);
                        this._selected[0] = node;
                        node.prop(CHECKED,true);
                        this._selectedValues[0] = string;
                    }
                    this._fillInput(node,type);
                }
            }
            return this;
        },
        /**
        * 取消选中指定城市，与select相反
        *
        * @method unSelect
        * @param {Array|String} string 城市名称，如'北京'或['北京','太原']
        * @return {CitySelector} this，当前实例
        * @chainable
        */
        unSelect : function(string){
            var _ = this;
            if(S.isArray(string)){
                S.each(string,function(item){
                    _.unSelect(item);
                });
            }else{
                var node,
                    type,
                    id,
                    city = S.one('#ks-cityselector'+this._id+'-city-'+this._citys[string]),
                    province = S.one('#ks-cityselector'+this._id+'-province-'+this._provinces[string]);
                if(city){
                    node = city;
                    type = CITY;
                    id = this._citys[string];
                }else if(province){
                    node = province;
                    type = PROVINCE;
                    id = this._provinces[string];
                }
                if(node){
                    node.prop(CHECKED,false);
                    /**
                    当用户取消选择时触发
                    @event unselect
                    @param {event} e 提供用户取消的一些信息
                    <dl>
                    <dt>type</dt><dd>用户取消的类型，'city'或'province'</dd>
                    <dt>value</dt><dd>用户取消的值，'北京'</dd>
                    <dt>raw</dt><dd>用户取消的值对应的元数据</dd>
                    </dl>
                    */
                    this.fire('unselect',{
                        data : {
                            type : type,
                            value : string,
                            raw : this._formatData[id]
                        }                    
                    });
                    if(this.get('multiple')){
                        var tmpNode = [],
                            tmpString = [],
                            selectedVal = _._selectedValues;
                        S.each(_._selected,function(item,index){
                            if(!item.equals(node)){
                                tmpNode.push(item);
                            }
                            if(selectedVal[index] != string){
                                tmpString.push(selectedVal[index]);
                            }
                        });
                        this._selected = tmpNode;
                        this._selectedValues = tmpString;
                    }else{
                        this._selected = [];
                        this._selectedValues = []; 
                    }
                    this._node && this._delCity(node,type);
                }
            }
            return this;
        },
        /**
        * 获取用户当前已经选中的城市列表
        *
        * @method getSelected
        * @return {Array} 选中的城市列表，['北京','太原']
        */
        getSelected : function(){
            return this._selectedValues;
        }
    },{
    	ATTRS : {
            /**
            设置城市选择器的触发方式，在不设置render的情况下有效，会以overlay的方式呈现

            @attribute triggerType
            @type string
            @default 'focus'
            @writeOnce
            @optional
            */
    		triggerType : {
    			value : 'focus'
    		}, 
            /**
            设置城市选择器的宽度

            @attribute width
            @type number
            @default 500
            @optional
            */   		
            width : {
                value : 500
            }, 
            /**
            设置城市选择器的高度

            @attribute height
            @type number
            @default 400
            @optional
            */           
    		height : {
    			value : 400
    		},
            /**
            城市选择器默认宽度与input一致

            @attribute autoWidth
            @type boolean
            @default false
            @optional
            */
            autoWidth : {
                value : false
            },
            /**
            是否支持多选

            @attribute multiple
            @type boolean
            @default false
            @optional
            */
    		multiple : {
    			value : false
    		},
            /**
            省是否可以选择

            @attribute canProvinceSelect
            @type boolean
            @default false
            @optional
            */
            canProvinceSelect : {
                value : false
            },
            /**
            设置城市选择器的class前缀，只设置了一个，如果需要自定义样式，可使用此命名空间重置

            @attribute prefixCls
            @type string
            @default 'ks-'
            @optional
            @writeOnce
            */
            prefixCls : {
                value : 'ks-'
            },
            /**
            城市选择器需要的数据

            @attribute data
            @type json
            @writeOnce
            */
            data : {
                value : DomesticData
            },
            /**
			是否启用select联动功能，启用后需要提供两个select节点

			@attribute linkage
			@type boolean
			@writeOnce
			@default false
			@optional
            */
            linkage : {
            	value : false
            },
            /**
			启用select联动功能后的省份select节点(国外对应国家)

			@attribute countrySelect
			@type HTMLElement|node|selector
			@writeOnce
			@optional
            */
            countrySelect : {
            },
            /**
			启用select联动功能后的城市select节点(国外对应州、城市)

			@attribute citySelect
			@type HTMLElement|node|selector
			@writeOnce
			@optional
            */
            citySelect : {
            },
            /**
			启用select联动功能后的默认国家或者省

			@attribute defaultLinkageCountry
			@type string
			@writeOnce
			@optional
            */
            defaultLinkageCountry : {
            },
            /**
            城市选择器所需要绑定的input节点

            @attribute node
            @type HTMLElement|node|selector
            @writeOnce
            */
            /**
            城市选择器渲染的父容器，如果不提供则使用overlay方式

            @attribute render
            @type HTMLElement|node|selector
            @writeOnce
            @optional
            */

    	}
    },'CitySelector');

    return CitySelector;

},{requires:['node','event','rich-base','overlay','xtemplate','./domestic','./index.css']});