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
    	anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage'],
    	afterLoad:function(){
    		//星星定位
    		$(".star img").css("bottom",$(".star").height()*0.2+"px");
    		$(window).resize(function () {
    			//星星
    			$(".star img").css("bottom",$(".star").height()*0.2+"px");
    			//枕头
    			initPillows();
    		});
       					       		
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
       		
       		$(".hablock .starmoon").width($(".hablock .help img").width());
       		
       		initPillows();
       		
       		
       	},
    	afterRender: function(){
    		
            var pluginContainer = $(this);
            //alert("The resulting DOM structure is ready");
           
					            
       	},
       	onLeave:function(index, nextIndex, direction){
       		$(".phone1").stop();
       		$(".phone2").stop();
       		if(index != 1){
       			$(".phone1").css("top",$(".phones").height()-$(".phone1").height()/2.0+"px");
       			$(".phone2").css("top",$(".phones").height()-$(".phone2").height()/2.0+"px");
       		}
       	}
       	
    });
    
    function initPillows(){
    	
    	var w = $(".pillows").width();
    	var h = $(".pillows").height();
    	if(w/h >= 1022.0/137){
    		$(".pillows img").height(h+"px");
    		$(".pillows img").width(h/137.0*1022+"px");
    	}else{
    		$(".pillows img").width(w+"px");
    		$(".pillows img").height(w/1022.0*137+"px");
    		
    	}
    	
    }
    
});