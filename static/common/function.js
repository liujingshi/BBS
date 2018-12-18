
(function ($) {
    $.fn.exist = function () {
        if ($(this).length >= 1) {
            return true
        }
        return false
    };
})(jQuery)


var goto_page = function (page, id) {
    document.location.href = page + ".html?id=" + id
}

var isString = function (str) {
    return (typeof str == 'string') && str.constructor == String
}

var storage = function (key = null, value = null) {
    if (key == null && value == null) {
        localStorage.clear()
    } else if (value == null) {
        if (isString(key)) {
            var result = localStorage.getItem(key)
            try {
                result = JSON.parse(result)
            } catch { }
            return result
        } else {
            for (var k in key) {
                storage(k, key[k])
            }
        }
    } else {
        if (value == "") {
            localStorage.removeItem(key)
        } else {
            if (!isString(value)) {
                value = JSON.stringify(value)
            }
            localStorage.setItem(key, value)
        }
    }
}

var param = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

var findById = function (key, id) {
    for (var i in data[key]) {
        if (data[key][i].id == id) {
            return i;
        }
    }
    return -1;
}

var findByAny = function (key, k, v) {
    var result = []
    for (var i in data[key]) {
        if (data[key][i][k] == v) {
            result.push(i)
        }
    }
    return result
}

var setStorage = function () {
    for (var key in data) {
        storage(key, data[key])
    }
}

var getNowDate = function () {
    var now = new Date()
    return now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()
}

var rand = function (start, end) {
    return Math.floor(Math.random() * end) + start
}

var getNewId = function (key) {
    var new_id = rand(10001, 19999)
    if (findById(key, new_id) < 0) {
        return new_id
    }
    return getNewId(key)
}

var userLogin = function (username, password) {
    var user_i = findByAny("user", "username", username)
    if (user_i.length == 0) {
        popup.msg("该用户名不存在 请先注册", "cry")
        return false
    } else {
        if (data.user[user_i[0]].password != $.md5(password)) {
            popup.msg("密码错误", "no")
            return false
        }
    }
    popup.msg("登录成功", "laugh")
    data.user_login_state = "1"
    data.user_info = data.user[user_i[0]]
    setStorage()
    return true
}

var userReg = function (username, password) {
    var user_i = findByAny("user", "username", username)
    if (user_i.length == 0) {
        var new_user = {
            id: getNewId(),
            username: username,
            img: "./static/images/user-head.png",
            date: getNowDate(),
            password: $.md5(password)
        }
        data.user.push(new_user)
        data.user_login_state = "1"
        data.user_info = new_user
        setStorage()
        popup.msg("注册成功", "laugh")
        return true
    } else {
        popup.msg("该用户名已存在", "no")
        return false
    }
}

var userIsLogin = function () {
    if (data.user_login_state == "1") {
        return true
    } else {
        return false
    }
}
