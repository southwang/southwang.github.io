function show(imgName){
	switchDisplayByClass("show");
	changeImage(imgName);
}

function changeImage(imgName){
	var $tar = $("<img>");
	var $target = $("#" + imgName);
	$tar.attr("src",$target.attr("src"));
	// $tar.css("height",$(window).height() - 40);
	var h = $target[0].naturalHeight;		// 获取原始高
	var w = $target[0].naturalWidth;		// 获取原始宽
	var toHeight = $(window).height() - 40;	// 获取可视范围高（处理
	var toWidth = $(window).width() - 40;	// 获取可视范围宽（处理
	// 等比缩放下宽超过可视范围时设定宽度为可视范围宽度
	if ((toHeight / h * w) > toWidth){
		$tar.css("width", toWidth);
	} else {
		$tar.css("height", toHeight);
	}

	$tar.attr("id",imgName);
	var $img = $("#image");
    $img.find("img").remove();
    $img.append($tar);
	var temp = parseInt($img.css("width")) / 2 + 1; // +1 修复小数点不精确导致的白边问题
	$(".btn").find("button").css("width",temp);
}

function switchDisplayByClass(target){
	var $temp = $("." + target);
	if ($temp.hasClass("hide")) {
		$temp.removeClass("hide");
		$temp.fadeIn(100);
	} else {
		$temp.addClass("hide");
		$temp.fadeOut(100);
	}
}

function switchImages(x){
	if(isNaN(x)) return;
	var $imgs = $(".article img");
	var id = $(".show #image img").attr("id");
	var index = 0;
	var i,temp;
	for (i = 0;i < $imgs.length;i++){
		temp = $($imgs[i]).attr("id");
		if (temp === id){
			index = i;
			break;
		}
	}
	index += x;
	if (index < 0){
		showMessage("到头了，没有上一张了！");
		return;
	} else if(index >= $imgs.length){
		showMessage("这是最后一张了！");
		return;
	}
	changeImage($($imgs[index]).attr("id"));
}

function showMessage(msg){
    var $msg = $("#msg");
    $msg.find("p").text(msg);
    $msg.fadeIn(200);
	setTimeout(function(){
        $msg.fadeOut(200);
	},500);
}

$().ready(function(){
    var $show = $(".show");
	$(document).keyup(function(event){
		switch(event.keyCode) {
			case 27:
                $show.addClass("hide");
                $show.fadeOut(100);
				break;
			case 37:
            case 100:
				switchImages(-1);
				break;
			case 39:
			case 102:
				switchImages(1);
				break;
		}
	});
	$("#previous").on("click",function(){
		switchImages(-1);
	});
	$("#next").on("click",function(){
		switchImages(1);
	});
    $show.on("DOMMouseScroll mousewheel",function(e){
		var temp = (e.originalEvent.detail && e.originalEvent.detail > 0 ? "down":"up")
					|| (e.originalEvent.wheelData && e.originalEvent.wheelData < 0 ? "down":"up");
		switch(temp){
			case "down":
				e.preventDefault();
				switchImages(1);
				break;
			case "up":
				e.preventDefault();
				switchImages(-1);
				break	
		}
	});
	$("#close").on("click",function(e){
		e.preventDefault();
        var $show = $(".show");
        $show.addClass("hide");
        $show.fadeOut(100);
	});

	// for smart phone
	// only need left/right switch
	var startX,endX,result;
    $show.on("touchstart", function (e) {
		startX = e.originalEvent.targetTouches[0].pageX;
    });
    $show.on("touchend", function (e) {
		endX = e.originalEvent.changedTouches[0].pageX;
		result = startX - endX;
		if (result > 0) {
            switchImages(1);
		} else if (result < 0) {
            switchImages(-1);
		}
    });

});