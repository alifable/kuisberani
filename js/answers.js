/*	
	Simple Javascript Quiz Version 1.2
	Copyright (c) 2004-2012 CS Truter
	Written by Christoff Truter
	email: Christoff@cstruter.com - (Please let me know if you intend to use the script) 
	Updated: 2012/04/16
*/
	
var Answers = new Array();

window.onload = function()
{
	var oldString=GetCookie("questions");
	var template = document.getElementById('results');

	if (oldString != undefined)
	{
		if (oldString.length > 0)
		{
			var correct = 0;
			var output = '';
			var data = oldString.split(",");

			fetchQuestions();
			fetchAnswers();

			for (var i = 0; i < data.length; i++)
			{
				if (data[i] == Answers[i]) 
				{
					output+='<div class="correct"><h5><div>Pertanyaan '+(i+1)+' :</br>'+Questions[i]+'</div></br><div>'+Potential_Answers[i][Answers[i]]+'</div></div><br/></h5>';
					correct+=Weight[i];
				}
				else
				{
					output+='<div class="false"><h5><div>Pertanyaan '+(i+1)+' :</br> '+Questions[i]+'</div><div></div><div>Jawaban Anda: '+Potential_Answers[i][data[i]]+'</div></br><div><i>'+Explain[i]+'</i></div></div><br/></h5>';
				}
			}

			var percentage='<div class="results"><p align="center">'+Math.round((correct / Total)*100)+' Poin </p></div>';
			template.innerHTML = percentage+output;
			
			if (Math.round((correct / Total)*100) < 50)
			{
			var kalimat='<div class="results"><h2 align="center">Gawat, Anda Kalah Dengan Anak Kelas 5 SD</h2><div style="text-align:center;"><img src="images/juara 3.png"></div><h1 align="center">Pembahasan</div><br>';
			template.innerHTML = percentage+kalimat+output;
			}
			else if (Math.round((correct / Total)*100) < 80)
			{
			var kalimat='<div class="results"><h2 align="center">Lumayan, Anda Setingkat dengan Anak Kelas 5 SD</h2><div style="text-align:center;"><img src="images/juara 2.png"></div><h1 align="center">Pembahasan</div><br>';
			template.innerHTML = percentage+kalimat+output;
			}
			else{ 
			var kalimat='<div class="results"><h2 align="center">Selamat, Anda Lebih PINTAR dari Anak Kelas 5 SD</h2><div style="text-align:center;"><img src="images/juara 1.png"></div><h1 align="center">Pembahasan</div><br>';
			template.innerHTML = percentage+kalimat+output;
			}
		}
		else
		{
			template.innerHTML = 'Please answer questions first';
		}
	}
	else
	{
		template.innerHTML = 'Please answer questions first';
	}
}