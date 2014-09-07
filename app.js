(function (window, $, Vue) {
    'use strict'

    window.app = new Vue({
        el: '.items',
        data: {
        },
        ready: function () {
        },
        methods: {
            toggleItem: function (e) {
                $(e.target).parent()
                    .removeClass("col-xs-6")
                    .addClass("col-xs-12");
                

            },
        },
    });

})(window, jQuery, Vue);
