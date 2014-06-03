
function IDAction(name1, name2, name3, player, Frplayer){
	$(function(){
		if(player == 1) {
			if(Frplayer == 4) $('#player1').append('<img class="rotate" src="MJpic/'+name1+'.png" />');
			else $('#player1').append('<img src="MJpic/'+name1+'.png" />');
			if(Frplayer == 3) $('#player1').append('<img class="rotate" src="MJpic/'+name2+'.png" />');
			else $('#player1').append('<img src="MJpic/'+name2+'.png" />');
			if(Frplayer == 2) $('#player1').append('<img class="rotate" src="MJpic/'+name3+'.png" />');
			else $('#player1').append('<img src="MJpic/'+name3+'.png" />');

		} else if(player == 2){
			if(Frplayer == 1) $('#player2').append('<img class="rotate" src="MJpic/'+name1+'.png" />');
			else $('#player2').append('<img src="MJpic/'+name1+'.png" />');
			if(Frplayer == 4) $('#player2').append('<img class="rotate" src="MJpic/'+name2+'.png" />');
			else $('#player2').append('<img src="MJpic/'+name2+'.png" />');
			if(Frplayer == 3) $('#player2').append('<img class="rotate" src="MJpic/'+name3+'.png" />');
			else $('#player2').append('<img src="MJpic/'+name3+'.png" />');

		} else if(player == 3){
			if(Frplayer == 2) $('#player3').append('<img class="rotate" src="MJpic/'+name1+'.png" />');
			else $('#player3').append('<img src="MJpic/'+name1+'.png" />');
			if(Frplayer == 1) $('#player3').append('<img class="rotate" src="MJpic/'+name2+'.png" />');
			else $('#player3').append('<img src="MJpic/'+name2+'.png" />');
			if(Frplayer == 4) $('#player3').append('<img class="rotate" src="MJpic/'+name3+'.png" />');
			else $('#player3').append('<img src="MJpic/'+name3+'.png" />');
			
		} else if(player == 4) {
			if(Frplayer == 3) $('#player4').append('<img class="rotate" src="MJpic/'+name1+'.png" />');
			else $('#player4').append('<img src="MJpic/'+name1+'.png" />');
			if(Frplayer == 2) $('#player4').append('<img class="rotate" src="MJpic/'+name2+'.png" />');
			else $('#player4').append('<img src="MJpic/'+name2+'.png" />');
			if(Frplayer == 1) $('#player4').append('<img class="rotate" src="MJpic/'+name3+'.png" />');
			else $('#player4').append('<img src="MJpic/'+name3+'.png" />');
		}
		
	});
}
function changeScore(player, score){
	$(function(){
		if(player == 1) document.getElementById("P1_score").innerHTML= score;
		else if(player == 2) document.getElementById("P2_score").innerHTML= score;
		else if(player == 3) document.getElementById("P3_score").innerHTML= score;
		else if(player == 4) document.getElementById("P4_score").innerHTML= score;
	});
}
function ting(player){
	$(function(){
		if(player == 1) document.getElementById("P1_state").innerHTML= " ( 聽牌 )";
		else if(player == 2) document.getElementById("P2_state").innerHTML= " ( 聽牌 )";
		else if(player == 3) document.getElementById("P3_state").innerHTML= " ( 聽牌 )";
		else if(player == 4) document.getElementById("P4_state").innerHTML= " ( 聽牌 )";
	});
}
function hu(player){
	$(function(){
		if(player == 1) document.getElementById("P1_state").innerHTML= " ( 胡牌 )";
		else if(player == 2) document.getElementById("P2_state").innerHTML= " ( 胡牌 )";
		else if(player == 3) document.getElementById("P3_state").innerHTML= " ( 胡牌 )";
		else if(player == 4) document.getElementById("P4_state").innerHTML= " ( 胡牌 )";
	});
}
function changeMJamount(){
	document.getElementById("MJLeft").innerHTML=document.getElementById("MJLeft").innerHTML-1;
}
function initPlayer(name, player){
	if(player == 1) document.getElementById("P1").innerHTML=name;
	else if(player == 2) document.getElementById("P2").innerHTML=name;
	else if(player == 3) document.getElementById("P3").innerHTML=name;
	else if(player == 4) document.getElementById("P4").innerHTML=name;
}
function reset(){
	document.getElementById("MJLeft").innerHTML=70;
	
	$(function(){
		$('#player1').children('img').remove();
		$('#player2').children('img').remove();
		$('#player3').children('img').remove();
		$('#player4').children('img').remove();
	});

	document.getElementById("P1_state").innerHTML="";
	document.getElementById("P2_state").innerHTML="";
	document.getElementById("P3_state").innerHTML="";
	document.getElementById("P4_state").innerHTML="";
}
function setRound(wind, num){
	if(wind == 1)document.getElementById("round").innerHTML = "東 "+num+" 局";
	else if(wind == 2)document.getElementById("round").innerHTML = "南 "+num+" 局";
	else if(wind == 3)document.getElementById("round").innerHTML = "西 "+num+" 局";
	else if(wind == 4)document.getElementById("round").innerHTML = "北 "+num+" 局";
}
