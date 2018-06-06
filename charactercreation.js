// window.onload = function() {
//     var canvas = document.getElementById("bgcanvas");
//     var ctx = canvas.getContext("2d");
//     var img = document.getElementById("backgrounds_image");
//     // context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight); 
//     //sourceX sourceY = coordinates of crop within image
//     //sourceWidth, sourceHeight = size of crop
//     //destX, destY = position on page
//     ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
// }

function selectItemByValue(elmnt, value){

    for(var i=0; i < elmnt.options.length; i++)
    {
      if(elmnt.options[i].value == value)
        elmnt.selectedIndex = i;
    }
}

function imageLayer(Image, cropX, cropY, cropWidth, cropHeight, x, y, width, height){
    this.Image = Image;
    this.cropX = cropX;
    this.cropY = cropY;
    this.cropWidth = cropWidth;
    this.cropHeight = cropHeight;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);
    // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
}

function ClearLayer(){
    // clear whatever the current layer is
    //just so we don't have to repeat the same code everywhere
    var c = CurrentCanvas;
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
}


// ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);


function Child(){
    var child_option_menu = document.getElementById("child_dropdown");
    var child = child_option_menu.value;
    var c = document.getElementById("bgcanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var c = document.getElementById("BaseCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById(child);
    ctx.drawImage(img, 124, 164, 152, 152); //image position
    var c = document.getElementById("Canvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var c = document.getElementById("Canvas3");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var c = document.getElementById("Canvas4");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var c = document.getElementById("Canvas5");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
};



function UpdateBeard(){
    var beard_image_option_menu = document.getElementById("beard_image_dropdown");
    //Beards
        var IMG_western_male_beard_1 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_western_male_beard_1.Image = document.getElementById("western_male_beard_1");
            IMG_western_male_beard_1.cropWidth = 152;
            IMG_western_male_beard_1.cropHeight = 152;
            IMG_western_male_beard_1.x = 137;
            IMG_western_male_beard_1.y = 164;
            IMG_western_male_beard_1.width = 130;
            IMG_western_male_beard_1.height = 152;
            IMG_western_male_beard_1.cropX = IMG_western_male_beard_1.cropWidth * beard_image_option_menu.selectedIndex;
            IMG_western_male_beard_1.cropY = 0;
        var IMG_western_male_beard_behind_1 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_western_male_beard_behind_1.Image = document.getElementById("western_male_beard_behind_1");
            IMG_western_male_beard_behind_1.cropWidth = 152;
            IMG_western_male_beard_behind_1.cropHeight = 152;
            IMG_western_male_beard_behind_1.x = 137;
            IMG_western_male_beard_behind_1.y = 164;
            IMG_western_male_beard_behind_1.width = 130;
            IMG_western_male_beard_behind_1.height = 152;
            IMG_western_male_beard_behind_1.cropX = IMG_western_male_beard_behind_1.cropWidth * beard_image_option_menu.selectedIndex;
            IMG_western_male_beard_behind_1.cropY = 0;
        var IMG_western_male_beard_2 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_western_male_beard_2.Image = document.getElementById("western_male_beard_2");
            IMG_western_male_beard_2.cropWidth = 152;
            IMG_western_male_beard_2.cropHeight = 152;
            IMG_western_male_beard_2.x = 137;
            IMG_western_male_beard_2.y = 164;
            IMG_western_male_beard_2.width = 130;
            IMG_western_male_beard_2.height = 152;
            IMG_western_male_beard_2.cropX = IMG_western_male_beard_2.cropWidth * (beard_image_option_menu.selectedIndex - 7);
            IMG_western_male_beard_2.cropY = 0;
        var IMG_western_male_beard_behind_2 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_western_male_beard_behind_2.Image = document.getElementById("western_male_beard_behind_2");
            IMG_western_male_beard_behind_2.cropWidth = 152;
            IMG_western_male_beard_behind_2.cropHeight = 152;
            IMG_western_male_beard_behind_2.x = 137;
            IMG_western_male_beard_behind_2.y = 164;
            IMG_western_male_beard_behind_2.width = 130;
            IMG_western_male_beard_behind_2.height = 152;
            IMG_western_male_beard_behind_2.cropX = IMG_western_male_beard_behind_2.cropWidth * (beard_image_option_menu.selectedIndex - 7);
            IMG_western_male_beard_behind_2.cropY = 0;
        var IMG_western_male_beard_3 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_western_male_beard_3.Image = document.getElementById("western_male_beard_3");
            IMG_western_male_beard_3.cropWidth = 152;
            IMG_western_male_beard_3.cropHeight = 152;
            IMG_western_male_beard_3.x = 137;
            IMG_western_male_beard_3.y = 164;
            IMG_western_male_beard_3.width = 130;
            IMG_western_male_beard_3.height = 152;
            IMG_western_male_beard_3.cropX = IMG_western_male_beard_3.cropWidth * (beard_image_option_menu.selectedIndex - 13);
            IMG_western_male_beard_3.cropY = 0;
        var IMG_western_male_beard_behind_3 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_western_male_beard_behind_3.Image = document.getElementById("western_male_beard_behind_3");
            IMG_western_male_beard_behind_3.cropWidth = 152;
            IMG_western_male_beard_behind_3.cropHeight = 152;
            IMG_western_male_beard_behind_3.x = 137;
            IMG_western_male_beard_behind_3.y = 164;
            IMG_western_male_beard_behind_3.width = 130;
            IMG_western_male_beard_behind_3.height = 152;
            IMG_western_male_beard_behind_3.cropX = IMG_western_male_beard_behind_3.cropWidth * (beard_image_option_menu.selectedIndex - 13);
            IMG_western_male_beard_behind_3.cropY = 0;
    switch(beard_image_option_menu.selectedIndex){ //switch statements are more efficient that doing a billion if statements
        //switch(thing) basically = check (value)
        case 0: //basically "case" acts as the if block
            //If the value = 0 then do this code block
            //stuff
            CurrentCanvas = document.getElementById("Canvas3");
            ClearLayer();
            CurrentCanvas = document.getElementById("BeardBehindCanvas");
            ClearLayer();
            break; //add a break block at the end of each case block
        case 1: //put a bunch of these cases together
        case 2: //makes it so that if any of these cases are true, the same
        case 3: //output is applied
        case 4: //ie between cases 1-7 the same thing happens
        case 5:
        case 6:
        case 7:
            //clear the existing beards first
            CurrentCanvas = document.getElementById("Canvas3");
            ClearLayer();
            CurrentCanvas = document.getElementById("BeardBehindCanvas");
            ClearLayer();
            var c = document.getElementById("Canvas3");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_male_beard_1.Image, IMG_western_male_beard_1.cropX, IMG_western_male_beard_1.cropY, IMG_western_male_beard_1.cropWidth, IMG_western_male_beard_1.cropHeight, IMG_western_male_beard_1.x, IMG_western_male_beard_1.y, IMG_western_male_beard_1.width, IMG_western_male_beard_1.height);
            var c = document.getElementById("BeardBehindCanvas");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_male_beard_behind_1.Image, IMG_western_male_beard_behind_1.cropX, IMG_western_male_beard_behind_1.cropY, IMG_western_male_beard_behind_1.cropWidth, IMG_western_male_beard_behind_1.cropHeight, IMG_western_male_beard_behind_1.x, IMG_western_male_beard_behind_1.y, IMG_western_male_beard_behind_1.width, IMG_western_male_beard_behind_1.height);
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            //clear the existing beards first
            CurrentCanvas = document.getElementById("Canvas3");
            ClearLayer();
            CurrentCanvas = document.getElementById("BeardBehindCanvas");
            ClearLayer();
            var c = document.getElementById("Canvas3");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_male_beard_2.Image, IMG_western_male_beard_2.cropX, IMG_western_male_beard_2.cropY, IMG_western_male_beard_2.cropWidth, IMG_western_male_beard_2.cropHeight, IMG_western_male_beard_2.x, IMG_western_male_beard_2.y, IMG_western_male_beard_2.width, IMG_western_male_beard_2.height);
            var c = document.getElementById("BeardBehindCanvas");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_male_beard_behind_2.Image, IMG_western_male_beard_behind_2.cropX, IMG_western_male_beard_behind_2.cropY, IMG_western_male_beard_behind_2.cropWidth, IMG_western_male_beard_behind_2.cropHeight, IMG_western_male_beard_behind_2.x, IMG_western_male_beard_behind_2.y, IMG_western_male_beard_behind_2.width, IMG_western_male_beard_behind_2.height);
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            //clear the existing beards first
            CurrentCanvas = document.getElementById("Canvas3");
            ClearLayer();
            CurrentCanvas = document.getElementById("BeardBehindCanvas");
            ClearLayer();
            var c = document.getElementById("Canvas3");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_male_beard_3.Image, IMG_western_male_beard_3.cropX, IMG_western_male_beard_3.cropY, IMG_western_male_beard_3.cropWidth, IMG_western_male_beard_3.cropHeight, IMG_western_male_beard_3.x, IMG_western_male_beard_3.y, IMG_western_male_beard_3.width, IMG_western_male_beard_3.height);
            var c = document.getElementById("BeardBehindCanvas");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_male_beard_behind_3.Image, IMG_western_male_beard_behind_3.cropX, IMG_western_male_beard_behind_3.cropY, IMG_western_male_beard_behind_3.cropWidth, IMG_western_male_beard_behind_3.cropHeight, IMG_western_male_beard_behind_3.x, IMG_western_male_beard_behind_3.y, IMG_western_male_beard_behind_3.width, IMG_western_male_beard_behind_3.height);
            //"break" not necessary on the last case block, it ends there anyways
        //default:
            //insert a "default" block at the end just in case
            //if it doesn't fit any of these, do this
            //"break" not necessary on the last block, it ends there anyways
    }
}




function UpdateSpecial(){
    //Special
        //Scars
        var scar_image_option_menu = document.getElementById("scar_image_dropdown");
        // ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);
        var IMG_scars = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_scars.Image = document.getElementById("scars_image");
            IMG_scars.cropWidth = 152;
            IMG_scars.cropHeight = 152;
            IMG_scars.x = 124;
            IMG_scars.y = 164;
            IMG_scars.width = 152;
            IMG_scars.height = 152;
            IMG_scars.cropX = IMG_scars.cropWidth * scar_image_option_menu.selectedIndex;
            IMG_scars.cropY = 0;

    switch(scar_image_option_menu.selectedIndex){
        case 0:
            break;
        case 1:
        case 2:
        case 3:
        case 4:
            //clear everything first
            CurrentCanvas = document.getElementById("Canvas4");
            ClearLayer();
            var c = document.getElementById("Canvas4");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_scars.Image, IMG_scars.cropX, IMG_scars.cropY, IMG_scars.cropWidth, IMG_scars.cropHeight, IMG_scars.x, IMG_scars.y, IMG_scars.width, IMG_scars.height);
    }

    //Masks
        var mask_image_option_menu = document.getElementById("mask_image_dropdown");
        var IMG_masks = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_masks.Image = document.getElementById("masks_image");
            IMG_masks.cropWidth = 84;
            IMG_masks.cropHeight = 81;
            IMG_masks.x = 165;
            IMG_masks.y = 190;
            IMG_masks.width = 84;
            IMG_masks.height = 81;
            IMG_masks.cropX = IMG_masks.cropWidth * mask_image_option_menu.selectedIndex;
            IMG_masks.cropY = 0;

    switch(mask_image_option_menu.selectedIndex){
        case 0:
            CurrentCanvas = document.getElementById("Canvas5");
            ClearLayer();
            break; //add a break block at the end of each case block
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
            CurrentCanvas = document.getElementById("Canvas5");
            ClearLayer();
            var c = document.getElementById("Canvas5");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_masks.Image, IMG_masks.cropX, IMG_masks.cropY, IMG_masks.cropWidth, IMG_masks.cropHeight, IMG_masks.x, IMG_masks.y, IMG_masks.width, IMG_masks.height);
    }

    var skin_defects_image_option_menu = document.getElementById("skin_defects_dropdown");
    switch (skin_defects_image_option_menu.selectedIndex){
        case 0:
            //nothing
            CurrentCanvas = document.getElementById("Canvas4");
            ClearLayer();
            break;
        case 1:
            CurrentCanvas = document.getElementById("Canvas4");
            ClearLayer();
            var img = document.getElementById("boils_image");
            var c = document.getElementById("Canvas4");
            var ctx = c.getContext("2d");
            ctx.drawImage(img, 0, 0, 304, 152, -28, 164, 304, 152);
            break;
        case 2:
            CurrentCanvas = document.getElementById("Canvas4");
            ClearLayer();
            var img = document.getElementById("red_dots_image");
            var c = document.getElementById("Canvas4");
            var ctx = c.getContext("2d");
            ctx.drawImage(img, 0, 0, 304, 152, -28, 164, 304, 152);
    }

    //Eyepatches and rags
        var blindness_image_option_menu = document.getElementById("blindness_dropdown");
        var IMG_eyepatch = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_eyepatch.Image = document.getElementById("maimed_eyepatch_image");
            IMG_eyepatch.cropWidth = 88;
            IMG_eyepatch.cropHeight = 62;
            IMG_eyepatch.x = 154;
            IMG_eyepatch.y = 190;
            IMG_eyepatch.width = 88;
            IMG_eyepatch.height = 62;
            IMG_eyepatch.cropX = IMG_eyepatch.cropWidth * (blindness_image_option_menu.selectedIndex - 1);
            IMG_eyepatch.cropY = 0;
    switch(blindness_image_option_menu.selectedIndex){
        case 0:
            CurrentCanvas = document.getElementById("Canvas4");
            ClearLayer();
            break;
        case 1:
            //blinded eyes
            CurrentCanvas = document.getElementById("Canvas4");
            ClearLayer();
            var c = document.getElementById("Canvas4");
            var ctx = c.getContext("2d");
            var img = document.getElementById("blinded_eyes_image");
            ctx.drawImage(img, 0, 0, 304, 152, -28, 164, 304, 152);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
            //eyepatch or rag
            CurrentCanvas = document.getElementById("Canvas4");
            ClearLayer();
            var c = document.getElementById("Canvas4");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_eyepatch.Image, IMG_eyepatch.cropX, IMG_eyepatch.cropY, IMG_eyepatch.cropWidth, IMG_eyepatch.cropHeight, IMG_eyepatch.x, IMG_eyepatch.y, IMG_eyepatch.width, IMG_eyepatch.height);
    }

    //Imprisonment
    var imprisoned_image_menu = document.getElementById("imprisoned_image_dropdown");
    var c = document.getElementById("PrisonCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById("imprisoned_image");
    if (imprisoned_image_menu.value == "none"){
        ctx.drawImage(img, 0, 0, 0, 0, 0, 0, 0, 0);
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
    } else if (imprisoned_image_menu.value == "imprisoned_image"){
        ctx.drawImage(img, 0, 0, 304, 152, -28, 164, 304, 152);
    }
}


function UpdateBG(){
    var id = document.getElementById("PortraitID_output");
    var bg_image_option_menu = document.getElementById("bg_image_dropdown");
    //Backgrounds
    var IMG_background = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
            IMG_background.Image = document.getElementById("backgrounds_image");
            IMG_background.cropWidth = 152;
            IMG_background.cropHeight = 152;
            IMG_background.x = 124;
            IMG_background.y = 164;
            IMG_background.width = 152;
            IMG_background.height = 152;
            IMG_background.cropX = IMG_background.cropWidth * bg_image_option_menu.selectedIndex;
            IMG_background.cropY = 0;
    //adsfasdf
    switch(bg_image_option_menu.selectedIndex){
        case 0:
            CurrentCanvas = document.getElementById("bgcanvas");
            ClearLayer();
            var img = document.getElementById("backgrounds_image");
            var c = document.getElementById("bgcanvas");
            var ctx = c.getContext("2d");
            ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            CurrentCanvas = document.getElementById("bgcanvas");
            ClearLayer();
            var c = document.getElementById("bgcanvas");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_background.Image, IMG_background.cropX, IMG_background.cropY, IMG_background.cropWidth, IMG_background.cropHeight, IMG_background.x, IMG_background.y, IMG_background.width, IMG_background.height);
    }
}

function UpdateBase(){
    var base_image_option_menu = document.getElementById("base_image_dropdown");
    var base_image = base_image_option_menu.value;
    var c = document.getElementById("BaseCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById(base_image);
    ctx.drawImage(img, 124, 164, 152, 152); //image position
    var id = document.getElementById("PortraitID_output");
}

function UpdateNeck(){
    var neck_image_option_menu = document.getElementById("neck_image_dropdown");
    var IMG_western_male_neck_1 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
        IMG_western_male_neck_1.Image = document.getElementById("western_male_neck_1");
        IMG_western_male_neck_1.cropWidth = 152;
        IMG_western_male_neck_1.cropHeight = 152;
        IMG_western_male_neck_1.x = 124;
        IMG_western_male_neck_1.y = 164;
        IMG_western_male_neck_1.width = 152;
        IMG_western_male_neck_1.height = 152;
        IMG_western_male_neck_1.cropX = IMG_western_male_neck_1.cropWidth * neck_image_option_menu.selectedIndex;
        IMG_western_male_neck_1.cropY = 0;
    var IMG_western_male_neck_2 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
        IMG_western_male_neck_2.Image = document.getElementById("western_male_neck_2");
        IMG_western_male_neck_2.cropWidth = 152;
        IMG_western_male_neck_2.cropHeight = 152;
        IMG_western_male_neck_2.x = 124;
        IMG_western_male_neck_2.y = 164;
        IMG_western_male_neck_2.width = 152;
        IMG_western_male_neck_2.height = 152;
        IMG_western_male_neck_2.cropX = IMG_western_male_neck_2.cropWidth * (neck_image_option_menu.selectedIndex - 4);
        IMG_western_male_neck_2.cropY = 0;
    var IMG_western_male_neck_3 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
        IMG_western_male_neck_3.Image = document.getElementById("western_male_neck_3");
        IMG_western_male_neck_3.cropWidth = 152;
        IMG_western_male_neck_3.cropHeight = 152;
        IMG_western_male_neck_3.x = 124;
        IMG_western_male_neck_3.y = 164;
        IMG_western_male_neck_3.width = 152;
        IMG_western_male_neck_3.height = 152;
        IMG_western_male_neck_3.cropX = IMG_western_male_neck_3.cropWidth * (neck_image_option_menu.selectedIndex - 8);
        IMG_western_male_neck_3.cropY = 0;
    var IMG_western_female_neck_1 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
        IMG_western_female_neck_1.Image = document.getElementById("western_female_neck_1");
        IMG_western_female_neck_1.cropWidth = 152;
        IMG_western_female_neck_1.cropHeight = 152;
        IMG_western_female_neck_1.x = 124;
        IMG_western_female_neck_1.y = 164;
        IMG_western_female_neck_1.width = 152;
        IMG_western_female_neck_1.height = 152;
        IMG_western_female_neck_1.cropX = IMG_western_female_neck_1.cropWidth * (neck_image_option_menu.selectedIndex - 12);
        IMG_western_female_neck_1.cropY = 0;
    var IMG_western_female_neck_2 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
        IMG_western_female_neck_2.Image = document.getElementById("western_female_neck_2");
        IMG_western_female_neck_2.cropWidth = 152;
        IMG_western_female_neck_2.cropHeight = 152;
        IMG_western_female_neck_2.x = 124;
        IMG_western_female_neck_2.y = 164;
        IMG_western_female_neck_2.width = 152;
        IMG_western_female_neck_2.height = 152;
        IMG_western_female_neck_2.cropX = IMG_western_female_neck_2.cropWidth * (neck_image_option_menu.selectedIndex - 16);
        IMG_western_female_neck_2.cropY = 0;
    var IMG_western_female_neck_3 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
        IMG_western_female_neck_3.Image = document.getElementById("western_female_neck_3");
        IMG_western_female_neck_3.cropWidth = 152;
        IMG_western_female_neck_3.cropHeight = 152;
        IMG_western_female_neck_3.x = 124;
        IMG_western_female_neck_3.y = 164;
        IMG_western_female_neck_3.width = 152;
        IMG_western_female_neck_3.height = 152;
        IMG_western_female_neck_3.cropX = IMG_western_female_neck_3.cropWidth * (neck_image_option_menu.selectedIndex - 20);
        IMG_western_female_neck_3.cropY = 0;
    switch(neck_image_option_menu.selectedIndex){
        case 0:
        case 1:
        case 2:
        case 3:
            // ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);
            CurrentCanvas = document.getElementById("Canvas2");
            ClearLayer();
            var c = document.getElementById("Canvas2");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_male_neck_1.Image, IMG_western_male_neck_1.cropX, IMG_western_male_neck_1.cropY, IMG_western_male_neck_1.cropWidth, IMG_western_male_neck_1.cropHeight, IMG_western_male_neck_1.x, IMG_western_male_neck_1.y, IMG_western_male_neck_1.width, IMG_western_male_neck_1.height);
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            // ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);
            CurrentCanvas = document.getElementById("Canvas2");
            ClearLayer();
            var c = document.getElementById("Canvas2");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_male_neck_2.Image, IMG_western_male_neck_2.cropX, IMG_western_male_neck_2.cropY, IMG_western_male_neck_2.cropWidth, IMG_western_male_neck_2.cropHeight, IMG_western_male_neck_2.x, IMG_western_male_neck_2.y, IMG_western_male_neck_2.width, IMG_western_male_neck_2.height);
            break;
        case 8:
        case 9:
        case 10:
        case 11:
            // ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);
            CurrentCanvas = document.getElementById("Canvas2");
            ClearLayer();
            var c = document.getElementById("Canvas2");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_male_neck_3.Image, IMG_western_male_neck_3.cropX, IMG_western_male_neck_3.cropY, IMG_western_male_neck_3.cropWidth, IMG_western_male_neck_3.cropHeight, IMG_western_male_neck_3.x, IMG_western_male_neck_3.y, IMG_western_male_neck_3.width, IMG_western_male_neck_3.height);
            break;
        case 12:
        case 13:
        case 14:
        case 15:
            // ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);
            CurrentCanvas = document.getElementById("Canvas2");
            ClearLayer();
            var c = document.getElementById("Canvas2");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_female_neck_1.Image, IMG_western_female_neck_1.cropX, IMG_western_female_neck_1.cropY, IMG_western_female_neck_1.cropWidth, IMG_western_female_neck_1.cropHeight, IMG_western_female_neck_1.x, IMG_western_female_neck_1.y, IMG_western_female_neck_1.width, IMG_western_female_neck_1.height);
            break;
        case 16:
        case 17:
        case 18:
        case 19:
            // ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);
            CurrentCanvas = document.getElementById("Canvas2");
            ClearLayer();
            var c = document.getElementById("Canvas2");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_female_neck_2.Image, IMG_western_female_neck_2.cropX, IMG_western_female_neck_2.cropY, IMG_western_female_neck_2.cropWidth, IMG_western_female_neck_2.cropHeight, IMG_western_female_neck_2.x, IMG_western_female_neck_2.y, IMG_western_female_neck_2.width, IMG_western_female_neck_2.height);
            break;
        case 20:
        case 21:
        case 22:
        case 23:
            // ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);
            CurrentCanvas = document.getElementById("Canvas2");
            ClearLayer();
            var c = document.getElementById("Canvas2");
            var ctx = c.getContext("2d");
            ctx.drawImage(IMG_western_female_neck_3.Image, IMG_western_female_neck_3.cropX, IMG_western_female_neck_3.cropY, IMG_western_female_neck_3.cropWidth, IMG_western_female_neck_3.cropHeight, IMG_western_female_neck_3.x, IMG_western_female_neck_3.y, IMG_western_female_neck_3.width, IMG_western_female_neck_3.height);
    }
}

function UpdateMouth(){
    var mouth_image_option_menu = document.getElementById("mouth_image_dropdown");
    var c = document.getElementById("MouthCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);


        ctx.drawImage(img, 0, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO01";
    } else if (mouth_image_option_menu.value == "mouth2"){
        ctx.drawImage(img, 36, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO02";
    } else if (mouth_image_option_menu.value == "mouth3"){
        ctx.drawImage(img, 72, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO03";
    } else if (mouth_image_option_menu.value == "mouth4"){
        ctx.drawImage(img, 108, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO04";
    } else if (mouth_image_option_menu.value == "mouth5"){
        ctx.drawImage(img, 144, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO05";
    } else if (mouth_image_option_menu.value == "mouth6"){
        ctx.drawImage(img, 180, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO06";
    } else if (mouth_image_option_menu.value == "mouth7"){
        ctx.drawImage(img, 216, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO07";
    } else if (mouth_image_option_menu.value == "mouth8"){
        ctx.drawImage(img, 252, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO08";
    } else if (mouth_image_option_menu.value == "mouth9"){
        ctx.drawImage(img, 288, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO09";
    } else if (mouth_image_option_menu.value == "mouth10"){
        ctx.drawImage(img, 324, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO10";
    } else if (mouth_image_option_menu.value == "mouth11"){
        ctx.drawImage(img, 360, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO11";
    } else if (mouth_image_option_menu.value == "mouth12"){
        ctx.drawImage(img, 396, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO12";
    }  else if (mouth_image_option_menu.value == "mouth13"){
        ctx.drawImage(img, 432, 0, 36, 28, 199, 239, 36, 28);
        id.value += "MO13";






// // ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, x, y, width, height);
//     var IMG_western_male_mouth_1 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
//         IMG_western_male_mouth_1.Image = document.getElementById("western_male_mouth_1");
//         IMG_western_male_mouth_1.cropWidth = 36;
//         IMG_western_male_mouth_1.cropHeight = 28;
//         IMG_western_male_mouth_1.x = 199;
//         IMG_western_male_mouth_1.y = 239;
//         IMG_western_male_mouth_1.width = 36;
//         IMG_western_male_mouth_1.height = 28;
//         IMG_western_male_mouth_1.cropX = IMG_western_male_mouth_1.cropWidth * mouth_image_option_menu.selectedIndex;
//         IMG_western_male_mouth_1.cropY = 0;
//     var IMG_western_male_mouth_2 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
//         IMG_western_male_mouth_2.Image = document.getElementById("western_male_mouth_2");
//         IMG_western_male_mouth_2.cropWidth = 152;
//         IMG_western_male_mouth_2.cropHeight = 152;
//         IMG_western_male_mouth_2.x = 124;
//         IMG_western_male_mouth_2.y = 164;
//         IMG_western_male_mouth_2.width = 152;
//         IMG_western_male_mouth_2.height = 152;
//         IMG_western_male_mouth_2.cropX = IMG_western_male_mouth_2.cropWidth * (mouth_image_option_menu.selectedIndex - 4);
//         IMG_western_male_mouth_2.cropY = 0;
//     var IMG_western_male_mouth_3 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
//         IMG_western_male_mouth_3.Image = document.getElementById("western_male_mouth_3");
//         IMG_western_male_mouth_3.cropWidth = 152;
//         IMG_western_male_mouth_3.cropHeight = 152;
//         IMG_western_male_mouth_3.x = 124;
//         IMG_western_male_mouth_3.y = 164;
//         IMG_western_male_mouth_3.width = 152;
//         IMG_western_male_mouth_3.height = 152;
//         IMG_western_male_mouth_3.cropX = IMG_western_male_mouth_3.cropWidth * (mouth_image_option_menu.selectedIndex - 8);
//         IMG_western_male_mouth_3.cropY = 0;
//     var IMG_western_female_mouth_1 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
//         IMG_western_female_mouth_1.Image = document.getElementById("western_female_mouth_1");
//         IMG_western_female_mouth_1.cropWidth = 152;
//         IMG_western_female_mouth_1.cropHeight = 152;
//         IMG_western_female_mouth_1.x = 124;
//         IMG_western_female_mouth_1.y = 164;
//         IMG_western_female_mouth_1.width = 152;
//         IMG_western_female_mouth_1.height = 152;
//         IMG_western_female_mouth_1.cropX = IMG_western_female_mouth_1.cropWidth * (mouth_image_option_menu.selectedIndex - 12);
//         IMG_western_female_mouth_1.cropY = 0;
//     var IMG_western_female_mouth_2 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
//         IMG_western_female_mouth_2.Image = document.getElementById("western_female_mouth_2");
//         IMG_western_female_mouth_2.cropWidth = 152;
//         IMG_western_female_mouth_2.cropHeight = 152;
//         IMG_western_female_mouth_2.x = 124;
//         IMG_western_female_mouth_2.y = 164;
//         IMG_western_female_mouth_2.width = 152;
//         IMG_western_female_mouth_2.height = 152;
//         IMG_western_female_mouth_2.cropX = IMG_western_female_mouth_2.cropWidth * (mouth_image_option_menu.selectedIndex - 16);
//         IMG_western_female_mouth_2.cropY = 0;
//     var IMG_western_female_mouth_3 = new imageLayer("n/a", 0, 0, 0, 0, 0, 0, 0, 0);
//         IMG_western_female_mouth_3.Image = document.getElementById("western_female_mouth_3");
//         IMG_western_female_mouth_3.cropWidth = 152;
//         IMG_western_female_mouth_3.cropHeight = 152;
//         IMG_western_female_mouth_3.x = 124;
//         IMG_western_female_mouth_3.y = 164;
//         IMG_western_female_mouth_3.width = 152;
//         IMG_western_female_mouth_3.height = 152;
//         IMG_western_female_mouth_3.cropX = IMG_western_female_mouth_3.cropWidth * (mouth_image_option_menu.selectedIndex - 20);
//         IMG_western_female_mouth_3.cropY = 0;




    } else if (mouth_image_option_menu.value == "mouth1M"){
        var img = document.getElementById("western_male_mouth_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO14";
    } else if (mouth_image_option_menu.value == "mouth2M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 33, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO15";
    } else if (mouth_image_option_menu.value == "mouth3M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 66, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO16";
    } else if (mouth_image_option_menu.value == "mouth4M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 99, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO17";
    } else if (mouth_image_option_menu.value == "mouth5M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 132, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO18";
    } else if (mouth_image_option_menu.value == "mouth6M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 165, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO19";
    } else if (mouth_image_option_menu.value == "mouth7M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 198, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO20";
    } else if (mouth_image_option_menu.value == "mouth8M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 231, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO21";
    } else if (mouth_image_option_menu.value == "mouth9M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 264, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO22";
    } else if (mouth_image_option_menu.value == "mouth10M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 297, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO23";
    } else if (mouth_image_option_menu.value == "mouth11M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 330, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO24";
    } else if (mouth_image_option_menu.value == "mouth12M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 363, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO25";
    }  else if (mouth_image_option_menu.value == "mouth13M"){
        var img = document.getElementById("western_male_mouth_2");
        ctx.drawImage(img, 396, 0, 33, 25, 201, 239, 33, 25);
        id.value += "MO26";
    } else if (mouth_image_option_menu.value == "mouth1Old"){
        var img = document.getElementById("western_male_mouth_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO27";
    } else if (mouth_image_option_menu.value == "mouth2Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 35, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO28";
    } else if (mouth_image_option_menu.value == "mouth3Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 70, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO29";
    } else if (mouth_image_option_menu.value == "mouth4Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 105, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO30";
    } else if (mouth_image_option_menu.value == "mouth5Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 140, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO31";
    } else if (mouth_image_option_menu.value == "mouth6Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 175, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO32";
    } else if (mouth_image_option_menu.value == "mouth7Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 210, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO33";
    } else if (mouth_image_option_menu.value == "mouth8Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 245, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO34";
    } else if (mouth_image_option_menu.value == "mouth9Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 280, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO35";
    } else if (mouth_image_option_menu.value == "mouth10Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 315, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO36";
    } else if (mouth_image_option_menu.value == "mouth11Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 350, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO37";
    } else if (mouth_image_option_menu.value == "mouth12Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 385, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO38";
    }  else if (mouth_image_option_menu.value == "mouth13Old"){
        var img = document.getElementById("western_male_mouth_3");
        ctx.drawImage(img, 420, 0, 35, 24, 199, 240, 35, 24);
        id.value += "MO39";
    } else if (mouth_image_option_menu.value == "Fmouth1"){
        var img = document.getElementById("western_female_mouth_1");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO40";
    } else if (mouth_image_option_menu.value == "Fmouth2"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 40, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO41";
    } else if (mouth_image_option_menu.value == "Fmouth3"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 80, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO042";
    } else if (mouth_image_option_menu.value == "Fmouth4"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 120, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO43";
    } else if (mouth_image_option_menu.value == "Fmouth5"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 160, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO44";
    } else if (mouth_image_option_menu.value == "Fmouth6"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 200, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO45";
    } else if (mouth_image_option_menu.value == "Fmouth7"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 240, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO46";
    } else if (mouth_image_option_menu.value == "Fmouth8"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 280, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO47";
    } else if (mouth_image_option_menu.value == "Fmouth9"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 320, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO48";
    } else if (mouth_image_option_menu.value == "Fmouth10"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 360, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO49";
    } else if (mouth_image_option_menu.value == "Fmouth11"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 400, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO50";
    } else if (mouth_image_option_menu.value == "Fmouth12"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 440, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO51";
    }  else if (mouth_image_option_menu.value == "Fmouth13"){
        var img = document.getElementById("western_female_mouth_1");
        ctx.drawImage(img, 480, 0, 40, 32, 196, 236, 40, 32);
        id.value += "MO52";
    } else if (mouth_image_option_menu.value == "Fmouth1M"){
        var img = document.getElementById("western_female_mouth_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO53";
    } else if (mouth_image_option_menu.value == "Fmouth2M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 40, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO54";
    } else if (mouth_image_option_menu.value == "Fmouth3M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 80, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO55";
    } else if (mouth_image_option_menu.value == "Fmouth4M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 120, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO56";
    } else if (mouth_image_option_menu.value == "Fmouth5M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 160, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO57";
    } else if (mouth_image_option_menu.value == "Fmouth6M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 200, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO58";
    } else if (mouth_image_option_menu.value == "Fmouth7M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 240, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO59";
    } else if (mouth_image_option_menu.value == "Fmouth8M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 280, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO60";
    } else if (mouth_image_option_menu.value == "Fmouth9M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 320, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO61";
    } else if (mouth_image_option_menu.value == "Fmouth10M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 360, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO62";
    } else if (mouth_image_option_menu.value == "Fmouth11M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 400, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO63";
    } else if (mouth_image_option_menu.value == "Fmouth12M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 440, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO64";
    }  else if (mouth_image_option_menu.value == "Fmouth13M"){
        var img = document.getElementById("western_female_mouth_2");
        ctx.drawImage(img, 480, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO65";
    } else if (mouth_image_option_menu.value == "Fmouth1Old"){
        var img = document.getElementById("western_female_mouth_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO66";
    } else if (mouth_image_option_menu.value == "Fmouth2Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 40, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO67";
    } else if (mouth_image_option_menu.value == "Fmouth3Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 80, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO68";
    } else if (mouth_image_option_menu.value == "Fmouth4Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 120, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO69";
    } else if (mouth_image_option_menu.value == "Fmouth5Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 160, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO70";
    } else if (mouth_image_option_menu.value == "Fmouth6Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 200, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO71";
    } else if (mouth_image_option_menu.value == "Fmouth7Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 240, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO72";
    } else if (mouth_image_option_menu.value == "Fmouth8Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 280, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO73";
    } else if (mouth_image_option_menu.value == "Fmouth9Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 320, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO74";
    } else if (mouth_image_option_menu.value == "Fmouth10Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 360, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO75";
    } else if (mouth_image_option_menu.value == "Fmouth11Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 400, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO76";
    } else if (mouth_image_option_menu.value == "Fmouth12Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 440, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO77";
    }  else if (mouth_image_option_menu.value == "Fmouth13Old"){
        var img = document.getElementById("western_female_mouth_3");
        ctx.drawImage(img, 480, 0, 40, 28, 196, 239, 40, 28);
        id.value += "MO78";
    }
}

function UpdateNose(){
    var id = document.getElementById("PortraitID_output");
    var nose_image_option_menu = document.getElementById("nose_image_dropdown");
    var c = document.getElementById("NoseCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById("western_male_nose_1");
    if (nose_image_option_menu.value == "nose1"){
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO01";
    } else if (nose_image_option_menu.value == "nose2"){
        ctx.drawImage(img, 32, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO02";
    } else if (nose_image_option_menu.value == "nose3"){
        ctx.drawImage(img, 64, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO03";
    } else if (nose_image_option_menu.value == "nose4"){
        ctx.drawImage(img, 96, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO04";
    } else if (nose_image_option_menu.value == "nose5"){
        ctx.drawImage(img, 128, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO05";
    } else if (nose_image_option_menu.value == "nose6"){
        ctx.drawImage(img, 192, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO06";
    } else if (nose_image_option_menu.value == "nose7"){
        ctx.drawImage(img, 224, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO07";
    } else if (nose_image_option_menu.value == "nose8"){
        ctx.drawImage(img, 256, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO08";
    } else if (nose_image_option_menu.value == "nose9"){
        ctx.drawImage(img, 288, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO09";
    } else if (nose_image_option_menu.value == "nose10"){
        ctx.drawImage(img, 320, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO10";
    } else if (nose_image_option_menu.value == "nose11"){
        ctx.drawImage(img, 352, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO11";
    } else if (nose_image_option_menu.value == "nose12"){
        ctx.drawImage(img, 384, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO12";
    }  else if (nose_image_option_menu.value == "nose13"){
        ctx.drawImage(img, 456, 0, 32, 40, 204, 211, 32, 40);
        id.value += "NO13";
    } else if (nose_image_option_menu.value == "nose1M"){
        var img = document.getElementById("western_male_nose_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO14";
    } else if (nose_image_option_menu.value == "nose2M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 29, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO15";
    } else if (nose_image_option_menu.value == "nose3M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 60, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO16";
    } else if (nose_image_option_menu.value == "nose4M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 87, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO17";
    } else if (nose_image_option_menu.value == "nose5M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 116, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO18";
    } else if (nose_image_option_menu.value == "nose6M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 145, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO19";
    } else if (nose_image_option_menu.value == "nose7M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 174, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO20";
    } else if (nose_image_option_menu.value == "nose8M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 203, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO21";
    } else if (nose_image_option_menu.value == "nose9M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 232, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO22";
    } else if (nose_image_option_menu.value == "nose10M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 261, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO23";
    } else if (nose_image_option_menu.value == "nose11M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 290, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO24";
    } else if (nose_image_option_menu.value == "nose12M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 319, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO25";
    }  else if (nose_image_option_menu.value == "nose13M"){
        var img = document.getElementById("western_male_nose_2");
        ctx.drawImage(img, 348, 0, 29, 40, 204, 211, 29, 40);
        id.value += "NO26";
    } else if (nose_image_option_menu.value == "nose1Old"){
        var img = document.getElementById("western_male_nose_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO27";
    } else if (nose_image_option_menu.value == "nose2Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 31, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO28";
    } else if (nose_image_option_menu.value == "nose3Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 62, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO29";
    } else if (nose_image_option_menu.value == "nose4Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 93, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO30";
    } else if (nose_image_option_menu.value == "nose5Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 124, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO31";
    } else if (nose_image_option_menu.value == "nose6Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 155, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO32";
    } else if (nose_image_option_menu.value == "nose7Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 186, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO33";
    } else if (nose_image_option_menu.value == "nose8Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 217, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO34";
    } else if (nose_image_option_menu.value == "nose9Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 248, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO35";
    } else if (nose_image_option_menu.value == "nose10Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 279, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO36";
    } else if (nose_image_option_menu.value == "nose11Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 310, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO37";
    } else if (nose_image_option_menu.value == "nose12Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 341, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO38";
    }  else if (nose_image_option_menu.value == "nose13Old"){
        var img = document.getElementById("western_male_nose_3");
        ctx.drawImage(img, 372, 0, 31, 40, 204, 211, 31, 40);
        id.value += "NO39";
    } else if (nose_image_option_menu.value == "Fnose1"){
        var img = document.getElementById("western_female_nose_1");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO40";
    } else if (nose_image_option_menu.value == "Fnose2"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 28, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO41";
    } else if (nose_image_option_menu.value == "Fnose3"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 56, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO042";
    } else if (nose_image_option_menu.value == "Fnose4"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 84, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO43";
    } else if (nose_image_option_menu.value == "Fnose5"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 112, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO44";
    } else if (nose_image_option_menu.value == "Fnose6"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 140, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO45";
    } else if (nose_image_option_menu.value == "Fnose7"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 168, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO46";
    } else if (nose_image_option_menu.value == "Fnose8"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 196, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO47";
    } else if (nose_image_option_menu.value == "Fnose9"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 224, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO48";
    } else if (nose_image_option_menu.value == "Fnose10"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 252, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO49";
    } else if (nose_image_option_menu.value == "Fnose11"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 280, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO50";
    } else if (nose_image_option_menu.value == "Fnose12"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 308, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO51";
    }  else if (nose_image_option_menu.value == "Fnose13"){
        var img = document.getElementById("western_female_nose_1");
        ctx.drawImage(img, 336, 0, 28, 40, 204, 211, 28, 40);
        id.value += "NO52";
    } else if (nose_image_option_menu.value == "Fnose1M"){
        var img = document.getElementById("western_female_nose_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO53";
    } else if (nose_image_option_menu.value == "Fnose2M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 28, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO54";
    } else if (nose_image_option_menu.value == "Fnose3M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 56, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO55";
    } else if (nose_image_option_menu.value == "Fnose4M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 84, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO56";
    } else if (nose_image_option_menu.value == "Fnose5M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 112, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO57";
    } else if (nose_image_option_menu.value == "Fnose6M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 140, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO58";
    } else if (nose_image_option_menu.value == "Fnose7M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 168, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO59";
    } else if (nose_image_option_menu.value == "Fnose8M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 196, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO60";
    } else if (nose_image_option_menu.value == "Fnose9M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 224, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO61";
    } else if (nose_image_option_menu.value == "Fnose10M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 252, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO62";
    } else if (nose_image_option_menu.value == "Fnose11M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 280, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO63";
    } else if (nose_image_option_menu.value == "Fnose12M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 308, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO64";
    }  else if (nose_image_option_menu.value == "Fnose13M"){
        var img = document.getElementById("western_female_nose_2");
        ctx.drawImage(img, 336, 0, 29, 40, 204, 212, 29, 40);
        id.value += "NO65";
    } else if (nose_image_option_menu.value == "Fnose1Old"){
        var img = document.getElementById("western_female_nose_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO66";
    } else if (nose_image_option_menu.value == "Fnose2Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 32, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO67";
    } else if (nose_image_option_menu.value == "Fnose3Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 64, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO68";
    } else if (nose_image_option_menu.value == "Fnose4Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 96, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO69";
    } else if (nose_image_option_menu.value == "Fnose5Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 128, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO70";
    } else if (nose_image_option_menu.value == "Fnose6Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 160, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO71";
    } else if (nose_image_option_menu.value == "Fnose7Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 192, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO72";
    } else if (nose_image_option_menu.value == "Fnose8Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 224, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO73";
    } else if (nose_image_option_menu.value == "Fnose9Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 256, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO74";
    } else if (nose_image_option_menu.value == "Fnose10Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 288, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO75";
    } else if (nose_image_option_menu.value == "Fnose11Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 320, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO76";
    } else if (nose_image_option_menu.value == "Fnose12Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 352, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO77";
    }  else if (nose_image_option_menu.value == "Fnose13Old"){
        var img = document.getElementById("western_female_nose_3");
        ctx.drawImage(img, 384, 0, 32, 40, 203, 212, 32, 40);
        id.value += "NO78";
    }
}




function UpdateHair(){
    var id = document.getElementById("PortraitID_output");
    var hair_image_option_menu = document.getElementById("hair_image_dropdown");
    var c = document.getElementById("HairCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById("western_male_hair_1");
    if (hair_image_option_menu.value == "hair1"){
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR01";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair2"){
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR02";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair3"){
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR03";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair4"){
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR04";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair5"){
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR05";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair6"){
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR06";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair7"){
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR07";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair8"){
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR08";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair9"){
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR09";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair10"){
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR10";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair11"){
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR11";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair12"){
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR12";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    }  else if (hair_image_option_menu.value == "hair13"){
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR13";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair1M"){
        var img = document.getElementById("western_male_hair_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR14";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair2M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR15";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair3M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR16";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair4M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR17";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair5M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR18";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair6M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 916, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR19";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 916, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair7M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR20";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair8M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR21";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair9M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR22";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair10M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR23";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair11M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR24";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair12M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR152";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    }  else if (hair_image_option_menu.value == "hair13M"){
        var img = document.getElementById("western_male_hair_2");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR26";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_2");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair1Old"){
        var img = document.getElementById("western_male_hair_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR27";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair2Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR28";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair3Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR29";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair4Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR30";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair5Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR31";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair6Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR32";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair7Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR33";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair8Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR34";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair9Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR35";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair10Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR36";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair11Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR37";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair12Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR38";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    }  else if (hair_image_option_menu.value == "hair13Old"){
        var img = document.getElementById("western_male_hair_3");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR39";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_3");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair1"){
        var img = document.getElementById("western_female_hair_1");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR152";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair2"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR41";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair3"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR042";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair4"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR43";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair5"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR44";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair6"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR45";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair7"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR46";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair8"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR47";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair9"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR48";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair10"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR49";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair11"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR50";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair12"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR51";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
    }  else if (hair_image_option_menu.value == "Fhair13"){
        var img = document.getElementById("western_female_hair_1");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR52";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_1");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair1M"){
        var img = document.getElementById("western_female_hair_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR53";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair2M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR54";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair3M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR55";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair4M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR56";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair5M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR57";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair6M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR58";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair7M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR59";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair8M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR60";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair9M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR61";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair10M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR62";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair11M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR63";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair12M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR64";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    }  else if (hair_image_option_menu.value == "Fhair13M"){
        var img = document.getElementById("western_female_hair_2");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR65";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair1Old"){
        var img = document.getElementById("western_female_hair_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR66";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair2Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR67";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair3Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR68";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair4Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR69";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair5Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR70";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair6Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR71";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair7Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR72";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair8Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR73";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair9Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR74";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair10Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR75";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair11Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR76";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "Fhair12Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR77";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    }  else if (hair_image_option_menu.value == "Fhair13Old"){
        var img = document.getElementById("western_female_hair_3");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR78";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_hair_behind_3");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair1V"){
        var img = document.getElementById("western_male_hair_valyrian");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR79";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair2V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR80";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair3V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR81";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair4V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR82";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair5V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR83";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair6V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR84";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair7V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR85";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair8V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR86";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair9V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR87";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair10V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR88";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair11V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR89";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair12V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR90";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    }  else if (hair_image_option_menu.value == "hair13V"){
        var img = document.getElementById("western_male_hair_valyrian");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR91";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair1C"){
        var img = document.getElementById("western_male_hair_cyan");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR92";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair2C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR93";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair3C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR94";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair4C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR95";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair5C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR96";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair6C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR97";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair7C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR98";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair8C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR99";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair9C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR100";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair10C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR101";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair11C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR102";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair12C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR103";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    }  else if (hair_image_option_menu.value == "hair13C"){
        var img = document.getElementById("western_male_hair_cyan");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR104";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair1R"){
        var img = document.getElementById("western_male_hair_red");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR105";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair2R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR106";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair3R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR107";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair4R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR108";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair5R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR109";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair6R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR110";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair7R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR111";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair8R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR112";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair9R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR113";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair10R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR114";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair11R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR115";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
    } else if (hair_image_option_menu.value == "hair12R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR116";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
    }  else if (hair_image_option_menu.value == "hair13R"){
        var img = document.getElementById("western_male_hair_red");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "HR117";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_hair_behind_1");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
    }
}





function UpdateClothes(){
    var id = document.getElementById("PortraitID_output");
    var clothes_image_option_menu = document.getElementById("clothes_image_dropdown");
    var c = document.getElementById("ClothesCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById("western_male_clothes");
    if (clothes_image_option_menu.value == "none"){
        id.value += "CL00";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
    } else if (clothes_image_option_menu.value == "clothes1"){
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL01";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes2"){
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL02";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes3"){
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL03";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes4"){
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL04";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes5"){
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL05";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes6"){
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL06";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes7"){
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL07";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes8"){
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL08";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes9"){
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL09";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes10"){
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL10";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes11"){
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL11";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var c = document.getElementById("HairCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,190);
        ctx.clearRect(0,0,170,480);
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes12"){
        ctx.drawImage(img, 1672, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL12";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_clothes_behind");
        ctx.drawImage(img, 1672, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes1F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL13";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes2F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL14";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes3F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL15";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes4F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL16";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes5F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL17";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes6F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL18";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes7F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL19";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes8F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL20";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes9F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL21";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes10F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL22";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes11F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL23";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var c = document.getElementById("HairCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,190);
        ctx.clearRect(0,0,170,480);
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
    } else if (clothes_image_option_menu.value == "clothes12F"){
        var img = document.getElementById("western_female_clothes");
        ctx.drawImage(img, 1672, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CL24";
        var c = document.getElementById("ClothesBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_clothes_behind");
        ctx.drawImage(img, 1672, 0, 152, 152, 124, 164, 152, 152);
    }
}


function UpdateHeadgear(){
    var id = document.getElementById("PortraitID_output");
    var headgear_image_option_menu = document.getElementById("headgear_image_dropdown");
    var c = document.getElementById("HeadgearCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById("western_male_headgear");
    if (headgear_image_option_menu.value == "none"){
        id.value += "HG00";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
    } else if (headgear_image_option_menu.value == "headgear1"){
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG01";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear2"){
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG02";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear3"){
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG03";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear4"){
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG04";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear5"){
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG05";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear6"){
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG06";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear7"){
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG07";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear8"){
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG08";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear9"){
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG09";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear10"){
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG10";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear11"){
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG11";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var c = document.getElementById("HairCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,190);
        ctx.clearRect(0,0,170,480);
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_behind");
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_male_headgear_mid");
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear1F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG12";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear2F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG13";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 152, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear3F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG14";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 304, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear4F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG15";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 456, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear5F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG16";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 608, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear6F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG17";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 760, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear7F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG18";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 912, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear8F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG19";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 1064, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear9F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG20";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 1216, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear10F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG21";
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 1368, 0, 152, 152, 124, 164, 152, 152);
    } else if (headgear_image_option_menu.value == "headgear11F"){
        var img = document.getElementById("western_female_headgear");
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
        id.value += "HG22";
        var c = document.getElementById("HairBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var c = document.getElementById("HairCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,190);
        ctx.clearRect(0,0,170,480);
        var c = document.getElementById("HeadgearBehindCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_behind");
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
        var c = document.getElementById("HeadgearMidCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,400,480);
        var img = document.getElementById("western_female_headgear_mid");
        ctx.drawImage(img, 1520, 0, 152, 152, 124, 164, 152, 152);
    }
}



function UpdateChin(){
    var id = document.getElementById("PortraitID_output");
    var chin_image_option_menu = document.getElementById("chin_image_dropdown");
    var c = document.getElementById("ChinCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById("western_male_chin_1");
    if (chin_image_option_menu.value == "chin1"){
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CI01";
    } else if (chin_image_option_menu.value == "chin2"){
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI02";
    } else if (chin_image_option_menu.value == "chin3"){
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI03";
    } else if (chin_image_option_menu.value == "chin4"){
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI04";
    } else if (chin_image_option_menu.value == "chin5"){
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI05";
    } else if (chin_image_option_menu.value == "chin6"){
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI06";
    } else if (chin_image_option_menu.value == "chin7"){
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI07";
    } else if (chin_image_option_menu.value == "chin8"){
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI08";
    } else if (chin_image_option_menu.value == "chin9"){
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI09";
    } else if (chin_image_option_menu.value == "chin10"){
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI10";
    } else if (chin_image_option_menu.value == "chin11"){
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI11";
    } else if (chin_image_option_menu.value == "chin12"){
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI12";
    }  else if (chin_image_option_menu.value == "chin13"){
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI13";
    } else if (chin_image_option_menu.value == "chin1M"){
        var img = document.getElementById("western_male_chin_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI14";
    } else if (chin_image_option_menu.value == "chin2M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI15";
    } else if (chin_image_option_menu.value == "chin3M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI16";
    } else if (chin_image_option_menu.value == "chin4M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI17";
    } else if (chin_image_option_menu.value == "chin5M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI18";
    } else if (chin_image_option_menu.value == "chin6M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI19";
    } else if (chin_image_option_menu.value == "chin7M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 916, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI20";
    } else if (chin_image_option_menu.value == "chin8M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI21";
    } else if (chin_image_option_menu.value == "chin9M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI22";
    } else if (chin_image_option_menu.value == "chin10M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI23";
    } else if (chin_image_option_menu.value == "chin11M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI24";
    } else if (chin_image_option_menu.value == "chin12M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI25";
    }  else if (chin_image_option_menu.value == "chin13M"){
        var img = document.getElementById("western_male_chin_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI26";
    } else if (chin_image_option_menu.value == "chin1Old"){
        var img = document.getElementById("western_male_chin_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI27";
    } else if (chin_image_option_menu.value == "chin2Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI28";
    } else if (chin_image_option_menu.value == "chin3Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI29";
    } else if (chin_image_option_menu.value == "chin4Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI30";
    } else if (chin_image_option_menu.value == "chin5Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI31";
    } else if (chin_image_option_menu.value == "chin6Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI32";
    } else if (chin_image_option_menu.value == "chin7Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI33";
    } else if (chin_image_option_menu.value == "chin8Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI34";
    } else if (chin_image_option_menu.value == "chin9Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI35";
    } else if (chin_image_option_menu.value == "chin10Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI36";
    } else if (chin_image_option_menu.value == "chin11Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI37";
    } else if (chin_image_option_menu.value == "chin12Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI38";
    }  else if (chin_image_option_menu.value == "chin13Old"){
        var img = document.getElementById("western_male_chin_3");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI39";
    } else if (chin_image_option_menu.value == "Fchin1"){
        var img = document.getElementById("western_female_chin_1");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI152";
    } else if (chin_image_option_menu.value == "Fchin2"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI41";
    } else if (chin_image_option_menu.value == "Fchin3"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI042";
    } else if (chin_image_option_menu.value == "Fchin4"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI43";
    } else if (chin_image_option_menu.value == "Fchin5"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI44";
    } else if (chin_image_option_menu.value == "Fchin6"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI45";
    } else if (chin_image_option_menu.value == "Fchin7"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI46";
    } else if (chin_image_option_menu.value == "Fchin8"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI47";
    } else if (chin_image_option_menu.value == "Fchin9"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI48";
    } else if (chin_image_option_menu.value == "Fchin10"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI49";
    } else if (chin_image_option_menu.value == "Fchin11"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI50";
    } else if (chin_image_option_menu.value == "Fchin12"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI51";
    }  else if (chin_image_option_menu.value == "Fchin13"){
        var img = document.getElementById("western_female_chin_1");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI52";
    } else if (chin_image_option_menu.value == "Fchin1M"){
        var img = document.getElementById("western_female_chin_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI53";
    } else if (chin_image_option_menu.value == "Fchin2M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI54";
    } else if (chin_image_option_menu.value == "Fchin3M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI55";
    } else if (chin_image_option_menu.value == "Fchin4M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI56";
    } else if (chin_image_option_menu.value == "Fchin5M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI57";
    } else if (chin_image_option_menu.value == "Fchin6M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI58";
    } else if (chin_image_option_menu.value == "Fchin7M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI59";
    } else if (chin_image_option_menu.value == "Fchin8M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI60";
    } else if (chin_image_option_menu.value == "Fchin9M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI61";
    } else if (chin_image_option_menu.value == "Fchin10M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI62";
    } else if (chin_image_option_menu.value == "Fchin11M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI63";
    } else if (chin_image_option_menu.value == "Fchin12M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI64";
    }  else if (chin_image_option_menu.value == "Fchin13M"){
        var img = document.getElementById("western_female_chin_2");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI65";
    } else if (chin_image_option_menu.value == "Fchin1Old"){
        var img = document.getElementById("western_female_chin_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI66";
    } else if (chin_image_option_menu.value == "Fchin2Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI67";
    } else if (chin_image_option_menu.value == "Fchin3Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI68";
    } else if (chin_image_option_menu.value == "Fchin4Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI69";
    } else if (chin_image_option_menu.value == "Fchin5Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI70";
    } else if (chin_image_option_menu.value == "Fchin6Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI71";
    } else if (chin_image_option_menu.value == "Fchin7Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI72";
    } else if (chin_image_option_menu.value == "Fchin8Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI73";
    } else if (chin_image_option_menu.value == "Fchin9Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI74";
    } else if (chin_image_option_menu.value == "Fchin10Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI75";
    } else if (chin_image_option_menu.value == "Fchin11Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI76";
    } else if (chin_image_option_menu.value == "Fchin12Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 1824, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI77";
    }  else if (chin_image_option_menu.value == "Fchin13Old"){
        var img = document.getElementById("western_female_chin_3");
        ctx.drawImage(img, 1976, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CI78";
    }
}

function UpdateCheeks(){
    var id = document.getElementById("PortraitID_output");
    var cheeks_image_option_menu = document.getElementById("cheeks_image_dropdown");
    var c = document.getElementById("CheeksCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById("western_male_cheeks_1");
    if (cheeks_image_option_menu.value == "cheeks1"){
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 124, 164, 152, 152);
        id.value += "CH01";
    } else if (cheeks_image_option_menu.value == "cheeks2"){
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH02";
    } else if (cheeks_image_option_menu.value == "cheeks3"){
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH03";
    } else if (cheeks_image_option_menu.value == "cheeks4"){
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH04";
    } else if (cheeks_image_option_menu.value == "cheeks5"){
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH05";
    } else if (cheeks_image_option_menu.value == "cheeks6"){
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH06";
    } else if (cheeks_image_option_menu.value == "cheeks7"){
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH07";
    } else if (cheeks_image_option_menu.value == "cheeks8"){
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH08";
    } else if (cheeks_image_option_menu.value == "cheeks9"){
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH09";
    } else if (cheeks_image_option_menu.value == "cheeks10"){
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH10";
    } else if (cheeks_image_option_menu.value == "cheeks11"){
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH11";
    } else if (cheeks_image_option_menu.value == "cheeks1M"){
        var img = document.getElementById("western_male_cheeks_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH12";
    } else if (cheeks_image_option_menu.value == "cheeks2M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH13";
    } else if (cheeks_image_option_menu.value == "cheeks3M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH14";
    } else if (cheeks_image_option_menu.value == "cheeks4M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH15";
    } else if (cheeks_image_option_menu.value == "cheeks5M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH16";
    } else if (cheeks_image_option_menu.value == "cheeks6M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH17";
    } else if (cheeks_image_option_menu.value == "cheeks7M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 916, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH18";
    } else if (cheeks_image_option_menu.value == "cheeks8M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH19";
    } else if (cheeks_image_option_menu.value == "cheeks9M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH20";
    } else if (cheeks_image_option_menu.value == "cheeks10M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH21";
    } else if (cheeks_image_option_menu.value == "cheeks11M"){
        var img = document.getElementById("western_male_cheeks_2");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH22";
    } else if (cheeks_image_option_menu.value == "cheeks1Old"){
        var img = document.getElementById("western_male_cheeks_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH23";
    } else if (cheeks_image_option_menu.value == "cheeks2Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH24";
    } else if (cheeks_image_option_menu.value == "cheeks3Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH25";
    } else if (cheeks_image_option_menu.value == "cheeks4Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH26";
    } else if (cheeks_image_option_menu.value == "cheeks5Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH27";
    } else if (cheeks_image_option_menu.value == "cheeks6Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH28";
    } else if (cheeks_image_option_menu.value == "cheeks7Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH29";
    } else if (cheeks_image_option_menu.value == "cheeks8Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH30";
    } else if (cheeks_image_option_menu.value == "cheeks9Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH31";
    } else if (cheeks_image_option_menu.value == "cheeks10Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH32";
    } else if (cheeks_image_option_menu.value == "cheeks11Old"){
        var img = document.getElementById("western_male_cheeks_3");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH33";
    } else if (cheeks_image_option_menu.value == "Fcheeks1"){
        var img = document.getElementById("western_female_cheeks_1");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH34";
    } else if (cheeks_image_option_menu.value == "Fcheeks2"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH35";
    } else if (cheeks_image_option_menu.value == "Fcheeks3"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH036";
    } else if (cheeks_image_option_menu.value == "Fcheeks4"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 456, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH37";
    } else if (cheeks_image_option_menu.value == "Fcheeks5"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH38";
    } else if (cheeks_image_option_menu.value == "Fcheeks6"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH39";
    } else if (cheeks_image_option_menu.value == "Fcheeks7"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH40";
    } else if (cheeks_image_option_menu.value == "Fcheeks8"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH41";
    } else if (cheeks_image_option_menu.value == "Fcheeks9"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH42";
    } else if (cheeks_image_option_menu.value == "Fcheeks10"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH43";
    } else if (cheeks_image_option_menu.value == "Fcheeks11"){
        var img = document.getElementById("western_female_cheeks_1");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH44";
    } else if (cheeks_image_option_menu.value == "Fcheeks1M"){
        var img = document.getElementById("western_female_cheeks_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH45";
    } else if (cheeks_image_option_menu.value == "Fcheeks2M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH46";
    } else if (cheeks_image_option_menu.value == "Fcheeks3M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH47";
    } else if (cheeks_image_option_menu.value == "Fcheeks4M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH48";
    } else if (cheeks_image_option_menu.value == "Fcheeks5M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH49";
    } else if (cheeks_image_option_menu.value == "Fcheeks6M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH50";
    } else if (cheeks_image_option_menu.value == "Fcheeks7M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH51";
    } else if (cheeks_image_option_menu.value == "Fcheeks8M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH52";
    } else if (cheeks_image_option_menu.value == "Fcheeks9M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH53";
    } else if (cheeks_image_option_menu.value == "Fcheeks10M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH54";
    } else if (cheeks_image_option_menu.value == "Fcheeks11M"){
        var img = document.getElementById("western_female_cheeks_2");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH55";
    } else if (cheeks_image_option_menu.value == "Fcheeks1Old"){
        var img = document.getElementById("western_female_cheeks_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH56";
    } else if (cheeks_image_option_menu.value == "Fcheeks2Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 152, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH57";
    } else if (cheeks_image_option_menu.value == "Fcheeks3Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 304, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH58";
    } else if (cheeks_image_option_menu.value == "Fcheeks4Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 608, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH59";
    } else if (cheeks_image_option_menu.value == "Fcheeks5Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 760, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH60";
    } else if (cheeks_image_option_menu.value == "Fcheeks6Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 912, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH61";
    } else if (cheeks_image_option_menu.value == "Fcheeks7Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 1064, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH62";
    } else if (cheeks_image_option_menu.value == "Fcheeks8Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 1216, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH63";
    } else if (cheeks_image_option_menu.value == "Fcheeks9Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 1368, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH64";
    } else if (cheeks_image_option_menu.value == "Fcheeks10Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 1520, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH65";
    } else if (cheeks_image_option_menu.value == "Fcheeks11Old"){
        var img = document.getElementById("western_female_cheeks_3");
        ctx.drawImage(img, 1672, 0, 152, 152, 125, 163, 152, 152);
        id.value += "CH66";
    }
}


function UpdateEyes(){
    var id = document.getElementById("PortraitID_output");
    var eyes_image_option_menu = document.getElementById("eyes_image_dropdown");
    var c = document.getElementById("EyesCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById("western_male_eyes_1");
    if (eyes_image_option_menu.value == "eyes1"){
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY01";
    } else if (eyes_image_option_menu.value == "eyes2"){
        ctx.drawImage(img, 72, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY02";
    } else if (eyes_image_option_menu.value == "eyes3"){
        ctx.drawImage(img, 144, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY03";
    } else if (eyes_image_option_menu.value == "eyes4"){
        ctx.drawImage(img, 216, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY04";
    } else if (eyes_image_option_menu.value == "eyes5"){
        ctx.drawImage(img, 288, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY05";
    } else if (eyes_image_option_menu.value == "eyes6"){
        ctx.drawImage(img, 360, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY06";
    } else if (eyes_image_option_menu.value == "eyes7"){
        ctx.drawImage(img, 432, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY07";
    } else if (eyes_image_option_menu.value == "eyes8"){
        ctx.drawImage(img, 504, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY08";
    } else if (eyes_image_option_menu.value == "eyes9"){
        ctx.drawImage(img, 576, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY09";
    } else if (eyes_image_option_menu.value == "eyes10"){
        ctx.drawImage(img, 648, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY10";
    } else if (eyes_image_option_menu.value == "eyes11"){
        ctx.drawImage(img, 720, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY11";
    } else if (eyes_image_option_menu.value == "eyes12"){
        ctx.drawImage(img, 792, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY12";
    }  else if (eyes_image_option_menu.value == "eyes13"){
        ctx.drawImage(img, 864, 0, 72, 68, 171, 174, 72, 68);
        id.value += "EY13";
    } else if (eyes_image_option_menu.value == "eyes1M"){
        var img = document.getElementById("western_male_eyes_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY14";
    } else if (eyes_image_option_menu.value == "eyes2M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 72, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY15";
    } else if (eyes_image_option_menu.value == "eyes3M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 144, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY16";
    } else if (eyes_image_option_menu.value == "eyes4M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 216, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY17";
    } else if (eyes_image_option_menu.value == "eyes5M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 288, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY18";
    } else if (eyes_image_option_menu.value == "eyes6M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 360, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY19";
    } else if (eyes_image_option_menu.value == "eyes7M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 432, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY20";
    } else if (eyes_image_option_menu.value == "eyes8M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 504, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY21";
    } else if (eyes_image_option_menu.value == "eyes9M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 576, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY22";
    } else if (eyes_image_option_menu.value == "eyes10M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 648, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY23";
    } else if (eyes_image_option_menu.value == "eyes11M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 720, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY24";
    } else if (eyes_image_option_menu.value == "eyes12M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 792, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY25";
    }  else if (eyes_image_option_menu.value == "eyes13M"){
        var img = document.getElementById("western_male_eyes_2");
        ctx.drawImage(img, 864, 0, 72, 60, 170, 182, 72, 60);
        id.value += "EY26";
    } else if (eyes_image_option_menu.value == "eyes1Old"){
        var img = document.getElementById("western_male_eyes_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY27";
    } else if (eyes_image_option_menu.value == "eyes2Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 72, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY28";
    } else if (eyes_image_option_menu.value == "eyes3Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 144, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY29";
    } else if (eyes_image_option_menu.value == "eyes4Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 216, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY30";
    } else if (eyes_image_option_menu.value == "eyes5Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 288, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY31";
    } else if (eyes_image_option_menu.value == "eyes6Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 360, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY32";
    } else if (eyes_image_option_menu.value == "eyes7Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 432, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY33";
    } else if (eyes_image_option_menu.value == "eyes8Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 504, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY34";
    } else if (eyes_image_option_menu.value == "eyes9Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 576, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY35";
    } else if (eyes_image_option_menu.value == "eyes10Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 648, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY36";
    } else if (eyes_image_option_menu.value == "eyes11Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 720, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY37";
    } else if (eyes_image_option_menu.value == "eyes12Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 792, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY38";
    }  else if (eyes_image_option_menu.value == "eyes13Old"){
        var img = document.getElementById("western_male_eyes_3");
        ctx.drawImage(img, 846, 0, 72, 64, 170, 179, 72, 64);
        id.value += "EY39";
    } else if (eyes_image_option_menu.value == "Feyes1"){
        var img = document.getElementById("western_female_eyes_1");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY40";
    } else if (eyes_image_option_menu.value == "Feyes2"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 68, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY41";
    } else if (eyes_image_option_menu.value == "Feyes3"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 136, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY042";
    } else if (eyes_image_option_menu.value == "Feyes4"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 204, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY43";
    } else if (eyes_image_option_menu.value == "Feyes5"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 272, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY44";
    } else if (eyes_image_option_menu.value == "Feyes6"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 340, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY45";
    } else if (eyes_image_option_menu.value == "Feyes7"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 408, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY46";
    } else if (eyes_image_option_menu.value == "Feyes8"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 476, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY47";
    } else if (eyes_image_option_menu.value == "Feyes9"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 544, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY48";
    } else if (eyes_image_option_menu.value == "Feyes10"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 612, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY49";
    } else if (eyes_image_option_menu.value == "Feyes11"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 680, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY50";
    } else if (eyes_image_option_menu.value == "Feyes12"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 748, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY51";
    }  else if (eyes_image_option_menu.value == "Feyes13"){
        var img = document.getElementById("western_female_eyes_1");
        ctx.drawImage(img, 816, 0, 68, 64, 173, 173, 68, 64);
        id.value += "EY52";
    } else if (eyes_image_option_menu.value == "Feyes1M"){
        var img = document.getElementById("western_female_eyes_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY53";
    } else if (eyes_image_option_menu.value == "Feyes2M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 72, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY54";
    } else if (eyes_image_option_menu.value == "Feyes3M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 144, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY55";
    } else if (eyes_image_option_menu.value == "Feyes4M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 216, 0, 72, 64, 170, 172, 72, 54);
        id.value += "EY56";
    } else if (eyes_image_option_menu.value == "Feyes5M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 288, 0, 72, 64, 170, 172, 72, 54);
        id.value += "EY57";
    } else if (eyes_image_option_menu.value == "Feyes6M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 360, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY58";
    } else if (eyes_image_option_menu.value == "Feyes7M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 432, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY59";
    } else if (eyes_image_option_menu.value == "Feyes8M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 504, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY60";
    } else if (eyes_image_option_menu.value == "Feyes9M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 576, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY61";
    } else if (eyes_image_option_menu.value == "Feyes10M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 648, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY62";
    } else if (eyes_image_option_menu.value == "Feyes11M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 720, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY63";
    } else if (eyes_image_option_menu.value == "Feyes12M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 792, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY64";
    }  else if (eyes_image_option_menu.value == "Feyes13M"){
        var img = document.getElementById("western_female_eyes_2");
        ctx.drawImage(img, 864, 0, 72, 64, 170, 172, 72, 64);
        id.value += "EY65";
    } else if (eyes_image_option_menu.value == "Feyes1Old"){
        var img = document.getElementById("western_female_eyes_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 72, 64, 171, 174, 72, 64);
        id.value += "EY66";
    } else if (eyes_image_option_menu.value == "Feyes2Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 72, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY67";
    } else if (eyes_image_option_menu.value == "Feyes3Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 216, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY68";
    } else if (eyes_image_option_menu.value == "Feyes4Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 608, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY69";
    } else if (eyes_image_option_menu.value == "Feyes5Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 288, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY70";
    } else if (eyes_image_option_menu.value == "Feyes6Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 360, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY71";
    } else if (eyes_image_option_menu.value == "Feyes7Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 432, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY72";
    } else if (eyes_image_option_menu.value == "Feyes8Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 504, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY73";
    } else if (eyes_image_option_menu.value == "Feyes9Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 576, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY74";
    } else if (eyes_image_option_menu.value == "Feyes10Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 648, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY75";
    } else if (eyes_image_option_menu.value == "Feyes11Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 720, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY76";
    } else if (eyes_image_option_menu.value == "Feyes12Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 792, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY77";
    }  else if (eyes_image_option_menu.value == "Feyes13Old"){
        var img = document.getElementById("western_female_eyes_3");
        ctx.drawImage(img, 864, 0, 72, 64, 172, 174, 72, 64);
        id.value += "EY78";
    }
}


function UpdateEar(){
    var id = document.getElementById("PortraitID_output");
    var ear_image_option_menu = document.getElementById("ear_image_dropdown");
    var c = document.getElementById("EarCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,480);
    var img = document.getElementById("western_male_ear_1");
    if (ear_image_option_menu.value == "ear1"){
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER01";
    } else if (ear_image_option_menu.value == "ear2"){
        ctx.drawImage(img, 28, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER02";
    } else if (ear_image_option_menu.value == "ear3"){
        ctx.drawImage(img, 56, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER03";
    } else if (ear_image_option_menu.value == "ear4"){
        ctx.drawImage(img, 84, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER04";
    } else if (ear_image_option_menu.value == "ear5"){
        ctx.drawImage(img, 112, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER05";
    } else if (ear_image_option_menu.value == "ear6"){
        ctx.drawImage(img, 140, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER06";
    } else if (ear_image_option_menu.value == "ear7"){
        ctx.drawImage(img, 168, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER07";
    } else if (ear_image_option_menu.value == "ear8"){
        ctx.drawImage(img, 196, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER08";
    } else if (ear_image_option_menu.value == "ear9"){
        ctx.drawImage(img, 224, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER09";
    } else if (ear_image_option_menu.value == "ear10"){
        ctx.drawImage(img, 252, 0, 28, 60, 151, 200, 28, 60);
        id.value += "ER10";
    } else if (ear_image_option_menu.value == "ear1M"){
        var img = document.getElementById("western_male_ear_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 32, 60, 151, 200, 32, 64);
        id.value += "ER11";
    } else if (ear_image_option_menu.value == "ear2M"){
        var img = document.getElementById("western_male_ear_2");
        ctx.drawImage(img, 32, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER12";
    } else if (ear_image_option_menu.value == "ear3M"){
        var img = document.getElementById("western_male_ear_2");
        ctx.drawImage(img, 64, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER13";
    } else if (ear_image_option_menu.value == "ear4M"){
        var img = document.getElementById("western_male_ear_2");
        ctx.drawImage(img, 96, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER14";
    } else if (ear_image_option_menu.value == "ear5M"){
        var img = document.getElementById("western_male_ear_2");
        ctx.drawImage(img, 128, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER15";
    } else if (ear_image_option_menu.value == "ear6M"){
        var img = document.getElementById("western_male_ear_2");
        ctx.drawImage(img, 160, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER16";
    } else if (ear_image_option_menu.value == "ear7M"){
        var img = document.getElementById("western_male_ear_2");
        ctx.drawImage(img, 192, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER17";
    } else if (ear_image_option_menu.value == "ear8M"){
        var img = document.getElementById("western_male_ear_2");
        ctx.drawImage(img, 224, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER18";
    } else if (ear_image_option_menu.value == "ear9M"){
        var img = document.getElementById("western_male_ear_2");
        ctx.drawImage(img, 256, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER19";
    } else if (ear_image_option_menu.value == "ear10M"){
        var img = document.getElementById("western_male_ear_2");
        ctx.drawImage(img, 288, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER20";
    } else if (ear_image_option_menu.value == "ear1Old"){
        var img = document.getElementById("western_male_ear_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER21";
    } else if (ear_image_option_menu.value == "ear2Old"){
        var img = document.getElementById("western_male_ear_3");
        ctx.drawImage(img, 32, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER22";
    } else if (ear_image_option_menu.value == "ear3Old"){
        var img = document.getElementById("western_male_ear_3");
        ctx.drawImage(img, 64, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER23";
    } else if (ear_image_option_menu.value == "ear4Old"){
        var img = document.getElementById("western_male_ear_3");
        ctx.drawImage(img, 96, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER24";
    } else if (ear_image_option_menu.value == "ear5Old"){
        var img = document.getElementById("western_male_ear_3");
        ctx.drawImage(img, 128, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER25";
    } else if (ear_image_option_menu.value == "ear6Old"){
        var img = document.getElementById("western_male_ear_3");
        ctx.drawImage(img, 160, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER26";
    } else if (ear_image_option_menu.value == "ear7Old"){
        var img = document.getElementById("western_male_ear_3");
        ctx.drawImage(img, 192, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER27";
    } else if (ear_image_option_menu.value == "ear8Old"){
        var img = document.getElementById("western_male_ear_3");
        ctx.drawImage(img, 224, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER28";
    } else if (ear_image_option_menu.value == "ear9Old"){
        var img = document.getElementById("western_male_ear_3");
        ctx.drawImage(img, 265, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER29";
    } else if (ear_image_option_menu.value == "ear10Old"){
        var img = document.getElementById("western_male_ear_3");
        ctx.drawImage(img, 288, 0, 32, 64, 151, 200, 32, 64);
        id.value += "ER30";
    } else if (ear_image_option_menu.value == "Fear1"){
        var img = document.getElementById("western_female_ear_1");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER31";
    } else if (ear_image_option_menu.value == "Fear2"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 32, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER32";
    } else if (ear_image_option_menu.value == "Fear3"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 64, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER33";
    } else if (ear_image_option_menu.value == "Fear4"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 204, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER34";
    } else if (ear_image_option_menu.value == "Fear5"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 272, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER35";
    } else if (ear_image_option_menu.value == "Fear6"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 340, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER36";
    } else if (ear_image_option_menu.value == "Fear7"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 408, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER37";
    } else if (ear_image_option_menu.value == "Fear8"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 476, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER38";
    } else if (ear_image_option_menu.value == "Fear9"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 544, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER39";
    } else if (ear_image_option_menu.value == "Fear10"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 612, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER40";
    } else if (ear_image_option_menu.value == "Fear11"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 320, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER41";
    } else if (ear_image_option_menu.value == "Fear12"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 748, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER42";
    }  else if (ear_image_option_menu.value == "Fear13"){
        var img = document.getElementById("western_female_ear_1");
        ctx.drawImage(img, 816, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER43";
    } else if (ear_image_option_menu.value == "Fear1M"){
        var img = document.getElementById("western_female_ear_2");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER44";
    } else if (ear_image_option_menu.value == "Fear2M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 32, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER45";
    } else if (ear_image_option_menu.value == "Fear3M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 64, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER46";
    } else if (ear_image_option_menu.value == "Fear4M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 96, 0, 32, 60, 155, 200, 32, 54);
        id.value += "ER47";
    } else if (ear_image_option_menu.value == "Fear5M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 128, 0, 32, 60, 155, 200, 32, 54);
        id.value += "ER48";
    } else if (ear_image_option_menu.value == "Fear6M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 160, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER49";
    } else if (ear_image_option_menu.value == "Fear7M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 192, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER50";
    } else if (ear_image_option_menu.value == "Fear8M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 224, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER51";
    } else if (ear_image_option_menu.value == "Fear9M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 256, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER52";
    } else if (ear_image_option_menu.value == "Fear10M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 288, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER53";
    } else if (ear_image_option_menu.value == "Fear11M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 320, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER54";
    } else if (ear_image_option_menu.value == "Fear12M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 352, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER55";
    }  else if (ear_image_option_menu.value == "Fear13M"){
        var img = document.getElementById("western_female_ear_2");
        ctx.drawImage(img, 384, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER56";
    } else if (ear_image_option_menu.value == "Fear1Old"){
        var img = document.getElementById("western_female_ear_3");
        // context.drawImage(imageObj, coordinates of crop, coordinates of crop, size of crop, size of crop, position on page, position on page, destWidth, destHeight);
        ctx.drawImage(img, 0, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER57";
    } else if (ear_image_option_menu.value == "Fear2Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 32, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER58";
    } else if (ear_image_option_menu.value == "Fear3Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 64, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER59";
    } else if (ear_image_option_menu.value == "Fear4Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 96, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER60";
    } else if (ear_image_option_menu.value == "Fear5Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 128, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER61";
    } else if (ear_image_option_menu.value == "Fear6Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 160, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER62";
    } else if (ear_image_option_menu.value == "Fear7Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 192, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER63";
    } else if (ear_image_option_menu.value == "Fear8Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 224, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER64";
    } else if (ear_image_option_menu.value == "Fear9Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 256, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER65";
    } else if (ear_image_option_menu.value == "Fear10Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 288, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER66";
    } else if (ear_image_option_menu.value == "Fear11Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 320, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER67";
    } else if (ear_image_option_menu.value == "Fear12Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 352, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER68";
    }  else if (ear_image_option_menu.value == "Fear13Old"){
        var img = document.getElementById("western_female_ear_3");
        ctx.drawImage(img, 384, 0, 32, 60, 155, 200, 32, 60);
        id.value += "ER69";
    }
}

///4.430524084103069e+24 current combinations
//Originally 5996 lines of code