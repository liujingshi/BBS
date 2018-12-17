
var id = param("id")

if (id != null) {
    var post_id = findById("post", id)
    if (post_id >= 0) {
        var res = findByAny("re", "up_id", id)
        var re_this = []
        for (var i in res) {
            re_this.push(re[res[i]])
        }
        var post_vue = new Vue({
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
