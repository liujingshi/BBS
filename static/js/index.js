
var kind = ['娱乐明星','爱综艺','追剧狂','看电影','体育','小说','生活家','闲·趣','高校','地区','人文自然','萌宠','游戏','音乐','追星族','教育','金融','企业','历史']

var kind_vue = new Vue({
    el: "#vue-kind",
    data: {
        kind: kind
    }
})

var slider = [
    { src: "./static/images/1.png", title: "梅菜扣肉" },
    { src: "./static/images/2.png", title: "宫保鸡丁" },
    { src: "./static/images/3.png", title: "西红柿炒鸡蛋" },
    { src: "./static/images/4.png", title: "剁椒鱼头" },
    { src: "./static/images/5.png", title: "皮蛋豆腐" },
    { src: "./static/images/6.png", title: "酸辣土豆丝" },
    { src: "./static/images/7.png", title: "四喜丸子" },
    { src: "./static/images/8.png", title: "糖醋排骨" },
    { src: "./static/images/9.png", title: "麻婆豆腐" }
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
