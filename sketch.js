/*
The case of the Python Syndicate
Stage 4

Officer: 7397196
CaseNum: 301-3-52817837-7397196

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var rocky_kray_img;
var robbie_kray_img;
var pawel_karpinski_img;
var bones_karpinski_img;
var anna_karpinski_img;
var countess_hamilton_img;

var robbie_kray_object;


//declare your new objects below


var rocky_kray_x_loc = 115;
var rocky_kray_y_loc = 40;
var pawel_karpinski_x_loc = 701;
var pawel_karpinski_y_loc = 40;
var bones_karpinski_x_loc = 115;
var bones_karpinski_y_loc = 309;
var anna_karpinski_x_loc = 408;
var anna_karpinski_y_loc = 309;
var countess_hamilton_x_loc = 701;
var countess_hamilton_y_loc = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_img = loadImage("krayBrothers1.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	countess_hamilton_img = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbie_kray_object = {
		x: 408,
		y: 40,
		image: robbie_kray_img
	};



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rocky_kray_img, rocky_kray_x_loc, rocky_kray_y_loc);
	image(robbie_kray_object.image, robbie_kray_object.x, robbie_kray_object.y);
	image(pawel_karpinski_img, pawel_karpinski_x_loc, pawel_karpinski_y_loc);
	image(bones_karpinski_img, bones_karpinski_x_loc, bones_karpinski_y_loc);
	image(anna_karpinski_img, anna_karpinski_x_loc, anna_karpinski_y_loc);
	image(countess_hamilton_img, countess_hamilton_x_loc, countess_hamilton_y_loc);


}