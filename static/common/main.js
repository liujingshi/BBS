
$(window).bind("scroll", function() {
    if ($(window).scrollTop() > 60) {
        $("nav").addClass("nav")
    } else {
        $("nav").removeClass("nav")
    }
})

$(".search").submit(function () {
    popup.msg("搜索")
    return false
})
