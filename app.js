$(document).ready(function(){
    $("#html").toggleClass("active");
    $("#output").toggleClass("active");
    $(`#htmlPage`).toggleClass("open");
    $(`#outputPage`).toggleClass("open");
    updateState();
});
$(".toggleBtn").hover(function(){
    $(this).addClass("highlighted");
    $(this).css("cursor","pointer");
},
function(){
    $(this).removeClass("highlighted");
});

$(".toggleBtn").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlighted");
    $(`#${this.id}Page`).toggleClass("open");
    updateState();
});
$("#pageContainer").on("change keyup paste",function(){
    $("iframe").contents().find("html").html(
    `<html>
    <head>
    <style>
    ${$("#cssPage").val()}
    </style>
    </head>
    <body>
    ${$("#htmlPage").val()}
    </body>
    </html>`);

    document.getElementById("outputPage").contentWindow.eval($("#javascriptPage").val());
});
$(".pane").height($(window).height());

function updateState(){
    let count = $(".open").length;
    $(".open").width(($(window).width())/count - 6);
    $("iframe").contents().find("html").html(
        `<html>
        <head>
        <style>
        ${$("#cssPage").val()}
        </style>
        </head>
        <body>
        ${$("#htmlPage").val()}
        </body>
        </html>`);
    
        document.getElementById("outputPage").contentWindow.eval($("#javascriptPage").val());
}

