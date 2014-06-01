//Randomize a array

function shuffle(o) { //v1.0
	for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

//Given a set of tiles in value, return it's names

function generate_img_name(arr) {
	var result = new Array();
	for (var i = 0; i < arr.length; i++) {
		var ind = Math.floor((arr[i] / 4));
		if (ind < 27 && ind % 9 == 4 && arr[i] % 4 == 3)
			result.push((ind + 1) + "_red.png");
		else
			result.push((ind + 1) + ".png");
	}
	return result;
}

//Give the remaining tiles on the hand and judge if it's ready
var goal, ct, isgoal;

function isReady(hand) {
	ct = new Array(34);
	for (var i = 0; i < 34; i++)
		ct[i] = 0;
	for (var i = 0; i < hand.length; i++)
		ct[Math.floor(hand[i] / 4)]++;
	goal = Math.floor(hand.length / 3);
	var ans = new Array();
	for (var i = 0; i < 34; i++)
		if (ct[i] < 4) {
			isgoal = 0;
			var ctt = ct.slice();
			ctt[i]++;
			mahjong_ready_dfs(0, ctt);
			if (isgoal) {
				ans.push("<img draggable='false' class='display_tile' src='img/mahjong_tiles/" + (i + 1) + ".png'>");
			}
		}
	return ans;
}

function isRon(hand) {
	ct = new Array(34);
	for (var i = 0; i < 34; i++)
		ct[i] = 0;
	for (var i = 0; i < hand.length; i++)
		ct[Math.floor(hand[i] / 4)]++;
	goal = Math.floor(hand.length / 3);
	isgoal = 0;
	var ctt = ct.slice();
	mahjong_ready_dfs(0, ctt);
	if (isgoal) {
		return "Ron";
	}
	return "Not Ron";
}


function mahjong_ready_dfs(layer, ct) {
	if (layer == goal) {
		for (var i = 0; i < 34; i++)
			if (ct[i] == 2)
				isgoal = 1;
		return;
	}
	for (var i = 0; i < 34; i++) {
		if (ct[i] >= 3) {
			ct[i] -= 3;
			mahjong_ready_dfs(layer + 1, ct);
			ct[i] += 3;
		}
		if (i + 2 < 27 && ct[i] && ct[i + 1] && ct[i + 2] && Math.floor(i / 9) == Math.floor((i + 2) / 9)) {
			ct[i]--;
			ct[i + 1]--;
			ct[i + 2]--;
			mahjong_ready_dfs(layer + 1, ct);
			ct[i]++;
			ct[i + 1]++;
			ct[i + 2]++;
		}
	}
}
