var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var level = [
{
dir_name: 'a',
points: [],
canvas_color: '#ff99ff',
text: ['nazwa - a', 'pol. samochód'],
},

{
dir_name: 'b',
points: [],
canvas_color: '#60ff00',
text: ['nazwa - be', 'pol. banan'],
},

{
dir_name: 'w',
points: [],
canvas_color: '#9395f9',
text: ['nazwa - we', 'pol. dżem'],
},

{
dir_name: 'g',
points: [],
canvas_color: '#ffffff',
text: ['nazwa - ge', 'pol. gitara'],
},

{
dir_name: 'd',
points: [],
canvas_color: '#cb3467',
text: ['nazwa - de', 'pol. dom'],
},

{
dir_name: 'je',
points: [],
canvas_color: '#389966',
text: ['nazwa - je', 'pol. jodła'],
},

{
dir_name: 'jo',
points: [],
canvas_color: '#ff3109',
text: ['nazwa - jo', 'pol. jeż'],
},

{
dir_name: 'rz',
points: [],
canvas_color: '#0235ff',
text: ['nazwa - że', 'pol. życie'],
},

{
dir_name: 'z',
points: [],
canvas_color: '#7c7c7c',
text: ['nazwa - ze', 'pol. ziemia'],
},

{
dir_name: 'i',
points: [],
canvas_color: '#cd34fe',
text: ['nazwa - i', 'pol. ikra'],
},

{
dir_name: 'j',
points: [],
canvas_color: '#cecd03',
text: ['nazwa - i kratkoje', 'pol. jogurt'],
},

{
dir_name: 'k',
points: [],
canvas_color: '#ffffff',
text: ['nazwa - ka', 'pol. ziemniak'],
},

{
dir_name: 'l',
points: [],
canvas_color: '#009a34',
text: ['nazwa - el', 'pol. las'],
},

{
dir_name: 'm',
points: [],
canvas_color: '#ff9801',
text: ['nazwa - em', 'pol. mama'],
},

{
dir_name: 'n',
points: [],
canvas_color: '#9b9aff',
text: ['nazwa - en', 'pol. noc'],
},

{
dir_name: 'o',
points: [],
canvas_color: '#ff0200',
text: ['nazwa - o', 'pol. jesień'],
},

{
dir_name: 'p',
points: [],
canvas_color: '#ffffff',
text: ['nazwa - pe', 'pol. tata'],
},

{
dir_name: 'r',
points: [],
canvas_color: '#ffce00',
text: ['nazwa - er', 'pol. praca'],
},

{
dir_name: 's',
points: [],
canvas_color: '#9a9805',
text: ['nazwa - es', 'pol. pies'],
},

{
dir_name: 't',
points: [],
canvas_color: '#343297',
text: ['nazwa - te', 'pol. '],
},

{
dir_name: 'u',
points: [],
canvas_color: '#c93498',
text: ['nazwa - u', 'pol. Ural'],
},

{
dir_name: 'f',
points: [],
canvas_color: '#7f7f7f',
text: ['nazwa - ef', 'pol. fontanna'],
},


{
dir_name: 'ch',
points: [],
canvas_color: '#c93436',
text: ['nazwa - cha', 'pol. chór'],
},

{
dir_name: 'c',
points: [],
canvas_color: '#039a00',
text: ['nazwa - ce', 'pol. car'],
},

{
dir_name: 'cz',
points: [],
canvas_color: '#ce6631',
text: ['nazwa - cze', 'pol. człowiek'],
},

{
dir_name: 'sz',
points: [],
canvas_color: '#ffcd02',
text: ['nazwa - sza', 'pol. czapka'],
},

{
dir_name: 'szcz',
points: [],
canvas_color: '#03cbff',
text: ['nazwa - szcza', 'pol. kapuśniak'],
},

{
dir_name: 'twardy',
points: [],
canvas_color: '#ccfe2d',
text: ['nazwa - twiordyj znak', 'pol. podjazd'],
},

{
dir_name: 'y',
points: [],
canvas_color: '#660064',
text: ['nazwa - y', 'pol. ryba'],
},

{
dir_name: 'miekki',
points: [],
canvas_color: '#fc0000',
text: ['nazwa - miagkij znak', 'pol. pień'],
},

{
dir_name: 'e',
points: [],
canvas_color: '#ffffff',
text: ['nazwa - e oborotnoje', 'pol. koparka'],
},

{
dir_name: 'ju',
points: [],
canvas_color: '#ca669a',
text: ['nazwa - ju', 'pol. bączek'],
},

{
dir_name: 'ja',
points: [],
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