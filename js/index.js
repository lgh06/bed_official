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
	    
	    
	    function percent(num){
	    	return num*100+'%';
	    }
	    
	    
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
	
	
	jQuery(document).ready(function($){
        $('#fullpage').fullpage({
            navigation: true,
            verticalCentered: false,
            scrollOverflow: true,
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','footer'],
            afterRender:function(){

            },
            afterLoad:function(anchorLink, index){
            	
            },
            onLeave: function(index, nextIndex, direction){
            	//console.log(index)
            	//console.log(nextIndex)
				
				
	        }
        });
    
    
    
	    
	});
	

})(window,jQuery);




/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-canvas-canvastext !*/
!function(e,n,a){function o(e,n){return typeof e===n}function t(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e,n,a,t,s,c,r;for(var u in l){if(e=[],n=l[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(a=0;a<n.options.aliases.length;a++)e.push(n.options.aliases[a].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)c=e[s],r=c.split("."),1===r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i.push((t?"":"no-")+r.join("-"))}}function c(e){var n=r.className,a=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");n=n.replace(o,"$1"+a+"js$2")}Modernizr._config.enableClasses&&(n+=" "+a+e.join(" "+a),u?r.className.baseVal=n:r.className=n)}var i=[],l=[],r=n.documentElement,u="svg"===r.nodeName.toLowerCase(),f={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var a=this;setTimeout(function(){n(a[e])},0)},addTest:function(e,n,a){l.push({name:e,fn:n,options:a})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("audio",function(){var e=t("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return n}),Modernizr.addTest("canvas",function(){var e=t("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof t("canvas").getContext("2d").fillText}),s(),c(i),delete f.addTest,delete f.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
