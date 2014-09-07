(function (window, $, Vue) {
    'use strict'

    window.app = new Vue({
        el: '.items',
        data: {
            items: [{
                col: "col-xs-6",
                img: "http://stat.ameba.jp/user_images/20131206/22/okayu1206/bf/96/j/o0480057612772498518.jpg",
                done: false,
            },
            {
                col: "col-xs-6",
                img: "http://stat.ameba.jp/user_images/20131206/22/okayu1206/bf/96/j/o0480057612772498518.jpg",
                done: false,
            }],
        },
        ready: function () {
        },
        methods: {
            toggleItem: function (item) {
                item.done = !item.done;

                // toggle
                if (item.done) {
                    item.col = "col-xs-12";
                    console.log(item);
                } else {
                    item.col = "col-xs-6";
                }
            },
        },
    });

})(window, jQuery, Vue);
