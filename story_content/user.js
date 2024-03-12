function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5d48iXYbgIm":
        Script1();
        break;
      case "5ilCYJKyiZE":
        Script2();
        break;
      case "5jZ1BzlEvBQ":
        Script3();
        break;
      case "6SX4U1coJoh":
        Script4();
        break;
      case "6naTUhv9W3R":
        Script5();
        break;
      case "5rXlhZ9ohWl":
        Script6();
        break;
      case "5tzeEs2ZdWq":
        Script7();
        break;
      case "6jxzSzCPZfv":
        Script8();
        break;
      case "5YOCkwQ2uvG":
        Script9();
        break;
      case "5eZXfB16BsJ":
        Script10();
        break;
      case "6KNavCN0Df5":
        Script11();
        break;
      case "6ctR5YXGzsR":
        Script12();
        break;
      case "5Yj2Oeoh8U1":
        Script13();
        break;
      case "6m4CrqRv8YG":
        Script14();
        break;
      case "61KnS6XTCJJ":
        Script15();
        break;
      case "6j7LTRve1KZ":
        Script16();
        break;
      case "6mOOyg1Kcpx":
        Script17();
        break;
      case "5ZTEqneuWK2":
        Script18();
        break;
      case "6QXyDFCevey":
        Script19();
        break;
      case "6rKwPFEuk2M":
        Script20();
        break;
      case "6YPNIsWQUGG":
        Script21();
        break;
      case "5ZQsqRuGafw":
        Script22();
        break;
      case "5Xy2rbWqPph":
        Script23();
        break;
      case "6o9G8Bc5xc0":
        Script24();
        break;
      case "5ZdN4luPT6I":
        Script25();
        break;
      case "6k15bvBICWj":
        Script26();
        break;
      case "5uoOn0VwvfC":
        Script27();
        break;
      case "6oTG0lKv0o5":
        Script28();
        break;
      case "6XokkQnzT5A":
        Script29();
        break;
      case "6JbWz52KI2v":
        Script30();
        break;
      case "6PEtXrsTDcc":
        Script31();
        break;
      case "6IZe6SB9a4L":
        Script32();
        break;
      case "6Ct0557D8Po":
        Script33();
        break;
      case "5f52uNDLybT":
        Script34();
        break;
  }
}

function Script1()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script2()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script3()
{
  var player = GetPlayer();
var players = player.GetVar("players");
var ps=0;
var nop_s=0;
var ps_w=0;
var nop_s_w=0;
if(players=3){
ps=2;
}
else if(players=4){
ps=3;
}
else{
ps=1;
}
nop_s=0;
ps_w=1;
nop_s_w=0;
	


player.SetVar("ps",ps);
player.SetVar("nop_s",nop_s);
player.SetVar("ps_w",ps_w);
player.SetVar("nop_s_w",nop_s_w);
}

function Script4()
{
  var player = GetPlayer();
var sc=0;
var at=0;
var per1=0;
var per2=0;
var per3=0;
var per4=0;

per4=player.GetVar("per_4");

sc=player.GetVar("quizcorrect_1");
at=player.GetVar("quizanswered_1");
per1=sc*100/at;
player.SetVar("per_1",per1);

sc=player.GetVar("quizcorrect_2");
at=player.GetVar("quizanswered_2");
per2=sc*100/at;
player.SetVar("per_2",per2);

var arr = [per1,per2,per3,per4];
var max = Math.max(...arr);
var index = arr.indexOf(max);
player.SetVar("highper",max);
}

function Script5()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script6()
{
  var player1 = GetPlayer();
player1.SetVar("q1","Mumbai is Located in which country");
player1.SetVar("q1_1","India");
player1.SetVar("q1_2","Nepal");
player1.SetVar("q1_3","Myanmmar");
player1.SetVar("q1_4","Sri Lanka");
}

function Script7()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script8()
{
  var player2 = GetPlayer();
player2.SetVar("q2","India is also Known as Bharat");
player2.SetVar("q1_1","Yes");
player2.SetVar("q1_2","No");
player2.SetVar("q1_3","");
player2.SetVar("q1_4","");
}

function Script9()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script10()
{
  var player3 = GetPlayer();
player3.SetVar("q3","Which is the largest coffee-producing state of India?");
player3.SetVar("q1_1","Karnataka");
player3.SetVar("q1_2","Kerala");
player3.SetVar("q1_3","");
player3.SetVar("q1_4","");
}

function Script11()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script12()
{
  var player2 = GetPlayer();
player2.SetVar("q4","Yakshagana is the folk dance of which state?");
player2.SetVar("q1_1","Karnataka");
player2.SetVar("q1_2","Tamil Nadu");
player2.SetVar("q1_3","");
player2.SetVar("q1_4","");
}

function Script13()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script14()
{
  var player2 = GetPlayer();
player2.SetVar("q5","Which city is known as the “summer capital” of Jammu and Kashmir?");
player2.SetVar("q1_1","Srinagar");
player2.SetVar("q1_2","Jammu");
player2.SetVar("q1_3","Shimla");
player2.SetVar("q1_4","");
}

function Script15()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script16()
{
  var player = GetPlayer();
player.SetVar("q6","Which of these holds the title of the largest cricket stadium in the world?");
player.SetVar("q1_1","Narendra Modi Stadium, Ahmedabad");
player.SetVar("q1_2","Wankhede Stadium, Mumbai");
player.SetVar("q1_3","");
player.SetVar("q1_4","");
}

function Script17()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script18()
{
  var player7 = GetPlayer();
player7.SetVar("q7","The city of Amritsar is famous for which holy destination?");
player7.SetVar("q1_1","Golden Temple");
player7.SetVar("q1_2","Vaishnodevi Temple");
player7.SetVar("q1_3","");
player7.SetVar("q1_4","");
}

function Script19()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script20()
{
  var player8 = GetPlayer();
player8.SetVar("q8","A festival of nine nights, fondly celebrated in Gujarat by dancing as a form of worship to Goddess Durga.");
player8.SetVar("q1_1","Navratri");
player8.SetVar("q1_2","Baisakhi");
player8.SetVar("q1_3","Uttarayan");
player8.SetVar("q1_4","");
}

function Script21()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script22()
{
  var player2 = GetPlayer();
player2.SetVar("q9","Which of the following would you NOT see in Kerala?");
player2.SetVar("q1_1","Desert");
player2.SetVar("q1_2","Beaches");
player2.SetVar("q1_3","");
player2.SetVar("q1_4","");
}

function Script23()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script24()
{
  var player2 = GetPlayer();
player2.SetVar("q10","Which city of India would you be in if you are visiting the Victoria Memorial?");
player2.SetVar("q1_1","Kolkata");
player2.SetVar("q1_2","Delhi");
player2.SetVar("q1_3","Bengaluru");
player2.SetVar("q1_4","");
}

function Script25()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script26()
{
  var player2 = GetPlayer();
player2.SetVar("q10","Which is not a criteria to close the current account");
player2.SetVar("q1_1","The customer should not have a pending balance");
player2.SetVar("q1_2","The customer must be in credit with no negative balance");
player2.SetVar("q1_3","Customer should not owe any fees and charges");
player2.SetVar("q1_4","");
}

function Script27()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script28()
{
  var player2 = GetPlayer();
player2.SetVar("q10","What is the daily withdrawal limit at the post office?");
player2.SetVar("q1_1","£300 per day");
player2.SetVar("q1_2","£250 per day");
player2.SetVar("q1_3","£100 per day");
player2.SetVar("q1_4","");
}

function Script29()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script30()
{
  var player2 = GetPlayer();
player2.SetVar("q10","What is the ATM withdrawal limit for current account?");
player2.SetVar("q1_1","£500 per day");
player2.SetVar("q1_2","£300 per day");
player2.SetVar("q1_3","£100 per day");
player2.SetVar("q1_4","");
}

function Script31()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script32()
{
  var player2 = GetPlayer();
player2.SetVar("q10","Can LBG customers view and unblock PIN from the Mobile app if locked at ATM?");
player2.SetVar("q1_1","Yes");
player2.SetVar("q1_2","No");
player2.SetVar("q1_3","");
player2.SetVar("q1_4","");
}

function Script33()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

function Script34()
{
  var player2 = GetPlayer();
player2.SetVar("q10","When can customer access the paperless statement in the digital inbox once ordered?");
player2.SetVar("q1_1","48-72 hours");
player2.SetVar("q1_2","30 minutes");
player2.SetVar("q1_3","24 hours");
player2.SetVar("q1_4","");
}

