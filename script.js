var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var level = [
{
dir_name: 'a',
points: [32,161,39,186,57,188,74,145,100,62,116,16,112,84,107,131,103,191,101,166,89,143,68,141,52,153,67,171,83,173,107,173,118,173,271,141,252,126,225,137,221,166,237,182,267,182,272,157,273,128,273,160,275,187,292,180,295,166],
canvas_color: '#ff99ff',
text: ['nazwa - a', 'pol. samochód'],
},

{
dir_name: 'b',
points: [49,58,41,35,79,33,122,35,151,37,100,36,96,77,93,121,93,161,92,189,75,194,71,169,73,143,87,122,113,118,130,140,132,175,115,193,92,185,266,143,245,132,227,152,226,180,252,185,268,164,270,105,272,73,277,46,304,34],
canvas_color: '#60ff00',
text: ['nazwa - be', 'pol. banan'],
},

{
dir_name: 'w',
points: [68,47,63,82,58,130,58,166,52,196,38,189,37,151,47,98,72,57,99,47,119,66,117,102,99,109,74,110,104,121,131,144,126,170,108,188,82,191,61,177,224,147,242,121,268,80,283,39,268,33,254,45,254,69,251,121,252,164,260,190,290,186,300,159,298,130,280,125,259,148],
canvas_color: '#9395f9',
text: ['nazwa - we', 'pol. dżem'],
},

{
dir_name: 'g',
points: [45,58,40,41,63,28,105,28,151,28,105,36,95,73,83,111,75,144,64,182,45,197,24,183,229,142,242,123,265,122,265,146,256,171,250,192,275,196,288,181],
canvas_color: '#ffffff',
text: ['nazwa - ge', 'pol. gitara'],
},

{
dir_name: 'd',
points: [71,36,65,85,59,135,49,182,36,189,29,170,59,177,103,187,129,163,145,111,151,73,118,37,55,34,28,46,27,69,277,111,260,100,233,110,240,144,262,148,282,129,282,104,281,147,280,174,279,195,262,203,251,194,258,178,279,154,294,143],
canvas_color: '#cb3467',
text: ['nazwa - de', 'pol. dom'],
},

{
dir_name: 'je',
points: [129,48,114,31,86,25,50,44,47,73,70,93,105,102,87,118,61,131,36,156,32,184,53,201,80,201,113,195,124,166,229,153,256,148,285,139,285,121,263,113,240,118,222,142,233,171,246,185,277,189,297,172],
canvas_color: '#389966',
text: ['nazwa - je', 'pol. jodła'],
},

{
dir_name: 'jo',
points: [128,50,102,35,72,33,47,50,44,88,68,106,105,108,82,125,59,137,39,154,30,181,46,202,72,204,105,196,126,180,132,153,60,18,105,16,237,158,264,151,290,131,276,119,243,116,223,137,240,173,258,189,285,191,303,180,236,90,271,94],
canvas_color: '#ff3109',
text: ['nazwa - jo', 'pol. jeż'],
},

{
dir_name: 'rz',
points: [28,47,28,47,40,42,44,61,45,99,49,142,50,182,41,194,27,182,28,154,50,121,72,98,82,75,94,39,94,83,92,123,92,154,89,193,107,160,116,130,125,99,133,66,143,39,156,56,117,126,127,161,136,191,145,198,159,180,201,139,219,127,221,157,223,186,210,197,209,179,229,159,245,144,259,125,256,161,256,182,255,196,274,169,280,148,293,126,307,142,278,170,289,185,299,200,310,187],
canvas_color: '#0235ff',
text: ['nazwa - że', 'pol. życie'],
},

{
dir_name: 'z',
points: [59,47,87,30,121,30,129,62,117,91,82,91,120,104,139,124,145,161,138,182,102,195,62,190,34,174,33,146,234,110,252,95,277,89,281,110,260,135,243,139,267,147,285,163,281,187,272,204,253,204,253,187,268,168,295,147,306,135],
canvas_color: '#7c7c7c',
text: ['nazwa - ze', 'pol. ziemia'],
},

{
dir_name: 'i',
points: [37,52,54,37,59,65,59,110,57,145,63,186,91,194,121,176,130,140,137,90,139,35,137,87,133,140,132,179,135,192,148,184,228,141,241,128,241,159,242,192,262,199,282,193,290,168,294,133,292,161,291,187,299,197,315,183],
canvas_color: '#cd34fe',
text: ['nazwa - i', 'pol. ikra'],
},

{
dir_name: 'j',
points: [31,43,50,28,54,48,54,82,52,116,46,155,44,191,64,202,87,189,101,157,111,120,123,76,134,41,140,23,138,53,124,93,119,132,118,164,120,193,132,193,144,179,78,16,91,27,106,16,223,139,232,132,232,152,229,184,248,194,263,194,274,171,281,135,276,161,273,188,287,198,296,184,247,108,259,118,271,111],
canvas_color: '#cecd03',
text: ['nazwa - i kratkoje', 'pol. jogurt'],
},

{
dir_name: 'k',
points: [38,39,66,43,64,85,56,123,52,165,43,197,29,186,61,114,72,92,90,60,109,37,130,48,59,125,83,123,100,129,100,154,100,179,109,198,137,175,223,142,237,127,232,147,230,172,224,192,232,171,246,146,258,128,279,137,240,160,258,162,257,176,260,194,279,194,286,180],
canvas_color: '#ffffff',
text: ['nazwa - ka', 'pol. ziemniak'],
},

{
dir_name: 'l',
points: [34,161,46,185,62,193,76,166,92,117,107,77,129,20,130,71,132,127,128,170,135,190,146,180,220,172,230,183,245,166,257,135,266,109,266,134,265,170,271,188,289,173],
canvas_color: '#009a34',
text: ['nazwa - el', 'pol. las'],
},

{
dir_name: 'm',
points: [23,170,28,190,42,175,54,136,65,86,75,52,81,23,80,63,77,105,77,130,76,161,79,187,92,180,99,154,107,110,116,73,124,24,125,49,124,93,123,126,123,157,121,181,135,183,147,168,206,167,219,186,228,167,235,138,242,121,242,136,239,165,241,185,257,168,266,140,269,120,271,150,271,172,273,188,287,180],
canvas_color: '#ff9801',
text: ['nazwa - em', 'pol. mama'],
},

{
dir_name: 'n',
points: [31,42,45,29,44,69,40,115,41,153,40,187,26,194,24,167,25,135,43,119,74,102,93,94,128,63,142,26,131,18,118,29,118,53,115,108,112,150,111,182,127,186,144,172,219,147,228,135,227,156,227,181,225,193,216,191,230,168,255,167,267,148,267,132,260,153,260,180,263,197,278,184],
canvas_color: '#9b9aff',
text: ['nazwa - en', 'pol. noc'],
},

{
dir_name: 'o',
points: [131,101,128,63,118,34,81,22,55,50,45,94,40,152,52,183,91,196,120,177,133,145,132,100,223,125,231,103,267,93,288,107,292,152,285,185,260,192,231,176,224,146,224,126],
canvas_color: '#ff0200',
text: ['nazwa - o', 'pol. jesień'],
},

{
dir_name: 'p',
points: [41,48,38,28,77,23,117,23,149,20,75,41,73,101,66,150,59,193,35,184,31,170,118,40,118,81,117,117,115,177,131,188,144,168,220,133,229,123,229,150,228,175,229,197,232,155,241,125,272,122,277,144,277,171,277,196,295,193,303,177],
canvas_color: '#ffffff',
text: ['nazwa - pe', 'pol. tata'],
},

{
dir_name: 'r',
points: [64,51,62,95,59,152,54,197,31,185,33,84,46,54,91,39,134,55,128,92,101,110,69,113,231,122,238,98,238,119,238,149,236,176,235,195,240,106,261,94,284,108,276,130,275,145,296,137],
canvas_color: '#ffce00',
text: ['nazwa - er', 'pol. praca'],
},

{
dir_name: 's',
points: [132,61,114,27,81,21,48,58,41,111,43,154,60,191,104,194,128,174,140,148,290,128,274,114,241,120,228,154,236,184,265,194,286,180],
canvas_color: '#9a9805',
text: ['nazwa - es', 'pol. pies'],
},

{
dir_name: 't',
points: [40,56,29,40,48,32,88,25,125,25,152,25,67,40,65,87,64,119,57,163,53,198,32,183,28,166,101,40,103,82,103,116,99,149,96,187,136,37,135,78,132,113,132,145,128,182,137,192,152,174,218,147,228,134,227,151,227,175,224,193,234,146,241,135,257,131,263,163,265,185,265,196,263,146,278,132,295,138,297,162,299,184,303,199,316,192],
canvas_color: '#343297',
text: ['nazwa - te', 'pol. '],
},

{
dir_name: 'u',
points: [41,38,64,26,65,52,63,80,83,89,110,80,118,56,126,20,118,83,108,124,96,167,78,193,38,182,25,161,221,115,234,95,232,120,234,143,251,144,272,129,278,102,271,142,263,173,260,197,246,203,226,190,236,171,255,162,281,149],
canvas_color: '#c93498',
text: ['nazwa - u', 'pol. Ural'],
},

{
dir_name: 'f',
points: [77,56,64,41,44,58,43,91,56,98,76,81,78,57,87,49,102,41,124,51,124,81,117,98,96,100,79,85,80,33,77,65,76,103,69,139,61,180,45,197,29,181,246,108,221,110,219,137,239,148,253,131,270,109,300,112,302,135,295,154,268,150,265,130,259,111,255,148,255,179,253,201],
canvas_color: '#7f7f7f',
text: ['nazwa - ef', 'pol. fontanna'],
},


{
dir_name: 'ch',
points: [35,67,43,44,66,43,85,83,90,131,88,162,74,187,49,190,32,170,145,47,124,38,97,41,87,73,88,106,91,148,102,183,135,188,152,168,209,126,240,110,259,133,259,176,225,197,215,176,316,123,297,114,271,123,258,149,262,184,287,191,319,177],
canvas_color: '#c93436',
text: ['nazwa - cha', 'pol. chór'],
},

{
dir_name: 'c',
points: [33,46,49,33,55,62,50,110,50,157,78,177,98,169,112,141,122,106,130,59,134,27,128,81,123,143,122,173,145,162,147,179,146,195,137,205,133,184,153,169,219,133,235,121,231,147,232,172,254,182,281,171,292,135,292,117,294,155,291,184,306,177,303,199,303,210,285,204,298,196,314,188],
canvas_color: '#039a00',
text: ['nazwa - ce', 'pol. car'],
},

{
dir_name: 'cz',
points: [35,66,50,60,55,96,61,134,84,126,107,106,121,57,109,101,105,136,96,180,106,196,131,179,220,140,229,123,247,134,271,129,285,120,279,145,273,169,265,198,285,197,299,185],
canvas_color: '#ce6631',
text: ['nazwa - cze', 'pol. człowiek'],
},

{
dir_name: 'sz',
points: [30,60,44,43,50,72,49,100,46,134,39,169,48,196,75,177,88,138,94,93,101,41,99,78,95,137,93,176,105,194,121,169,132,120,140,65,141,38,139,93,134,133,134,167,138,189,154,175,216,117,216,148,216,179,235,189,248,174,259,139,265,111,264,142,257,175,265,184,282,188,294,165,305,131,307,114,303,142,302,175,304,195,317,186],
canvas_color: '#ffcd02',
text: ['nazwa - sza', 'pol. czapka'],
},

{
dir_name: 'szcz',
points: [23,51,32,45,34,72,34,103,32,142,35,174,58,174,71,155,86,103,90,44,87,89,85,136,89,172,118,175,131,151,138,99,143,39,140,90,140,128,138,170,153,165,153,181,153,200,143,209,134,197,146,187,161,181,205,121,208,147,211,178,232,186,240,176,251,138,254,113,251,147,251,181,277,186,286,173,291,132,291,113,291,157,293,183,303,173,306,191,301,210,291,203,302,189,317,183],
canvas_color: '#03cbff',
text: ['nazwa - szcza', 'pol. kapuśniak'],
},

{
dir_name: 'twardy',
points: [218,72,237,61,258,72,290,64,280,93,261,133,250,172,264,196,302,193,322,166,316,139,279,135],
canvas_color: '#ccfe2d',
text: ['nazwa - twiordyj znak', 'pol. podjazd'],
},

{
dir_name: 'y',
points: [194,78,210,68,211,95,214,131,212,161,212,190,244,194,258,173,251,139,265,137,278,125,283,108,288,80,293,57,288,128,287,165,287,196,312,185,320,166],
canvas_color: '#660064',
text: ['nazwa - y', 'pol. ryba'],
},

{
dir_name: 'miekki',
points: [210,80,233,65,243,44,240,88,236,142,236,182,268,187,294,168,300,119,274,110,245,125],
canvas_color: '#fc0000',
text: ['nazwa - miagkij znak', 'pol. pień'],
},

{
dir_name: 'e',
points: [47,69,58,38,93,24,137,44,146,97,149,147,129,185,74,193,52,174,39,148,87,112,113,111,146,112,232,113,256,100,287,106,291,148,274,189,233,180,256,149,278,151,292,151],
canvas_color: '#ffffff',
text: ['nazwa - e oborotnoje', 'pol. koparka'],
},

{
dir_name: 'ju',
points: [28,59,42,36,45,82,44,141,46,186,37,198,23,182,47,141,76,119,80,135,84,166,88,194,126,187,149,131,151,63,136,26,102,12,74,60,75,117,219,137,235,114,233,145,232,174,233,197,235,153,256,154,259,170,265,187,287,188,306,150,301,119,282,109,257,135,257,152],
canvas_color: '#ca669a',
text: ['nazwa - ju', 'pol. bączek'],
},

{
dir_name: 'ja',
points: [26,171,50,187,75,168,94,136,109,86,109,48,75,38,46,56,43,99,59,125,91,123,102,96,112,50,107,100,102,130,102,168,120,188,141,174,227,168,232,194,263,188,272,168,273,129,257,119,247,140,253,164,267,158,275,122,271,160,277,198,300,183],
canvas_color: '#346864',
text: ['nazwa - ja', 'pol. jabłko'],
},
]

var questions = [
	{'correct': 'a', 'marked': '', 'audio': ''},
	{'correct': 'c', 'marked': '', 'audio': ''},
	{'correct': 'b', 'marked': '', 'audio': ''},
	{'correct': 'a', 'marked': '', 'audio': 'pytania/pytanie4.mp3'},
	{'correct': 'a', 'marked': '', 'audio': ''},
]

var play = ['play.gif', 'play2.gif'];
var ppos = [110, 510, 100, 100];
var ppos_test = [450, 250, 100, 100]
var mouse = {x: 0, y: 0};
var board = {x: 500, y: 400, w: 350, h: 230};
point_size = 4;

points = 0
question_no = 5

button = ['b_in.jpg', 'b_out.jpg']
b1 = [993, 413, 40, 40];
b2 = [993, 465, 40, 40];
b3 = [993, 516, 40, 40];
b4 = [993, 568, 40, 40];
b5 = [993, 619, 40, 40];

a_button = [300, 500, 60, 60]
b_button = [460, 500, 60, 60]
c_button = [620, 500, 60, 60]

var mouseIsDown = false;

var j = 0;	//iterator po punktach
var k = 0;	//iterator po planszach z literami

MODE = 0 //0 oznacza normalny tryb, 1 - tryb dodawania liter
PAGE = 0 //1 - nauka, 2 - test

	$(document).ready(function(){
		$("#game").hide();
		$("#buttons").hide();
		$("#startlearn").click(function(){
		    PAGE = 1
			k = 0
			$("#myCanvas").css('background',"url('oldtv.jpg')")
			draw_canvas()
			$("#start").hide();
			$("#game").fadeIn(1000);
		});
		$("#endlearn").click(function(){
			$("#game").hide();
			$("#start").fadeIn(1000);
		});
		$("#starttest").click(function(){
		    PAGE = 2
			refresh()
			$("#myCanvas").css('background',"url('oldtv_test.png')")
			draw_canvas()
			$("#start").hide();
			$("#game").fadeIn(1000);
		});
	});

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


function mouse_in(pos){
	if(mouse.x > pos[0] && mouse.y > pos[1] && mouse.x < pos[0]+pos[2] && mouse.y < pos[1]+pos[3]){
		return true
	}
	else{
		return false
	}
}

function redraw_button(src_in, src_out, pos){
    var img = new Image;
	if (mouse_in(pos)){
	    img.src = src_in;
	}
	else{
	    img.src = src_out;
	}
	ctx.drawImage(img, pos[0], pos[1], pos[2], pos[3]);
}

c.addEventListener('click', function(){
	if (mouse_in(ppos) && PAGE == 1){
		var audio = new Audio(level[k].dir_name+'/'+level[k].dir_name+'_m.mp3');
		audio.play();
	}
	else if(mouse_in(ppos_test) && PAGE == 2 && questions[k].audio != ''){
	    var audio = new Audio(questions[k].audio)
		audio.play();
	}
	else if(mouse_in(b1)){
	    nextLevel()
	}
	else if(mouse_in(b2)){
	    previousLevel()
	}
	else if(mouse_in(b3)){
	    refresh()
	}
	else if(mouse_in(b4)){
	    if(PAGE == 1){
			$('#starttest').click()
		}else if(PAGE == 2){
			endtest()
		}
	}
	else if(mouse_in(b5)){
	    $('#endlearn').click()
	}
	else if(mouse_in(a_button)){
	    if(questions[k].marked == ''){
			questions[k].marked = 'a'
			draw_canvas()
			if(questions[k].marked == questions[k].correct){points += 1}
		}
	}
	else if(mouse_in(b_button)){
		if(questions[k].marked == ''){
			questions[k].marked = 'b'
			draw_canvas()
			if(questions[k].marked == questions[k].correct){points += 1}
		}
	}
	else if(mouse_in(c_button)){
	    if(questions[k].marked == ''){
			questions[k].marked = 'c'
			draw_canvas()
			if(questions[k].marked == questions[k].correct){points += 1}
		}
	}
	}, false);

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
	
		//ctx.fillStyle=//level[k].canvas_color;
		//ctx.fillRect(0, 0, 700, 500);
        ctx.clearRect ( 0 , 0 , c.width, c.height );
		if(PAGE == 1){
			var img_jpg = new Image;
			img_jpg.src = level[k].dir_name+'/'+level[k].dir_name+'.jpg'
			var img_svg = new Image;
			img_svg.src = level[k].dir_name+'/'+level[k].dir_name+'_1.svg'
			var img_png = new Image;
			img_png.src = level[k].dir_name+'/'+level[k].dir_name+'_s.png'
			var img = new Image;
			img.src = level[k].dir_name+'/'+level[k].dir_name+'_o.png'
			
			var book_img = new Image;
			book_img.src = 'book.gif';
			book_img.onload = function() {
				ctx.drawImage(book_img, board.x, board.y, board.w, board.h);
				drawPoints();
				ctx.font="bold 20px Calibri";
				ctx.fillStyle = 'black';
				ctx.fillText("Odsłuchaj!", 155, 630);
			}
			img_jpg.onload = function() {
				ctx.drawImage(img_jpg, 120, 100, 150, 142);
			}
			img_svg.onload = function() {
				ctx.drawImage(img_svg, 680, 100, 140, 140);
			}
			img.onload = function() {
				ctx.drawImage(img, 380, 110, 200, 200);
			}
			img_png.onload = function() {
				ctx.drawImage(img_png, 380, 275, 200, 100);
			}
			
			ctx.font="bold 25px Calibri";
			ctx.fillStyle = 'black';
			ctx.textAlign = 'left';
			ctx.fillText(level[k].text[0], 120, 270);
			
			ctx.font="bold 20px Calibri";
			ctx.fillStyle = 'black';
			ctx.textAlign = 'center';
			ctx.fillText(level[k].text[1], 480, 360);
			ctx.textAlign = 'left';
			
			var play_img = new Image;
			play_img.src = play[0];
			play_img.onload = function() {
				ctx.drawImage(play_img, ppos[0], ppos[1], ppos[2], ppos[3]);
			}
		}
		else if(PAGE == 2){
		    ctx.textAlign = 'center';
			ctx.font="bold 50px Calibri";
			
			after = ['a', 'b', 'c']

			if(questions[k].marked == ''){
				ctx.fillStyle = 'black';
				ctx.fillText('Pytanie ' + (k+1) + '/' + question_no, 480, 150);
			}
			else if(questions[k].marked == questions[k].correct){
				ctx.fillStyle = 'green';
				ctx.fillText('Poprawna odpowiedź: 1pkt', 480, 150);
				after[after.indexOf(questions[k].marked)] = questions[k].marked+'_z'
			}
			else {
				ctx.fillStyle = 'red';
				ctx.fillText('Błędna odpowiedź: 0pkt', 480, 150);
				after[after.indexOf(questions[k].marked)] = questions[k].marked+'_cz'
				after[after.indexOf(questions[k].correct)] = questions[k].correct+'_z'
			}

			var a_ans = new Image;
			a_ans.src = 'odpowiedzi/'+after[0]+'.jpg'
			var b_ans = new Image;
			b_ans.src = 'odpowiedzi/'+after[1]+'.jpg'
			var c_ans = new Image;
			c_ans.src = 'odpowiedzi/'+after[2]+'.jpg'
			question = new Image;
			question.src = 'pytania/pytanie'+(k+1)+'.png'
			
			question.onload = function() {
				ctx.drawImage(question, 50, 150, 881, 350);
			}
			a_ans.onload = function() {
				ctx.drawImage(a_ans, a_button[0], a_button[1], a_button[2], a_button[3]);
			}
			b_ans.onload = function() {
				ctx.drawImage(b_ans, b_button[0], b_button[1], b_button[2], b_button[3]);
			}
			c_ans.onload = function() {
				ctx.drawImage(c_ans, c_button[0], c_button[1], c_button[2], c_button[3]);
			}
			
			if(questions[k].audio != ''){
				var play_img = new Image;
				play_img.src = play[0];
				play_img.onload = function() {
					ctx.drawImage(play_img, ppos_tes[0], ppos_test[1], ppos_test[2], ppos_test[3]);
				}
		    }
		}
}

lista = []

function draw() {
        if(PAGE == 1){
			// czy mysz na przycisku play
			redraw_button(play[1], play[0], ppos)
		}
		else if(PAGE == 2 && questions[k].marked == ''){
		    redraw_button('odpowiedzi/a_n.jpg', 'odpowiedzi/a.jpg', a_button)
			redraw_button('odpowiedzi/b_n.jpg', 'odpowiedzi/b.jpg', b_button)
			redraw_button('odpowiedzi/c_n.jpg', 'odpowiedzi/c.jpg', c_button)
			
		}
		if(PAGE == 2 && questions[k].audio != ''){redraw_button(play[1], play[0], ppos_test)}
		//czy mysz na przycisku bocznym
		redraw_button(button[0], button[1], b1)
		redraw_button(button[0], button[1], b2)
		redraw_button(button[0], button[1], b3)
		redraw_button(button[0], button[1], b4)
		redraw_button(button[0], button[1], b5)
		
		if(mouse.x > board.x+10 && mouse.y>board.y+10 && mouse.x < board.x+board.w-10 && mouse.y < board.y+board.h-10 && PAGE == 1){
			
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
	if((k < level.length-1 && PAGE ==1) || (k<question_no-1 && PAGE == 2)){
		k++;
		draw_canvas();
	}
}

function refresh(){
    if(PAGE == 2){
		k=0;
		points=0;
		for (i = 0; i < questions.length; ++i) {
			questions[i].marked = '';
		}
	}
        lista = []
	draw_canvas();
}

function endtest(){
	ctx.clearRect ( 0 , 0 , c.width, c.height );
	k=question_no
    ctx.textAlign = 'center';
	ctx.font="bold 80px Calibri";
	ctx.fillStyle = 'black';
	ctx.fillText('Zdobyte punkty: ' + points + '/' + question_no, 480, 350);
}