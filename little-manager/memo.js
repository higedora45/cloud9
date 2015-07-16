//ボタンが押された時の処理
function setmemo(){
	var d=0;
	
	//各要素の状態を取得
	memo[i]	= document.form.memo.value;
	month[i]= document.form.month.selectedIndex + 1;
	day[i]	= document.form.day.selectedIndex + 1;
	
	//memo欄が空白だった場合,処理は行わず終了する
	if(document.form.memo.value == ""){
		return;
	} else {
		
		//変数の初期化
		var cmd = "";
		//どこに追加するかを指定
		target = document.getElementById("output");
		//今まで入力された分を追加する
		for(d=0;d<=i;d++){
			myD = new Date();
			myY=myD.getFullYear(); //入力した年の値 取得
			console.log(myY);
			var setDate = new Date(myY,month[d]-1,day[d]);
			var setweek = setDate.getDay();
			
			console.log(d+":"+ setDate);
			
			if(d==0){		//一番最初ならテーブルを作成
				cmd += 
					'<table id="cc" class="cc" border="1">'
						+'<tr bgcolor="#cccccc" align=center>'
							+ "<th>Memo</th>"
							+ "<th>TimeOver</th>"
							+ "<th>delete</th>"
						+"</tr>"
			}
			//予定の追加
			cmd += 
				'<tr align=center>'
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
			target.innerHTML = cmd;
			i += 1;		
			save();
			txtclr();
	}		
}

//delete用関数

function elim(num){
	//各データを削除する
	//memo[num] = "";
	//month[num] = "";
	//day[num] = "";
	memo.splice(num,1);
	day.splice(num,1);
	month.splice(num,1);
	var check=0;
	d=0;
	//console.log(i);
	//無くなった分詰める
	
	
	console.log(memo);
	//並べ直す
	//memo欄が空白だった場合,ボックスを削除する
	if(memo.length == 0){
		target = document.getElementById("output");
		target.innerHTML = "";
		save();
	} else {
		log();
		//現在のデータを保存
		save();
		}
	}
