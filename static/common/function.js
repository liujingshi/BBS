
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
