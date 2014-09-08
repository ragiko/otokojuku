(function () {
    $(".item").on("click", function () {
        $(".accodion").remove();
        if ($(this).attr("id").slice(-1) % 2 == 0) {
            $(this).parent().after("<div class='accodion right-item balloon-top'>Hello</div>");
        } else {
            $(this).parent().after("<div class='accodion left-item balloon-top'>Hello</div>");
        }
    });
})();
