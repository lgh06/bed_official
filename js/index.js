var pillowsInitialed = 0;
$(document).ready(function() {
	
	
	
	if($("html").width()>1800){
		$(".container").addClass("w1800");
	};
	
    $('#fullpage').fullpage({
    	navigation:true,
    	verticalCentered:false,
    	scrollOverflow:true,
    	anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage'],
    	afterLoad:function(anchorLink, index){
    		
    		
    		
    		//星星定位
    		$(".star img").css("bottom",$(".star").height()*0.2+"px");
    		$(window).resize(function () {
    			//星星
    			$(".star img").css("bottom",$(".star").height()*0.2+"px");
    			//枕头
    			initPillows();
    			initPops();
    			initHearts();
    		});
    		
    		var p1 = new Image();
			p1.src = "img/phone1.png";
			var p2 = new Image();
			p2.src = "img/phone2.png";
       					       		
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
       		
       		//对starmoon设置宽度，以便使用margin 0 auto来居中
       		$(".hablock .starmoon").width($(".hablock .help img").width());
       		
       		initPillows();
       		
       	},
    	afterRender: function(){
    		
            var pluginContainer = $(this);
            //alert("The resulting DOM structure is ready");
            
            //防止第一页加载未渲染好时 出现第二页内容
            $(".second .starmoon").css("display","block");
            
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
       	}
       	
    });
    
    //使枕头的图片适应div
    function initPillows(){
    	imageFitDiv($(".pillows"),1022.0,137);
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
    

    
});