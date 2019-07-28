


var top_container = $("#top-container");
console.log(top_container.outerHeight(true));  
$(window).on("scroll",function() {
    if($(window).scrollTop() > top_container.outerHeight(true)-10) {
        $("#stickytop").addClass("bg");
        console.log("1");
    }else {
        $("#stickytop").removeClass("bg");
        console.log("2");
    }
});
