
var popup = {

    icon: {
        yes: 1,
        no: 2,
        ask: 3,
        lock: 4,
        cry: 5,
        laugh: 6,
        warn: 7,
        load: 16
    },

    msg: function (msg, icon = "none", time = 1500) {
        if (icon == "none") {
            return layer.msg(msg, { time: time })
        } else {
            return layer.msg(msg, { icon: this.icon[icon], time: time })
        }
    },

    load: function (msg, time = 10000) {
        return layer.msg(msg, { icon: this.icon.load, shade: 0.3, time: time })
    },

    alert: function (msg, icon = "none") {
        if (icon == "none") {
            return layer.alert(msg)
        } else {
            return layer.alert(msg, { icon: this.icon[icon] })
        }
    },

    close: function (index = "") {
        if (index == "") {
            layer.closeAll()
        } else {
            layer.close(index);
        }
    },

    html: function (id, width, height, title) {
        layer.open({
            type: 1,
            title: title,
            skin: 'layui-layer-rim',
            area: [width + 'px', height + 'px'],
            content: $('#' + id)
        });
    }

}
