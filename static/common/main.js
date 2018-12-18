
$(window).bind("scroll", function () {
    if ($(window).scrollTop() > 60) {
        $("nav").addClass("nav")
    } else {
        $("nav").removeClass("nav")
    }
})

$(".search").submit(function () {
    var search = $("input[name='search']").eq(0).val()
    storage("search", search)
    goto_page("search", search)
    return false
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

$("#login").submit(function () {
    var username = $.trim(login.username.value)
    var password = $.trim(login.password.value)
    if (username == "" || password == "") {
        popup.msg("用户名或密码不能为空", "no")
    } else {
        if (userLogin(username, password)) {
            setNavUser()
        }
    }
    return false
})

$("#user-exit").bind("click", function () {
    userExit()
    setNavUser()
    popup.msg("退出成功", "yes")
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
    if (userIsLogin()) {
        popup.html("popup-report", 600, 450, "发布帖子")
    } else {
        popup.msg("请先登录", "cry")
    }
}

$("#report").submit(function () {
    var up_id = $("#vue-board-select").val()
    var cont = $("#recont-report").val()
    var new_id = report_add(up_id, cont)
    popup.alert("发帖成功", "提示", "laugh", function () {
        goto_page("details", new_id)
    })
    return false
})


var data = {
    user: user,
    board: board,
    notice: notice,
    post: post,
    re: re,
    user_login_state: "0",
    user_info: {}
}

for (var i in data.post) {
    var user_i = findById("user", data.post[i].user_id)
    data.post[i]["user"] = data.user[user_i]
}

for (var i in data.re) {
    var user_i = findById("user", data.re[i].user_id)
    data.re[i]["user"] = data.user[user_i]
}

for (var key in data) {
    if (storage(key) == null) {
        storage(key, data[key])
    } else {
        data[key] = storage(key)
    }
}

setNavUser()

var board_select_vue = new Vue({
    el: "#vue-board-select",
    data: {
        board: data.board
    }
})
