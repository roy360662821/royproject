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
    	}
    });
    
    //last image
    $(".sli_btn_last").click(function(){
    	if(num > 0){
    		var sliImg=sliImgArr[num-1];
    		$("."+sliImg).slideDown(200);
    		num--;
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
    
    //Choice a item
    $(".dropdownquery_options div").click(function(){
    	var inputText=$(this).parent().prev().find("input").first();
    	inputText.val($(this).html());
    	$(this).parent().slideUp(200);
    });
    
    //select radio btn or checkbox btn
    $(".form_control i").click(function(){
    	if($(this).attr("class") == "icon-radio-unchecked"){
    		$(this).attr("class","icon-radio-checked");
    		$(this).siblings("i").attr("class","icon-radio-unchecked");
    	}
    	if($(this).attr("class") == "icon-checkbox-unchecked") $(this).attr("class","icon-checkbox-checked");
    	else if($(this).attr("class") == "icon-checkbox-checked") $(this).attr("class","icon-checkbox-unchecked");
    });
    
    //calender control
    
    
    //create calender control
    $(".calender_controller_btn").click(function(){
    	if($(".calender_controller_panel").length>0){
    		$(".calender_controller_panel").slideToggle(200);
    		$(".calender_controller_panel").remove();
    	}else{
    		var nowDate=new Date();			//当前日期
			var nowDay=nowDate.getDate();	//当前几号
			var nowMonth=nowDate.getMonth();//当前月份
			var nowYear=nowDate.getFullYear();  //当前年份
			//判断当月一号星期几
			var newDate=new Date(nowYear,nowMonth,1);
			var weekDayOne=newDate.getDay();
			var monthDays=getMonthDays(nowYear,nowMonth+1);
			var dayLength=35;
			if(weekDayOne+monthDays>dayLength){
				dayLength=42;
			}
			var daysInnerHtml="";
			for(var i=1;i<=dayLength;i++){
				if(i<=weekDayOne){
					daysInnerHtml=daysInnerHtml+"<div></div>";
				}else{
					if(i-weekDayOne<=monthDays){
						if(i-weekDayOne == nowDay) daysInnerHtml=daysInnerHtml+"<div onclick='selectDays(this)' class='calender_controller_days calender_controller_nowday'>"+(i-weekDayOne)+"</div>"
						else daysInnerHtml=daysInnerHtml+"<div onclick='selectDays(this)' class='calender_controller_days'>"+(i-weekDayOne)+"</div>";
					}else{
						daysInnerHtml=daysInnerHtml+"<div></div>";
					}
				}
			}
			var calenderPanel=$("<div></div>");
			$(this).parent().parent().append(calenderPanel);
			calenderPanel.attr("class","calender_controller_panel");
			var calenderPanelHtmlOne="<div class=\"calender_controller_panel_head\"></div>"
							+"<div class=\"calender_controller_panel_month_year_choice\">"
								+"<div class=\"calender_controller_last_month\" onclick='lastMonthClick()'>"
									+"<div class=\"triangle-left\"></div>"
								+"</div>"
								+"<div class=\"calender_controller_month_year\">"
									+"<div class=\"calender_controller_month\">January</div>"
									+"<div class=\"calender_controller_year\">2016</div>"
								+"</div>"
								+"<div class=\"calender_controller_next_month\" onclick='nextMonthClick()'>"
									+"<div class=\"triangle-right\"></div>"
								+"</div>"
							+"</div>"
							+"<div class=\"calender_controller_date_panel\" align=\"center\">"
								+"<div class=\"calender_controller_week\">"
									+"<div>SUN</div>"
									+"<div>MON</div>"
									+"<div>TUE</div>"
									+"<div>WED</div>"
									+"<div>THU</div>"
									+"<div>FRI</div>"
									+"<div>SAT</div>"
								+"</div>"
								+"<div class=\"calender_controller_days_panel\">";
			var calenderPanelHtmlTwo="</div></div>";
			var calenderPanelHtml=calenderPanelHtmlOne+daysInnerHtml+calenderPanelHtmlTwo;
			calenderPanel.html(calenderPanelHtml);
			if(dayLength!=42) $(".calender_controller_days_panel").css("height","150px");
			else $(".calender_controller_days_panel").css("height","180px");
	    	$(".calender_controller_panel").slideToggle(200);
    	}
    });
    
});

//check month days
function getMonthDays(year,month){
	if(month == 2){
		if (((year % 4)==0) && ((year % 100)!=0) || ((year % 400)==0))  return 29;
		else return 28;
	}
	console.log("year"+year);
	console.log("month"+month);
	switch (month){
		case 1:
			return 31;
		case 3:
			return 31;
		case 5:
			return 31;
		case 7:
			return 31;
		case 8:
			return 31;
		case 10:
			return 31;
		case 12:
			return 31;
		case 4:
			return 30;
		case 6:
			return 30;
		case 9:
			return 30;
		case 11:
			return 30;
		default:
			break;
	}
}

var monthArr={January:0,February:1,March:2,April:3,May:4,June:5,July:6,August:7,September:8,October:9,November:10,December:11};
function selectDays(obj){
	$(".calender_controller_text").html($(".calender_controller_year").html()+"-"+(monthArr[$(".calender_controller_month").html()]+1)+"-"+obj.innerHTML);
	$(".calender_controller_panel").slideToggle(200);
	$(".calender_controller_panel").remove();
}

function lastMonthClick(){
	var month=monthArr[$(".calender_controller_month").html().trim()];
	var year=$(".calender_controller_year").html().trim();
	if(parseInt(month)==0){
		month=11;
		year=parseInt(year)-1;
	}else{
		month=parseInt(month)-1;
	}
	reloadCalenderPanel(month,year);
}

function nextMonthClick(){
	var month=monthArr[$(".calender_controller_month").html().trim()];
	var year=$(".calender_controller_year").html().trim();
	if(parseInt(month)==11){
		month=0;
		year=parseInt(year)+1;
	}else{
		month=parseInt(month)+1;
	}
	reloadCalenderPanel(month,year);
}

function reloadCalenderPanel(month,year){
	$(".calender_controller_year").html(year);
	for(var mon in monthArr){
		if(monthArr[mon] == month){
			$(".calender_controller_month").html(mon);
		}
	}
	var newDate=new Date(year,month,1);
	var weekDayOne=newDate.getDay();
	var monthDays= getMonthDays(year,(month+1));
	var dayLength=35;
	if(weekDayOne+monthDays>dayLength){
		dayLength=42;
	}
	var daysInnerHtml="";
	for(var i=1;i<=dayLength;i++){
		if(i<=weekDayOne){
			daysInnerHtml=daysInnerHtml+"<div></div>";
		}else{
			if(i-weekDayOne<=monthDays){
				daysInnerHtml=daysInnerHtml+"<div onclick='selectDays(this)' class='calender_controller_days'>"+(i-weekDayOne)+"</div>";
			}else{
				daysInnerHtml=daysInnerHtml+"<div></div>";
			}
		}
	}
	if(dayLength!=42) $(".calender_controller_days_panel").css("height","150px");
	else $(".calender_controller_days_panel").css("height","180px");
	$(".calender_controller_days_panel").html(daysInnerHtml);
}
