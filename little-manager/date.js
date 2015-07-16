function myfunc(){

	myD = new Date();
	myYear	= myD.getFullYear();	// 年
	myYear4 = (myYear < 2000) ? myYear+1900 : myYear ;
	myMonth	= myD.getMonth()+1;	// 月
	myDate	= myD.getDate();	// 日
	myDay	= myD.getDay();	// 曜日
	myHours	= myD.getHours();	// 時
	myMinutes	= myD.getMinutes();	// 分
	mySeconds	= myD.getSeconds();	// 秒

	
	var msg ="<strong>"+myYear+"年"+myMonth+"月"+myDate+"日"+myTbl[myDay]+"曜日"
			+myHours+"時"+myMinutes+"分"+mySeconds+"秒"+"</strong>";
		document.getElementById('time').innerHTML = msg;
} 
