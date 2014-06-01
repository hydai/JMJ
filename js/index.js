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
        $("#LOGIN").show();
        $("#REGISTER").hide();
        $("#UNITY").hide();
        $("#ROOM").hide();
    });
    $(".GOREGISTER").click(function() {
        console.log("GO");
        $("#LOGIN").hide();
        $("#REGISTER").show();
        $("#UNITY").hide();
        $("#ROOM").hide();
    });
    $(".DOLOGIN").click(function() {
        console.log("Log");
        $("#LOGIN").hide();
        $("#REGISTER").hide();
        $("#UNITY").hide();
        $("#ROOM").show();
    });
});
