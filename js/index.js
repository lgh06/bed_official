var pillowsInitialed = 0;
$(document).ready(function() {
	
	var p1 = new Image();
	p1.src = "img/phone1.png";
	var p2 = new Image();
	p2.src = "img/phone2.png";
	
	if($("html").width()>1800){
		$(".container").addClass("w1800");
	};
	
    $('#fullpage').fullpage({
    	navigation:true,
    	verticalCentered:false,
    	scrollOverflow:true,
    	anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage','fifthPage'],
    	afterLoad:function(anchorLink, index){
    		
    		
    		initMobiles();
       		initPillows();
       		
       	},
    	afterRender: function(){
    		
            var pluginContainer = $(this);
            //alert("The resulting DOM structure is ready");
            
            //防止第一页加载未渲染好时 出现第二页内容
            $(".second .starmoon").css("display","block");
            
            
            
            
            smileChange.start();
            
            $(".third .smile img").mouseenter(function () {
            	smileChange.stop();
            	//console.log(smileChange.intervalId);
            }).mouseleave(function () {
            	smileChange.start();
            });
            
            
            initHouse();
            
            
    		$(window).resize(function () {
    			$.fn.fullpage.reBuild();
    			
    			$(".phone1").stop();
       			$(".phone2").stop();
    			initMobiles();
    			initPillows();
    			initPops();
    			initHearts();
    			initConn();
    			initHouse();
    		});
            
            
            
            /*imageFitDiv($(".hearttalk"),900.0,748);*/
					            
       	},
       	onLeave:function(index, nextIndex, direction){
       		$(".phone1").stop();
       		$(".phone2").stop();
       		if(index != 1){
       			$(".phone1").css("top",$(".phones").height()-$(".phone1").height()/2.0+"px");
       			$(".phone2").css("top",$(".phones").height()-$(".phone2").height()/2.0+"px");
       		}
       		
       		if(nextIndex == 2){
       			initPops();
       		}
       		if(nextIndex == 3){
       			initHearts();
       		}
       		if(nextIndex == 4){
       			initConn();
       		}
       	}
       	
    });
    
    //初始化两个手机
    function initMobiles() {
		$(".phone1").css("top",$(".phones").height()-$(".phone1").height()/2.0+"px");
		$(".phone2").css("top",$(".phones").height()-$(".phone2").height()/2.0+"px");
		
		$(".phone1").animate({
			opacity: 0.9,
		    top: "-="+(923.0/2-135.0)*$(".phone1").height()/p1.height+"px"
		},2000,function(){
			$(".star").animate({
				opacity:1
			},2000);	
		});
		
		
		$(".phone2").animate({
			opacity: 1,
		    top: "-="+(801.0/2-120.0)*$(".phone2").height()/p2.height+"px"
		},2000,function(){
		});    	
		
		//星星定位
    	$(".star img").css("bottom",$(".star").height()*0.2+"px");
    }

    
    //使枕头的图片适应div
    function initPillows(){
    	imageFitDiv($(".pillows"),1022.0,137);
    	
    	//对starmoon设置宽度，以便使用margin 0 auto来居中
   		$(".hablock .starmoon").width($(".hablock .help img").width());
    }
    
    //初始化pop提示框的位置
    function initPops(){
    	imageFitDiv($(".pop1"),230.0,149);
    	imageFitDiv($(".pop2"),230.0,149);
    	imageFitDiv($(".pop3"),230.0,149);
    	
    	//pop1在原图的位置：left 70
    	//原图 pillows 773 103
    	popPosition($(".pop1"),70.0/773*$(".pillows img").width(),0);
    	popPosition($(".pop2"),298.0/773*$(".pillows img").width(),13.0/91*$(".pop1 img").height());//top距离相对于pop1 img算出
    	popPosition($(".pop3"),574.0/773*$(".pillows img").width(),-10.0/91*$(".pop1 img").height());
    	
    	
    	popSpanPosition($(".pop1"));
    	popSpanPosition($(".pop2"));
    	popSpanPosition($(".pop3"));
    	
    	
    	
    }
    
    function initHearts(){
    	var w = $(".third .talk").width();
    	var h = $(".third .talk").height();
    	var originW = 900.0;
    	var originH = 748.0;
    	
    	//475 102
    	
    	$(".third .gn").css({
    		width:180.0/611*w+"px",
    		height:149.0/508*h+"px",
    		left:(475/originW*w)+"px",
    		top:(102/originH*h)+"px"
    	});
    	
    }
    
    //使联系的图片适应div
    function initConn(){
    	imageFitDiv($(".connection"),312.0,463);
    }
    
    //第五页房子月亮部分
    function initHouse(){
    	houseFitDiv();
    	
    	//定位乌云
    	
    	$(".fifth .cloud").css({
    		width:$(".fifth .house").width()+"px",
    		height:$(".fifth .house").height()+"px"
    	});
    	
    	//定位月亮 大图版本
    	/*$(".fifth .lunar").css({
    		width:$(".fifth .house").width()+"px",
    		height:$(".fifth .house").height()+"px"
    	});*/
    	
    	//定位月亮 小图版本
    	$(".fifth .lunar").css({
    		width:141.0/720*$(".fifth .house").width()+"px",
    		height:118.0/720*$(".fifth .house").height()+"px",
    		left:361.0/720*$(".fifth .house").height()+"px",
    		top:103.0/720*$(".fifth .house").width()+"px"
    	});
    	
    	
    	
    }
    
    
    
    //使图片适应div，宽高等比例，不超过div
    function imageFitDiv(div,imgOriginWidth,imgOriginHeight){
    	var w = $(div).width();
    	var h = $(div).height();
    	if(w/h >= imgOriginWidth/imgOriginHeight){
    		$(div).find("img").height(h+"px");
    		$(div).find("img").width(h/imgOriginHeight*imgOriginWidth+"px");
    	}else{
    		$(div).find("img").width(w+"px");
    		$(div).find("img").height(w/imgOriginWidth*imgOriginHeight+"px");
    		
    	}      	
    }
    
    //第五页房子适应div
    function houseFitDiv(){
    	var div = $(".fifth .center");
    	var w = div.width();
    	var h = div.height();
    	if(w/h >= 721.0/720){
    		$(div).find("img.house").height(h/486.0*720+"px");
    		$(div).find("img.house,.housewrap").width($(div).find("img.house").height()/720.0*721+"px");
    	}else{
    		$(div).find("img.house").width(w+"px");
    		$(div).find("img.house").height(w/721.0*720+"px");
    		
    	}
    	
    	//$(div).find("img.house").wrap("<div class=\"housewrap\"></div>");
    	
    }
    
    //定位三个pop框
    function popPosition(pop1,left,top){
    	var pillowOffset = $(".pillows img").offset().left - $(".pillows").offset().left ;
    	$(pop1).css({
    		left:pillowOffset+left+"px",
    		top:top+"px"
    	});
    }
    
    //定位pop内的span文字
    function popSpanPosition(pop1){
    	var span = $(pop1).find("span");
    	span.css({
    		left:(span.parent().find("img").width()-span.width())/2.0+"px",
    		top:(span.parent().find("img").height()-span.height())/2.0+"px"
    	});
    }
    
    var smileChange = {
    	start:function(){
    		var that = this;//内层的内层函数的this会出问题
    		this.intervalId = setInterval(function () {
    			clearTimeout(that.timeoutId);
    			$(".third .smile img").attr("src","img/smile-on-2.png");
    			that.timeoutId = setTimeout(function () {
    				$(".third .smile img").attr("src","img/smile-off-2.png");
    			},500);
    			//console.log("start  timeout ID "+that.timeoutId);
    		},1000);
    		
    		
    	},
    	stop:function(){
    		console.log("stop timeout id"+this.timeoutId);
    		clearInterval(this.intervalId);
    		clearTimeout(this.timeoutId);
    		console.log("stop interval id"+this.intervalId);
    	},
    	changing:0,
    	intervalId : 0,
    	timeoutId : 0
    }
    
    $(".fifth .house").mousemove(test);
	    				
	function test(e){
		console.log(e.clientX);
	}
    

    
});