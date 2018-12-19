
var kind = ['娱乐明星','爱综艺','追剧狂','看电影','体育','小说','生活家','闲·趣','高校','地区','人文自然','萌宠','游戏','音乐','追星族','教育','金融','企业','历史']

var kind_vue = new Vue({
    el: "#vue-kind",
    data: {
        kind: kind
    }
})

var slider = [
    { src: "./static/images/1.jpg", title: "圣诞" },
    { src: "./static/images/2.jpg", title: "雪天" },
    { src: "./static/images/3.jpg", title: "城堡" },
    { src: "./static/images/4.jpg", title: "元旦" }
]

var slider_vue = new Vue({
    el: "#vue-slider",
    data: {
        slider: slider
    }
})

$('.slider').bxSlider({
    slideWidth: $('.slider').parent().width(),
    auto: true,
    captions: true,
    adaptiveHeight: true,
    slideMargin: 10
})

var board_all = data.board

for (var i in board_all) {
    board_all[i]["post"] = []
}

for (var i in data.post) {
    var j = findById("board", data.post[i].up_id)
    if (j >= 0) {
        board_all[j].post.push(data.post[i])
    }
}

var notice_board_vue = new Vue({
    el: "#vue-notice-board",
    data: {
        notice: data.notice,
        board: board_all
    }
})
