//function loadfile(){
	//data�t�@�C�����J����memo�Amonth,day�ɓ��e��ǂݍ���
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
	
	//�ǂݍ��񂾓��e������plan�\���X�V����B
	//memo�����󔒂������ꍇ,�����͍s�킸�I������
	//�ϐ��̏�����
	var cmd = "";
	//�ǂ��ɒǉ����邩���w��
	target = document.getElementById("output");
	//���܂œ��͂��ꂽ����ǉ�����
	for(d=0;d<=memo.length-1;d++){
		myD = new Date();
		console.log(myD);
		myY=myD.getFullYear(); //���͂����N�̒l �擾
		console.log(myY);
		var setDate = new Date(myY,month[d]-1,day[d]);
		var setweek = setDate.getDay();
	
		if(memo[d]==""){
		} else {
			if(d==0){		//��ԍŏ��Ȃ�e�[�u�����쐬
				cmd += 
				'<table class="cc" border="1">'
					+'<tr bgcolor="#cccccc" align=center>'
						+ "<th>Memo</th>"
						+ "<th>TimeOver</th>"
						+ "<th>delete</th>"
					+"</tr>"
			}
			//�\��̒ǉ�
			cmd += 
					"<tr align=center>"
					+ '<td width="300">' + memo[d] + "</td>"
					+ '<td width="80" class="time'+d+'">' + month[d] + "/"+ day[d] + "("+ myTbl[setweek] +")</td>"
					+ '<td width="50"><input type="button" value="delete" onclick="elim('+ d +')"></td>'
					+ "</tr>";
			if(d==i){		//��ԍŌ�Ȃ�e�[�u�������
				cmd +=
					"</table>";
				}		
		}
		//�Ō�ɂ܂Ƃ߂�
		if(cmd != ""){
			target.innerHTML = cmd;	
		}
	}
	console.log("reload");
}