var path = require ("path");
var realHumanFriends = require ("../data/friends.js");

module.exports = function (app) {
	app.get("/api/friends", function(req, res){
		res.json(realHumanFriends);
	});

	app.post("/api/friends", function (req, res){
		
		var userInput = req.body;
		var userInput2 = userInput.scores;

		var bestFriendName = '';
		var bestFriendImage = '',
		var dummyScore = 100

		for (var i = 0; i < realHumanFriends.length; i++){
			var realScore = 0;
			for (var j = 0; j < userInput2.length; j++){
				realScore += Math.abs(realHumanFriends[i].scores[j]- userInput2[j]);
			}

			if (realScore < dummyScore) {
				bestFriendName = realHumanFriends[i].name;
				bestFriendImage = realHumanFriends[i].photo
			}
		}

		realHumanFriends.push(userInput);

		res.json({status: bestFriendName: bestFriendName, bestFriendImage: bestFriendImage})
	});
};