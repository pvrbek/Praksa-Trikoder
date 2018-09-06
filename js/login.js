$(".closeButton").click(function(){
    $(".loginWrap").addClass("-loginHide");
});

$("#signIn").click(function(){
    $(".loginWrap").removeClass("-loginHide");
});

$(".menuIcon").click(function(){
    $(".navigation-top").toggleClass("-menuClose");
    $(".link").click(function(){
        $(".navigation-top").addClass("-menuClose");
    });
});
$(".headerSearch").click(function(){
    $(".searchContainer").toggleClass("-searchActive -searchInactive");
});

if ($(window).width() <= 814) {
    $(".searchContainer").removeClass("-searchActive");
    $(".searchContainer").addClass("-searchInactive");
}
