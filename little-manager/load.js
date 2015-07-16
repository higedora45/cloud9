//function loadfile(){
	//dataファイルを開いてmemo、month,dayに内容を読み込む
	var fs = require('fs');
	readline = require('readline');
	
    rs = fs.ReadStream('data.dat'),
    rl = readline.createInterface({'input': rs, 'output': {}});
	
	rs1 = fs.ReadStream('datad.dat'),
    rl1 = readline.createInterface({'input': rs1, 'output': {}});
    
    rs2 = fs.ReadStream('datam.dat'),
    rl2 = readline.createInterface({'input': rs2, 'output': {}});
    
    var l,m,n;
	l = 0;
	rl.on('line', function (line) {
		//console.log("memo:"+ line.trim());
		memo[l] = line.trim();
		l++;
	});
	
	m = 0;
	rl1.on('line', function (line1) {
		//console.log("day:"+ line1.trim());
		day[m] = line1.trim();
		m++;
	});
	
	n = 0;
	rl2.on('line', function (line2) {
		//console.log("month:"+ line2.trim());
		month[n] = line2.trim();
		n++;
	});
	
	rl.resume();
	rl1.resume();
	rl2.resume();
	
	
	console.log("load comp");
	console.log("memo:"+memo);
	console.log("month:"+month);
	console.log("day:"+day);
	
	function delayExec() {
		setTimeout('reload();',1500);
		console.log("time comp");
	}

function reload(){
	i = memo.length;
	
	//読み込んだ内容を元にplan表を更新する。
	//memo欄が空白だった場合,処理は行わず終了する
	//変数の初期化
	var cmd = "";
	//どこに追加するかを指定
	target = document.getElementById("output");
	//今まで入力された分を追加する
	for(d=0;d<=memo.length-1;d++){
		myD = new Date();
		console.log(myD);
		myY=myD.getFullYear(); //入力した年の値 取得
		console.log(myY);
		var setDate = new Date(myY,month[d]-1,day[d]);
		var setweek = setDate.getDay();
	
		if(memo[d]==""){
		} else {
			if(d==0){		//一番最初ならテーブルを作成
				cmd += 
				'<table class="cc" border="1">'
					+'<tr bgcolor="#cccccc" align=center>'
						+ "<th>Memo</th>"
						+ "<th>TimeOver</th>"
						+ "<th>delete</th>"
					+"</tr>"
			}
			//予定の追加
			cmd += 
					"<tr align=center>"
					+ '<td width="300">' + memo[d] + "</td>"
					+ '<td width="80" class="time'+d+'">' + month[d] + "/"+ day[d] + "("+ myTbl[setweek] +")</td>"
					+ '<td width="50"><input type="button" value="delete" onclick="elim('+ d +')"></td>'
					+ "</tr>";
			if(d==i){		//一番最後ならテーブルを閉じる
				cmd +=
					"</table>";
				}		
		}
		//最後にまとめて
		if(cmd != ""){
			target.innerHTML = cmd;	
		}
	}
	console.log("reload");
}