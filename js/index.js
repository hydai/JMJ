$(function() {
    /* For bumpy title JMJ */
	$(".JMJ").bumpyText();
	/* Switch different parts */
    $("#LOGIN").show();
    $("#REGISTER").hide();
    $("#UNITY").hide();
    $("#ROOM").hide();
    $(".BACKLOGIN").click(function() {
        console.log("BACK");
        $('body').css({backgroundImage : 'url(css/img/login_bg.png)'});
        $("#LOGIN").show();
        $("#REGISTER").hide();
        $("#UNITY").hide();
        $("#ROOM").hide();
    });
    $(".GOREGISTER").click(function() {
        console.log("GO");
        $('body').css({backgroundImage : 'url(css/img/login_bg.png)'});
        $("#LOGIN").hide();
        $("#REGISTER").show();
        $("#UNITY").hide();
        $("#ROOM").hide();
    });
    $(".DOLOGIN").click(function() {
        console.log("Log");
        $('body').css({backgroundImage : 'url(css/img/main_all.png)'});
        $("#LOGIN").hide();
        $("#REGISTER").hide();
        $("#UNITY").hide();
        $("#ROOM").show();
    });
});
