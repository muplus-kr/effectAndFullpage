$(document).ready(function () {
    $("#fullpage").fullpage({
        navigation: true,
        responsiveWidth: 700,
        anchors: ["section1", "section2", "section3", "section4", "section5", "footer"],
        onLeave: function (origin, destination, direction) {
            // console.log("Leaving section" + origin.index);
        },
    });
});
