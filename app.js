// alert(" Welcome to 20! The rules are simple, In this game you will have to draw a number and get as close as you can to the number 20. If you go over the number 20 you will lose. You are going up against me. \n You will be drawing a number between 1 to 10. I will some around 16. \n Make sure you think and pay attention to make sure you dont go over the amount of 20.");

// var compnumone = Math.floor(Math.random() * 11);

// alert(` The new number is ${compnumone}. \n \n My number total is now ${compnumone}.`);

// var compnumtwo = Math.floor(Math.random() * 11);

// var comptotalone = compnumone + compnumtwo;

// alert(`The new number is ${compnumtwo}. \n \n My number total is now ${comptotalone}.`);

// if ( comptotalone >= "16" ) {

//     alert("I will stop drawing.");

// } else if ( comptotalone <= "16" ) {

//     var compnumthree = Math.floor(Math.random() * 11);

//     var comptotaltwo = comptotalone + compnumthree;

//     alert(`The new number is ${compnumthree}. \n \n My number total is now ${comptotaltwo}.`);

//     alert("I will stop drawing.");

// } ;

// if ( comptotalone >= "20" ) {

//     alert("You have Won !");

// } ;

// if ( compnumtwo >= "20" ) {

//     alert("You have Won !");

// } ;

// alert("It is now your turn to draw.");






// var plrnumone = Math.floor(Math.random() * 11);

// var plrplayagain = prompt(`Your new number is ${plrnumone}. \n Your number total is ${plrnumone}. \n y for yes, n for no. \n Do you want to go again ?`);

// if ( plrplayagain == "y" ) {

//     var plrnumtwo = Math.floor(Math.random() * 11);

//     var plrnumtotalone = plrnumone + plrnumtwo;

//     var plrplayagaintwo = prompt(`Your new number is ${plrnumtwo}. \n Your number total is ${plrnumtotalone}. \n y for yes, n for no. \n Do you want to go again ?`);

// } else if ( plrplayagain == "n" ) {

//     alert(`Your number total was ${plrnumone}.`);

//     if ( plrnumone >= "20" ) {

//         alert("You have Lost");
    
//     } else if ( plrnumone == "20" ) {

//         alert("You have Won !");
    
//     }

//     if ( plrnumone >= comptotalone, comptotaltwo ) {

//         alert("You have Won");
    
//     } ;

// } ;

// if ( plrplayagaintwo == "y" ) {

//     var plrnumthree = Math.floor(Math.random() * 11);

//     var plrnumtotaltwo = plrnumtotalone + plrnumthree;

//     var plrplayagainthree = prompt(`Your new number is ${plrnumthree}. \n Your number total is ${plrnumtotaltwo}. \n y for yes, n for no. \n Do you want to go again ?`);

// } else if ( plrplayagaintwo == "n" ) {

//     alert(`Your number total was ${plrnumtotalone}.`);

//     if ( plrnumtotalone >= "20" ) {

//         alert("You have Lost");
    
//     } else if ( plrnumtotalone == "20" ) {

//         alert("You have Won !");
    
//     }

//     if ( plrnumtotalone >= comptotalone, comptotaltwo ) {

//         alert("You have Won");
    
//     } ;

// } ;

// if ( plrplayagainthree == "y" ) {

//     var plrnumfour = Math.floor(Math.random() * 11);

//     var plrnumtotalthree = plrnumtotaltwo + plrnumfour;

//     alert(`Your new number is ${plrnumfour}. \n Your number total is ${plrnumtotalthree}.`); 

// } else if ( plrplayagainthree == "n" ) {

//     alert(`Your number total was ${plrnumtotaltwo}.`);

//     if ( plrnumtotaltwo >= "20" ) {

//         alert("You have Lost");
    
//     } else if ( plrnumtotaltwo == "20" ) {

//         alert("You have Won !");
    
//     }

//     if ( plrnumtotaltwo >= comptotalone, comptotaltwo ) {

//         alert("You have Won");
    
//     } ;

// } ;

// if ( plrnumtotalthree >= "20" ) {

//     alert("You have Lost");

// } else if ( plrnumtotalthree == "20" ) {

//     alert("You have Won !");

// }

do {

    var h = 0;
    var c = 0;

    function askname() {
        var name = prompt(" Hello! \n What is you name.")
        return name
    
    }
    
    function greeting(a) {   // parameter
        alert(`Welcome, ${a}.`)
    }
    
    greeting(askname()) // argument

    alert(" Welcome to 20! The rules are simple, In this game you will have to draw a number and get as close as you can to the number 20. If you go over the number 20 you will lose. You are going up against me. \n You will be drawing a number between 1 to 10. I will some around 16. \n Make sure you think and pay attention to make sure you dont go over the amount of 20.");

    function computerfn() {
        do {

            var r = Math.floor(Math.random() * 10) + 1

            c = c + r

            computeralertfn = alert(`Computer new number is ${r}. Computer new total is ${c}.`)


        } while ( c < 16)

        return computeralertfn
    }

    computerfn() // invoke

    alert(`It is now your turn. \n \n Computer total is ${c}.`)


    function playerfn() {
        do {

            var rh = Math.floor(Math.random() * 10) + 1

            h = h + rh

            var hp = prompt(`Your number was ${rh}. \n Your total is ${h}. \n Do you want to get another number? y = yes n = no`)

        } while ( hp != "n" ( hp > 20 ) )

        
    }

    playerfn() // invoke

    if ( c > 20 ) {

        var playa = prompt("You have Won. Computer went over number 20. \n Do you want to play again? \n y = yes n = no");

    } else if ( h > c ) {

        var playa = prompt("You have Won. Computer had less than you. \n Do you want to play again? \n y = yes n = no");

    };

    if ( h > 20 ) {

        var playa = prompt("You have Lost. You went over number 20. \n Do you want to play again? \n y = yes n = no");

    } else if ( h < c ) {

        var playa = prompt("You have Lost. You had less than the Computer. \n Do you want to play again? \n y = yes n = no");

    };


} while ( playa != "n" );