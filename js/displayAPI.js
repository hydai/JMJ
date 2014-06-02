$(function() {
	EXAMPLE();
});
function EXAMPLE(){

	var player=[['orz', '東', 1, 111], ['OAO', 'N', 0, 1122111], ['[][][][][][]]]]]', 'S', 0, 4441], ['<<<<<<---', 'W', 0, 211]];
	//NESW or chinese
	updateScoreboard(player);
	var state=['東1局', '一本場'];
	updateCount(state);

}
function updateCount(state){//state[0]="東？局"; state[1]="？本場"; 不知道該填什麼orz
	var str=state[0]+"<br/>"+state[1];
	$("#count").html(str);
}
function updateScoreboard(player){
/* explanation */
/*
for i = 0~3 
player[i][0]=player name;
player[i][1]=direction(NESW);
player[i][2]=dealer?1:0;
player[i][3]=score;
*/
	player.sort(function (a, b){return b[3]-a[3];});
	for(var i=0;i<player.length;i++){
		var style="";
		if(player[i][2])style="style=\"border:4px solid #5d64e2;\"";
		var str="第"+String(i+1)+"位<br/>"+"<span class=\"direction\" "+style+">"+player[i][1]+"</span>"+"<span class=\"playerName\">"+player[i][0]+"</span><br/>"+player[i][3]+" 點";
		$("#player"+String(i+1)).html(str);

	}
}
