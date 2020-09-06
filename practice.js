

var m_letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var num;
var m_ans;
var ans;
var tmp;
var time = "∞";
var score = 0;

function start(){
	$('#rule').hide();
	$('#back').show();
	$('#m_score').hide();
	$('#start').hide();
	$('#graph').show();
	shuffle();
	count.innerHTML = time;
	document.addEventListener('keydown', (event) => {
		var keyName = event.key;
		keyName = keyName.toUpperCase();
		if(keyName==ans)
		{
		score += 1;
		shuffle();
		}
	else
		return;
	}, false);
	//var m_var = window.setInterval("m_time()" , 1000);
}

function shuffle(){
	tmp = num;
	num = Math.floor(Math.random() * m_letter.length);
	if(num == tmp)
		shuffle();
	ans = m_letter[num];
	question.innerHTML = ans;
	document.getElementById("pic").setAttribute("src",ans + ".JPG");
}

/*function check(x){
	m_ans = document.getElementById(x).value;
	if(m_ans==ans)
	{
		document.getElementById("name").setAttribute("value","");
		shuffle();
	}
	else
		return;
}*/

function m_time(){
	if(time == 0){
		time = 0;
		count.innerHTML = "0";
		$('#graph').hide();
		m_score.innerHTML = "Your score is " + score + "!!!";
		$('#m_score').show();
		return;
	}
	time -= 1;
	count.innerHTML = time;
}

function setup(){
	$('#graph').hide();
	$('#back').hide();
	var startButton = document.getElementById( "start" );
		startButton.addEventListener( "click", start, false );
}

function mouseOver()
{
document.getElementById('start').setAttribute('src',"gamestart2.jpg");
}
function mouseOut()
{
document.getElementById('start').setAttribute('src',"gamestart1.jpg");
}