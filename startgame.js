
var m_article = "Anyone who reads Old and Middle English literary texts will be familiar with the brown volumes the with the symbol jewel embossed on the front cover Most of works attributed King or to Aelfric along with some those by bishop and much anonymous prose and verse from the pre-Conquest period are to be found within the society three series all surviving medieval drama most middle English romances much religious secular prose verse including works John most of print all find their place in publications without edition study medieval English text would hardly be possible dog cat apple cookie animal bag countinous beautiful people human teacher simultaneously always cute adorable pratice perfect jacket air water elephant haur milk color attribute element America Taiwan Taipei midnight selfish policy scurity obese gaint refrigerator control Christmas Happy New Year garbage store package airplane traffic introduce chair table door possible incredible fantastic"
var m_letter;
var num;
var m_ans;
var ans;
var tmp;
var time = 60;
var score = 0;
var correct;
var wpm = 0;

function start(){
	$('#m_score').hide();
	$('#back').show();
	$('#start').hide();
	$('#rule').hide();
	$('#graph').show();
	$('#m_wpm').show();
	m_letter = m_article.split(" ");
	shuffle();
	count.innerHTML = time;
	m_wpm.innerHTML = "WPM : 0"
	document.addEventListener('keydown', (event) => {
		var keyName = event.key;
		console.log(keyName);
		word.innerHTML="";
		//keyName = keyName.toUpperCase();
		console.log(keyName);
		i=0;
		if(keyName==ans[correct]){
			correct++;
		}
		else if(keyName=="Shift"){}
		else
		{
			if(time!=0)
			wrongsound.play();
			correct=0;
		}
		for(i=0;i<correct;i++)
			word.innerHTML+="<span>"+ans[i]+"</span>";
		for(i=correct;i<ans.length;i++)
			word.innerHTML+=ans[i];
		if(correct == ans.length)
		{
			correctsound.play();
			wpm++;
			score+=correct;;
			grade.innerHTML = score;
			shuffle();
		}
	}, false);
	window.setInterval("m_time()" , 1000);
}

function shuffle(){
	word.innerHTML="";
	correct = 0;
	num = Math.floor(Math.random() * m_letter.length)
	ans = m_letter[num].split("");
	for(i = 0;i<ans.length;i++)
		word.innerHTML += ans[i];
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
		$('#fb').show();
		m_score.innerHTML = "WPM : <span>" + Math.ceil(wpm/(60-time)*60) + "</span><br>Your score is : <span>" + score + "</span>";
		$('#m_score').show();
		$('#m_wpm').hide();
		return;
	}
	if(time!=60)
	m_wpm.innerHTML = "WPM : " + Math.ceil(wpm/(60-time)*60);
	if(time==10)
		sec.play();
	time -= 1;
	count.innerHTML = time;
}

function setup(){
	$('#back').hide();
	$('#fb').hide();
	$('#m_wpm').hide();
	$('#graph').hide();
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