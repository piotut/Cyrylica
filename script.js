var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var level = [
{
dir_name: 'a',
points: [],
canvas_color: '#ff99ff',
text: ['test1', 'test2'],
},

{
dir_name: 'b',
points: [],
canvas_color: '#60ff00',
text: ['', ''],
},

{
dir_name: 'w',
points: [],
canvas_color: '#9395f9',
text: ['', ''],
},

{
dir_name: 'g',
points: [],
canvas_color: '#330000',
text: ['', ''],
},

{
dir_name: 'd',
points: [],
canvas_color: '#cb3467',
text: ['', ''],
},

{
dir_name: 'je',
points: [],
canvas_color: '#389966',
text: ['', ''],
},

{
dir_name: 'jo',
points: [],
canvas_color: '#ff3109',
text: ['', ''],
},

{
dir_name: 'rz',
points: [],
canvas_color: '#0235ff',
text: ['', ''],
},

{
dir_name: 'z',
points: [],
canvas_color: '#7c7c7c',
text: ['', ''],
},

{
dir_name: 'i',
points: [],
canvas_color: '#cd34fe',
text: ['', ''],
},

{
dir_name: 'j',
points: [],
canvas_color: '#cecd03',
text: ['', ''],
},

{
dir_name: 'k',
points: [],
canvas_color: '#660002',
text: ['', ''],
},

{
dir_name: 'l',
points: [],
canvas_color: '#009a34',
text: ['', ''],
},

{
dir_name: 'm',
points: [],
canvas_color: '#ff9801',
text: ['', ''],
},

{
dir_name: 'n',
points: [],
canvas_color: '#9b9aff',
text: ['', ''],
},

{
dir_name: 'o',
points: [],
canvas_color: '#ff0200',
text: ['', ''],
},

{
dir_name: 'p',
points: [],
canvas_color: '#000000',
text: ['', ''],
},

{
dir_name: 'r',
points: [],
canvas_color: '#ffce00',
text: ['', ''],
},

{
dir_name: 's',
points: [],
canvas_color: '#9a9805',
text: ['', ''],
},

{
dir_name: 't',
points: [],
canvas_color: '#343297',
text: ['', ''],
},

{
dir_name: 'u',
points: [],
canvas_color: '#c93498',
text: ['', ''],
},

{
dir_name: 'f',
points: [],
canvas_color: '#7f7f7f',
text: ['', ''],
},


{
dir_name: 'ch',
points: [],
canvas_color: '#c93436',
text: ['', ''],
},

{
dir_name: 'c',
points: [],
canvas_color: '#039a00',
text: ['', ''],
},

{
dir_name: 'cz',
points: [],
canvas_color: '#ce6631',
text: ['', ''],
},

{
dir_name: 'sz',
points: [],
canvas_color: '#ffcd02',
text: ['', ''],
},

{
dir_name: 'szcz',
points: [],
canvas_color: '#03cbff',
text: ['', ''],
},

{
dir_name: 'twardy',
points: [],
canvas_color: '#ccfe2d',
text: ['', ''],
},

{
dir_name: 'y',
points: [],
canvas_color: '#660064',
text: ['', ''],
},

{
dir_name: 'miekki',
points: [],
canvas_color: '#fc0000',
text: ['', ''],
},

{
dir_name: 'e',
points: [],
canvas_color: '#000000',
text: ['', ''],
},

{
dir_name: 'ju',
points: [],
canvas_color: '#ca669a',
text: ['', ''],
},

{
dir_name: 'ja',
points: [],
canvas_color: '#346864',
text: ['', ''],
}
			]
var play = ['play.gif', 'play2.gif'];
var ppos = [10, 450, 40, 40];
var mouse = {x: 0, y: 0};
var board = {x: 395, y: 295, w: 300, h: 200};
point_size = 4;


var mouseIsDown = false;

var j = 0;	//iterator po punktach
var k = 0;	//iterator po planszach z literami

MODE = 0 //0 oznacza normalny tryb, 1 - tryb dodawania liter

document.addEventListener('mousemove', function(e){
	var rect = c.getBoundingClientRect();
    mouse.x = (e.clientX || e.pageX) - rect.left; 
    mouse.y = (e.clientY || e.pageY) - rect.top;
}, false);

if(MODE==0){
	c.addEventListener("mousemove", draw);
}
else{
	c.addEventListener("mousedown", draw);
}

c.addEventListener('click', function(){
	if (mouse.x > ppos[0] && mouse.y > ppos[1] && mouse.x < ppos[0]+ppos[2] && mouse.y < ppos[1]+ppos[3]){
		var audio = new Audio(level[k].dir_name+'/'+level[k].dir_name+'_m.mp3');
		audio.play();
	}}, false);

c.onmousedown = function(e){
    mouseIsDown = true;
};
c.onmouseup = function(e){
    mouseIsDown = false;
};

function drawSinglePoint(x, y, size, color){
	//ctx.fillRect(x+board.x-size/2,y+board.y-size/2,size,size);
	ctx.beginPath();
    ctx.arc(x+board.x, y+board.y, size, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
};

function drawPoints(){
	for(var i=0; i<level[k].points.length; i+=2){
		ctx.fillStyle = "#000000";
		drawSinglePoint(level[k].points[i], level[k].points[i+1], point_size/2);
	}
	
	ctx.fillStyle = "#000000";
	drawSinglePoint(level[k].points[0], level[k].points[1], point_size, 'red');
	
}
	
function draw_canvas(){
		j = 0;	//iterator po punktach
	
		ctx.fillStyle=level[k].canvas_color;
		ctx.fillRect(0, 0, 700, 500);

		var img_jpg = new Image;
		img_jpg.src = level[k].dir_name+'/'+level[k].dir_name+'.jpg'
		var img_svg = new Image;
		img_svg.src = level[k].dir_name+'/'+level[k].dir_name+'_1.svg'
		var img_png = new Image;
		img_png.src = level[k].dir_name+'/'+level[k].dir_name+'_s.png'
		
		var book_img = new Image;
		book_img.src = 'book.gif';
		book_img.onload = function() {
			ctx.drawImage(book_img, board.x, board.y, board.w, board.h);
			drawPoints();
			ctx.font="bold 20px Calibri";
			ctx.fillStyle = 'black';
			ctx.fillText("Odsłuchaj!", 60, 480);
		}
		img_jpg.onload = function() {
			ctx.drawImage(img_jpg, 10, 10, 150, 142);
		}
		img_svg.onload = function() {
			ctx.drawImage(img_svg, 530, 10, 140, 140);
		}
		img_png.onload = function() {
			ctx.drawImage(img_png, 220, 100, 250, 150);
		}
		var play_img = new Image;
		play_img.src = play[0];
		play_img.onload = function() {
			ctx.drawImage(play_img, ppos[0], ppos[1], ppos[2], ppos[3]);
		}
		
}

lista = []

function draw() {
		var img = new Image;
		if (mouse.x > ppos[0] && mouse.y > ppos[1] && mouse.x < ppos[0]+ppos[2] && mouse.y < ppos[1]+ppos[3]){
			img.src = play[1];
			ctx.drawImage(img, ppos[0], ppos[1], ppos[2], ppos[3]);
		}
		else{
			img.src = play[0];
			ctx.drawImage(img, ppos[0], ppos[1], ppos[2], ppos[3]);
		}
		if(mouse.x > board.x+10 && mouse.y>board.y+10 && mouse.x < board.x+board.w-10 && mouse.y < board.y+board.h-10){
			
			document.getElementById("myCanvas").style.cursor = "crosshair";
			
			if(MODE==0){
				if(!mouseIsDown) return;
			}
			drawSinglePoint(mouse.x-board.x, mouse.y-board.y, point_size/2, 'black');
			if(MODE!=0){
				lista.push(mouse.x-board.x);
				lista.push(mouse.y-board.y);
				document.getElementById("test4").innerHTML=lista;
			}
			if(mouse.x < level[k].points[j]+board.x+5 && mouse.x > level[k].points[j]+board.x-5 && mouse.y < level[k].points[j+1]+board.y+5 && mouse.y > level[k].points[j+1]+board.y-5){
				drawSinglePoint(level[k].points[j+2], level[k].points[j+3], point_size, 'red');
				drawSinglePoint(level[k].points[j], level[k].points[j+1], point_size, 'black');
				j=j+2;
				if(j==level[k].points.length){mouseIsDown = false; alert('nagroda byc musi');}
				if(j==level[k].points.length && k==level.length-1){mouseIsDown = false; alert('brawo, ukonczyles caly kurs, sprobuj rozwiazac test');}
			}
		} else {
			document.getElementById("myCanvas").style.cursor = "auto";
		}
};

function previousLevel(){
	if(k > 0){
		k--;
		draw_canvas();
	}
}

function nextLevel(){
	if(k < level.length-1){
		k++;
		draw_canvas();
	}
}

function moreInfo(){
	alert('')
}

function refresh(){
	draw_canvas();
}

draw_canvas();