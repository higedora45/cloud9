function save(){
	//書き込み用ファイルを生成する
	var fs = require('fs');
	var data = "";
	var data1 = "";
	var data2 = "";
	//ファイルの初期化
	fs.writeFile('data.dat', data, function (err) {
		console.log(err);
	});
	fs.writeFile('datad.dat', data1, function (err) {
		console.log(err);
	});
	fs.writeFile('datam.dat', data2, function (err) {
		console.log(err);
	});
	///////////////////////////////////////////
	
	console.log("memob:"+memo);
	for(var r=0;r<memo.length;r++){
		data = memo[r] + "\n";
		console.log(data);
		fs.appendFile('data.dat', data, function (err) {
			console.log(err);
		});
	}
	///////////////////////////////////////////
	
	console.log("dayb:"+day);
	for(var r=0;r<day.length;r++){
		data1 = day[r] + "\n";
		fs.appendFile('datad.dat', data1, function (err) {
			console.log(err);
		});
	}
	///////////////////////////////////////////
	
	console.log("monthb:"+month);
	for(var r=0;r<month.length;r++){
		data2 = month[r] + "\n";	
		fs.appendFile('datam.dat', data2, function (err) {
			console.log(err);
		});
	}
	console.log("save");
	///////////////////////////////////////////
}
