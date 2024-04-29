var str1 = "", str2 = "", level = 1;
$("body").on("keypress", function(){
    $("h1").text("Level 1");
    setTimeout(function(){
        start();
    }, 1000);
});

function start(){
    var rand = Math.floor(Math.random() * 4) + 1;
    str1 = str1 + rand;

    $("#"+rand).addClass("pressed");
    var aud = new Audio("./sounds/blue.mp3");
    aud.play();
    setTimeout(function(){
        $("#"+rand).removeClass("pressed");
    }, 500);
}

$("button").on("click", function(){
    user_entry(this.innerHTML);
});

function user_entry(char){
    str2 = str2 + char;

    $("#"+char).addClass("pressed");
    var aud = new Audio("./sounds/yellow.mp3");
    aud.play();
    setTimeout(function(){
        $("#"+char).removeClass("pressed");
    }, 500);
    //$("p").text("str1 = " + str1 + " str2 = " + str2);
    
    if(str1.length === str2.length){
        result();
    }
}

function result(){
    if(str1 === str2){
        level += 1;
        setTimeout(function(){
            $("h1").text("Level " + level);
        }, 750);
        str2 = "";
        setTimeout(function(){
            start();
        }, 2000);
    }else{
        setTimeout(function(){
            $("h1").text("Game Over!");
            var aud = new Audio("./sounds/wrong.mp3");
            aud.play();
            $("button").slideUp();
            $("body").css("background-color", "red");
        }, 400);
        setTimeout(function(){
            location.reload(true);   
        }, 1500);
    }
}