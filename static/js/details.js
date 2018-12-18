
var id = param("id")

var post_vue = null;

var getThisRe = function () {
    var res = findByAny("re", "up_id", id)
    var re_this = []
    for (var i in res) {
        re_this.push(data.re[res[i]])
    }
    return re_this
}
if (id != null) {
    var post_id = findById("post", id)
    if (post_id >= 0) {
        var re_this = getThisRe()
        post_vue = new Vue({
            el: "#vue-element",
            data: {
                post: data.post[post_id],
                re: re_this
            }
        })
    } else {
        goto_page("error", "404")
    }
} else {
    goto_page("error", "404")
}

$("#repost").submit(function () {
    var cont = $("#recont").val()
    if (userIsLogin()) {
        repost(id, cont)
        var re_this = getThisRe()
        post_vue.re = re_this
        popup.msg("回复成功", "laugh")
    } else {
        popup.msg("请先登录", "cry")
    }
    return false
})
