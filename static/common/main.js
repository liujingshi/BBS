
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

$("#reg").submit(function () {
    var username = $.trim(reg.username.value)
    var password1 = $.trim(reg.password1.value)
    var password2 = $.trim(reg.password2.value)
    if (username == "" || password1 == "") {
        popup.msg("用户名或密码不能为空", "no")
    } else if (password1 != password2) {
        popup.msg("两次密码不一致", "no")
    } else {
        if (userReg(username, password1)) {
            setNavUser()
        }
    }
    return false
})

var setNavUser = function () {
    if (userIsLogin()) {
        $(".user-not-login").hide()
        $(".user-already-login").show()
        $("#user-info").html(data.user_info.username)
    } else {
        $(".user-not-login").show()
        $(".user-already-login").hide()
    }
}

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
    re: re,
    user_login_state: "0",
    user_info: {}
}

for (var key in data) {
    if (storage(key) == null) {
        storage(key, data[key])
    } else {
        data[key] = storage(key)
    }
}

setNavUser()
