webpackJsonp([2],{223:function(t,e,r){r(539);var a=r(94)(r(419),r(565),null,null);t.exports=a.exports},234:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(57),i=r.n(a),n=r(56),o=r.n(n),s=r(58),l=r.n(s),c=r(95),u=r(96),p=r(97);e.default={data:function(){return{baseImgPath:u.b}},created:function(){},computed:l()({},r.i(p.b)(["adminInfo"])),methods:l()({},r.i(p.c)(["getAdminData"]),{handleCommand:function(t){var e=this;return o()(i.a.mark(function a(){var n;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("home"!=t){a.next=4;break}e.$router.push("/manage"),a.next=9;break;case 4:if("signout"!=t){a.next=9;break}return a.next=7,r.i(c.g)();case 7:n=a.sent,1==n.status?(e.$message({type:"success",message:"退出成功"}),e.$router.push("/")):e.$message({type:"error",message:n.message});case 9:case"end":return a.stop()}},a,e)}))()}})}},235:function(t,e,r){e=t.exports=r(206)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},236:function(t,e,r){var a=r(235);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(207)("019239ba",a,!0)},237:function(t,e,r){r(236);var a=r(94)(r(234),r(238),null,null);t.exports=a.exports},238:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header_container"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[t._v("首页")]),t._v(" "),t._l(t.$route.meta,function(e,a){return r("el-breadcrumb-item",{key:a},[t._v(t._s(e))])})],2)],1)},staticRenderFns:[]}},259:function(t,e,r){var a=r(12);t.exports=function(t,e){if(!a(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},261:function(t,e,r){t.exports={default:r(263),__esModule:!0}},262:function(t,e,r){"use strict";e.__esModule=!0;var a=r(261),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return(0,i.default)(t)}},263:function(t,e,r){r(61),r(265),t.exports=r(4).Array.from},264:function(t,e,r){"use strict";var a=r(11),i=r(26);t.exports=function(t,e,r){e in t?a.f(t,e,i(0,r)):t[e]=r}},265:function(t,e,r){"use strict";var a=r(24),i=r(10),n=r(25),o=r(103),s=r(102),l=r(60),c=r(264),u=r(105);i(i.S+i.F*!r(104)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,i,p,f=n(t),h="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,g=void 0!==m,v=0,b=u(f);if(g&&(m=a(m,d>2?arguments[2]:void 0,2)),void 0==b||h==Array&&s(b))for(e=l(f.length),r=new h(e);e>v;v++)c(r,v,g?m(f[v],v):f[v]);else for(p=b.call(f),r=new h;!(i=p.next()).done;v++)c(r,v,g?o(p,m,[i.value,v],!0):i.value);return r.length=v,r}})},278:function(t,e,r){t.exports={default:r(279),__esModule:!0}},279:function(t,e,r){r(66),r(61),r(67),r(289),r(292),r(291),r(290),t.exports=r(4).Map},280:function(t,e,r){var a=r(98);t.exports=function(t,e){var r=[];return a(t,!1,r.push,r,e),r}},281:function(t,e,r){var a=r(24),i=r(63),n=r(25),o=r(60),s=r(283);t.exports=function(t,e){var r=1==t,l=2==t,c=3==t,u=4==t,p=6==t,f=5==t||p,h=e||s;return function(e,s,d){for(var m,g,v=n(e),b=i(v),y=a(s,d,3),_=o(b.length),x=0,F=r?h(e,_):l?h(e,0):void 0;_>x;x++)if((f||x in b)&&(m=b[x],g=y(m,x,v),t))if(r)F[x]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:F.push(m)}else if(u)return!1;return p?-1:c||u?u:F}}},282:function(t,e,r){var a=r(12),i=r(106),n=r(5)("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),a(e)&&null===(e=e[n])&&(e=void 0)),void 0===e?Array:e}},283:function(t,e,r){var a=r(282);t.exports=function(t,e){return new(a(t))(e)}},284:function(t,e,r){"use strict";var a=r(11).f,i=r(65),n=r(101),o=r(24),s=r(99),l=r(98),c=r(64),u=r(107),p=r(108),f=r(8),h=r(100).fastKey,d=r(259),m=f?"_s":"size",g=function(t,e){var r,a=h(e);if("F"!==a)return t._i[a];for(r=t._f;r;r=r.n)if(r.k==e)return r};t.exports={getConstructor:function(t,e,r,c){var u=t(function(t,a){s(t,u,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=a&&l(a,r,t[c],t)});return n(u.prototype,{clear:function(){for(var t=d(this,e),r=t._i,a=t._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete r[a.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var r=d(this,e),a=g(r,t);if(a){var i=a.n,n=a.p;delete r._i[a.i],a.r=!0,n&&(n.n=i),i&&(i.p=n),r._f==a&&(r._f=i),r._l==a&&(r._l=n),r[m]--}return!!a},forEach:function(t){d(this,e);for(var r,a=o(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(a(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!g(d(this,e),t)}}),f&&a(u.prototype,"size",{get:function(){return d(this,e)[m]}}),u},def:function(t,e,r){var a,i,n=g(t,e);return n?n.v=r:(t._l=n={i:i=h(e,!0),k:e,v:r,p:a=t._l,n:void 0,r:!1},t._f||(t._f=n),a&&(a.n=n),t[m]++,"F"!==i&&(t._i[i]=n)),t},getEntry:g,setStrong:function(t,e,r){c(t,e,function(t,r){this._t=d(t,e),this._k=r,this._l=void 0},function(){for(var t=this,e=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==e?u(0,r.k):"values"==e?u(0,r.v):u(0,[r.k,r.v]):(t._t=void 0,u(1))},r?"entries":"values",!r,!0),p(e)}}},285:function(t,e,r){var a=r(62),i=r(280);t.exports=function(t){return function(){if(a(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},286:function(t,e,r){"use strict";var a=r(2),i=r(10),n=r(100),o=r(16),s=r(13),l=r(101),c=r(98),u=r(99),p=r(12),f=r(28),h=r(11).f,d=r(281)(0),m=r(8);t.exports=function(t,e,r,g,v,b){var y=a[t],_=y,x=v?"set":"add",F=_&&_.prototype,w={};return m&&"function"==typeof _&&(b||F.forEach&&!o(function(){(new _).entries().next()}))?(_=e(function(e,r){u(e,_,t,"_c"),e._c=new y,void 0!=r&&c(r,v,e[x],e)}),d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in F&&(!b||"clear"!=t)&&s(_.prototype,t,function(r,a){if(u(this,_,t),!e&&b&&!p(r))return"get"==t&&void 0;var i=this._c[t](0===r?0:r,a);return e?this:i})}),b||h(_.prototype,"size",{get:function(){return this._c.size}})):(_=g.getConstructor(e,t,v,x),l(_.prototype,r),n.NEED=!0),f(_,t),w[t]=_,i(i.G+i.W+i.F,w),b||g.setStrong(_,t,v),_}},287:function(t,e,r){"use strict";var a=r(10),i=r(27),n=r(24),o=r(98);t.exports=function(t){a(a.S,t,{from:function(t){var e,r,a,s,l=arguments[1];return i(this),e=void 0!==l,e&&i(l),void 0==t?new this:(r=[],e?(a=0,s=n(l,arguments[2],2),o(t,!1,function(t){r.push(s(t,a++))})):o(t,!1,r.push,r),new this(r))}})}},288:function(t,e,r){"use strict";var a=r(10);t.exports=function(t){a(a.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},289:function(t,e,r){"use strict";var a=r(284),i=r(259);t.exports=r(286)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=a.getEntry(i(this,"Map"),t);return e&&e.v},set:function(t,e){return a.def(i(this,"Map"),0===t?0:t,e)}},a,!0)},290:function(t,e,r){r(287)("Map")},291:function(t,e,r){r(288)("Map")},292:function(t,e,r){var a=r(10);a(a.P+a.R,"Map",{toJSON:r(285)("Map")})},419:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(59),i=r.n(a),n=r(58),o=r.n(n),s=r(57),l=r.n(s),c=r(56),u=r.n(c),p=r(278),f=r.n(p),h=r(262),d=r.n(h),m=r(237),g=r.n(m),v=r(96),b=r(95);e.default={data:function(){return{searchForm:{fullTitle:"",shortTitle:"",versionNum:"",swcrNum:"",firstPubDateRange:[],registrationDateRange:[],fundings:[]},dynamicDiaTitle:"新增软著信息",dynamicState:0,copyrightForm:{copyrightId:null,fullTitle:"",shortTitle:"",versionNum:"",swcrNum:"",firstPubDate:"",registrationDate:"",searchUrl:"",fundings:[],copyright_attachments_details:[]},rules:{fullTitle:[{required:!0,message:"请输入软著名称",trigger:"blur"},{required:!0,message:"请输入软著名称",trigger:"change"}],swcrNum:[{required:!0,message:"请输入软著登记号",trigger:"blur"},{required:!0,message:"请输入软著登记号",trigger:"change"}]},searchFormAuthorOptions:[],searchFormCAAuthorOptions:[],searchFormfundingOptions:[],searchFormSelectedAuthorLabels:{},searchFormSelectedCAAuthorLabels:{},searchFormSelectedFundingLabels:{},authorOptions:[],fundingOptions:[],selectedAuthorLabels:{},selectedFundingLabels:{},copyrightFileList:[],paperfileList:[],authorData:{},dialogVisible:[],dialogFundingVisible:[],baseUrl:v.a,baseImgPath:v.b,city:{},offset:0,limit:10,count:0,tableData:[],currentPage:1,selectTable:{},dialogFormVisible:!1,categoryOptions:[],selectedCategory:[],address:{},loading:!1,isEditing:!1}},created:function(){this.initData()},computed:{mergedSearchFormFundingOptions:function(){var t=this,e=this.searchForm.fundings.map(function(e){var r=t.searchFormSelectedFundingLabels[e];if(r)return{value:e,label:r};var a=t.searchFormfundingOptions.find(function(t){return t.value===e});return a?(t.searchFormSelectedFundingLabels[e]=a.label,a):{value:e,label:"未知作者"}});return[].concat(d()(new f.a([].concat(d()(e),d()(this.searchFormfundingOptions)).map(function(t){return[t.value,t]})).values()))},mergedFundingOptions:function(){var t=this,e=this.copyrightForm.fundings.map(function(e){var r=t.selectedFundingLabels[e];if(r)return{value:e,label:r};var a=t.fundingOptions.find(function(t){return t.value===e});return a?(t.selectedFundingLabels[e]=a.label,a):{value:e,label:"未知作者"}});return[].concat(d()(new f.a([].concat(d()(e),d()(this.fundingOptions)).map(function(t){return[t.value,t]})).values()))}},components:{headTop:g.a},methods:{initData:function(){var t=this;return u()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.getCopyrights()}catch(t){console.log("获取数据失败",t)}case 1:case"end":return e.stop()}},e,t)}))()},getCopyrights:function(){var t=this;return u()(l.a.mark(function e(){var a,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o()({},t.searchForm,{page:t.currentPage-1,size:t.limit}),e.next=3,r.i(b.h)(a);case 3:i=e.sent,t.count=i.copyrightCount,t.tableData=[],t.count>0&&i.copyrightDetailList.forEach(function(e){var r={};r.id=e.copyrightId,r.fullTitle=e.fullTitle,r.shortTitle=e.shortTitle,r.versionNum=e.versionNum,r.swcrNum=e.swcrNum,r.firstPubDate=e.firstPubDate,r.registrationDate=e.registrationDate,r.searchUrl=e.searchUrl,r.funding_list=e.funding_list,r.copyright_attachments_details=e.copyright_attachments_details,t.tableData.push(r)});case 7:case"end":return e.stop()}},e,t)}))()},handleSearch:function(){var t=this;return u()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.getCopyrights();case 1:case"end":return e.stop()}},e,t)}))()},handleReset:function(){this.searchForm={fullTitle:"",shortTitle:"",versionNum:"",swcrNum:"",firstPubDateRange:[],registrationDateRange:[],fundings:[]},this.handleSearch()},handleSizeChange:function(t){this.currentPage=1,this.limit=t,this.offset=(this.currentPage-1)*t,this.getCopyrights()},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.getCopyrights()},fetchSearchFormFundingOptions:function(t){var e=this;return u()(l.a.mark(function a(){var i;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""===t){a.next=10;break}return e.loading=!0,e.searchFormfundingOptions=[],a.next=5,r.i(b.i)({keyword:t});case 5:i=a.sent,i.forEach(function(t){var r={};r.value=t.fundingId,r.label=t.fundingLabel,e.searchFormfundingOptions.push(r)}),e.loading=!1,a.next=11;break;case 10:e.searchFormfundingOptions=[];case 11:case"end":return a.stop()}},a,e)}))()},handleAwardsUploadSuccess:function(t,e,r){var a=t.url,i=t.fileName;a&&this.copyrightFileList.push({name:i,url:a})},handleAwardsRemove:function(t,e){var a=this;return u()(l.a.mark(function e(){var i,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.i(b.c)({fileUrl:t.url});case 2:i=e.sent,1==i.status&&-1!==(n=a.copyrightFileList.findIndex(function(e){return e.url===t.url}))&&a.copyrightFileList.splice(n,1);case 4:case"end":return e.stop()}},e,a)}))()},handleExceed:function(t,e){this.$message.warning("最多上传20个文件")},beforeRemove:function(t,e){return this.$confirm("确定移除 "+t.name+"？")},fetchFundingOptions:function(t){var e=this;return u()(l.a.mark(function a(){var i;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""===t){a.next=10;break}return e.loading=!0,e.fundingOptions=[],a.next=5,r.i(b.i)({keyword:t});case 5:i=a.sent,i.forEach(function(t){var r={};r.value=t.fundingId,r.label=t.fundingLabel,e.fundingOptions.push(r)}),e.loading=!1,a.next=11;break;case 10:e.fundingOptions=[];case 11:case"end":return a.stop()}},a,e)}))()},handleEdit:function(t,e){var a=this;return u()(l.a.mark(function t(){var i,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.isEditing=!0,t.prev=1,a.dynamicState=1,a.dynamicDiaTitle="编辑软著信息",a.resetcopyrightForm(),a.copyrightForm.copyrightId=e.id,a.copyrightForm.fullTitle=e.fullTitle,a.copyrightForm.shortTitle=e.shortTitle,a.copyrightForm.versionNum=e.versionNum,a.copyrightForm.swcrNum=e.swcrNum,a.copyrightForm.searchUrl=e.searchUrl,a.copyrightForm.firstPubDate=e.firstPubDate,a.copyrightForm.registrationDate=e.registrationDate,e.copyright_attachments_details.length>0&&e.copyright_attachments_details.forEach(function(t){var e={};e.name=t.attachmentName,e.url=t.attachmentUrl,a.copyrightFileList.push(e)}),i=(e.funding_list||[]).filter(function(t){return t&&void 0!==t.fundingId}).map(function(t){return t.fundingId}),t.next=17,r.i(b.j)({authorIdList:[],fundingIdList:i});case 17:n=t.sent,i.length>0&&n.fundingLabels.forEach(function(t){var e={};e.value=t.id,e.label=t.label,a.fundingOptions.push(e)}),a.copyrightForm.fundings=i;case 20:return t.prev=20,a.isEditing=!1,a.dialogFormVisible=!0,t.finish(20);case 24:case"end":return t.stop()}},t,a,[[1,,20,24]])}))()},handleCreate:function(){if(0===this.dynamicState)return void(this.dialogFormVisible=!0);this.dynamicState=0,this.dynamicDiaTitle="新增软著信息",this.resetcopyrightForm(),this.dialogFormVisible=!0},handleDelete:function(t,e){var a=this;return u()(l.a.mark(function t(){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.i(b.k)({copyrightId:e.id});case 3:if(i=t.sent,1!=i.status){t.next=9;break}a.$message({type:"success",message:"删除软著成功"}),a.getCopyrights(),t.next=10;break;case 9:throw new Error(i.message);case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),a.$message({type:"error",message:t.t0.message}),console.log("删除软著失败");case 16:case"end":return t.stop()}},t,a,[[0,12]])}))()},resetcopyrightForm:function(){this.copyrightForm={copyrightId:null,fullTitle:"",shortTitle:"",versionNum:"",swcrNum:"",firstPubDate:"",registrationDate:"",searchUrl:"",fundings:[],copyright_attachments_details:[]},this.copyrightFileList=[],this.fundingOptions=[]},createCopyright:function(){var t=this;return u()(l.a.mark(function e(){var a,n,s,c,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new i.a(function(e){t.$refs.copyrightForm.validate(function(t){e(t)})});case 3:if(!(a=e.sent)){e.next=20;break}if(0!=t.dynamicState){e.next=13;break}return n=o()({},t.copyrightForm,{copyrightFileList:t.copyrightFileList.map(function(t){return{attachmentUrl:t.url,attachmentName:t.name}})}),e.next=9,r.i(b.l)(n);case 9:s=e.sent,1==s.status?(t.$message({type:"success",message:"创建软著成功！"}),t.dialogFormVisible=!1,t.resetcopyrightForm(),t.getCopyrights()):(t.$message({type:"error",message:s.message}),t.dialogFormVisible=!1),e.next=18;break;case 13:return c=o()({},t.copyrightForm,{copyrightFileList:t.copyrightFileList.map(function(t){return{attachmentUrl:t.url,attachmentName:t.name}})}),e.next=16,r.i(b.m)(c);case 16:u=e.sent,1==u.status?(t.$message({type:"success",message:"更新软著成功！"}),t.dialogFormVisible=!1,t.resetcopyrightForm(),t.getCopyrights()):(t.$message({type:"error",message:u.message}),t.dialogFormVisible=!1);case 18:e.next=21;break;case 20:t.$message({type:"error",message:"表单验证未通过，请检查输入内容！"});case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log("创建软著失败！",e.t0);case 26:case"end":return e.stop()}},e,t,[[0,23]])}))()}}}},444:function(t,e,r){e=t.exports=r(206)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.el-table .el-table__row{height:80px}.demo-table-expand{font-size:0}.demo-table-expand label{width:180px;color:#99a9bf}.demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}.table_container{padding:20px}.Pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:8px}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:120px;height:120px;line-height:120px;text-align:center}.avatar{width:120px;height:120px;display:block}.like{cursor:pointer;font-size:25px;display:inline-block}",""])},539:function(t,e,r){var a=r(444);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(207)("07c89882",a,!0)},565:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fillcontain"},[r("head-top"),t._v(" "),r("div",{staticStyle:{"margin-top":"20px"}},[r("el-form",{staticClass:"search-form",attrs:{inline:!0,model:t.searchForm,"label-width":"160px"}},[r("el-form-item",{attrs:{label:"软著名称包含"}},[r("el-input",{staticStyle:{width:"350px"},attrs:{clearable:"",placeholder:"请输入软著名称需要包含的内容"},model:{value:t.searchForm.fullTitle,callback:function(e){t.$set(t.searchForm,"fullTitle",e)},expression:"searchForm.fullTitle"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"软著简称包含"}},[r("el-input",{staticStyle:{width:"350px"},attrs:{clearable:"",placeholder:"请输入软著简称需要包含的内容"},model:{value:t.searchForm.shortTitle,callback:function(e){t.$set(t.searchForm,"shortTitle",e)},expression:"searchForm.shortTitle"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"版本号包含"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入"},model:{value:t.searchForm.versionNum,callback:function(e){t.$set(t.searchForm,"versionNum",e)},expression:"searchForm.versionNum"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"登记号包含"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入"},model:{value:t.searchForm.swcrNum,callback:function(e){t.$set(t.searchForm,"swcrNum",e)},expression:"searchForm.swcrNum"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"首次发布日期范围"}},[r("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:""},model:{value:t.searchForm.firstPubDateRange,callback:function(e){t.$set(t.searchForm,"firstPubDateRange",e)},expression:"searchForm.firstPubDateRange"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"登记日期范围"}},[r("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:""},model:{value:t.searchForm.registrationDateRange,callback:function(e){t.$set(t.searchForm,"registrationDateRange",e)},expression:"searchForm.registrationDateRange"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"基金包含"}},[r("el-select",{staticStyle:{width:"300px"},attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"","remote-method":t.fetchSearchFormFundingOptions,placeholder:"请选择基金",clearable:""},model:{value:t.searchForm.fundings,callback:function(e){t.$set(t.searchForm,"fundings",e)},expression:"searchForm.fundings"}},t._l(t.mergedSearchFormFundingOptions,function(t){return r("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),r("el-form-item")],1)],1),t._v(" "),r("div",{staticStyle:{"text-align":"left","margin-left":"70px","margin-bottom":"15px"}},[r("el-button",{staticStyle:{width:"100px"},attrs:{type:"primary",plain:""},on:{click:t.handleSearch}},[r("i",{staticClass:"el-icon-search"}),t._v(" 搜索\n    ")]),t._v(" "),r("el-button",{staticStyle:{width:"100px"},attrs:{type:"info",plain:""},on:{click:t.handleReset}},[r("i",{staticClass:"el-icon-refresh-left"}),t._v(" 重置\n    ")]),t._v(" "),r("el-button",{staticStyle:{width:"300px"},attrs:{type:"success",plain:""},on:{click:t.handleCreate}},[r("i",{staticClass:"el-icon-plus"}),t._v(" 新增软著\n    ")])],1),t._v(" "),r("div",{staticClass:"table_container"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"软著名称"}},[r("span",[t._v(t._s(e.row.fullTitle))])]),t._v(" "),r("el-form-item",{attrs:{label:"软著简称"}},[r("span",[t._v(t._s(e.row.shortTitle))])]),t._v(" "),r("el-form-item",{attrs:{label:"软著版本号"}},[r("span",[t._v(t._s(e.row.versionNum))])]),t._v(" "),r("el-form-item",{attrs:{label:"软著登记号"}},[r("span",[t._v(t._s(e.row.swcrNum))])]),t._v(" "),r("el-form-item",{attrs:{label:"首次发表日期"}},[r("span",[t._v(t._s(e.row.firstPubDate))])]),t._v(" "),r("el-form-item",{attrs:{label:"登记日期"}},[r("span",[t._v(t._s(e.row.registrationDate))])]),t._v(" "),r("el-form-item",{attrs:{label:"查询链接"}},[e.row.searchUrl?[r("a",{attrs:{href:e.row.searchUrl,target:"_blank"}},[t._v("点击这里")])]:[t._v("\n                        无\n                    ")]],2),t._v(" "),r("el-form-item",{attrs:{label:"基金情况"}},t._l(e.row.funding_list,function(a,i){return r("span",{key:e.row.funding_list[i].fundingId},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.funding_list[i].fundingDescription,placement:"top"}},[r("el-button",{attrs:{size:"small"}},[t._v(t._s(a.fundingNumber)),r("sup",[t._v(t._s(i+1))])])],1)],1)}),0),t._v(" "),r("el-form-item",{attrs:{label:"该软著相关附件"}},[e.row.copyright_attachments_details.length>0?r("div",{staticStyle:{display:"flex","flex-wrap":"wrap","align-items":"center"}},t._l(e.row.copyright_attachments_details,function(e,a){return r("a",{key:a,staticStyle:{color:"#409eff","text-decoration":"underline","margin-right":"10px","margin-bottom":"10px"},attrs:{href:"http://47.122.131.74:8080/api/file/preview/"+e.attachmentName,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                            "+t._s(e.attachmentName)+" ")])}),0):r("span",[t._v("未上传附件")])])],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{"min-width":"200px",label:"软著名称",prop:"fullTitle"}}),t._v(" "),r("el-table-column",{attrs:{"min-width":"100px",label:"软著登记号",prop:"swcrNum"}}),t._v(" "),r("el-table-column",{attrs:{label:"首次发表日期",prop:"firstPubDate"}}),t._v(" "),r("el-table-column",{attrs:{label:"登记日期",prop:"registrationDate"}}),t._v(" "),r("el-table-column",{attrs:{label:"查询链接",prop:"searchUrl"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.searchUrl?[r("a",{attrs:{href:e.row.searchUrl,target:"_blank"}},[t._v("点击查看链接")])]:[t._v("\n                无\n                ")]]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"操作","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"small"},on:{click:function(r){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),r("el-popconfirm",{attrs:{title:"确定要删除这份软著吗？","confirm-button-text":"确定","cancel-button-text":"取消"},on:{confirm:function(r){return t.handleDelete(e.$index,e.row)}}},[r("el-button",{attrs:{slot:"reference",size:"small",type:"danger"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),t._v(" "),r("div",{staticClass:"Pagination"},[r("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t._v(" "),r("el-dialog",{attrs:{width:"30%",title:t.dynamicDiaTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("el-form",{ref:"copyrightForm",attrs:{model:t.copyrightForm,rules:t.rules}},[1===t.dynamicState?r("el-form-item",{attrs:{label:"软著 ID","label-width":"170px"}},[r("el-input",{attrs:{disabled:!0,placeholder:"自动生成的软著 ID"},model:{value:t.copyrightForm.copyrightId,callback:function(e){t.$set(t.copyrightForm,"copyrightId",e)},expression:"copyrightForm.copyrightId"}})],1):t._e(),t._v(" "),r("el-form-item",{attrs:{required:"",label:"软著名称",prop:"fullTitle","label-width":"170px"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入软著名称",clearable:"","auto-complete":"off"},model:{value:t.copyrightForm.fullTitle,callback:function(e){t.$set(t.copyrightForm,"fullTitle",e)},expression:"copyrightForm.fullTitle"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"软著简称",prop:"shortTitle","label-width":"170px"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入软著简称",clearable:"","auto-complete":"off"},model:{value:t.copyrightForm.shortTitle,callback:function(e){t.$set(t.copyrightForm,"shortTitle",e)},expression:"copyrightForm.shortTitle"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"软著版本号",prop:"versionNum","label-width":"170px"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入软著版本号",clearable:"","auto-complete":"off"},model:{value:t.copyrightForm.versionNum,callback:function(e){t.$set(t.copyrightForm,"versionNum",e)},expression:"copyrightForm.versionNum"}})],1),t._v(" "),r("el-form-item",{attrs:{required:"",label:"软著登记号",prop:"swcrNum","label-width":"170px"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入软著登记号",clearable:"","auto-complete":"off"},model:{value:t.copyrightForm.swcrNum,callback:function(e){t.$set(t.copyrightForm,"swcrNum",e)},expression:"copyrightForm.swcrNum"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"首次发表日期",prop:"firstPubDate","label-width":"170px"}},[r("el-col",{staticStyle:{width:"100%"},attrs:{span:11}},[r("el-form-item",{attrs:{prop:"firstPubDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",type:"date",placeholder:"选择首次发表日期","value-format":"yyyy-MM-dd"},model:{value:t.copyrightForm.firstPubDate,callback:function(e){t.$set(t.copyrightForm,"firstPubDate",e)},expression:"copyrightForm.firstPubDate"}})],1)],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"登记日期",prop:"registrationDate","label-width":"170px"}},[r("el-col",{staticStyle:{width:"100%"},attrs:{span:11}},[r("el-form-item",{attrs:{prop:"registrationDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",type:"date",placeholder:"选择首次发表日期","value-format":"yyyy-MM-dd"},model:{value:t.copyrightForm.registrationDate,callback:function(e){t.$set(t.copyrightForm,"registrationDate",e)},expression:"copyrightForm.registrationDate"}})],1)],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"查询链接",prop:"searchUrl","label-width":"170px"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入查询链接",clearable:"","auto-complete":"off"},model:{value:t.copyrightForm.searchUrl,callback:function(e){t.$set(t.copyrightForm,"searchUrl",e)},expression:"copyrightForm.searchUrl"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"基金情况","label-width":"170px"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",multiple:"",filterable:"",remote:"",placeholder:"请务必先搜索基金，再按次序选择；若需新建基金，请前往“基金管理”","remote-method":t.fetchFundingOptions,loading:t.loading},model:{value:t.copyrightForm.fundings,callback:function(e){t.$set(t.copyrightForm,"fundings",e)},expression:"copyrightForm.fundings"}},t._l(t.mergedFundingOptions,function(t){return r("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"该软著相关附件","label-width":"170px"}},[r("el-upload",{staticClass:"upload-demo",attrs:{action:"http://47.122.131.74:8080/api/file/upload/",multiple:!1,limit:20,"on-remove":t.handleAwardsRemove,"before-remove":t.beforeRemove,"on-exceed":t.handleExceed,"on-success":t.handleAwardsUploadSuccess,"file-list":t.copyrightFileList}},[r("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.createCopyright}},[t._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]}}});