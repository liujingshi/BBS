
var id = param("id")

if (id != null) {
    var notice_id = findById("notice", id)
    if (notice_id >= 0) {
        var notice_vue = new Vue({
            el: "#vue-element",
            data: {
                notice: data.notice[notice_id]
            }
        })
    } else {
        goto_page("error", "404")
    }
} else {
    goto_page("error", "404")
}


