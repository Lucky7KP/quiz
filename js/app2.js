$(document).ready(function(){

	var score = 0;

	//Quotes & Answers
	var quotes = [
		{
			quoteNumber: 1,
            quote: "Surely you can't be serious.  I am serious.  And don't call me Shirley.",
			choices: ["Dumb and Dumber", "Austin Powers", "Airplane", "Office Space"],
            correct: 2,
			answer: "This line was so popular it became a trademark for Leslie Nielsen, much to his own surpirse.",
		},
		{
			quoteNumber: 2,
            quote: "You keep using that word.  I don't think it means what you think it means.",
			choices:["The Adventures fo Baron Munchausen", "One Flew Over the Cuckoo's Nest", "Wayne's World", "The Princess Bride"],
			questionValue: 1,
            correct: 3,
			answer: "A well know phrase from the Princess Bride, but not as popular as Inigo other famous line: Hello! My name is Inigo Montoya  You killed my father prepare to die.",
		},
		{
			quoteNumber: 3,
            quote: "The greatest trick the devil ever pulled was convincing the world he didn’t exist.  And like that he’s gone.",
			choices:["The Usual Suspects", "The Exorcist", "Omen", "The Shining"],
			questionValue: 2,
            correct: 0,
			answer: "The director/writer Brian Singer had specifically written the part of Verbal Kint for Kevin Spacey.",
		},
		{
			quoteNumber: 4,
            quote: "Whoa! Whoa! Whoa! Okay, you are now firing a gun at your imaginary friend near 400 gallons of nitroglycerine!",
			choices:["The Expendables", "Die Hard", "Fight Club", "Raiders of the Lost Ark"],
			questionValue: 3,
            correct: 2,
			answer: "The director, David Fincher, said there is a Starbucks cup in literally every frame of the movie.",
		},
		{
			quoteNumber: 5,
            quote: "Why you stuck-up, half-witted, scruffy-looking nerf-herder!",
			choices:["The Shootist", "Star Wars", "Serenity", "Office Space"],
            questionValue: 4,
			correct: 1,
			answer: "This line spawned a band called the Nerf Herds who did the Buffy the Vampire TV Show theme.",
		}
	];



	//general variables//
	var userAnswers = 0;
    var userAnswer = "";
    var i = 0;

     //Set the function of begin button
    $('#begin-btn').on("click", function(){
        $("#startQuiz").hide();
        $("#questions").show();
        $("#submit-btn").show();
    });

      //link choices to radio buttons
    $("#questionsContainer").html(quotes[i].quote);
    $("#first").append(quotes[i].choices[0]);
    $("#second").append(quotes[i].choices[1]);
    $("#third").append(quotes[i].choices[2]);
    $("#fourth").append(quotes[i].choices[3]);

    // Submit Answer Button
    $('body').on('click', '#submit-btn', function () {
        var userAnswer = $("input[type='radio']:checked").val();
        
        if (userAnswer === undefined) {
            $("#answerContainer").html("Please select an option.");
         }
         else if (userAnswer == questions[i].correct) {rect);
            $("#result").html("Correct!");
            userAnswers += 1;
            $("#answerContainer").html(quotes[i].answer);
            $("#submit-hide").hide();
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
            $("#result").html("Incorrect.");
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
    $('body').on('click', '#next', function () {
        $('#submit-btn').show();
        $("#next-btn").hide();
        i = i + 1;
        $("#questionContainer").html(quotes[i].quote);
        $("#first").html(quotes[i].choices[0]);
        $("#second").html(quotes[i].choices[1]);
        $("#third").html(quotes[i].choices[2]);
        $("#fourth").html(quotes[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
    });

	// Function for Try Again
    $('body').on('click', '#restart-btn', function () {
        $(this).hide();
        $("#next").hide();
        i = 0;
        userAnswers = 0;
        userAnswer = "";
        $("#questionContainer").html(quotes[i].quote);
        $("#first").html(quotes[i].choices[0]);
        $("#second").html(quotes[i].choices[1]);
        $("#third").html(quotes[i].choices[2]);
        $("#fourth").html(quotes[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
        $('#submit-btn').show();
        $("#answersCorrect").html("");
    });

    $("#next-btn").hide();
    $("#restart-btn").hide();
    $("#answersCorrect").hide();
  

});