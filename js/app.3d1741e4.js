(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],p=0,h=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"459c":function(e,t,i){"use strict";i("cca3")},"4bfd":function(e,t,i){"use strict";i("7d47")},"4d0d":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-main",[i("router-view")],1)],1)},r=[],o={name:"App",data:function(){return{}}},s=o,l=i("2877"),c=i("6544"),u=i.n(c),p=i("7496"),h=i("f6c4"),g=Object(l["a"])(s,a,r,!1,null,null,null),d=g.exports;u()(g,{VApp:p["a"],VMain:h["a"]});var m=i("8c4f"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("loading",{attrs:{progress:e.progress,info:e.info}}),e.ready?i("keana-blog",{attrs:{illustration:e.illustration,mineral:e.mineral,inkWash:e.inkWash,photography:e.photography,scene:e.other}}):e._e()],1)},v=[],y=i("5530"),b=(i("d81d"),i("159b"),i("b64b"),i("07ac"),i("99af"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.disappear?e._e():i("div",{staticClass:"loading",style:{opacity:e.opacity}},[i("div",{staticClass:"loading-wrapper"},[i("div",{ref:"img",staticClass:"loading-animation"}),i("div",{ref:"text",staticClass:"loading-text"},e._l("LOADING...".split(""),(function(t,n){return i("span",{key:t+n},[e._v(" "+e._s(t)+" ")])})),0),i("v-progress-linear",{staticClass:"progress",attrs:{color:"rgb(88, 219, 220)",value:e.progress,max:e.max}},[i("strong",{staticClass:"progress-value"},[e._v(e._s(e.text))])])],1)])}),w=[],j=(i("a9e3"),i("ac1f"),i("5319"),i("cffa")),k={name:"Loading",props:{progress:{type:Number,default:0},max:{type:Number,default:100},info:{type:String,default:""}},data:function(){return{anime:null,disappear:!1,opacity:1}},computed:{text:function(){return""===this.info?this.progress+"%":this.info.replace("%progress%",this.progress+"%")}},watch:{progress:function(e){var t=this;e===this.max&&(setTimeout((function(){return t.opacity=0}),200),setTimeout((function(){return t.disappear=!0}),1e3))}},methods:{start:function(){var e=this.$refs.text.children;this.anime=j["a"].from(e,{scale:.8,y:-10,color:"rgb(251, 202, 90)",duration:.25,repeat:-1,ease:"power1",stagger:{from:"start",each:.2,repeat:1,yoyo:!0}})},end:function(){this.anime&&this.anime.kill()}},mounted:function(){this.start()},destroyed:function(){this.end()}},C=k,_=(i("4bfd"),i("8e36")),x=Object(l["a"])(C,b,w,!1,null,"33f8a6e4",null),A=x.exports;u()(x,{VProgressLinear:_["a"]});var E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"anime-demo",style:{"--image-width":e.banner.imageWidth+"px","--image-height":e.banner.imageHeight+"px"}},[i("div",{ref:"bannerWrapper",staticClass:"scene banner-wrapper"},[i("div",{ref:"imageWrapper",staticClass:"banner"},e._l(9,(function(e){return i("div",{key:e,staticClass:"image-frame"})})),0),i("div",{staticClass:"logo",style:"width: "+e.logoWidth+"px;"},[i("div",{staticClass:"logo-text",style:"font-size: "+.05*e.banner.imageWidth+"px;"},[i("p",[e._v("KEANA")]),i("p",[e._v("BLOG")])]),e._m(0),i("div",{staticClass:"scroll-indicator"},[i("v-icon",{staticClass:"scroll-icon"},[e._v("mdi-chevron-double-down")])],1)])]),i("div",{ref:"main"},[i("div",{staticClass:"scene nav",style:{"background-image":"url("+e.scene.scene.navigation},attrs:{id:"me"}},[i("div",{staticClass:"about-me"},[i("p",[e._v("Keana 作品展示")]),i("p",[e._v("想留言、对作品感兴趣？")]),i("p",[i("a",{attrs:{href:e.mailto}},[e._v(" 点这里发邮件联系我！")])])]),i("navigation",{attrs:{items:e.items,menuColor:e.menuColor}})],1),i("div",{staticClass:"scene",attrs:{id:"illustration"}},[i("div",{staticClass:"scene title",style:{"background-image":"url("+e.scene.scene.illustrationNight}},[i("div",{staticClass:"scene-flip",style:{"background-image":"url("+e.scene.scene.illustrationLight}}),i("div",{staticClass:"mask"},[e._v("illustration")])]),i("gallery",{style:{"background-image":"url("+e.scene.wallpaper.illustration},attrs:{progressColor:"pink",defaultDisplayCount:13,images:e.illus}})],1),i("div",{staticClass:"scene",attrs:{id:"mineral"}},[i("div",{staticClass:"scene title",style:{"background-image":"url("+e.scene.scene.mineral}},[i("div",{staticClass:"mask"},[e._v("mineral color")])]),i("gallery",{style:{"background-image":"url("+e.scene.wallpaper.mineral},attrs:{progressColor:"green",defaultDisplayCount:11,images:e.mine}})],1),i("div",{staticClass:"scene",attrs:{id:"ink-wash"}},[i("div",{staticClass:"scene title",style:{"background-image":"url("+e.scene.scene.inkWash}},[i("div",{staticClass:"mask"},[e._v("ink-wash painting")])]),i("gallery",{style:{"background-image":"url("+e.scene.wallpaper.inkWash},attrs:{progressColor:"yellow",images:e.wash}})],1),i("div",{staticClass:"scene",attrs:{id:"photography"}},[i("div",{staticClass:"scene title",style:{"background-image":"url("+e.scene.scene.photography}},[i("div",{staticClass:"mask"},[e._v("photography")])]),i("gallery",{style:{"background-image":"url("+e.scene.wallpaper.photography},attrs:{progressColor:"blue",images:e.photo}})],1)]),e._m(1)])},W=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bio"},[e._v(" music, milk tea and moods "),i("br"),e._v(" necessary stuffs for creativity ")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",[e._v(" Keana Blog, "),i("div",[i("span",{staticClass:"mr-5",attrs:{id:"busuanzi_container_site_uv"}},[i("i",{staticClass:"mdi mdi-account-multiple mr-2"}),i("span",{attrs:{id:"busuanzi_value_site_uv"}})]),i("span",{attrs:{id:"busuanzi_container_site_pv"}},[i("i",{staticClass:"mdi mdi-eye mr-2"}),i("span",{attrs:{id:"busuanzi_value_site_pv"}})])]),e._v(" made with Vue.js and animated with GSAP. ")])}],$=(i("a15b"),i("4e82"),i("1276"),i("1dac")),z=i("2ef0"),O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"navigatorWrapper"},[i("div",{ref:"navigator",staticClass:"navigator-wrapper",class:{bottom:!e.isCenter}},[i("nav",{staticClass:"menu",style:e.colors},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.open,expression:"open"}],staticClass:"menu-open",attrs:{id:"navigation-button",type:"checkbox"},domProps:{checked:Array.isArray(e.open)?e._i(e.open,null)>-1:e.open},on:{change:function(t){var i=e.open,n=t.target,a=!!n.checked;if(Array.isArray(i)){var r=null,o=e._i(i,r);n.checked?o<0&&(e.open=i.concat([r])):o>-1&&(e.open=i.slice(0,o).concat(i.slice(o+1)))}else e.open=a}}}),e._m(0),e._l(e.items,(function(t){return i("a",{key:t.name,staticClass:"menu-item",attrs:{href:t.link}},[e._v(" "+e._s(t.name)+" ")])}))],2),i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[i("defs",[i("filter",{attrs:{id:"shadowed-goo"}},[i("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"10"}}),i("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}}),i("feGaussianBlur",{attrs:{in:"goo",stdDeviation:"3",result:"shadow"}}),i("feColorMatrix",{attrs:{in:"shadow",mode:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2",result:"shadow"}}),i("feOffset",{attrs:{in:"shadow",dx:"1",dy:"1",result:"shadow"}}),i("feComposite",{attrs:{in2:"shadow",in:"goo",result:"goo"}}),i("feComposite",{attrs:{in2:"goo",in:"SourceGraphic",result:"mix"}})],1),i("filter",{attrs:{id:"goo"}},[i("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"10"}}),i("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}}),i("feComposite",{attrs:{in2:"goo",in:"SourceGraphic",result:"mix"}})],1)])])])])},T=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"menu-open-button",attrs:{for:"navigation-button"}},[i("span",{staticClass:"hamburger hamburger-1"}),i("span",{staticClass:"hamburger hamburger-2"}),i("span",{staticClass:"hamburger hamburger-3"})])}];j["b"].registerPlugin($["a"]),$["a"].defaults({start:"top top",scrub:1});var S={name:"Navigation",props:{items:{type:Array,default:function(){return[{name:"Item1",link:"#link1",color:"#e91e63"},{name:"Item2",link:"#link2",color:"#e91e63"},{name:"Item3",link:"#link3",color:"#e91e63"},{name:"Item4",link:"#link4",color:"#e91e63"},{name:"Item5",link:"#link5",color:"#e91e63"},{name:"Item6",link:"#link6",color:"#e91e63"}]}},menuColor:{type:String,default:"#e91e63"}},data:function(){return{open:!1,isCenter:!0}},computed:{colors:function(){var e={"--menu-color":this.menuColor};return this.items.forEach((function(t,i){e["--item-color-"+(i+1)]=t.color})),e}},watch:{open:function(e){e&&!this.isCenter?this.openAnime.play():this.openAnime.reverse()}},mounted:function(){var e=this,t=this.$refs.navigator,i=this.$refs.navigatorWrapper,n=i.parentElement,a=16,r=16,o=.5;this.openAnime=j["b"].to(t,{x:105,y:-105,duration:.25,paused:!0}),$["a"].create({trigger:i,onEnter:function(){e.open=!1,e.isCenter=!1;var i=n.getBoundingClientRect();j["b"].fromTo(t,{left:i.left+i.width/2-40,bottom:window.innerHeight-80,position:"fixed"},{left:a,bottom:r,position:"fixed",duration:o})},onLeaveBack:function(){e.open=!1,e.isCenter=!0;var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),s=-1*(i.width/2-40+i.left-a-r.left);setTimeout((function(){return j["b"].fromTo(t,{left:s,bottom:-1*(r.bottom-80),position:"relative"},{left:0,bottom:0,position:"relative",duration:o})}),100)}})}},L=S,H=(i("9c11"),Object(l["a"])(L,O,T,!1,null,"28511e7c",null)),B=H.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"wrapper",staticClass:"gallery-wrapper",style:{"--cell-height":e.cellHeight+"px","--cell-width":e.cellWidth+"px"}},[i("div",{ref:"body",class:{"gallery-body":!0,grid:!0,"gallery-column":e.$vuetify.breakpoint.mobile,"gallery-row":!e.$vuetify.breakpoint.mobile}},[e._l(e.displayImages,(function(t,n){return i("div",{key:n,class:["item","span"+t.span,e.itemClass,e.curr===n?"viewer":""],on:{click:function(t){return e.viewer(n)}}},[i("img",{attrs:{src:t.src,alt:"image"}})])})),e.shouldShowMore?i("div",{staticClass:"show-more",on:{click:e.showMore}},[e._v(" "+e._s(e.showAll?"Show Less":"Show More")+" ")]):e._e()],2),e.$vuetify.breakpoint.mobile?e._e():i("v-progress-linear",{staticClass:"progress",attrs:{"buffer-value":"0",height:"6",color:e.progressColor,value:100*e.progress,stream:"",bottom:"",absolute:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:-1!==e.curr,expression:"curr !== -1"}],ref:"panel",staticClass:"gallery-viewer-button-panel"},[i("div",{ref:"viewer",staticClass:"gallery-viewer-previewer"},[i("img",{attrs:{alt:"image"},on:{click:e.closeViewer}}),i("v-snackbar",{attrs:{timeout:e.timeout,centered:"",absolute:""},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.info)+" ")])],1),i("v-icon",{staticClass:"action-icon closable",on:{click:e.closeViewer}},[e._v(" mdi-close ")]),i("v-icon",{staticClass:"action-icon prev",on:{click:function(t){return e.showImage(-1)}}},[e._v(" mdi-chevron-double-left ")]),i("v-icon",{staticClass:"action-icon next",on:{click:function(t){return e.showImage(1)}}},[e._v(" mdi-chevron-double-right ")])],1)],1)},M=[],P=i("b85c");i("fb6a"),i("4de4"),i("a630"),i("3ca3");j["b"].registerPlugin($["a"]),$["a"].defaults({start:"top top",scrub:1});var N={name:"Gallery",props:{images:{type:Array,default:function(){return[]}},itemClass:{type:String,default:""},progressColor:{type:String,default:"red"},defaultDisplayCount:{type:Number,default:12}},data:function(){return{cellHeight:0,cellWidth:0,timeline:null,progress:0,curr:-1,info:"",alert:!1,timeout:2e3,showAll:!1}},computed:{displayImages:function(){return this.showAll?this.images:this.images.slice(0,this.defaultDisplayCount)},shouldShowMore:function(){return this.images.length-this.defaultDisplayCount>0&&this.displayImages.length!==this.images.length}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize);var e=this.$refs.panel;e.remove(),document.body.append(e),this.bindAnimation()},destroyed:function(){window.removeEventListener("resize",this.onResize),window.removeEventListener("scroll",this.disableScrolling)},methods:{onResize:function(){var e=this,t=this.$refs.wrapper,i=t.clientHeight,n=t.clientWidth;this.cellHeight=this.$vuetify.breakpoint.mobile?Math.ceil(n/2*.4):Math.ceil(i/4),this.cellWidth=this.$vuetify.breakpoint.mobile?Math.ceil((n-24)/2):Math.ceil(.45*this.cellHeight),setTimeout((function(){if(e.$refs.body.children){var t,i=Object(P["a"])(Array.from(e.$refs.body.children).filter((function(e){return e.classList.contains("item")})));try{for(i.s();!(t=i.n()).done;){var n=t.value;n.children[0].complete?e.setupImage({target:n.children[0]}):n.children[0].onload=e.setupImage}}catch(a){i.e(a)}finally{i.f()}}}),0)},bindAnimation:function(){var e=this;this.timeline&&this.timeline.kill();var t=this.$refs,i=t.wrapper,n=t.body,a=this.$vuetify.breakpoint.mobile;setTimeout((function(){var t=n.clientWidth-i.clientWidth;e.timeline=$["a"].create({animation:j["b"].fromTo(n,{x:0},{x:a?0:-t}),trigger:i,end:"+="+(t+200),pin:!a,onUpdate:function(t){e.progress=t.progress}})}),0)},showMore:function(){var e=this;this.showAll=!this.showAll,this.onResize(),setTimeout((function(){e.bindAnimation(),window.dispatchEvent(new Event("resize"))}),0)},setupImage:function(e){var t=e.target,i=t.parentElement.clientWidth,n=t.parentElement.clientHeight,a=t.width/t.height,r=n*a;r<i&&j["b"].set(t,{width:i,height:i/a})},disabling:function(e){e.preventDefault()},viewer:function(e){if(-1===this.curr){this.disableScrolling=function(){var e=window.pageYOffset;return function(){return window.scrollTo(0,e)}}(),window.addEventListener("scroll",this.disabling),this.curr=e;var t=this.$refs.body.children[this.curr],i=t.children[0],n=this.$refs.viewer;n.children[0].src=i.src,this.setupViewer()}},setupViewer:function(){if(-1!==this.curr){var e=this.$refs.body.children[this.curr],t=this.$refs.viewer,i=e.children[0],n=this.calculate(i),a=n.imageWidth,r=n.imageHeight,o=e.getBoundingClientRect();this.viewerAnime=[j["b"].fromTo(t,{width:o.width,height:o.height,top:o.top,left:o.left,opacity:1},{width:"100vw",height:"100vh",top:0,left:0,opacity:1,duration:.25,ease:"none",delay:.1}),j["b"].fromTo(t.children[0],{width:i.width,height:i.height},{width:a,height:r,duration:.5},"-=0.25")]}},calculate:function(e){var t=e.width/e.height,i=window.innerHeight-50,n=i*t;return n>window.innerWidth-50&&(n=window.innerWidth-50,i=n/t),{imageWidth:n,imageHeight:i}},showImage:function(e){var t=this.curr+e;if(t<0||t>=this.images.length)return this.info="No more images there",void(this.alert=!0);var i=this.$refs.body.children[t].children[0],n=this.calculate(i),a=n.imageWidth,r=n.imageHeight,o=this.$refs.viewer.children[0];j["b"].to(o,{width:a,height:r,duration:.25}),this.viewerAnime.pop(),this.viewerAnime.push(j["b"].to(o,{width:i.width,height:"auto"}).pause()),o.src=i.src,this.curr=t},closeViewer:function(){var e=this;window.removeEventListener("wheel",this.disabling),window.removeEventListener("scroll",this.disableScrolling);var t,i=Object(P["a"])(this.viewerAnime);try{for(i.s();!(t=i.n()).done;){var n=t.value;n.reverse()}}catch(a){i.e(a)}finally{i.f()}j["b"].to(this.$refs.viewer,{opacity:0,delay:.25,duration:.25,onComplete:function(){return e.curr=-1}})}}},R=N,V=(i("fb13"),i("6eb7"),i("132d")),G=i("2db4"),D=Object(l["a"])(R,I,M,!1,null,"114b48a2",null),K=D.exports;u()(D,{VIcon:V["a"],VProgressLinear:_["a"],VSnackbar:G["a"]}),j["b"].registerPlugin($["a"]),$["a"].defaults({start:"top top",scrub:1});var q={name:"KeanaBlog",components:{Navigation:B,Gallery:K},props:{illustration:{type:Array,default:function(){return[]}},mineral:{type:Array,default:function(){return[]}},inkWash:{type:Array,default:function(){return[]}},photography:{type:Array,default:function(){return[]}},scene:{type:Object,default:function(){}}},data:function(){var e=["mailto:keanawang@outlook.com?","subject=[来自Blog的留言]","&body=Hi, Keana!%0d%0a%0d%0a","我是...%0d%0a%0d%0a","我看到了你的网站，并且对你的作品很感兴趣！%0d%0a","我想说...%0d%0a%0d%0a%0d%0a%0d%0a","期待你的回复！%0d%0a","------------------------------%0d%0a","这条留言从下面地址发出。%0d%0a","（请不要删除这段信息哟～）%0d%0a",window.location.origin];return{banner:{imageWidth:0,imageHeight:0,imagePadding:0},clientWidth:0,timeline:null,scrollTrigger:null,duration:.2,delay:0,showNav:!1,navActive:"",items:[{name:"插画",link:"/#illustration",color:"#e28869"},{name:"岩彩",link:"/#mineral",color:"#77c4d1"},{name:"水墨",link:"/#ink-wash",color:"#288994"},{name:"摄影",link:"/#photography",color:"#ced177"},{name:"“我”",link:"/#me",color:"#e2ad69"},{name:"首页",link:"/",color:"#f8baa7"}],menuColor:"#1f675a",mailto:e.join("")}},computed:{logoWidth:function(){var e=.3*this.banner.imageWidth;return window.innerWidth<e?window.innerWidth:e},illus:function(){var e=this;return this.illustration.map((function(t){return e.parse(t)}))},mine:function(){var e=this;return this.mineral.map((function(t){return e.parse(t)}))},wash:function(){var e=this;return this.inkWash.map((function(t){return e.parse(t)}))},photo:function(){var e=this;return this.photography.map((function(t){return e.parse(t)}))}},mounted:function(){var e=this;this.onResize(),window.addEventListener("resize",Object(z["debounce"])(this.onResize,250,{tailing:!0}));var t=this.$vuetify.breakpoint.mobile?"2rem":"10rem",i=function i(){if(0!==e.banner.imageWidth){var n=e.$refs.main;$["a"].create({trigger:n,onEnter:function(){e.timeline.pause(),e.showNav=!0},onLeaveBack:function(){e.timeline.resume(),e.showNav=!1}}),$["a"].create({trigger:"#illustration",animation:j["b"].fromTo("#illustration .mask",{opacity:1},{letterSpacing:t,opacity:0}),onEnter:function(){e.navActive="插画",j["b"].to("#illustration .scene-flip",{opacity:1,duration:.25})},onEnterBack:function(){e.navActive="插画"},onLeaveBack:function(){j["b"].to("#illustration .scene-flip",{opacity:0,duration:.25})}}),$["a"].create({trigger:"#mineral",animation:j["b"].fromTo("#mineral .mask",{opacity:1},{letterSpacing:t,opacity:0}),onEnter:function(){return e.navActive="岩彩"},onEnterBack:function(){return e.navActive="岩彩"}}),$["a"].create({trigger:"#ink-wash",animation:j["b"].fromTo("#ink-wash .mask",{opacity:1},{letterSpacing:t,opacity:0}),onEnter:function(){return e.navActive="水墨"},onEnterBack:function(){return e.navActive="水墨"}}),$["a"].create({trigger:"#photography",animation:j["b"].fromTo("#photography .mask",{opacity:1},{letterSpacing:t,opacity:0}),onEnter:function(){return e.navActive="摄影"},onEnterBack:function(){return e.navActive="摄影"}}),j["b"].utils.toArray(".scene.title").forEach((function(e){return $["a"].create({animation:j["b"].to(e,{yPercent:-30}),trigger:e,pin:!0,pinSpacing:!1,scrub:0,ease:"none"})}))}else setTimeout(i,100)};setTimeout(i,0);var n=document.createElement("script");n.src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",document.body.append(n)},destroyed:function(){window.removeEventListener("resize",this.onResize)},methods:{start:function(){var e=this.$refs,t=e.bannerWrapper,i=e.imageWrapper,n=this.duration,a=this.delay;this.timeline=j["b"].timeline().fromTo(i.children,{opacity:0},{opacity:1,duration:n,delay:a,repeat:-1,yoyo:!0,stagger:{each:n}}).fromTo(i,{x:0},{id:"scrollAnimation",x:-1*this.banner.imagePadding}),this.scrollTrigger=$["a"].create({animation:this.timeline.getById("scrollAnimation"),trigger:t,start:"top top",end:"+="+this.banner.imagePadding,pin:!0}),window.pageYOffset>i.offsetHeight&&this.timeline.pause()},clear:function(){this.timeline&&this.timeline.kill(),this.scrollTrigger&&this.scrollTrigger.kill()},onResize:function(){var e=this,t=this.$refs.bannerWrapper,i=t.clientHeight,n=t.clientWidth,a=this.$vuetify.breakpoint.mobile,r=i/n<=.5626?n:i*(16/9),o=i/n>=.5626?i:n*(9/16)-1,s=Math.max(0,r-n);0!==r?a&&n===this.clientHeight||(this.banner.imageWidth=r,this.banner.imageHeight=o,this.banner.imagePadding=s,this.clientHeight=n,this.clear(),this.start(),$["a"].sort(),$["a"].refresh()):setTimeout((function(){return e.onResize()}),100)},parse:function(e){var t,i=e.split(".");switch("".concat(i[i.length-3],":").concat(i[i.length-2])){case"16:9":t=4;break;case"4:3":t=3;break;case"1:1":case"3:4":t=2;break;case"9:16":default:t=1;break}return{src:e,span:t}}}},J=q,Y=(i("459c"),Object(l["a"])(J,E,W,!1,null,"72192690",null)),U=Y.exports;u()(Y,{VIcon:V["a"]});var F="https://keanablog.oss-cn-shanghai.aliyuncs.com/",Q={banner:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg","b6.jpg","b7.jpg","b8.jpg","b9.jpg","b10.jpg","jj.png"],illustration:["illustration.girls.16.9.jpg","illustration.watermelon.3.4.jpg","illustration.lemonade.3.4.jpg","illustration.fruittea.3.4.jpg","illustration.sunrise.4.3.jpg","illustration.snow.3.4.jpg","illustration.yue.4.3.jpg","illustration.girl.9.16.jpg","illustration.peach.9.16.jpg","illustration.coffee.9.16.jpg","illustration.coffee2.1.1.jpg","illustration.three.16.9.jpg","illustration.room.16.9.jpg","illustration.forest.16.9.jpg","illustration.wind.16.9.jpg","illustration.kk.16.9.jpg","illustration.three-1.9.16.jpg","illustration.three-2.9.16.jpg","illustration.three-3.9.16.jpg","illustration.six.9.16.jpg","illustration.ric.9.16.jpg","illustration.f.3.4.jpg","illustration.whale.1.1.jpg","illustration.r.9.16.jpg"],mineral:["mineral.qing.16.9.jpg","mineral.qin.16.9.jpg","mineral.shuimu.16.9.jpg","mineral.win.16.9.jpg","mineral.fish.9.16.jpg","mineral.fenghuo.9.16.jpg","mineral.yan.16.9.jpg","mineral.denglong.16.9.jpg","mineral.zuma.16.9.jpg","mineral.shanzi.3.4.jpg","mineral.jiu.3.4.jpg","mineral.kong.16.9.jpg","mineral.linmo.3.4.jpg","mineral.linmo2.3.4.jpg","mineral.sakura4.3.jpg","mineral.us.3.4.jpg","mineral.use.3.4.jpg","mineral.yinyue.9.16.jpg","mineral.xi.3.4.jpg","mineral.yu.9.16.jpg"],inkWash:["ink-wash.long.1.1.jpg","ink-wash.jinfeng.9.16.jpg","ink-wash.huashen.9.16.jpg","ink-wash.qunshan.16.9.jpg","ink-wash.heye.16.9.jpg","ink-wash.he.16.9.jpg","ink-wash.duizuo.16.9.jpg","ink-wash.zuzi.16.9.jpg","ink-wash.shuxia.9.16.jpg","ink-wash.diaochan.9.16.jpg","ink-wash.yuhuan.9.16.jpg","ink-wash.xishi.9.16.jpg","ink-wash.zhaojun.9.16.jpg","ink-wash.ziyi.9.16.jpg","ink-wash.nvhai.9.16.jpg","ink-wash.wuti2.9.16.jpg","ink-wash.wuti3.3.4.jpg","ink-wash.xz.9.16.jpg","ink-wash.wuti.3.4.jpg","ink-wash.xiaonv.3.4.jpg","ink-wash.yuanri.16.9.jpg"],photography:["photography.lan1.16.9.jpg","photography.lan2.16.9.jpg","photography.lan3.1.1.jpg","photography.fly16.9.jpg","photography.sky1.16.9.jpg","photography.ta.16.9.jpg","photography.yun.16.9.jpg","photography.haibian5.16.9.jpg","photography.haibian4.16.9.jpg","photography.haibian3.16.9.jpg","photography.haibian2.16.9.jpg","photography.haibian1.16.9.jpg","photography.bicycle.16.9.jpg","photography.girls.16.9.jpg","photography.beiying.16.9.jpg","photography.sanren.9.16.jpg","photography.run.9.16.jpg","photography.daoying.16.9.jpg","photography.guojin.16.9.jpg","photography.light.16.9.jpg","photography.light2.16.9.jpg","photography.wuti.16.9.jpg","photography.punk.16.9.jpg","photography.orenge.16.9.jpg","photography.zi.16.9.jpg","photography.ju.16.9.jpg","photography.fen.16.9.jpg","photography.yellow.16.9.jpg","photography.green.16.9.jpg","photography.he.16.9.jpg","photography.youle.16.9.jpg","photography.xueren.9.16.jpg","photography.youxiang.16.9.jpg"],other:{wallpaper:{mineral:"wallpaper.mineral.jpg",illustration:"wallpaper.illustration.jpg",inkWash:"wallpaper.ink-wash.jpg",photography:"wallpaper.photo.jpg"},scene:{mineral:"scene.mineral.jpg",illustrationLight:"scene.illustration-light.jpg",illustrationNight:"scene.illustration-night.jpg",inkWash:"scene.ink-wash.jpg",photography:"scene.photo.jpg",navigation:"scene.mingming.jpg"}}};function X(e){return e instanceof Array?e=e.map((function(e){return F+e})):"string"===typeof e?e=F+e:Object.keys(e).forEach((function(t){e[t]=X(e[t])})),e}X(Q);var Z=[],ee=0;Object.values(Q).forEach((function e(t){t instanceof Array?(ee+=t.length,t.forEach((function(e){return Z.push(e)}))):"string"===typeof t?(ee++,Z.push(t)):Object.values(t).forEach(e)}));var te={name:"Home",components:{Loading:A,KeanaBlog:U},data:function(){return Object(y["a"])({version:"v1.13",completed:0,total:ee,cache:[]},Q)},computed:{progress:function(){return Math.ceil(this.completed/this.total*100)},ready:function(){return 100===this.progress},info:function(){var e;switch(Math.ceil(this.progress/10)){case 0:e="开始整理心情...";break;case 1:case 2:case 3:e="正在翻找可以用的图片...";break;case 4:case 5:case 6:e="正在驱赶捣乱的猫咪...";break;case 7:case 8:case 9:e="正在准备饮料和甜点...";break;case 10:e="一切准备就绪，开始进入...";break}return"Version: ".concat(this.version,", %progress%\n").concat(e)}},mounted:function(){var e=this;Z.forEach((function(t){var i=new Image;i.src=t,i.addEventListener("load",(function(){return e.completed++})),e.cache.push(i)}))}},ie=te,ne=Object(l["a"])(ie,f,v,!1,null,null,null),ae=ne.exports;n["a"].use(m["a"]);var re=[{path:"/",name:"Home",component:ae}],oe=new m["a"]({routes:re,mode:"history"}),se=oe,le=i("f309");n["a"].use(le["a"]);var ce=new le["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:se,vuetify:ce,render:function(e){return e(d)}}).$mount("#app")},"6eb7":function(e,t,i){"use strict";i("4d0d")},"7d47":function(e,t,i){},"88a0":function(e,t,i){},"9c11":function(e,t,i){"use strict";i("9d28")},"9d28":function(e,t,i){},cca3:function(e,t,i){},fb13:function(e,t,i){"use strict";i("88a0")}});
//# sourceMappingURL=app.3d1741e4.js.map