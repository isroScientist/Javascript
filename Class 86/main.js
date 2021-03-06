canvas = new fabric.Canvas('myCanvas');

//Player Location
player_x = 10;
player_y = 10;

// Block Size
block_width = 30;
block_height = 30;

// Objects
var player_object;
var block_object;

// Functions to udate the player and picture
function updatePlayerImage(){
    fabric.Image.fromURL('player.png', function(Image){
        player_object = Image;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);

        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function updateBlockImage(Block){
    fabric.Image.fromURL(Block, function(Image){
        block_object = Image;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);

        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}