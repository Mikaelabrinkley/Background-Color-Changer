
function setup() {
  createCanvas(400,400);
background ("black")
}

function draw() 
{
  
  if (keyIsDown(LEFT_ARROW)){
    background("grey")

  }
  if (keyIsDown(RIGHT_ARROW)){
    background("purple")
  }
  if (keyIsDown(UP_ARROW)){
    background("red")
  } if (keyIsDown(DOWN_ARROW)){
    background("blue")
  }

}




