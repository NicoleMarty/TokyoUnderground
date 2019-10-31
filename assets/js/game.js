// Initialize game
$(document).ready(function() {
    var charObj = {
        "Go-Go": {
            name: "Go-Go",
            health: 120,
            attack: 8,
            imageUrl: "assets/images/go-go-crazy.jpg",
            enemyAttackBack: 15
        },
        "Purge": {
            name: "Purge",
            health: 100,
            attack: 14,
            imageUrl: "assets/images/purge-dude.jpg",
            enemyAttackBack: 5
        },
        "Blue Ice": {
            name: "Blue Ice",
            health: 150,
            attack: 8,
            imageUrl: "assets/images/blue-ice.jpg",
            enemyAttackBack: 5
        },
        "Pantera": {
            name: "Pantera",
            health: 180,
            attack: 7,
            imageUrl: "assets/images/robo-panther.jpg",
            enemyAttackBack: 25
        }

    };
    for (var key in charObj) {
        console.log("key: " + key + "\n" + "value: " + charObj[key]);
    }
    console.log(charObj);
    var charDiv = $("#character_choices");

    $.each(charObj, function(key, character) {
        charDiv.append("<div>" + "Name: " + character.name + "<div>");
        charDiv.append("<div>" + "Health: " + character.health + "<div>");
        charDiv.append("<div>" + "Attack: " + character.attack + "<div>");
        charDiv.append("<div>" + "imageUrl: " + character.imageUrl + "<div>");
        charDiv.append("<div>" + "Enemy Attack Back: " + character.enemyAttackBack + "<div>");
    })
});