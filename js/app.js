$(document).ready(function(){

    var score = 0;

    //Quotes & Answers
    var quotes = [
        {
            quoteNumber: 1,
            quote: "Surely you can't be serious.  I am serious.  And don't call me Shirley.",
            choices: ["Dumb and Dumber", "Austin Powers", "Airplane", "Office Space"],
            correct: 2,
            answer: "Airplane. This line was so popular it became a trademark for Leslie Nielsen, much to his own surpirse.",
        },
        {
            quoteNumber: 2,
            quote: "You keep using that word.  I don't think it means what you think it means.",
            choices:["The Adventures fo Baron Munchausen", "One Flew Over the Cuckoo's Nest", "Wayne's World", "The Princess Bride"],
            questionValue: 1,
            correct: 3,
            answer: "The Princess Bride. A well know phrase from the Princess Bride, but not as popular as Inigo other famous line: Hello! My name is Inigo Montoya  You killed my father prepare to die.",
        },
        {
            quoteNumber: 3,
            quote: "The greatest trick the devil ever pulled was convincing the world he didn’t exist.  And like that he’s gone.",
            choices:["The Usual Suspects", "The Exorcist", "Omen", "The Shining"],
            questionValue: 2,
            correct: 0,
            answer: "The Usual Suspects. The director/writer Brian Singer had specifically written the part of Verbal Kint for Kevin Spacey.",
        },
        {
            quoteNumber: 4,
            quote: "Whoa! Whoa! Whoa! Okay, you are now firing a gun at your imaginary friend near 400 gallons of nitroglycerine!",
            choices:["The Expendables", "Die Hard", "Fight Club", "Raiders of the Lost Ark"],
            questionValue: 3,
            correct: 2,
            answer: "Fight Club. The director, David Fincher, said there is a Starbucks cup in literally every frame of the movie.",
        },
        {
            quoteNumber: 5,
            quote: "Why you stuck-up, half-witted, scruffy-looking nerf-herder!",
            choices:["The Shootist", "Star Wars", "Serenity", "Office Space"],
            questionValue: 4,
            correct: 1,
            answer: "Star Wars. This line spawned a band called the Nerf Herds who did the Buffy the Vampire TV Show theme.",
        }
    ];

    //general variables//
    var userAnswers = 0;
    var userAnswer = "";
    var i = 0;

     //Set the function of begin button
    $('#begin-btn').on("click", function(){
        $("#startQuiz").hide();
        $("#questionsContainer").show();
        $("#submit-btn").show();
        populateQuestion();
    });

    //in order to have the  ability to populate the question and the answers dynamically, you need to have some
    //reusable code. Reusable code goes inside of functions
    //so create a function that does the work of taking information from the array and putting it into html
    
    function populateQuestion(){
         //link choices to radio buttons spans
        $("#question").html(quotes[i].quote);
        $("#firstChoice").text(quotes[i].choices[0]);
        $("#secondChoice").text(quotes[i].choices[1]);
        $("#thirdChoice").text(quotes[i].choices[2]);
        $("#fourthChoice").text(quotes[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
    }
    // Submit Answer Button
    $('body').on('click', '#submit-btn', function () {
        var userAnswer = $("input[type='radio']:checked").val();
        
        if (userAnswer === undefined) {
            $("#answerContainer").html("Please select an option.");
         }
         else if (userAnswer == quotes[i].correct) {
            $("#result").html("Correct! The answer is:");
            userAnswers += 1;
            $("#answerContainer").html(quotes[i].answer);
            $("#submit-btn").hide();
            $("#next-btn").show();
            $("#answersCorrect").show();
            $("#answersCorrect").html("Questions answered correctly: " + userAnswers +" of 5");
                if (i === 4) {
    
                $("#submit-btn").hide();
                $("#restart-btn").show();
                $("#next-btn").hide();
               }
            }
           else {
            $("#result").html("Incorrect. The answer is:");
            $("#answerContainer").html(quotes[i].answer);
            $("#submit-btn").hide();
            $("#next-btn").show();
                if (i === 4) {
                $("#submit-btn").hide();
                $("#restart-btn").show();
                $("#next-btn").hide();
                }
            }

        });

    // set function on next question button
    $('body').on('click', '#next-btn', function () {
        $('#submit-btn').show();
        $("#next-btn").hide();
        i = i + 1;
        //you were re writing the same code over and over
        //reusable code should go in a function to be called whenever needed
        populateQuestion();
    });

    // Function for Try Again
    $('body').on('click', '#restart-btn', function () {
        $(this).hide();
        $("#next-btn").hide();
        i = 0;
        userAnswers = 0;
        userAnswer = "";
        //you were re writing the same code over and over
        //reusable code should go in a function to be called whenever needed
        populateQuestion();
    });

    $("#next-btn").hide();
    $("#restart-btn").hide();
    $("#answersCorrect").hide();
});