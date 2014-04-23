/*
combined files : 

gallery/cityselector/1.2/domestic
gallery/cityselector/1.2/index

*/
/**
* 国内城市数据

@module domestic
@fileoverview 国内城市数据
@author freyaoo@gmail.com
@version 1.2
*/
KISSY.add('gallery/cityselector/1.2/domestic',function(S){
	'use strict';

	var data = [{"name":"安徽","pinyin":"anhui","spy":"ah","code":"30509","city":[{"name":"安庆","pinyin":"anqing","spy":"aq","code":"45959"},{"name":"蚌埠","pinyin":"bangbu","spy":"bb","code":"45961"},{"name":"亳州","pinyin":"bozhou","spy":"bz","code":"45966"},{"name":"巢湖","pinyin":"chaohu","spy":"ch","code":"45964"},{"name":"滁州","pinyin":"chuzhou","spy":"cz","code":"110249"},{"name":"池州","pinyin":"chizhou","spy":"cz","code":"110252"},{"name":"阜阳","pinyin":"fuyang","spy":"fy","code":"45963"},{"name":"淮北","pinyin":"huaibei","spy":"hb","code":"110247"},{"name":"合肥","pinyin":"hefei","spy":"hf","code":"29413"},{"name":"淮南","pinyin":"huainan","spy":"hn","code":"45962"},{"name":"黄山","pinyin":"huangshan","spy":"hs","code":"38723"},{"name":"六安","pinyin":"liuan","spy":"la","code":"110250"},{"name":"马鞍山","pinyin":"maanshan","spy":"mas","code":"45968"},{"name":"宿州","pinyin":"suzhou","spy":"sz","code":"45965"},{"name":"铜陵","pinyin":"tongling","spy":"tl","code":"110248"},{"name":"芜湖","pinyin":"wuhu","spy":"wh","code":"45960"},{"name":"宣城","pinyin":"xuancheng","spy":"xc","code":"110253"}]},{"name":"北京","pinyin":"beijing","spy":"bj","code":"29400"},{"name":"重庆","pinyin":"chongqing","spy":"cq","code":"29404"},{"name":"福建","pinyin":"fujian","spy":"fj","code":"30519","city":[{"name":"福州","pinyin":"fuzhou","spy":"fz","code":"29406"},{"name":"龙岩","pinyin":"longyan","spy":"ly","code":"82717644"},{"name":"宁德","pinyin":"ningde","spy":"nd","code":"45973"},{"name":"南平","pinyin":"nanping","spy":"np","code":"46213"},{"name":"莆田","pinyin":"putian","spy":"pt","code":"45972"},{"name":"泉州","pinyin":"quanzhou","spy":"qz","code":"38742"},{"name":"厦门","pinyin":"shamen","spy":"sm","code":"29431"},{"name":"三明","pinyin":"sanming","spy":"sm","code":"46212"},{"name":"漳州","pinyin":"zhangzhou","spy":"zz","code":"45975"}]},{"name":"广东","pinyin":"guangdong","spy":"gd","code":"30517","city":[{"name":"潮州","pinyin":"chaozhou","spy":"cz","code":"46008"},{"name":"东莞","pinyin":"dongguan","spy":"dg","code":"84746"},{"name":"佛山","pinyin":"foshan","spy":"fs","code":"31961"},{"name":"广州","pinyin":"guangzhou","spy":"gz","code":"29407"},{"name":"河源","pinyin":"heyuan","spy":"hy","code":"46003"},{"name":"惠州","pinyin":"huizhou","spy":"hz","code":"46000"},{"name":"江门","pinyin":"jiangmen","spy":"jm","code":"45996"},{"name":"揭阳","pinyin":"jieyang","spy":"jy","code":"46009"},{"name":"茂名","pinyin":"maoming","spy":"mm","code":"45998"},{"name":"梅州","pinyin":"meizhou","spy":"mz","code":"46001"},{"name":"清远","pinyin":"qingyuan","spy":"qy","code":"46005"},{"name":"韶关","pinyin":"shaoguan","spy":"sg","code":"45995"},{"name":"汕头","pinyin":"shantou","spy":"st","code":"45994"},{"name":"汕尾","pinyin":"shanwei","spy":"sw","code":"46002"},{"name":"深圳","pinyin":"shenzhen","spy":"sz","code":"29425"},{"name":"云浮","pinyin":"yunfu","spy":"yf","code":"46010"},{"name":"阳江","pinyin":"yangjiang","spy":"yj","code":"46004"},{"name":"珠海","pinyin":"zhuhai","spy":"zh","code":"31960"},{"name":"湛江","pinyin":"zhanjiang","spy":"zj","code":"45997"},{"name":"肇庆","pinyin":"zhaoqing","spy":"zq","code":"45999"},{"name":"中山","pinyin":"zhongshan","spy":"zs","code":"31962"}]},{"name":"甘肃","pinyin":"gansu","spy":"gs","code":"30505","city":[{"name":"白银","pinyin":"baiyin","spy":"by","code":"45985"},{"name":"敦煌","pinyin":"dunhuang","spy":"dh","code":"45989"},{"name":"定西","pinyin":"dingxi","spy":"dx","code":"45986"},{"name":"甘南","pinyin":"gannan","spy":"gn","code":"45992"},{"name":"金昌","pinyin":"jinchang","spy":"jc","code":"45979"},{"name":"酒泉","pinyin":"jiuquan","spy":"jq","code":"45982"},{"name":"嘉峪关","pinyin":"jiayuguan","spy":"jyg","code":"45978"},{"name":"陇南","pinyin":"longnan","spy":"ln","code":"45987"},{"name":"临夏","pinyin":"linxia","spy":"lx","code":"45990"},{"name":"兰州","pinyin":"lanzhou","spy":"lz","code":"29417"},{"name":"平凉","pinyin":"pingliang","spy":"pl","code":"45984"},{"name":"庆阳","pinyin":"qingyang","spy":"qy","code":"45983"},{"name":"天水","pinyin":"tianshui","spy":"ts","code":"45977"},{"name":"武威","pinyin":"wuwei","spy":"ww","code":"45980"},{"name":"张掖","pinyin":"zhangye","spy":"zy","code":"45981"}]},{"name":"广西","pinyin":"guangxi","spy":"gx","code":"30518","city":[{"name":"北海","pinyin":"beihai","spy":"bh","code":"38716"},{"name":"百色","pinyin":"baise","spy":"bs","code":"46018"},{"name":"崇左","pinyin":"chongzuo","spy":"cz","code":"46022"},{"name":"防城港","pinyin":"fangchenggang","spy":"fcg","code":"46014"},{"name":"贵港","pinyin":"guigang","spy":"gg","code":"46016"},{"name":"桂林","pinyin":"guilin","spy":"gl","code":"29408"},{"name":"河池","pinyin":"hechi","spy":"hc","code":"46020"},{"name":"贺州","pinyin":"hezhou","spy":"hz","code":"46019"},{"name":"来宾","pinyin":"laibin","spy":"lb","code":"46021"},{"name":"柳州","pinyin":"liuzhou","spy":"lz","code":"46012"},{"name":"南宁","pinyin":"nanning","spy":"nn","code":"29421"},{"name":"钦州","pinyin":"qinzhou","spy":"qz","code":"46015"},{"name":"梧州","pinyin":"wuzhou","spy":"wz","code":"46013"},{"name":"玉林","pinyin":"yulin","spy":"yl","code":"46017"}]},{"name":"贵州","pinyin":"guizhou","spy":"gz","code":"30516","city":[{"name":"安顺","pinyin":"anshun","spy":"as","code":"82719621"},{"name":"毕节","pinyin":"bijie","spy":"bj","code":"46029"},{"name":"贵阳","pinyin":"guiyang","spy":"gy","code":"29409"},{"name":"六盘水","pinyin":"liupanshui","spy":"lps","code":"46026"},{"name":"黔东南","pinyin":"qiandongnan","spy":"qdn","code":"110231"},{"name":"黔南","pinyin":"qiannan","spy":"qn","code":"110232"},{"name":"黔西南","pinyin":"qianxinan","spy":"qxn","code":"110230"},{"name":"铜仁","pinyin":"tongren","spy":"tr","code":"46027"},{"name":"遵义","pinyin":"zunyi","spy":"zy","code":"46024"}]},{"name":"湖北","pinyin":"hubei","spy":"hb","code":"30513","city":[{"name":"恩施","pinyin":"enshi","spy":"es","code":"46063"},{"name":"鄂州","pinyin":"ezhou","spy":"ez","code":"110236"},{"name":"黄冈","pinyin":"huanggang","spy":"hg","code":"110238"},{"name":"黄石","pinyin":"huangshi","spy":"hs","code":"110235"},{"name":"荆门","pinyin":"jingmen","spy":"jm","code":"46062"},{"name":"荆州","pinyin":"jingzhou","spy":"jz","code":"46058"},{"name":"十堰","pinyin":"shiyan","spy":"sy","code":"46061"},{"name":"随州","pinyin":"suizhou","spy":"sz","code":"110240"},{"name":"武汉","pinyin":"wuhan","spy":"wh","code":"29429"},{"name":"襄樊","pinyin":"xiangfan","spy":"xf","code":"46060"},{"name":"孝感","pinyin":"xiaogan","spy":"xg","code":"110237"},{"name":"咸宁","pinyin":"xianning","spy":"xn","code":"110239"},{"name":"宜昌","pinyin":"yichang","spy":"yc","code":"46059"}]},{"name":"河北","pinyin":"hebei","spy":"hb","code":"30499","city":[{"name":"保定","pinyin":"baoding","spy":"bd","code":"46040"},{"name":"承德","pinyin":"chengde","spy":"cd","code":"38717"},{"name":"沧州","pinyin":"cangzhou","spy":"cz","code":"110288"},{"name":"邯郸","pinyin":"handan","spy":"hd","code":"46042"},{"name":"衡水","pinyin":"hengshui","spy":"hs","code":"46041"},{"name":"廊坊","pinyin":"langfang","spy":"lf","code":"46039"},{"name":"秦皇岛","pinyin":"qinhuangdao","spy":"qhd","code":"46034"},{"name":"石家庄","pinyin":"shijiazhuang","spy":"sjz","code":"29426"},{"name":"唐山","pinyin":"tangshan","spy":"ts","code":"46037"},{"name":"邢台","pinyin":"xingtai","spy":"xt","code":"46036"},{"name":"张家口","pinyin":"zhangjiakou","spy":"zjk","code":"38744"}]},{"name":"黑龙江","pinyin":"heilongjiang","spy":"hlj","code":"30496","city":[{"name":"大庆","pinyin":"daqing","spy":"dq","code":"46055"},{"name":"大兴安岭","pinyin":"daxinganling","spy":"dxal","code":"110299"},{"name":"哈尔滨","pinyin":"haerbin","spy":"heb","code":"29410"},{"name":"鹤岗","pinyin":"hegang","spy":"hg","code":"110295"},{"name":"黑河","pinyin":"heihe","spy":"hh","code":"84742"},{"name":"佳木斯","pinyin":"jiamusi","spy":"jms","code":"84743"},{"name":"鸡西","pinyin":"jixi","spy":"jx","code":"110294"},{"name":"牡丹江","pinyin":"mudanjiang","spy":"mdj","code":"46054"},{"name":"齐齐哈尔","pinyin":"qiqihaer","spy":"qqhe","code":"46056"},{"name":"七台河","pinyin":"qitaihe","spy":"qth","code":"110297"},{"name":"绥化","pinyin":"suihua","spy":"sh","code":"110298"},{"name":"双鸭山","pinyin":"shuangyashan","spy":"sys","code":"110296"},{"name":"伊春","pinyin":"yichun","spy":"yc","code":"84744"}]},{"name":"湖南","pinyin":"hunan","spy":"hn","code":"30514","city":[{"name":"常德","pinyin":"changde","spy":"cd","code":"110224"},{"name":"长沙","pinyin":"changsha","spy":"cs","code":"29402"},{"name":"郴州","pinyin":"chenzhou","spy":"cz","code":"110226"},{"name":"怀化","pinyin":"huaihua","spy":"hh","code":"110228"},{"name":"衡阳","pinyin":"hengyang","spy":"hy","code":"82718143"},{"name":"娄底","pinyin":"loudi","spy":"ld","code":"110229"},{"name":"邵阳","pinyin":"shaoyang","spy":"sy","code":"110222"},{"name":"湘潭","pinyin":"xiangtan","spy":"xt","code":"46067"},{"name":"湘西","pinyin":"xiangxi","spy":"xx","code":"82718147"},{"name":"岳阳","pinyin":"yueyang","spy":"yy","code":"110223"},{"name":"益阳","pinyin":"yiyang","spy":"yy","code":"110225"},{"name":"永州","pinyin":"yongzhou","spy":"yz","code":"110227"},{"name":"张家界","pinyin":"zhangjiajie","spy":"zjj","code":"29436"},{"name":"株洲","pinyin":"zhuzhou","spy":"zz","code":"110220"}]},{"name":"海南","pinyin":"hainan","spy":"hn","code":"30520","city":[{"name":"海口","pinyin":"haikou","spy":"hk","code":"29411"},{"name":"三沙市","pinyin":"sanshashi","spy":"sss","code":"155258206"},{"name":"三亚","pinyin":"sanya","spy":"sy","code":"38732"},{"name":"五指山","pinyin":"wuzhishan","spy":"wzs","code":"57228"},{"name":"兴隆","pinyin":"xinglong","spy":"xl","code":"3278613"}]},{"name":"河南","pinyin":"henan","spy":"hn","code":"30500","city":[{"name":"安阳","pinyin":"anyang","spy":"ay","code":"110280"},{"name":"登封","pinyin":"dengfeng","spy":"df","code":"82717870"},{"name":"鹤壁","pinyin":"hebi","spy":"hb","code":"46051"},{"name":"焦作","pinyin":"jiaozuo","spy":"jz","code":"46052"},{"name":"开封","pinyin":"kaifeng","spy":"kf","code":"46045"},{"name":"漯河","pinyin":"luohe","spy":"lh","code":"131759"},{"name":"洛阳","pinyin":"luoyang","spy":"ly","code":"38729"},{"name":"南阳","pinyin":"nanyang","spy":"ny","code":"46048"},{"name":"平顶山","pinyin":"pingdingshan","spy":"pds","code":"57255"},{"name":"濮阳","pinyin":"puyang","spy":"py","code":"46047"},{"name":"三门峡","pinyin":"sanmenxia","spy":"smx","code":"110283"},{"name":"商丘","pinyin":"shangqiu","spy":"sq","code":"110284"},{"name":"许昌","pinyin":"xuchang","spy":"xc","code":"110281"},{"name":"新乡","pinyin":"xinxiang","spy":"xx","code":"46046"},{"name":"信阳","pinyin":"xinyang","spy":"xy","code":"110285"},{"name":"周口","pinyin":"zhoukou","spy":"zk","code":"110286"},{"name":"驻马店","pinyin":"zhumadian","spy":"zmd","code":"110287"},{"name":"郑州","pinyin":"zhengzhou","spy":"zz","code":"29437"}]},{"name":"吉林","pinyin":"jilin","spy":"jl","code":"30497","city":[{"name":"白城","pinyin":"baicheng","spy":"bc","code":"110293"},{"name":"白山","pinyin":"baishan","spy":"bs","code":"82717105"},{"name":"长春","pinyin":"changchun","spy":"cc","code":"29401"},{"name":"吉林","pinyin":"jilin","spy":"jl","code":"30497"},{"name":"辽源","pinyin":"liaoyuan","spy":"ly","code":"110290"},{"name":"四平","pinyin":"siping","spy":"sp","code":"110289"},{"name":"松原","pinyin":"songyuan","spy":"sy","code":"110292"},{"name":"通化","pinyin":"tonghua","spy":"th","code":"110291"},{"name":"延边","pinyin":"yanbian","spy":"yb","code":"84745"}]},{"name":"江苏","pinyin":"jiangsu","spy":"js","code":"30511","city":[{"name":"常州","pinyin":"changzhou","spy":"cz","code":"31949"},{"name":"淮安","pinyin":"huaian","spy":"ha","code":"46092"},{"name":"连云港","pinyin":"lianyungang","spy":"lyg","code":"31951"},{"name":"南京","pinyin":"nanjing","spy":"nj","code":"29420"},{"name":"南通","pinyin":"nantong","spy":"nt","code":"31948"},{"name":"宿迁","pinyin":"suqian","spy":"sq","code":"108722"},{"name":"苏州","pinyin":"suzhou","spy":"sz","code":"30378"},{"name":"泰州","pinyin":"taizhou","spy":"tz","code":"46084"},{"name":"无锡","pinyin":"wuxi","spy":"wx","code":"31947"},{"name":"徐州","pinyin":"xuzhou","spy":"xz","code":"31950"},{"name":"盐城","pinyin":"yancheng","spy":"yc","code":"46085"},{"name":"扬州","pinyin":"yangzhou","spy":"yz","code":"46078"},{"name":"镇江","pinyin":"zhenjiang","spy":"zj","code":"46079"}]},{"name":"江西","pinyin":"jiangxi","spy":"jx","code":"30512","city":[{"name":"抚州","pinyin":"fuzhou","spy":"fz","code":"110246"},{"name":"赣州","pinyin":"ganzhou","spy":"gz","code":"110243"},{"name":"吉安","pinyin":"jian","spy":"ja","code":"82717706"},{"name":"景德镇","pinyin":"jingdezhen","spy":"jdz","code":"46073"},{"name":"九江","pinyin":"jiujiang","spy":"jj","code":"46072"},{"name":"南昌","pinyin":"nanchang","spy":"nc","code":"38730"},{"name":"萍乡","pinyin":"pingxiang","spy":"px","code":"46076"},{"name":"上饶","pinyin":"shangrao","spy":"sr","code":"46074"},{"name":"新余","pinyin":"xinyu","spy":"xy","code":"110241"},{"name":"宜春","pinyin":"yichun","spy":"yc","code":"110245"},{"name":"鹰潭","pinyin":"yingtan","spy":"yt","code":"110242"}]},{"name":"辽宁","pinyin":"liaoning","spy":"ln","code":"30498","city":[{"name":"鞍山","pinyin":"anshan","spy":"as","code":"46104"},{"name":"本溪","pinyin":"benxi","spy":"bx","code":"46106"},{"name":"朝阳","pinyin":"chaoyang","spy":"cy","code":"46110"},{"name":"丹东","pinyin":"dandong","spy":"dd","code":"46103"},{"name":"大连","pinyin":"dalian","spy":"dl","code":"29405"},{"name":"抚顺","pinyin":"fushun","spy":"fs","code":"46107"},{"name":"阜新","pinyin":"fuxin","spy":"fx","code":"46109"},{"name":"葫芦岛","pinyin":"huludao","spy":"hld","code":"46099"},{"name":"锦州","pinyin":"jinzhou","spy":"jz","code":"46100"},{"name":"辽阳","pinyin":"liaoyang","spy":"ly","code":"46105"},{"name":"盘锦","pinyin":"panjin","spy":"pj","code":"46101"},{"name":"沈阳","pinyin":"shenyang","spy":"sy","code":"29424"},{"name":"铁岭","pinyin":"tieling","spy":"tl","code":"46108"},{"name":"营口","pinyin":"yingkou","spy":"yk","code":"46102"}]},{"name":"内蒙古","pinyin":"neimenggu","spy":"nmg","code":"30495","city":[{"name":"阿拉善盟","pinyin":"alashanmeng","spy":"alsm","code":"131754"},{"name":"包头","pinyin":"baotou","spy":"bt","code":"46112"},{"name":"巴彦淖尔","pinyin":"bayannaoer","spy":"byne","code":"46118"},{"name":"赤峰","pinyin":"chifeng","spy":"cf","code":"46114"},{"name":"鄂尔多斯","pinyin":"eerduosi","spy":"eeds","code":"46116"},{"name":"呼和浩特","pinyin":"huhehaote","spy":"hhht","code":"29414"},{"name":"呼伦贝尔","pinyin":"hulunbeier","spy":"hlbe","code":"46117"},{"name":"通辽","pinyin":"tongliao","spy":"tl","code":"46115"},{"name":"乌海","pinyin":"wuhai","spy":"wh","code":"46113"},{"name":"乌兰察布","pinyin":"wulanchabu","spy":"wlcb","code":"46119"},{"name":"兴安盟","pinyin":"xinganmeng","spy":"xam","code":"131752"},{"name":"锡林郭勒盟","pinyin":"xilinguolemeng","spy":"xlglm","code":"131753"}]},{"name":"宁夏","pinyin":"ningxia","spy":"nx","code":"30507","city":[{"name":"固原","pinyin":"guyuan","spy":"gy","code":"46123"},{"name":"石嘴山","pinyin":"shizuishan","spy":"szs","code":"46121"},{"name":"吴忠","pinyin":"wuzhong","spy":"wz","code":"46122"},{"name":"银川","pinyin":"yinchuan","spy":"yc","code":"29434"},{"name":"中卫","pinyin":"zhongwei","spy":"zw","code":"46124"}]},{"name":"青海","pinyin":"qinghai","spy":"qh","code":"30504","city":[{"name":"果洛","pinyin":"guoluo","spy":"gl","code":"110272"},{"name":"海北","pinyin":"haibei","spy":"hb","code":"110270"},{"name":"海东","pinyin":"haidong","spy":"hd","code":"46126"},{"name":"黄南","pinyin":"huangnan","spy":"hn","code":"110271"},{"name":"海南","pinyin":"hainan","spy":"hn","code":"30520"},{"name":"海西","pinyin":"haixi","spy":"hx","code":"110274"},{"name":"西宁","pinyin":"xining","spy":"xn","code":"29433"},{"name":"玉树","pinyin":"yushu","spy":"ys","code":"110273"}]},{"name":"四川","pinyin":"sichuan","spy":"sc","code":"30508","city":[{"name":"阿坝州","pinyin":"abazhou","spy":"abz","code":"82719357"},{"name":"巴中","pinyin":"bazhong","spy":"bz","code":"110260"},{"name":"成都","pinyin":"chengdou","spy":"cd","code":"29403"},{"name":"德阳","pinyin":"deyang","spy":"dy","code":"46173"},{"name":"达州","pinyin":"dazhou","spy":"dz","code":"110257"},{"name":"广安","pinyin":"guangan","spy":"ga","code":"110256"},{"name":"广元","pinyin":"guangyuan","spy":"gy","code":"46175"},{"name":"甘孜州","pinyin":"ganzizhou","spy":"gzz","code":"3297267"},{"name":"乐山","pinyin":"leshan","spy":"ls","code":"38726"},{"name":"凉山州","pinyin":"liangshanzhou","spy":"lsz","code":"3297268"},{"name":"泸州","pinyin":"luzhou","spy":"lz","code":"46172"},{"name":"眉山","pinyin":"meishan","spy":"ms","code":"82719356"},{"name":"绵阳","pinyin":"mianyang","spy":"my","code":"46174"},{"name":"南充","pinyin":"nanchong","spy":"nc","code":"110254"},{"name":"内江","pinyin":"neijiang","spy":"nj","code":"46177"},{"name":"攀枝花","pinyin":"panzhihua","spy":"pzh","code":"46171"},{"name":"遂宁","pinyin":"suining","spy":"sn","code":"46176"},{"name":"雅安","pinyin":"yaan","spy":"ya","code":"110259"},{"name":"宜宾","pinyin":"yibin","spy":"yb","code":"110255"},{"name":"自贡","pinyin":"zigong","spy":"zg","code":"46170"},{"name":"资阳","pinyin":"ziyang","spy":"zy","code":"110261"}]},{"name":"山东","pinyin":"shandong","spy":"sd","code":"30501","city":[{"name":"滨州","pinyin":"binzhou","spy":"bz","code":"46144"},{"name":"东营","pinyin":"dongying","spy":"dy","code":"46136"},{"name":"德州","pinyin":"dezhou","spy":"dz","code":"46138"},{"name":"菏泽","pinyin":"heze","spy":"hz","code":"46142"},{"name":"济南","pinyin":"jinan","spy":"jn","code":"29415"},{"name":"济宁","pinyin":"jining","spy":"jn","code":"110278"},{"name":"聊城","pinyin":"liaocheng","spy":"lc","code":"46143"},{"name":"莱芜","pinyin":"laiwu","spy":"lw","code":"110279"},{"name":"临沂","pinyin":"linyi","spy":"ly","code":"46137"},{"name":"青岛","pinyin":"qingdao","spy":"qd","code":"29422"},{"name":"日照","pinyin":"rizhao","spy":"rz","code":"46141"},{"name":"泰安","pinyin":"taian","spy":"ta","code":"82717789"},{"name":"潍坊","pinyin":"weifang","spy":"wf","code":"46134"},{"name":"威海","pinyin":"weihai","spy":"wh","code":"38734"},{"name":"烟台","pinyin":"yantai","spy":"yt","code":"38738"},{"name":"淄博","pinyin":"zibo","spy":"zb","code":"46135"},{"name":"枣庄","pinyin":"zaozhuang","spy":"zz","code":"110277"}]},{"name":"上海","pinyin":"shanghai","spy":"sh","code":"29423"},{"name":"山西","pinyin":"shanxi","spy":"sx","code":"30502","city":[{"name":"长治","pinyin":"changzhi","spy":"cz","code":"46153"},{"name":"大同","pinyin":"datong","spy":"dt","code":"46150"},{"name":"晋城","pinyin":"jincheng","spy":"jc","code":"46154"},{"name":"晋中","pinyin":"jinzhong","spy":"jz","code":"110275"},{"name":"临汾","pinyin":"linfen","spy":"lf","code":"46155"},{"name":"吕梁","pinyin":"lu:liang","spy":"ll","code":"110276"},{"name":"平遥","pinyin":"pingyao","spy":"py","code":"8517582"},{"name":"朔州","pinyin":"shuozhou","spy":"sz","code":"46158"},{"name":"太原","pinyin":"taiyuan","spy":"ty","code":"29427"},{"name":"忻州","pinyin":"xinzhou","spy":"xz","code":"46159"},{"name":"运城","pinyin":"yuncheng","spy":"yc","code":"46157"},{"name":"阳泉","pinyin":"yangquan","spy":"yq","code":"46151"}]},{"name":"陕西","pinyin":"shanxi","spy":"sx","code":"30503","city":[{"name":"安康","pinyin":"ankang","spy":"ak","code":"46167"},{"name":"宝鸡","pinyin":"baoji","spy":"bj","code":"46162"},{"name":"汉中","pinyin":"hanzhong","spy":"hz","code":"46165"},{"name":"商洛","pinyin":"shangluo","spy":"sl","code":"46168"},{"name":"铜川","pinyin":"tongchuan","spy":"tc","code":"46161"},{"name":"渭南","pinyin":"weinan","spy":"wn","code":"82720044"},{"name":"西安","pinyin":"xian","spy":"xa","code":"29432"},{"name":"咸阳","pinyin":"xianyang","spy":"xy","code":"46163"},{"name":"延安","pinyin":"yanan","spy":"ya","code":"38739"},{"name":"榆林","pinyin":"yulin","spy":"yl","code":"46166"}]},{"name":"天津","pinyin":"tianjin","spy":"tj","code":"29428"},{"name":"新疆","pinyin":"xinjiang","spy":"xj","code":"30506","city":[{"name":"阿克苏","pinyin":"akesu","spy":"aks","code":"46189"},{"name":"阿勒泰","pinyin":"aletai","spy":"alt","code":"46197"},{"name":"博尔塔拉","pinyin":"boertala","spy":"betl","code":"110268"},{"name":"巴音郭楞","pinyin":"bayinguoleng","spy":"bygl","code":"110266"},{"name":"昌吉","pinyin":"changji","spy":"cj","code":"110267"},{"name":"哈密","pinyin":"hami","spy":"hm","code":"46187"},{"name":"和田","pinyin":"hetian","spy":"ht","code":"46188"},{"name":"克拉玛依","pinyin":"kelamayi","spy":"klmy","code":"46186"},{"name":"喀什","pinyin":"kashen","spy":"ks","code":"46190"},{"name":"克孜勒苏","pinyin":"kezilesu","spy":"kzls","code":"110265"},{"name":"塔城","pinyin":"tacheng","spy":"tc","code":"46196"},{"name":"吐鲁番","pinyin":"tulufan","spy":"tlf","code":"38733"},{"name":"乌鲁木齐","pinyin":"wulumuqi","spy":"wlmq","code":"29430"},{"name":"伊犁","pinyin":"yili","spy":"yl","code":"20328"}]},{"name":"西藏","pinyin":"xizang","spy":"xz","code":"27009","city":[{"name":"阿里","pinyin":"ali","spy":"al","code":"46183"},{"name":"昌都","pinyin":"changdou","spy":"cd","code":"46179"},{"name":"拉萨","pinyin":"lasa","spy":"ls","code":"29418"},{"name":"林芝","pinyin":"linzhi","spy":"lz","code":"46184"},{"name":"那曲","pinyin":"neiqu","spy":"nq","code":"46182"},{"name":"日喀则","pinyin":"rikaze","spy":"rkz","code":"46181"},{"name":"山南","pinyin":"shannan","spy":"sn","code":"46180"}]},{"name":"云南","pinyin":"yunnan","spy":"yn","code":"30515","city":[{"name":"昆明","pinyin":"kunming","spy":"km","code":"29416"},{"name":"保山","pinyin":"baoshan","spy":"bs","code":"46201"},{"name":"楚雄","pinyin":"chuxiong","spy":"cx","code":"46207"},{"name":"德宏","pinyin":"dehong","spy":"dh","code":"46208"},{"name":"大理","pinyin":"dali","spy":"dl","code":"38718"},{"name":"迪庆","pinyin":"diqing","spy":"dq","code":"82719678"},{"name":"红河","pinyin":"honghe","spy":"hh","code":"46206"},{"name":"临沧","pinyin":"lincang","spy":"lc","code":"46204"},{"name":"泸沽湖","pinyin":"luguhu","spy":"lgh","code":"17955681"},{"name":"丽江","pinyin":"lijiang","spy":"lj","code":"29419"},{"name":"怒江","pinyin":"nujiang","spy":"nj","code":"110234"},{"name":"普洱","pinyin":"puer","spy":"pe","code":"110233"},{"name":"曲靖","pinyin":"qujing","spy":"qj","code":"46199"},{"name":"文山","pinyin":"wenshan","spy":"ws","code":"46205"},{"name":"西双版纳","pinyin":"xishuangbanna","spy":"xsbn","code":"38736"},{"name":"玉溪","pinyin":"yuxi","spy":"yx","code":"46200"},{"name":"昭通","pinyin":"zhaotong","spy":"zt","code":"46202"}]},{"name":"浙江","pinyin":"zhejiang","spy":"zj","code":"30510","city":[{"name":"千岛湖","pinyin":"qiandaohu","spy":"qdh","code":"57362"},{"name":"杭州","pinyin":"hangzhou","spy":"hz","code":"29412"},{"name":"湖州","pinyin":"huzhou","spy":"hz","code":"31955"},{"name":"金华","pinyin":"jinhua","spy":"jh","code":"31953"},{"name":"嘉兴","pinyin":"jiaxing","spy":"jx","code":"31956"},{"name":"丽水","pinyin":"lishui","spy":"ls","code":"31959"},{"name":"宁波","pinyin":"ningbo","spy":"nb","code":"30379"},{"name":"衢州","pinyin":"quzhou","spy":"qz","code":"46210"},{"name":"绍兴","pinyin":"shaoxing","spy":"sx","code":"31954"},{"name":"台州","pinyin":"taizhou","spy":"tz","code":"31958"},{"name":"温州","pinyin":"wenzhou","spy":"wz","code":"82717293"},{"name":"舟山","pinyin":"zhoushan","spy":"zs","code":"82717294"}]}];

	return data;
});
/**
* 城市选择器，支持国内和国际城市，也可以自定义城市数据
*
* @module cityselector
* @author freyaoo@gmail.com
* @version 1.2
*/
KISSY.add('gallery/cityselector/1.2/index',function(S,Node,Event,Richbase,Overlay,Xtpl,DomesticData){
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
            provinceSelect : '#foo3',
            citySelect : '#foo4',
            districtSelect : '#foo10',
            // province : '黑龙江省',
            // city : '大庆市',
            // district : '红岗区'
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
        	if(!_._node && !_._renderNode){
                S.log('cityselector::node and render are not find,cityselector init failured!');
                return;
            }
            if(!_.get('data')){
            	S.log('cityselector::cityselector\'s data is undefined,cityselector init failured!');
            	return;
            }         
            _._id = S.guid();
            _._selected = []; 
            _._selectedValues = [];
        	_.render();
            _._node && _._checkCity();
            _._bind();      
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
                _._bindInput();
            }
        },
        /**
         * 绑定input节点相关事件
         * 
         * @method _bindInput
         * @private
         */
        _bindInput : function(){
            var _ = this;
            _.nodePropagationHandler = function(e){
                e.stopPropagation();
            };
            _.nodeFocusHandler = function(e){
                _._overlay.show();
            };
            _._node.on('click',_.nodePropagationHandler);
            _._node.on('focus',_.nodeFocusHandler);
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
            
            if(this._renderNode){
                this._renderNode.append(TMPL.render(obj));
            }else{
                // this._overlay = new Overlay.Popup({
                //     prefixCls : 'ks-cityselector-',
                //     width : w,
                //     trigger : this._node,
                //     visible : false,
                //     align : {
                //         node : this._node,
                //         points : ['bl','tl'],
                //         offset :[-1,0]
                //     },
                //     content : this._contentEl
                // });
                
                this._overlay = new Overlay({
                    prefixCls : 'ks-cityselector-',
                    width : w,
                    visible : false,
                    //srcNode : srcNode
                    content : TMPL.render(obj)
                }).render();
              
                this._overlay.on('show',function(){
                    _._overlay.set('align',{
                        node : _._node,
                        points : ['bl','tl'],
                        offset : [-1,0]
                    });
                    _._checkCity();
                });
            }
            this._contentEl = S.one('#ks-cityselector'+this._id);
            this._navEl = this._contentEl.one('#ks-cityselector'+this._id+'-nav');
            this._listEl = this._contentEl.one('#ks-cityselector'+this._id+'-citylist');
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
                val = S.trim(this._node.val());
            if(!val){
                return;
            }
            S.each(val.split(','),function(item){
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
         * 设置'node'时执行
         *
         * @method _onSetNode
         * @private
         */
        _onSetNode : function(){
            var _ = this,
                node = S.one(_.get('node'));
            if(node){
                _._node.detach('click',_.nodePropagationHandler);
                _._node.detach('focus',_.nodeFocusHandler);
                _._node = node;
                _._selected = [];
                _._selectedValues = [];
                _._bindInput();
            }
        },
        /**
        * 设置'width'属性时执行
        *
        * @method _onSetWidth
        * @private
        */
        _onSetWidth : function(){
            this._contentEl.css(WIDTH,this.get(WIDTH));
        },
        /**
        * 设置'height'属性时执行
        *
        * @method _onSetAutoHeight
        * @private
        */
        _onSetHeight : function(){
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
        * @param {boolean} verbose 是否静默，如果为true，则不触发select事件
        * @return {CitySelector} this，当前实例
        * @example

        var cityselector = new CitySelector(config);
        cityselector.select('北京'); //会选中北京
        cityselector.select(['北京','杭州']); //会选中北京和杭州

        * @chainable
        */
        select : function(string,verbose){
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
                    if(!verbose){
                        this.fire('select',{
                            data : {
                                type : type,
                                value : string,
                                raw : this._formatData[id]
                            }                    
                        });
                    }
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
        * @param {boolean} verbose 是否静默
        * @return {CitySelector} this，当前实例
        * @chainable
        */
        unSelect : function(string,verbose){
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
                    if(!verbose){
                        this.fire('unselect',{
                            data : {
                                type : type,
                                value : string,
                                raw : this._formatData[id]
                            }                    
                        });
                    }
                    
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
