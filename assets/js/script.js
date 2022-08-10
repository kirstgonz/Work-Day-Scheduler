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

function checkTime() { 
    for (let currentHourInt = 9; currentHourInt < 18; currentHourInt++){
        let currentHour = moment().hour(currentHourInt);
        let nextHour = moment().hour(currentHourInt + 1);
        let textAreaId = '#' + currentHourInt + 'a';

        if (moment().isBetween(currentHour, nextHour)){
            $( textAreaId ).addClass('present');
        } else if (moment().isAfter(nextHour)) {
            $( textAreaId ).addClass('past');
        } else {
            $( textAreaId ).addClass('future');
        }
    }
};

$( '.save-button').click((function(event){
    let textAreaId = (event.target.id + 'a');
    let textAreaValue = $( '#'+ textAreaId).val();

    localStorage.setItem(textAreaId, textAreaValue);
}));

$( document ).ready(function(event){
    for (let hourBlock = 9; hourBlock < 18; hourBlock++){
        let textAreaId = hourBlock + 'a';
        $( '#' + textAreaId).val(localStorage.getItem(textAreaId)); 
    }
});