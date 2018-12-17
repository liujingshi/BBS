
$(window).bind("scroll", function () {
    if ($(window).scrollTop() > 60) {
        $("nav").addClass("nav")
    } else {
        $("nav").removeClass("nav")
    }
})


$("#user-login").bind("click", function () {
    popup.html("popup-login", 500, 350, "用户登录")
})

$("#user-reg").bind("click", function () {
    popup.html("popup-reg", 500, 450, "用户注册")
})

var now_reg = function () {
    popup.close()
    $("#user-reg").click()
}

var now_login = function () {
    popup.close()
    $("#user-login").click()
}

var report = function () {
    popup.html("popup-report", 600, 450, "发布帖子")
}

var data = {
    user: user,
    board: board,
    notice: notice,
    post: post,
    re: re
}

for (var key in data) {
    if (storage(key) == null) {
        storage(key, data[key])
    } else {
        data[key] = storage(key)
    }
}

