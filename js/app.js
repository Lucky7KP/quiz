$(document).ready(function(){

	//Quotes & Answers
	var quotes = [
		{
			number: 1,
            quote: "Surely you can't be serious.  I am serious.  And don't call me Shirley."
			choices: ["Dumb and Dumber", "Austin Powers", "Airplane", "Office Space"],
            correct: 2,
			answerText "This line was so popular it became a trademark for Leslie Nielsen, much to his own surpirse.",
		},
		{
			number: 2,
            quote: "You keep using that word.  I don't think it means what you think it means."
			choices: ["The Adventures fo Baron Munchausen", "One Flew Over the Cuckoo's Nest", "Wayne's World", "The Princess Bride"],
			questionValue: 1,
            correct: 3,
			answerText: "A well know phrase from the Princess Bride, but not as popular as Inigo other famous line: Hello! My name is Inigo Montoya  You killed my father prepare to die.",
		},
		{
			number: 3,
            quote: "The greatest trick the devil ever pulled was convincing the world he didn’t exist.  And like that he’s gone."
			choices: ["The Usual Suspects", "The Exorcist", "Omen", "The Shining"],
			questionValue: 2,
            correct: 0,
			answerText: "The director/writer Brian Singer had specifically written the part of Verbal Kint for Kevin Spacey.",
		},
		{
			number: 4,
            quote: "Whoa! Whoa! Whoa! Okay, you are now firing a gun at your imaginary friend near 400 gallons of nitroglycerine!"
			choices: ["The Expendables", "Die Hard", "Fight Club", "Raiders of the Lost Ark"],
			questionValue: 3,
            correct: 2,
			answerText: "The director, David Fincher, said there is a Starbucks cup in literally every frame of the movie.",
		},
		{
			number: 5,
            quote: "Why you stuck-up, half-witted, scruffy-looking nerf-herder!"
			choices: ["The Shootist", "Star Wars", "Serenity", "Office Space"],
            questionValue: 4,
			correct: 1,
			answerText: "This line spawned a band called the Nerf Herds who did the Buffy the Vampire TV Show theme.",
		}
	];

    $('#begin-btn').click(function(){
        $('#startQuiz').hide();
    });


});