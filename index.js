var tablinks=$(".tab-links");
var tabcontents=$(".tab-contents");

function opentab(tabname) {
    tablinks.removeClass("active-link");
    tabcontents.removeClass("active-tab");
    if(tabname=='Skills') {
        tablinks[0].classList.add("active-link");
        tabcontents[0].classList.add("active-tab");
    }
    else {
        tablinks[1].classList.add("active-link");
        tabcontents[1].classList.add("active-tab");
    }
}

$(".tab-links").on("click", function(){
    var txt=$(this).text();
    opentab(txt);
})

$(".resume-download").hover(function() {
    $(this).addClass("hovering");
}, function() {
    $(this).removeClass("hovering");
})