//�{�^���������ꂽ���̏���
function setmemo(){
	var d=0;
	
	//�e�v�f�̏�Ԃ��擾
	memo[i]	= document.form.memo.value;
	month[i]= document.form.month.selectedIndex + 1;
	day[i]	= document.form.day.selectedIndex + 1;
	
	//memo�����󔒂������ꍇ,�����͍s�킸�I������
	if(document.form.memo.value == ""){
		return;
	} else {
		
		//�ϐ��̏�����
		var cmd = "";
		//�ǂ��ɒǉ����邩���w��
		target = document.getElementById("output");
		//���܂œ��͂��ꂽ����ǉ�����
		for(d=0;d<=i;d++){
			myD = new Date();
			myY=myD.getFullYear(); //���͂����N�̒l �擾
			console.log(myY);
			var setDate = new Date(myY,month[d]-1,day[d]);
			var setweek = setDate.getDay();
			
			console.log(d+":"+ setDate);
			
			if(d==0){		//��ԍŏ��Ȃ�e�[�u�����쐬
				cmd += 
					'<table id="cc" class="cc" border="1">'
						+'<tr bgcolor="#cccccc" align=center>'
							+ "<th>Memo</th>"
							+ "<th>TimeOver</th>"
							+ "<th>delete</th>"
						+"</tr>"
			}
			//�\��̒ǉ�
			cmd += 
				'<tr align=center>'
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
			target.innerHTML = cmd;
			i += 1;		
			save();
			txtclr();
	}		
}

//delete�p�֐�

function elim(num){
	//�e�f�[�^���폜����
	//memo[num] = "";
	//month[num] = "";
	//day[num] = "";
	memo.splice(num,1);
	day.splice(num,1);
	month.splice(num,1);
	var check=0;
	d=0;
	//console.log(i);
	//�����Ȃ������l�߂�
	
	
	console.log(memo);
	//���ג���
	//memo�����󔒂������ꍇ,�{�b�N�X���폜����
	if(memo.length == 0){
		target = document.getElementById("output");
		target.innerHTML = "";
		save();
	} else {
		log();
		//���݂̃f�[�^��ۑ�
		save();
		}
	}
