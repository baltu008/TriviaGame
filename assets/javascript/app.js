$(document).ready(function () {

var questionArray = [
    "What year did the first Star Wars movie premiere?",
    "Which company did George Lucas sell the rights of Star Wars to in 2012?",
    "What were Luke's aunt and uncle's job on Tatooine?",
    "How many languages is C-3P0 fluent in?",
    "Which character is partially named after George Lucas's son?",
    "Which bounty hunter in The Empire Strikes Back wears an old costume from a Doctor Who episode?"
]

var optionArray = [
    ["1975", "1982", "1977", "1978"],
    ["Pixar", "Disney", "Time Warner", "21st Century Fox"],
    ["Rebel Force Fighters", "Moisture Farmers", "Ion Miners", "Slave Traders"],
    ["20", "10 thousand", "56", "6 million"],
    ["Dexter Jettster", "Hans Solo", "Sheev Palpatine", "Lando Carlrissian"],
    ["Dengar", "Zuckuss", "Bossk", "4-LOM"]
]

var correctAnswers = [
    "1977",
    "Disney",
    "Moisture Farmers",
    "6 million",
    "Dexter Jettster",
    "Bossk"
]

var questionCounter;
var selectedAnswer;

    $("#startBtn").on("click", function () {
        (function () {
            var counter = 10;
            setInterval(function () {
                counter--;
                if (counter >= 0) {
                    $('#time').html(counter + ' Seconds!');
                }
                if (counter === 0) {
                    $('#time').html('Sorry, Time is Up!');
                    clearInterval(counter);
                }
            }, 1000);
        })();
        
    });
});
