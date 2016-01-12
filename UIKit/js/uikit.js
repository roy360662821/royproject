angular.module('myApp').controller('uikit', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    var num=0;
    var sliImgArr=["bg_one","bg_two","bg_three","bg_four"];
    //Open the dropdwon query options
    $(".dropdownquery_btn").click(function(e){
    	var optionsDiv=$(this).parent().next();
    	if(optionsDiv.attr("class") == "dropdownquery_options"){
    		optionsDiv.slideToggle(200);
    		e.stopPropagation();
    	}
    });
    
    //next image
    $(".sli_btn_next").click(function(){
    	if(num<3){
    		var sliImg=sliImgArr[num];
    		$("."+sliImg).slideUp(100);
    		num++;
    		console.log(num+" next");
    	}
    });
    
    //last image
    $(".sli_btn_last").click(function(){
    	if(num > 0){
    		var sliImg=sliImgArr[num-1];
    		$("."+sliImg).slideDown(200);
    		num--;
    		console.log(num+" last");
    	}
    });
    
    $(".sli_btn_circle_base div").click(function(){
    	var childList=$(".sli_btn_circle_base").children();
    	for(var i=0;i<sliImgArr.length;i++){
    		if($(this).is(childList.get(i))){
				for(var j=0;j<sliImgArr.length;j++){
					var sliImg=sliImgArr[j];
					if(j<i){
						$("."+sliImg).slideUp(200);
					}else{
						$("."+sliImg).slideDown(200);
					}
				}
    			num=i;
    		}
    	}
    });
    
    $(".dropdownquery input").focus(function(){
    	$(this).parent().css("border-color","lightgreen");
    	$(this).next().css("border-color","lightgreen");
    });
    
    $(".dropdownquery input").blur(function(){
    	$(this).parent().css("border-color","darkgray");
    	$(this).next().css("border-color","darkgray");
    });
    
    $(document).click(function() { 
		$(".dropdownquery_options").slideUp(200); 
	}); 
    
    $(".form_control i").click(function(){
    	$(this).attr("class","icon-radio-checked");
    	$(this).siblings("i").attr("class","icon-radio-unchecked");
    });
    
    //Choice a item
    $(".dropdownquery_options div").click(function(){
    	var inputText=$(this).parent().prev().find("input").first();
    	inputText.val($(this).html());
    	$(this).parent().slideUp(200);
    });
    
});