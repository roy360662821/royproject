//初始化日历控件
function initIndexCalender(){
	var nowDate=new Date();			//当前日期
	var weekDay=nowDate.getDay();	//当前星期几
	var nowDay=nowDate.getDate();	//当前几号
	var nowMonth=nowDate.getMonth();//当前月份
	var nowYear=nowDate.getYear();  //当前年份
	//判断当月一号星期几
	var weekDayOne=nowDay%7-1;
	var monthDays=getMonthDays(nowYear,nowMonth+1);
	document.getElementById("calender_item_list").innerHTML="";
	for(var i=1;i<=(weekDayOne+monthDays);i++){
		var childObj=document.createElement("div");
		childObj.className="index_calender_normal_item";
		childObj.align="center";
		if(i%7 == 0) childObj.className="index_calender_six_item";
		if(i >weekDayOne) childObj.innerHTML=i-weekDayOne;
		if(i-weekDayOne == nowDay) childObj.innerHTML="<div style='height:30px; width:30px;border-radius: 15px; background-color:rgba(0,0,0,0.2); margin-top:5px; line-height:32.5px'>"+(i-weekDayOne)+"</div>";
		document.getElementById("calender_item_list").appendChild(childObj);
	}
}

function getMonthDays(year,month){
	if(month == 2){
		if (((year % 4)==0) && ((year % 100)!=0) || ((year % 400)==0))  return 29;
		else return 28;
	}
	switch (month){
		case 1 || 3 || 5 || 7 ||　8 || 10 || 12:
			return 31;
		case 4 || 6 || 9 || 11:
			return 30;
		default:
			break;
	}
}
