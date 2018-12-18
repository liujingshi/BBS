
var search = storage("search")

if (search == null) {
    goto_page("error", "404")
}

var result = searchPost(search)

var s_post = []

for (var i in result) {
    s_post.push(data.post[result[i]])
}

var search_vue = new Vue({
    el: "#vue-element",
    data: {
        post: s_post
    }
})
