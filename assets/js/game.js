// Initialize game
$(document).ready(function() {

    var charObj = [{
            //charObj[0]
            name: "Go-Go",
            health: 120,
            attack: 8,
            imageUrl: "assets/images/go-go-crazy.jpg",
            enemyAttackBack: 15
        },
        {
            //charObj[1]
            name: "Purge",
            health: 100,
            attack: 14,
            imageUrl: "assets/images/purge-dude.jpg",
            enemyAttackBack: 5
        },
        {
            //charObj[2]
            name: "Blue Ice",
            health: 150,
            attack: 8,
            imageUrl: "assets/images/blue-ice.jpg",
            enemyAttackBack: 5
        },
        {
            //charObj[3]
            name: "Pantera",
            health: 180,
            attack: 7,
            imageUrl: "assets/images/pantera.jpg",
            enemyAttackBack: 25
        }

    ];

    for (var i = 0; i < charObj.length; i++) {

    }
    console.log(charObj[0].name);
    //returns "Go-Go"
    var charDiv = $("#character_choices");
    charDiv.append(charObj[0]);


    $.each(charObj, function(key, character) {
        charDiv.append("<div class='profpic'>" + character.imageUrl + "</div>" + "<div class='character'>" + character.name + "</div>" + "<div class='health'>" + character.health + "</div>" + "<div class='attack'>" + character.attack + "</div>" + "<div class='enemy-attack-back'>" + character.enemyAttackBack + "</div>");
        console.log(charObj);
    });

    var gogo = charObj[0];
    console.log(gogo);
    var purge = charObj[1];
    console.log(purge);
    var blueice = charObj[2];
    console.log(blueice);
    var pantera = charObj[3];
    console.log(pantera);

    var characters = [gogo, purge, blueice, pantera];
    console.log(characters);


});