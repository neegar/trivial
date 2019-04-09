var questions = [
    {
        question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        answers: ["A. William and Elizabeth",
            "B. Joseph and Catherine",
            "C. John and Mary",
            "D. George and Anne"],
        correctAnswer: "C. John and Mary",
        link: "https://media3.giphy.com/media/rI1JuE6vbOCI0/giphy.webp?cid=790b76115cac97f5475a494532a1e7ca"
    },
    {
        question: "When Mt. St. Helens erupted on May 18, 1980, how many people were killed?",
        answers: ["A. 1",
            "B. 57",
            "C. 571",
            "D. 157"],
        correctAnswer: "B. 57",
        link: "https://thumbs.gfycat.com/SereneAllAmphiuma-max-1mb.gif"
    }

]
var number = 5;
var intervalId;
$(".start_button").on("click", function () {
    run();
    tests();
});

function run() {
    number = 50;
    $(".start_button").hide()
    $("#main-part").html("Remaning time: " + number + " seconds")
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#main-part").html("Remaning time: " + number + " seconds")

    if (number === 0) {
        stop();
        timeOut();
    }
}
function stop() {
    clearInterval(intervalId);
}
var ind = 0
// questions
function tests() {
    run()
    $(".answers").empty()
    $(".result-correct").html("")
    $(".questions_part").html(questions[ind].question)
    $(".questions_part").css("padding", "20px 10px")
    $(".questions_part").css("margin-bottom", "50px")

    for (let j = 0; j < 4; j++) {
        let answer_button = $("<button>")
        if (questions[ind].answers[j] == questions[ind].correctAnswer) {
            answer_button.attr("data-value", "correct")
        }
        answer_button.addClass("options")
        answer_button.html(questions[ind].answers[j])
        $(".answers").append(answer_button)

    }

    $(".options").on("click", function () {
        if ($(this).data("value") == "correct") {
            win()
        } else {
            console.log("sehvdir")
            lose()
        }
    })

}
function win() {
    $(".questions_part").html("")
    $(".answers").empty()
    $(".questions_part").html("CORRECT! GIRL, YOU ARE GREAT,  ALSO MY LETTERS")
    stop()

    var b = $("<img class='gif'>").attr("src", questions[ind].link)
    b.css("margin-left", "20em")
    $(".answers").html(b)
    ind++
    setTimeout(tests, 3000)

}

function lose() {
    $(".questions_part").html("")
    $(".answers").empty()
    

    $(".result-correct").html("Correct answer was " + questions[ind].correctAnswer)
    $(".questions_part").html("OOPS, wrong, you should increase your outlook")
    stop()
    var b = $("<img class='gif'>").attr("src", questions[ind].link)
    b.css("margin-left", "20em")
    $(".answers").html(b)

    ind++
    setTimeout(tests, 3000)
}

function timeOut(){
    $(".questions_part").html("")
    $(".answers").empty()
    var a = $(".result-correct").html("Out of time")
    var c = $("<div>")
    c.addClass("heyy_true")
    c.html("Correct answer was " + questions[ind].correctAnswer)
    $(".result-correct").append(c)
    $(".questions_part").append(a)
    

    var b = $("<img class='gif'>").attr("src", questions[ind].link)
    b.css("margin-left", "20em")
    $(".answers").html(b)

    ind++
    setTimeout(tests, 3000)
}