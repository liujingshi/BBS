
var id = param("id")

if (id != null) {
    var post_id = findById("post", id)
    if (post_id >= 0) {
        
    } else {
        goto_page("error", "404")
    }
} else {
    goto_page("error", "404")
}
