
$(function() {
	//roomInput(rooms);//cannot stand here
	INPUT_EXAMPLE();//example of adding things
	

});
function send(roomNumber){//send to server
	alert(roomNumber);
}
function roomInput(arr){//i:room number arr[i][0]~arr[i][3] player names


	//$('.jcarousel ul').append('');//a new room
	var str="";
	str="<li ><div class=\"room_r\" id=\"room_0\" onclick=\"send(0)\"></div><div class=\"hp\"></div></li>";
	for(var i=0;i<arr.length;i++){

		str+='<li ><div class="room_r"'+'" id="room_'+String(i+1)+'" onclick="send('+(i+1)+')">';
		for(var j=0;j<arr[i].length;j++){

			str+='<span class="playerName">'+arr[i][j]+'</span><br/>';
		}

		str+='</div>';
		str+='<div class="hp" >';
		var isFull="hpLine";
		if(arr[i].length==4)isFull="hpFull";
		for(var j=0;j<arr[i].length;j++){//hp
			str+='<span class="'+isFull+'"></span>';
		}
		str+='</div>';
		str+='</li>';
		
	}
	$('.jcarousel ul').html(str);
	var jcarousel = $('.jcarousel').jcarousel();
        jcarousel.jcarousel('reload');
	//$('.jcarousel').append('<ul>');//end


	
}

function INPUT_EXAMPLE(){
	//generate rank (name rating)
	var items = [['orz',101],['(´⊙ω⊙`)', 99],['(☉д⊙)',2048], ['(°ཀ°)', 125], ['(°ཀ°)', 125], ['(°ཀ°)', 125], ['(°ཀ°)', 125], ['(°ཀ°)', 125]];
	rankInputByArray(items);
	//room
	var OAOrooms = [['OAOsaki', '(°ཀ°)(°ཀ°)(°ཀ°)', 'C', 'D'], ['A', 'E', 'C'], ['C', 'D'], ['A', 'E', 'C'], ['C', 'D'], ['A', 'E', 'C'], ['C', 'D'], ['A', 'E', 'C'], ['C', 'D'], ['CAAA', 'D']];
	roomInput(OAOrooms);//use this to change rooms
	

}

function rankInput(rank, name, rating){
	$('.box').append('<tr ><td>'+rank+'</td><td>'+name+'</td><td>'+rating+'</td></tr>');
	
}
function sortByRating(a, b){
	return b[1]-a[1];
}
function rankInputByArray(arr){//arr: 2-dim array with a[i][0]:name, a[i][1]:rating

	arr.sort(sortByRating);
	for(var i=0;i<arr.length;i++){
		rankInput(i+1, arr[i][0], arr[i][1]);
	}
}
