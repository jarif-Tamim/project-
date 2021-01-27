$(document).ready(function(){
    $(".hide").click(function(){
        $("h1").hide("slow");
    });
    $(".show").click(function(){
        alert("please go ahead");
    });
    $(".toggle").click(function(){
        $("h1").toggle("slow");
    });

    $(".fadein").click(function(){
        $(".box-1").fadeIn("slow");
        $(".box-2").fadeIn(2000);
        $(".box-3").fadeIn(3000);
    });

    $(".fadeout").click(function(){
        $(".box-1").fadeOut("slow");
        $(".box-2").fadeOut(2000);
        $(".box-3").fadeOut(3000);
    });

    $(".fade-toggle").click(function(){
        $(".box-1").fadeToggle("slow");
        $(".box-2").fadeToggle(2000);
        $(".box-3").fadeToggle(3000);
    });









});