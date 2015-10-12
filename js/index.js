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
	    
	    
	     /*{
	    	config:{
	    		w:985,
	    		h:559
	    	},
	    	set:function(div,w,h,l,t,config){
	    		if(typeof config == 'undefined'){
	    			config = WHLT.config;
	    		}
	    		
	    		var c = {};
	    		w?(c.width=percent(w/config.w)):0;
	    		h?(c.height=percent(h/config.h)):0;
	    		l?(c.left=percent(l/config.w)):0;
	    		t?(c.top=percent(t/config.h)):0;
	    		
				$(div).css(c);
				return c; //返回备用
		    },
		    get:function(){
		    	return this;
		    }
	    }*/
	    
	    var WHLTTool = function(config){
	    	if(typeof config == 'undefined'){
		    	this.config = {
		    		w:985,
		    		h:559
		    	}
	    	}else{
	    		this.config = config;
	    	}
	    }
	    
	    WHLTTool.prototype.set = function(div,w,h,l,t){
    		
    		var c = {};
    		w?(c.width=percent(w/this.config.w)):0;
    		h?(c.height=percent(h/this.config.h)):0;
    		l?(c.left=percent(l/this.config.w)):0;
    		t?(c.top=percent(t/this.config.h)):0;
    		
			$(div).css(c);
			return c; //返回备用
	    }
	    
	    var WHLT = new WHLTTool({w:985,h:559});
	
	
	//定义第一页原始图片 需要显示部分的 宽高
    var imageW = 1060,imageH = 416;
	jQuery(document).ready(function($){
        w1800();
        $('#fullpage').fullpage({
            navigation: true,
            verticalCentered: false,
            scrollOverflow: true,
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','footer'],
            afterRender:function(){
            	night();
            	
            	//360安全浏览器 一定几率图片width会变大
            	var logoi = $('.first .logo img'); 
            	logoi.width(logoi.height());
            	var tipi = $('.first .tip img'); 
            	tipi.width(tipi.height()/121*650);
            	
            	var arr = imageFitDiv('.earthblock','.earthwrap',imageW,imageH);
            	
            	//向第二三页插入up
            	$(".section:not(:first,:last) .container").prepend($(".up:first")[0].outerHTML);
            	
            	
            	
            	$('.icons .download,.icons .wb,.icons .wx').mouseenter(function(e){
            		var t = $(this);
            		var q = t.parent().siblings('.qcode');
            		
            		q.css({
            			width:t.width()+'px'
        			});
            		var qImg1 = new Image();
            		var qImg2 = new Image();
            		var qImg3 = new Image();
            		qImg1.src = 'img/qcode-1.png';
            		qImg2.src = 'img/qcode-2.png';
            		qImg3.src = 'img/qcode-3.png'; //提前缓存三个qr图 防止出现卡顿
            		var qImg = q.find('img').get(0);
            		if(t.is('.download')){
            			qImg.src = qImg1.src;
            		}else if(t.is('.wb')){
            			qImg.src = qImg2.src;
            		}else if(t.is('.wx')){
            			qImg.src = qImg3.src;
            		}
            		
            		
            		q.stop().fadeIn(300).offset({
	            		left:t.offset().left,
	            		top:t.offset().top+t.height()
            		});
            		
            	}).mouseleave(function(){
            		var t = $(this);
            		var q = t.parent().siblings('.qcode');
            		q.stop().hide(0);
            	});
            },
            afterLoad:function(anchorLink, index){
            	
            },
            onLeave: function(index, nextIndex, direction){
            	//console.log(index)
            	//console.log(nextIndex)
				if(nextIndex == 2){
					if($(".second").hasClass('initialed')){
						return;//跳出onleave函数
					}
					var $div = $('.second .main');
					imageFitDiv($div,$div.find('.mainblock'),1060,882);
					var cir = new Image();
					cir.src = 'img/page2/cir.png';
					$('.second .main .mainblock').prepend(cir);
					$(".second").addClass('initialed');
				}
				if(nextIndex == 3){
					if($(".third").hasClass('initialed')){
						return;//跳出onleave函数
					}

					var $div = $('.third .mainwrap');
					imageFitDiv($div,$div.find('.mainblock'),985,559);
					
					var circle = new Image();
					circle.src = "img/page3/black_cir.png";
					var $b = $('.third .imgblock');
					$b.prepend(circle);
					WHLT.set(circle,324,null,(487-324/2),(237-324/2));
					
					var lunar = new Image();
					lunar.src = "img/page3/lunar.png";
					$b.append($(lunar).addClass('lunar'));
					
					
					var lunarP = WHLT.set(lunar,132,133,724,8);
					$(lunar).css('top','100%');
					$('.lunar').animate({
						top:lunarP.top
					},3000,function(){
						$(this).addClass('lunarrotate');
					});
					
					var qiezi = new Image();
					qiezi.src = "img/page3/qiezi.png";
					$b.append(qiezi);
					WHLT.set(qiezi,183,185,74,0);	
					
					var chaoren = new Image();
					chaoren.src = "img/page3/chaoren.png";
					$b.append(chaoren);
					WHLT.set(chaoren,158,153,27,405);
					
					var mao = new Image();
					mao.src = "img/page3/mao.png";
					$b.append(mao);
					WHLT.set(mao,192,154,723,384);


					
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
						
						$b.append($(c[i]).addClass('clouds'));
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
					
					$(c).each(function(k,v){
						$(this).addClass("float"+k);//动画class
						$(this).css({
							'-webkit-animation-delay':(-0.5*k)+'s',
							'animation-delay':(-0.5*k)+'s'
						});
					});
					
					$(".third").addClass('initialed');
				}
				
				if(nextIndex == 4 || nextIndex == 5 ){
					if($(".fourth").hasClass('initialed')){
						return;//跳出onleave函数
					}
					var tool = new WHLTTool({w:1244,h:970});
					var $div = $('.fourth .mainwrap');
					imageFitDiv($div,$div.find('.mainblock'),1244,970);
					
					var qi = new Image();
					qi.src = "img/page4/qipao.png";
					var $c = $('.fourth .imgblock');
					$c.append(qi);
					tool.set(qi,1010,956,121,14);
					
					var pops = [];
					var rs = [];
					var voices = [];
					for(var j = 1;j<=6;j++){
						pops[j] = new Image();
						pops[j].src = "img/page4/pop.png";
						
						rs[j] = new Image();
						rs[j].src = "img/page4/out/"+j+".png";
						
						voices[j] = new Image();
						voices[j].src = "img/page4/voice.png";

						$c.append($(rs[j]).addClass('r').data('order',j));    
						$c.append($(pops[j]).addClass('pop').data('order',j));  
						$c.append($(voices[j]).addClass('voice').data('order',j));  
					}
					
					tool.set(rs[1],165,165,143,29);
					//pops为正方形，取宽高的较小值
					tool.set(pops[1],165,165,143,29);
					tool.set(voices[1],33,37,211,88);
					
					tool.set(rs[2],250,250,0,300);						
					tool.set(pops[2],250,250,0,300);
					tool.set(voices[2],33,37,112,406);
					
					tool.set(rs[3],165,165,55,743);
					tool.set(pops[3],165,165,55,743);
					tool.set(voices[3],33,37,124,805);
					
					tool.set(rs[4],250,250,857,0);		
					tool.set(pops[4],250,250,857,0);
					tool.set(voices[4],33,37,967,104);

					tool.set(rs[5],165,165,1079,565);
					tool.set(pops[5],165,165,1079,565);
					tool.set(voices[5],33,37,1150,625);
					
					tool.set(rs[6],250,250,775,719);
					tool.set(pops[6],250,250,775,719);
					tool.set(voices[6],33,37,882,826);
					
					var now;
					var r;
					//pop需要在r之上，否则png颜色会发生变化 不能变换z-index
					$(".fourth .pop").mouseenter(function(){
						console.log('enter');
						now = this;
						r = $(now).prev('img');
						r.data('old-src',r[0].src).get(0).src = "img/page4/out-gif/"+$(now).data('order')+".gif";
						$(now).hide().next('img').hide();
						
						var ad = document.createElement('audio');
						ad.src = "img/page4/voice/"+$(now).data('order')+".mp3";
						$('body').append($(ad).attr('autoplay','autoplay').css('display','none'));
					});
					//pop在hide之后会触发mouseleave 不能都绑定在pop上
					$('.fourth .r').mouseleave(function(){
						now = this;
						r = $(now);
						r[0].src = r.data('old-src');
						$(now).next('img.pop').show().next('img.voice').show();

						$('audio').remove();
						
					});
					
					
					
					
					$(".fourth").addClass('initialed');
					
				}
	        }
        });
    
    
    
	    
	});
	

})(window,jQuery);




/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-canvas-canvastext !*/
!function(e,n,a){function o(e,n){return typeof e===n}function t(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e,n,a,t,s,c,r;for(var u in l){if(e=[],n=l[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(a=0;a<n.options.aliases.length;a++)e.push(n.options.aliases[a].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)c=e[s],r=c.split("."),1===r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i.push((t?"":"no-")+r.join("-"))}}function c(e){var n=r.className,a=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");n=n.replace(o,"$1"+a+"js$2")}Modernizr._config.enableClasses&&(n+=" "+a+e.join(" "+a),u?r.className.baseVal=n:r.className=n)}var i=[],l=[],r=n.documentElement,u="svg"===r.nodeName.toLowerCase(),f={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var a=this;setTimeout(function(){n(a[e])},0)},addTest:function(e,n,a){l.push({name:e,fn:n,options:a})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("audio",function(){var e=t("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return n}),Modernizr.addTest("canvas",function(){var e=t("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof t("canvas").getContext("2d").fillText}),s(),c(i),delete f.addTest,delete f.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
