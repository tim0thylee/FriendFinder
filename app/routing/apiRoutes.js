var friends = require("../data/friends");

module.exports = function (app){

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function (req, res){
        
        var yourNewFriend = {
            name:"",
            photo:"",
            newDifference: Infinity
        };

        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        var differenceTotal;

        for (var i = 0; i< friends.length; i++){
            differenceTotal = 0;

            console.log(friends[i].name);

            for (var j = 0; j < friends[i].scores[j].length; j++){

                differenceTotal += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
            }
                if(differenceTotal <= yourNewFriend.newDifference){
                    yourNewFriend.name = friends[i].name;
                    yourNewFriend.photo = friends[i].photo;
                    yourNewFriend.newDifference = differenceTotal;
                }
        }

        friends.push(userData);

        res.json(yourNewFriend);

    });

}