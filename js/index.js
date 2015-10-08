(function(window,jQuery){
	
    	/**
    	 * 辅助函数部分
    	 */
		function w1800(){
	        if ($("html").width() > 1800) {
	            $(".container").addClass("w1800");
	        }else{
	            $(".container").removeClass("w1800");
	        }
	    };
	    
	    //使图片适应div，宽高等比例，不超过div
	    function imageFitDiv(div, find, imgOriginWidth, imgOriginHeight) {
	        var w = $(div).width();
	        var h = $(div).height();
	        var arr = {};
	        if (w / h >= imgOriginWidth / imgOriginHeight) {
	        	var tmpW = h / imgOriginHeight * imgOriginWidth ;
	            $(div).find(find).height(h + "px");
	            $(div).find(find).width(tmpW+ "px");
	            arr.h = h;
	            arr.w = tmpW;
	            arr.base='h';
	            
	        } else {
	        	var tmpH = w / imgOriginWidth * imgOriginHeight;
	            $(div).find(find).width(w + "px");
	            $(div).find(find).height(tmpH + "px");
	            arr.h = tmpH;
	            arr.w = w;
	            arr.base = 'w';
	        }
	        return arr;
	    }
	    
	    function night(){
	    	var c = $('#night')?$('#night')[0]:0;
	    	if((!!c)&&$('html').hasClass('canvas')){
				var $c = $(c);
				$c.attr('width',$('html').width());
				$c.attr('height',$('html').height());
		    	var ctx=c.getContext("2d");
		    	
		    					
				var W = $('html').width();
				var H = $('html').height();
				
				var starArrX = [],starArrY=[];
				var moonArrX = [],moonArrY=[];
	
				//100个星星
				for(var i = 0;i<=100;i++){
					starArrX[i] = Math.random()* W;
					starArrY[i] = Math.random()* H;
				}
				//十个月亮
				for(var i = 0;i<=10;i++){
					moonArrX[i] = Math.random()* W;
					moonArrY[i] = Math.random()* H;
				}
				
	
				
				function drawStar(){
					//context.drawImage(img,x,y,width,height);
					$.each(starArrX, function(indexX,valueX) {
						var tmpWidth = 5-Math.random()*5;
						ctx.drawImage(star,valueX,starArrY[indexX],tmpWidth,tmpWidth);
					});
				}
				function drawMoon(){
					$.each(moonArrX, function(indexX,valueX) {
						var tmpWidth = 10+Math.random()*10;
						ctx.drawImage(moon,valueX,moonArrY[indexX],tmpWidth,tmpWidth);
					});
				}
				
				var star=new Image();
				star.src = 'img/bg1.png';
				var moon=new Image();
				moon.src = 'img/bg2.png';
				star.addEventListener('load', drawStar , false);
				moon.addEventListener('load', drawMoon , false);

				
				
				
	
	    	}
	    		
	    }
	    
	    function percent(num){
	    	return num*100+'%';
	    }
	    
	    
	    var WHLT = {
	    	config:{
	    		w:985,
	    		h:559
	    	},
	    	set:function(div,w,h,l,t,config){
	    		if(typeof config == 'undefined'){
	    			config = WHLT.config;
	    		}
				$(div).css({
					width:percent(w/config.w),
					height:percent(h/config.h),
					left:percent(l/config.w),
					top:percent(t/config.h)
				});
		    }
	    }
	
	
	//定义第一页原始图片 需要显示部分的 宽高
    var imageW = 1060,imageH = 416;
	jQuery(document).ready(function($){
        w1800();
        $('#fullpage').fullpage({
            navigation: true,
            verticalCentered: false,
            scrollOverflow: true,
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
            afterRender:function(){
            	night();
            	var arr = imageFitDiv('.earthblock','.earthwrap',imageW,imageH);
            	
            	//向第二三页插入up
            	$(".section:not(:first,:last) .container").prepend($(".up:first")[0].outerHTML);
            },
            afterLoad:function(anchorLink, index){
            	
            },
            onLeave: function(index, nextIndex, direction){
            	console.log(index)
            	console.log(nextIndex)
				if(nextIndex == 2){
					var $div = $('.second .main');
					imageFitDiv($div,$div.find('.mainblock'),1060,882);
					var cir = new Image();
					cir.src = 'img/page2/cir.png';
					$('.second .main .mainblock').prepend(cir);
				}
				if(nextIndex == 3){
					var $div = $('.third .main');
					imageFitDiv($div,$div.find('.mainblock'),985,559);
					
					var circle = new Image();
					circle.src = "img/page3/black_cir.png";
					var $b = $('.third .imgblock');
					$b.prepend(circle);
					$(circle).css({
						width:percent(324/985),
						//height:percent(324/559),
						left:percent((487-324/2)/985),
						top:percent((237-324/2)/559)
					});
					
					var qiezi = new Image();
					qiezi.src = "img/page3/qiezi.png";
					$b.append(qiezi);
					$(qiezi).css({
						width:percent(183/985),
						height:percent(185/559),
						left:percent(74/985),
						top:percent(0/559)
					});
					
					var chaoren = new Image();
					chaoren.src = "img/page3/chaoren.png";
					$b.append(chaoren);
					$(chaoren).css({
						width:percent(158/985),
						height:percent(153/559),
						left:percent(27/985),
						top:percent(405/559)
					});
					
					var mao = new Image();
					mao.src = "img/page3/mao.png";
					$b.append(mao);
					$(mao).css({
						width:percent(192/985),
						height:percent(154/559),
						left:percent(723/985),
						top:percent(384/559)
					});

					var luna = new Image();
					luna.src = "img/page3/lunar.png";
					$b.append(luna);
					$(luna).css({
						width:percent(132/985),
						height:percent(133/559),
						left:percent(724/985),
						top:percent(8/559)
					});
					
					var c = [];
					for(var i = 1;i<10;i++){
						c[i] = new Image();
						if(i == 1 || i == 5 || i == 7 || i == 9){
							c[i].src = "img/page3/cloud1.png";
						}else if(i == 2 || i == 6 || i == 8){
							c[i].src = "img/page3/cloud2.png";
						}else{
							c[i].src = "img/page3/cloud3.png";
						}
						
						$b.append(c[i]);
					}
					
					
					WHLT.set(c[1],194,119,51,82);
					WHLT.set(c[2],108,62,721,83);
					WHLT.set(c[3],74,44,0,264);
					WHLT.set(c[4],74,44,544,309);
					WHLT.set(c[5],194,119,732,227);
					WHLT.set(c[6],97,56,887,300);
					WHLT.set(c[7],131,81,67,456);
					WHLT.set(c[8],97,56,312,501);
					WHLT.set(c[9],174,107,663,450);
				}
	        }
        });
    
    
    
	    
	});
	

})(window,jQuery);




/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-canvas-canvastext !*/
!function(e,n,a){function o(e,n){return typeof e===n}function t(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e,n,a,t,s,c,r;for(var u in l){if(e=[],n=l[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(a=0;a<n.options.aliases.length;a++)e.push(n.options.aliases[a].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)c=e[s],r=c.split("."),1===r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i.push((t?"":"no-")+r.join("-"))}}function c(e){var n=r.className,a=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");n=n.replace(o,"$1"+a+"js$2")}Modernizr._config.enableClasses&&(n+=" "+a+e.join(" "+a),u?r.className.baseVal=n:r.className=n)}var i=[],l=[],r=n.documentElement,u="svg"===r.nodeName.toLowerCase(),f={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var a=this;setTimeout(function(){n(a[e])},0)},addTest:function(e,n,a){l.push({name:e,fn:n,options:a})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("audio",function(){var e=t("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return n}),Modernizr.addTest("canvas",function(){var e=t("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof t("canvas").getContext("2d").fillText}),s(),c(i),delete f.addTest,delete f.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
