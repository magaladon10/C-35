const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
getBackgroundImg( )
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){
    background(backgroundImg)
}

    Engine.update(engine);



}

async function getBackgroundImg(){

        // write code to fetch time from API
        // write code to display time in correct format here
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJson = await response.json()
        var datetime = responseJson.datetime
        var hour = datetime.slice(11,13)


    // add conditions to change the background images from sunrise to sunset
    if(hour>=06&&hour<07){
    bg = "sunrise3.png"    
    }
    else if(hour>=07&&hour<08){
    bg = "sunrise4.png"    
    }
    else if(hour>=08&&hour<12){
        bg = "sunrise5.png"    
        }
        else if(hour>=12&&hour<17){
            bg = "sunrise6.png"    
            }
            else if(hour>=17&&hour<19){
                bg = "sunset8.png"    
                }
              else{bg = "sunset12.png"}
    //load the image in backgroundImg variable here
     backgroundImg = loadImage(bg)
}
