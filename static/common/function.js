
(function ($) {
    $.fn.exist = function () {
        if ($(this).length >= 1) {
            return true
        }
        return false
    };
})(jQuery)


var goto_page = function (page) {
    document.location.href = page + ".html"
}
