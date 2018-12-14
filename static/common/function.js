
(function ($) {
    $.fn.exist = function () {
        if ($(this).length >= 1) {
            return true
        }
        return false
    };
})(jQuery)
