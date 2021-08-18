$(document).ready(function () {
    // fullpage
    $("#fullpage").fullpage({
        navigation: true,
        responsiveWidth: 700,
        anchors: ["section1", "section2", "section3", "section4", "footer"],
    });
});

// Panorama
$(document).ready(function () {
    SjPano();
});

var SjPano = function () {
    var panowrap = $(".sj_panorama .pano_wrap"),
        listWrap = panowrap.children(),
        item = listWrap.children(),
        listClone = null,
        itemWidth = item.width(),
        itemLength = item.length,
        listWidth = itemWidth * itemLength,
        winWidth = $(window).width(),
        move = 0,
        contorls = panowrap.parent().find(".controls"),
        timer;

    _init = function () {
        panowrap.css({ width: listWidth * 2 + "px" });
        listWrap.css({ width: listWidth + "px" });
        listWrap.clone().appendTo(panowrap);
        listClone = panowrap.children();

        _render();
        _event();
    };
    _event = function () {
        contorls.find("a.play_on").on("click", function (e) {
            if ($(this).hasClass("active")) {
                _clear();
                $(this).removeClass("active");
            } else {
                $(this).addClass("active");
                _render();
            }
        });
    };
    _render = function () {
        if (listWidth <= move) {
            listClone.css({ transform: "translateX(" + 0 + "px)" });
            move = 0;
        }

        move += 1;
        listClone.css({ transform: "translateX(" + -move + "px)" });
        timer = window.requestAnimationFrame(_render);
    };
    _clear = function () {
        window.cancelAnimationFrame(timer);
    };
    window.requestAnimFrame = function (callback) {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000);
            }
        );
    };

    _init();

    // intro
    $(window).on("load", function () {
        $(".intro-box").addClass("on");
        setTimeout(function () {
            $(".intro-box").fadeOut(100);
            $("#wrap").fadeIn(500);
            $("#fp-nav").fadeIn(500); // fullpage nav
        }, 1500);
        // setTimeout(function () {
        //     $("#wrap").fadeIn(200);
        // }, 2000);
    });
};
