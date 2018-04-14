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

    var questionCounter = 0;
    var selectedAnswer;
    var timeOutput;
    var wins = 0;
    var losses = 0;

    var nextQuestion = function (i) { //i is index of current question
        if (i < 0 || i > 5) return endGame();
        var counter = 10;
        timeOutput = setInterval(function () {
            counter--;
            if (counter >= 0) {
                $('#time').html(counter + ' Seconds!');
            }
            if (counter === 0) {
                $('#time').html('Sorry, Time is Up!');
                losses++;
                questionCounter++;
                $('#losses').text(losses);
                clearInterval(timeOutput);
                $('#startBtn').on('click', function () {
                    nextQuestion(i + 1);
                })
            }
        }, 1000);
        $('#startBtn').off("click");
        $('#question').html(questionArray[i]);
        for (j = 0; j < 4; j++) {
            $('#option' + (j + 1)).html(optionArray[i][j]);
            $('#option' + (j + 1)).attr("data-question", i);
        }
        $('.option').on('click', function () {
            var optionText = $(this).text();
            //This needs to be an integer
            var i = parseInt($(this).attr("data-question"));
            varifyAnswer(i, optionText);
        })
    };

    $('#startBtn').on('click', function () {
        nextQuestion(0);
    });

    var varifyAnswer = function (i, selectedAnswer) {
        $('.option').off('click'); // <---
        console.log(selectedAnswer);
        console.log(i);
        if (selectedAnswer === correctAnswers[i]) {
            wins++;
            $('#wins').text(wins);
            questionCounter++;

            clearInterval(timeOutput);
            $('#time').html("Correct!");

            $('#startBtn').on('click', function () {
                nextQuestion(i + 1);
            })
        }
        else {
            clearInterval(timeOutput);
            $('#time').html("Wrong Answer!");
            losses++;
            $('#losses').text(losses);
            questionCounter++;

            $('#startBtn').on('click', function () {
                nextQuestion(i + 1);
            })
        }

    }
    function endGame() {
        alert("Game Over!");
        wins = 0;
        losses = 0;
        questionArray = 0;
    }
});
