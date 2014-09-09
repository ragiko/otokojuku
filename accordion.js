(function () {
    $(".item").on("click", function () {
        var $accordion = $(".accordion-template");

        $accordion.removeClass("accordion-template");
        $(".accordion").remove();

        if ($(this).attr("id").slice(-1) % 2 == 0) {
            // $(this).parent().after("<div class='accodion right-item balloon-top'>Hello</div>");
            $accordion.addClass("right-item")
            $(this).parent().after($accordion);
        } else {
            // $(this).parent().after("<div class='accodion left-item balloon-top'>Hello</div>");
        }
    });
})();
