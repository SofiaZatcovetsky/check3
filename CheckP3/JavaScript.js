$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#fold").fadeOut();
            if (x.matches) {
                console.log("hidden");
                $("#roshDesktop").removeClass("d-flex");
                $("#roshDesktop").hide();
            }
            if ($(window).scrollTop() > 1200) {
                $("#n1").addClass("animate1");
                $("#n2").addClass("animate1");
                $("#n3").addClass("animate2");
                $("#n4").addClass("animate2");
                $("#n5").addClass("animate3");
                $("#n6").addClass("animate3");
                $("#n7").addClass("animate4");
                $("#n8").addClass("animate4");
            }
        }
        else {
            $("#fold").fadeIn();
        }
    });



    
});

var x = window.matchMedia("(max-width: 590px)");
//myFunction(x); // Call listener function at run time
//x.addListener(myFunction); // Attach listener function on state changes

function myFunction(x) {
    if (x.matches) { // If media query matches
        console.log("hidden");
        var myobj = document.getElementById("roshDesktop");
            myobj.remove();
    }
}

