/**
 * 国内省市区联动js
 *
 * @module cityselector
 * @author freyaoo@gmail.com
 * @version 1.3
 */
KISSY.add(function(S,Data,Base){
    'use strict';

    /**
     * Data为联动城市数据，为可扩展数组，0为code，1为名称，最后为下一级的数据
     * 如果需要扩展请扩展最后最后一级的前面 即length-1前面的数据无穷扩展
     */

    var DEFAULTPROVINCE = '请选择省',
        DEFAULTCITY = '请选择城市',
        DEFAULTDISTRICT = '请选择地区',
        IDX = 'data-index',
        SIGN = { //标志由用户触发select change
            data : {
                setBySelectChange : true
            }
        };

    /**
    * 城市联动选择器constructor

        <select id="province1"></select>    
        <select id="city1"></select>    
        <select id="district1"></select>    
        KISSY.use('gallery/cityselector/1.3/linkage',function(S,CityLinkage){
        var cityselector = new CityLinkage({
            provinceSelect : '#province1',
            citySelect : '#city1',
            districtSelect : '#district1',
            province : '黑龙江省',
            city : '大庆市',
            district : '红岗区'
        });
        cityselector.on('afterPronvinceChange',function(e){
            console.log(e.newVal);
            console.log(e.oldVal);
        });

    *
    * @class Linkage
    * @extends Base
    * @constructor   
    */
    var Linkage = Base.extend({
        initializer : function(){
            var _ = this;
            if(!_.get('provinceSelect')){
                S.log('cityselector::provinceSelect are not find,cityselector init failured!');
                return;
            }
            _.provinceNode = S.one(_.get('provinceSelect'));
            _.cityNode = S.one(_.get('citySelect'));
            _.districtNode = S.one(_.get('districtSelect'));
            _._render();
            _._bind();
        },
        destructor : function(){

        },
        /**
         * 第一次初始化填充默认省市数据
         * @method _render
         * @private
         */
        _render : function(){
            var _ = this;
            _._fillAndSelectProvince(false);
            _._fillAndSelectCity(false);
            _._fillAndSelectDistrict(false);
        },
        /**
         * 绑定事件
         * @method _bind
         * @private
         */
        _bind : function(){
            var _ = this;
            //省份
            _.provinceNode.on('change',function(e){
                var province = _._getSelectedOptionsText(_.provinceNode);

                _.set('province',province,SIGN);
                _._fillAndSelectCity(true,true);
                _._fillAndSelectDistrict(true,true); 
            });
            //城市
            _.cityNode && _.cityNode.on('change',function(e){
                var city = _._getSelectedOptionsText(_.cityNode);

                _.set('city',city,SIGN); 
                _._fillAndSelectDistrict(true,true); 
            });
            //地区
            _.districtNode && _.districtNode.on('change',function(e){
                var district = _._getSelectedOptionsText(_.districtNode);
                _.set('district',district,SIGN);
            });
        },  
        /**
         * 填充省份并选中
         * @method _fillAndSelectProvince
         * @private
         */
        _fillAndSelectProvince : function(){
            var _ = this,
                province = _.get('province'),
                node = _.provinceNode;
            node[0].options.add(new Option(DEFAULTPROVINCE,-1));
            S.each(Data,function(item,index){
                var op = new Option(item[1],item[0]);
                node[0].options.add(op);
                if(item[1] == province){
                    op.selected = true;
                }
            });
        },
        /**
         * 填充城市并选中
         * @method _fillAndSelectCity
         * @param  {Boolean} isNeedSet               是否需要set city
         * @param  {Boolean} isTriggerBySelectChange 是否由select change事件触发
         * @private
         */
        _fillAndSelectCity : function(isNeedSet,isTriggerBySelectChange){
            var _ = this,
                province = _.get('province'),
                city = _.get('city'),
                node = _.cityNode;
            node[0].options.length = 0;
            if(province != DEFAULTPROVINCE){
                var index = _.provinceNode[0].selectedIndex-1,
                    citys = Data[index],
                    len = citys.length - 1;
                S.each(citys[len],function(item,index){
                    var op = new Option(item[1],item[0]);
                    _.cityNode[0].add(op);
                    if(item[1] == city){
                        op.selected = true;
                    }
                });
            }else{
                node[0].options.add(new Option(DEFAULTCITY,-1));
            }
            if(isNeedSet){
                _.set('city',_._getSelectedOptionsText(node),isTriggerBySelectChange && SIGN);
            }
        },
        /**
         * 填充地区并选中
         * @method _fillAndSelectDistrict
         * @param  {Boolean} isNeedSet               是否需要set district
         * @param  {Boolean} isTriggerBySelectChange 是否由select change触发
         * @private
         */
        _fillAndSelectDistrict : function(isNeedSet,isTriggerBySelectChange){
            var _ = this,
                district = _.get('district'),
                province = _.get('province'),
                city = _.get('city'),
                node = _.districtNode;
            node[0].options.length = 0;
            if(city != DEFAULTCITY){
                var pIndex = _.provinceNode[0].selectedIndex-1,
                    cIndex = _.cityNode[0].selectedIndex,
                    districts = Data[pIndex][Data[pIndex].length-1][cIndex];
                S.each(districts[districts.length-1],function(item,index){
                    var op = new Option(item[1],item[0]);
                    _.districtNode[0].add(op);
                    if(item[1] == district){
                        op.selected = true;
                    }
                });
            }else{
                node[0].options.add(new Option(DEFAULTDISTRICT,-1));
            }
            if(isNeedSet){
                _.set('district',_._getSelectedOptionsText(node),isTriggerBySelectChange && SIGN);
            }
        },
        /**
         * 选中省份
         * @method _selectProvince
         * @private
         */
        _selectProvince : function(){
            var _ = this,
                province = _.get('province'),
                options = _.provinceNode[0].options,
                i = 0,
                len = options.length;
            for(;i<len;i++){
                var txt = options[i].text;
                if(txt == province){
                    options[i].selected = true;
                }
            }
        },
        /**
         * 选中城市
         * @method _selectCity
         * @private
         */
        _selectCity : function(){
            var _ = this,
                city = _.get('city'),
                options = _.cityNode[0].options,
                i = 0,
                len = options.length;
            for(;i<len;i++){
                var txt = options[i].text;
                if(txt == city){
                    options[i].selected = true;
                }
            }
        },
        /**
         * 选中地区
         * @method _selectDistrict
         * @private
         */
        _selectDistrict : function(){
            var _ = this,
                district = _.get('district'),
                options = _.districtNode[0].options,
                i = 0,
                len = options.length;
            for(;i<len;i++){
                var txt = options[i].text;
                if(txt == district){
                    options[i].selected = true;
                }
            }
        },
        _onSetProvince : function(val,e){
            if(e && !e.setBySelectChange){
                this._selectProvince();
                this._fillAndSelectCity(true);
                this._fillAndSelectDistrict(true);
            }
        },
        _onSetCity : function(val,e){
            if(e && !e.setBySelectChange){
                this._selectCity();
                this._fillAndSelectDistrict(true);
            } 
        },
        _onSetDistrict : function(val,e){
            if(e && !e.setBySelectChange){
                this._selectDistrict();
            }
        },
        /**
         * 获取指定select元素的选中项的文案
         * @param  {node} selectEl 指定select元素
         * @return {string} 当前选中项的文案
         * @private
         */
        _getSelectedOptionsText : function(selectEl){
            var el = selectEl[0],
                options = el.options,
                selectedOptions = el.selectedOptions, //目前只有webkit实现了selectedOptions
                index = el.selectedIndex;
            return selectedOptions ? selectedOptions[0].text : options[index].text;
        }
    },{
        ATTRS : {
            province : {
                value : DEFAULTPROVINCE,
                validator : function(val){
                    var inData = false;
                    if(val == DEFAULTPROVINCE){
                        inData = true;
                    }else{
                        S.each(Data,function(item){
                            if(val == item[1]){
                                inData = true;
                            }
                        });
                    }
                    return inData;
                }
            },
            city : {
                value : DEFAULTCITY,
                validator : function(val){
                    var _ = this,
                        inData = false,
                        options = _.cityNode[0].options;
                    S.each(options,function(item){
                        if(item.text == val){
                            inData = true;
                        }
                    });
                    return inData;
                }
            },
            district : {
                value : DEFAULTDISTRICT,
                validator : function(val){
                    var _ = this,
                        inData = false,
                        options = _.districtNode[0].options;
                    S.each(options,function(item){
                        if(item.text == val){
                            inData = true;
                        }
                    });
                    return inData;
                }
            }
        }
        /**
        需要选中的省

        @attribute province
        @type string
        */
       /**
        需要选中的市

        @attribute city
        @type string
        */
       /**
        需要选中的地区

        @attribute district
        @type string
        */
       /**
        渲染省的select节点

        @attribute provinceSelect
        @type HTMLelement|node|selector
        @writeOnce
        */
       /**
        渲染市的select节点

        @attribute citySelect
        @type HTMLelement|node|selector
        @writeOnce
        */
        /**
        渲染地区的select节点

        @attribute districtSelect
        @type HTMLelement|node|selector
        @writeOnce
        */
    });

    return Linkage;
},{
    requires : ['./linkage-data','rich-base','node','event']
});