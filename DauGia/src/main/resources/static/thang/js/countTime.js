// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 19:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    for (let i = 0; i <= 100; i++) {
        document.getElementsByClassName('time')[i].innerHTML = hours + ":"
            + minutes + ":" + seconds + "";
    }


    // document.getElementById("demo").innerHTML = hours + ":"
    //     + minutes + ":" + seconds + "";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        for (let i = 0; i <= 100; i++) {
            document.getElementsByClassName('time')[i].innerHTML = "EXPIRED";
        }
    }
}, 1000);