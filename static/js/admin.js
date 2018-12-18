
var user_vue = new Vue({
    el: "#vue-element",
    data: {
        user: storage("user")
    }
})

var reset = function () {
    popup.ask("该操作将会还原初始数据,确定恢复出厂设置?", function () {
        storage()
        popup.alert("恢复出厂设置成功", "提示", "yes", function () {
            document.location.reload()
        })
    })
}
