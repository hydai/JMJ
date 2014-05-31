$(function() {
    $("#LOGIN").show();
    $("#REGISTER").hide();
    $(".BACKLOGIN").click(function() {
        console.log("BACK");
        $("#LOGIN").show();
        $("#REGISTER").hide();
        $("#UNITY").hide();
    });
    $(".GOREGISTER").click(function() {
        console.log("GO");
        $("#LOGIN").hide();
        $("#REGISTER").show();
        $("#UNITY").hide();
    });

});
