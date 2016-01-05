//Index page js
$(".top_menu").click(function(){
	$(this).siblings().removeAttr("style");
	$(this).css("background-color","#1C2630");
});

/*下拉选择框*/
$(".select_control").click(function(){
	if($(".selection_data_list").css("display")=="none"){
		$(".selection_data_list").show(200);
	}else{
		$(".selection_data_list").hide(200);
	}
});

/*选择下拉数据*/
$(".selection_data_list div").click(function(){
	$(".select_text_text").html($(this).html()+" <i class='icon-circle-down'></i>");
});

$(".left_menu_child_menu").click(function(){
	$(".left_menu_next_menu").hide(200);
	$(this).next().show(200);
});
