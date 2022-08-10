let nowDay = moment().format('dddd, MMMM Do YYYY');
let nowTime = moment().format('LTS');
let saveButtons = $( '.save-button');

// adds current day and time on load to the webpage
(() => {
    $( '#current-day' ).append(nowDay);
    $( '#current-time' ).append(nowTime);

    checkTime();
})();

//updates current time every second
setInterval(function() {
    nowDay = moment().format('dddd, MMMM Do YYYY');
    nowTime = moment().format('LTS');
    $( '#current-time' ).text(nowTime);   

    checkTime();
}, 1000);

