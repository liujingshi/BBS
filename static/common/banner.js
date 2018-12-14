
if ($("#banner").exist()) {
    $banner = $("#banner")
    $img = $banner.find("img")
    $banner.css("height", $banner.width()/3*2 + "px")
    $img.hide()
    var img_i = 1
    var num = $img.length
    $img.eq(0).show();
    setInterval(function () {
        $img.hide()
        $img.eq(img_i).fadeIn(1000)
        img_i++
        if (img_i >= num) {
            img_i = 0
        }
    }, 5000)
}
