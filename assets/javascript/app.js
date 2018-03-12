// define variables
var timer = 60;

var totalAnswered = 0;
var totalUnanswered = 0;
var totalCorrect = 0;
var totalIncorrect = 0;


$(document).ready(function () {
    //hide main game & results page at the start of the game
    $('.main-game').hide();
    $('.results-page').hide();
    // once start button is clicked, only show the game page
    $('#startBtn').on('click', function () {
        $('.start-page').hide();
        $('.results-page').hide();
        $('.main-game').show();

        function startTimer() {
            setInterval(countdown, 1000);
        }
        startTimer();
    });


    function countdown() {
        timer--;

        $('#time-left').html(timer + " Seconds");


        $('#submitBtn').on('click', function () {
            
            $('.main-game').hide();
            // $('.results-page').show();
            gameOver();
            
        });

        if (timer == 0) {
            
            $('.main-game').hide();
           
            gameOver();

        }
    


    function gameOver() {}

    $('.results-page').show();

        // get radio button value
        // var selValue = $('input[name=rbnNumber]:checked').val(); 
        var Q1 = $('input:radio[name="optradio1"]:checked').val();
        var Q2 = $('input:radio[name="optradio2"]:checked').val();
        var Q3 = $('input:radio[name="optradio3"]:checked').val();
        var Q4 = $('input:radio[name="optradio4"]:checked').val();
        var Q5 = $('input:radio[name="optradio5"]:checked').val();
        var Q6 = $('input:radio[name="optradio6"]:checked').val();
        var Q7 = $('input:radio[name="optradio7"]:checked').val();
        var Q8 = $('input:radio[name="optradio8"]:checked').val();
        var Q9 = $('input:radio[name="optradio9"]:checked').val();
        var Q10 = $('input:radio[name="optradio10"]:checked').val();


        if (Q1 == undefined) {
            totaUnanswered++;
        }
        else if (Q1 == "Winterfell") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        if (Q2 == undefined) {
            totaUnanswered++;
        }
        else if (Q2 == "Khal Drogo") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        if (Q3 == undefined) {
            totaUnanswered++;
        }
        else if (Q3 == "Freys") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        if (Q4 == undefined) {
            totaUnanswered++;
        }
        else if (Q4 == "Olenna Tyrell") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        if (Q5 == undefined) {
            totaUnanswered++;
        }
        else if (Q5 == "Ghost") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        if (Q6 == undefined) {
            totaUnanswered++;
        }
        else if (Q6 == "Grey Worm") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        if (Q7 == undefined) {
            totaUnanswered++;
        }
        else if (Q7 == "The Children of the Forest") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        if (Q8 == undefined) {
            totaUnanswered++;
        }
        else if (Q8 == "Rhaegar Targaryen") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        if (Q9 == undefined) {
            totaUnanswered++;
        }
        else if (Q9 == "Cersei Lannister") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        if (Q10 == undefined) {
            totaUnanswered++;
        }
        else if (Q10 == "Arya Stark") {
            totalCorrect++;
            totalAnswered++;
        }
        else {
            totalIncorrect++;
            totalAnswered++;
        }

        $('#correct-answers').html(totalCorrect);
        $('#incorrect-answers').html(totalIncorrect);
        $('#answered').html(totalAnswered);
        $('#unanswered').html(totalUnanswered);


    }
    
});
