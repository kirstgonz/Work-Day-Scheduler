let nowDay = moment().format('dddd, MMMM Do YYYY');
let nowTime = moment().format('LTS');
let saveButtons = $( '.save-button');

// adds current day, current time, and runs checkTime() on webpage load
(() => {
    $( '#current-day' ).append(nowDay);
    $( '#current-time' ).append(nowTime);

    checkTime();
})();

//updates current time every second and runs checkTime()
setInterval(function() {
    nowDay = moment().format('dddd, MMMM Do YYYY');
    nowTime = moment().format('LTS');
    $( '#current-time' ).text(nowTime);   

    checkTime();
}, 1000);

// checks if the time is in the past, present, or future
function checkTime() { 
    //for loop to check current hour by using the textarea id value that also is what time the timeblock should be
    for (let currentHourInt = 9; currentHourInt < 18; currentHourInt++){
        //changes the currentHour integer into a string
        let currentHour = moment().hour(currentHourInt);
        let nextHour = moment().hour(currentHourInt + 1);
        let textAreaId = '#' + currentHourInt + 'a';

        //if statement that color codes by adding different classes the text area depending on what time it is
        if (moment().isBetween(currentHour, nextHour)){
            $( textAreaId ).addClass('present');
        } else if (moment().isAfter(nextHour)) {
            $( textAreaId ).addClass('past');
        } else {
            $( textAreaId ).addClass('future');
        }
    }
};

//adds an on click event to the save button
$( '.save-button').click((function(event){
    let textAreaId = (event.target.id + 'a');
    let textAreaValue = $( '#'+ textAreaId).val();

    //saves a user's input (textAreaValue) into local storage
    localStorage.setItem(textAreaId, textAreaValue);
}));

//populates the page with items in localStorage on load/opening
$( document ).ready(function(event){
    //uses a for loop to check if there is anything saved in any of the timeblocks
    for (let hourBlock = 9; hourBlock < 18; hourBlock++){
        let textAreaId = hourBlock + 'a';
        $( '#' + textAreaId).val(localStorage.getItem(textAreaId)); 
    }
});