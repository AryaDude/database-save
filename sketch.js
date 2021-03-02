var ball;
var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    database.ref("Bal/position").on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+10);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Bal/position").set({
        x: ball.x + x,
        y: ball.y + y
    })
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}


function showError(){
    console.log("anything")
}