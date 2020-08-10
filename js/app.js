$(document).ready (function () {

    $("#nose").click(function(){
        $("#instruction").html("SQUEEZE THE BROWSER WINDOW");
    })

    $("#redButton").mouseover(function(){
        alert("DO NOT ABUSE JAKE'S IMAGINATION CONTROL");
    })

    var loopSwitch = 0; 
    let sTorso = $(".stretchTorso");

    function loop() {
        if (loopSwitch == 1 ) {
            sTorso.animate({height:'500vw', opacity:'0.4'}, "fast");
            sTorso.animate({width:'40vw', opacity:'0.9'}, "fast");
            sTorso.animate({width:'700vw', opacity:'0.3'}, "fast");
            sTorso.animate({height:'20vw', opacity:'0.9'}, "fast");
            sTorso.animate({width:'70vw', height:'30vw', opacity:'1'}, "fast", function() { loop() });
        } else {
            sTorso.mouseover(function(){
                sTorso.animate({width:'300vw', height:'340vw'}, "slow");})
            }
    }
    

    $("#on").click(function(){
        if ($(window).width() <= 1200 && $(window).width() >= 1024){
            $("body").css('background-image', 'url(assets/knifeRain.gif)');
            $("#panel").html("KEEP SQUEEZING");
        } else {
            if ($(window).width() < 1024 && $(window).width() > 750){
            loopSwitch = 1;
            loop();
            }
        }
    })

    $( window ).resize(function() {
        if ($(window).width() <= 1024 || $(window).width() > 1200) {
            $("body").css('background-image', 'none');
            $("#panel").html("");
        } else if ($(window).width() <= 750) {
            $("body").css('background-image', 'initial');
        } 
    });


    $("#off").click(function(){
        if ($(window).width() <= 1200 && $(window).width() >= 1024){
            $("body").css('background-image', 'none');
            $("#panel").html(" ");
        } else {
            if ($(window).width() < 1024 && $(window).width() > 750){
            loopSwitch = 0;
            loop();
            }
        }
    })

    $("#nonono").click(function(){
        $("#warn").html("PULL ME OUT!");
    })




})

