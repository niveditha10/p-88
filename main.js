var canvas=new fabric.Canvas('myCanvas');
block_width=50;
block_height=50;
player_x=10;
player_y=10;
var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }) ;   
    
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    }) ;   
    
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){

keyPressed=e.keyCode;
console.log(keyPressed);



if(keyPressed=='38'){
    up();
    console.log("up pressed");
}
if(keyPressed=='40'){
    down();
    console.log("down pressed");
}
if(keyPressed=='39'){
    right();
    console.log("right pressed");
}

if(keyPressed=='37'){
    left();
    console.log("left pressed");
}




if(keyPressed=='65'){
    new_image("blue_cap.png");
    console.log("a pressed");
}
if(keyPressed=='66'){
    new_image("red_cap.png");
    console.log("b pressed");
}
if(keyPressed=='67'){
    new_image("blue_shirt.png");
    console.log("c pressed");
}

if(keyPressed=='68'){
    new_image("yellow_shirt.png");
    console.log("d pressed");
}
if(keyPressed=='69'){
    new_image("sorts_png.png");
    console.log("e pressed");
}

if(keyPressed=='70'){
    new_image("jeans_png.png");
    console.log("f pressed");
}

if(keyPressed=='71'){
    new_image("heels_shoes.png");
    console.log("g pressed");
}

if(keyPressed=='72'){
    new_image("sports_shoes.png");
    console.log("h pressed");
}

}

function up()
{
    if(player_y>=0){

     player_y=player_y-block_height;
     canvas.remove(player_object);
     player_update();

    }
}


function down()
{
    if(player_y<=460){

     player_y=player_y+block_height;
     canvas.remove(player_object);
     player_update();

    }
}

function left()
{
    if(player_x>=0){

     player_x=player_x-block_width;
     canvas.remove(player_object);
     player_update();

    }
}

function right()
{
    if(player_x<=640){

     player_x=player_x+block_height;
     canvas.remove(player_object);
     player_update();

    }
}


