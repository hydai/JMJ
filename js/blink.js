
var unityObjectUrl = "http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject2.js";
if (document.location.protocol == 'https:')
    unityObjectUrl = unityObjectUrl.replace("http://", "https://ssl-");
document.write('<script type="text\/javascript" src="' + unityObjectUrl + '"><\/script>');
</script>
<script type="text/javascript">
var config = {
    width: 1050, 
    height: 600,
    params: { enableDebugging:"0" }

};
var u = new UnityObject2(config);

jQuery(function() {
    function callbackLog(m) {
        console.log("Callback: "+m);
    }

    var $missingScreen = jQuery("#unityPlayer").find(".missing");
    var $brokenScreen = jQuery("#unityPlayer").find(".broken");
    $missingScreen.hide();
    $brokenScreen.hide();

    u.observeProgress(function (progress) {
        switch(progress.pluginStatus) {
            case "broken":
                $brokenScreen.find("a").click(function (e) {
                e.stopPropagation();
                e.preventDefault();
                u.installPlugin();
                return false;
            });
            $brokenScreen.show();
            break;
            case "missing":
                $missingScreen.find("a").click(function (e) {
                e.stopPropagation();
                e.preventDefault();
                u.installPlugin();
                return false;
            });
            $missingScreen.show();
            break;
            case "installed":
                $missingScreen.remove();
            break;
            case "first":
                break;
        }
    });
    u.initPlugin(jQuery("#unityPlayer")[0], "unity/web_display.unity3d");

    $("#intro").click(function(){
        u.getUnity().SendMessage("intropic", "GUIappear", "");
        //hu(2);
        //IDAction(3, 4, 5, 4, 3);
    });
    /* For nodejs and socket io */
    var socket = io.connect('');  
    var nickname = '';  
    socket.on('gameStart', function(m) {  
        console.log(m);
        $(".LOGOUT").click();
    });  
    socket.on('startGame', function(arr) {
        console.log(arr);
        setTimeout( function() {
            console.log("Done.");
        }, 15000);
        setTimeout( function() {
            var arr_str = JSON.stringify(arr.hand);
            arr_str = arr_str.substr(1);
            arr_str = arr_str.substring(0, arr_str.length-1);
            console.log(arr_str);
            u.getUnity().SendMessage("Main Camera", "startGame", arr_str);
        }, 15000);
    });
    socket.on('msg', function(m) {  
        console.log('got msg',m);  
    });  
});
