
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

$("#user-login").bind("click", function () {
    popup.html("popup-login", 500, 350, "用户登录")
})

$("#user-reg").bind("click", function () {
    popup.html("popup-reg", 500, 450, "用户注册")
})

var now_reg = function() {
    popup.close()
    $("#user-reg").click()
}

var now_login = function() {
    popup.close()
    $("#user-login").click()
}
