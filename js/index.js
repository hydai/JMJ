$(function() {
    /* For nodejs and socket io */
    var socket = io.connect('');  
    var nickname = '';  
    socket.on('gameStart', function(m) {  
        console.log(m);
    });  
    socket.on('msg', function(m) {  
        console.log('got msg',m);  
    });  
    /* For bumpy title JMJ */
    $(".JMJ").bumpyText();
    /* For scoreboard toggle */
    $("#show").click(function(){
        $("#count").slideToggle();
        $(".player").slideToggle();
    });
    /* Switch different parts */
    $("#LOGIN").show();
    $("#REGISTER").hide();
    $("#UNITY").hide();
    $("#ROOM").hide();
    $("#MYUNITY").hide();
    $(".BACKLOGIN").click(function() {
        console.log("BACK");
        $('body').css({backgroundImage : 'url(css/img/login_bg.png)'});
        $("#LOGIN").show();
        $("#REGISTER").hide();
        $("#UNITY").hide();
        $("#ROOM").hide();
        $("#MYUNITY").hide();
    });
    $(".GOREGISTER").click(function() {
        console.log("GO");
        $('body').css({backgroundImage : 'url(css/img/login_bg.png)'});
        $("#LOGIN").hide();
        $("#REGISTER").show();
        $("#UNITY").hide();
        $("#ROOM").hide();
        $("#MYUNITY").hide();
    });
    $(".DOLOGIN").click(function() {
        console.log("Log");
        $('body').css({backgroundImage : 'url(css/img/main_all.png)'});
        $("#LOGIN").hide();
        $("#REGISTER").hide();
        $("#UNITY").hide();
        $("#ROOM").show();
        $("#MYUNITY").hide();
    });
    $(".LOGOUT").click(function() {
        console.log("Logout");
        $('body').css({backgroundImage : 'url(css/img/main_all.png)'});
        $("#LOGIN").hide();
        $("#REGISTER").hide();
        $("#UNITY").hide();
        $("#ROOM").hide();
        $("#MYUNITY").show();
    });
});
