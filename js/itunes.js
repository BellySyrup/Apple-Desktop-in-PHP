$(document).ready(function(){init()});

var audio = document.createElement("audio");
var playing = false;
var random;

var playList = [
					[
						"Master of Puppets", 	// song title
						"Metallica", 			// artist name
						"Master of Puppets", 	// album name
						"master", 				// file name
						"http://itunes.apple.com/ca/album/master-of-puppets/id278129100" // itunes link
					],
					[
						"Strobe", 
						"Deadmau5", 
						"For Lack of a Better Name",
						"strobe",
						"http://itunes.apple.com/ca/album/for-lack-better-name-bonus/id331538362"
					],
					[
						"The Decline", 
						"NoFX", 
						"The Decline", 
						"decline",
						"http://itunes.apple.com/ca/album/the-decline-single/id291740773"
					],
					[
						"Kill Everybody", 
						"Skrillex", 
						"Scary Monsters and Nice SPrites", 
						"killeverybody", 
						"http://itunes.apple.com/ca/album/scary-monsters-nice-sprites/id409001929"
					],
				];
			
// initialize
function init(){
	click();
	links();
}

// when song name is clicked, pass id
function click(){

	var songId;
	
	$(".playSong").click(function(){
		songId = $(this).attr("id") - 1;
		playSong(songId);
	});
	
	$("#play").click(function(){
		if(playing == true){
			audio.pause();
			playing = false;
			$("#play").attr('src','./images/iTunesplay.png');
		} else{
			//songId = Math.round(3 * Math.random());
			audio.play();
			//playSong(songId);
			playing = true;
			$("#play").attr('src','./images/pausebtn.png');
		}
	});
	
	$("#back").click(function(){
		if(playing == true){
			if(songId == 0){
				songId = 3;
			} else{
				songId = songId - 1;
			}
			playSong(songId);
		}
	});
	$("#for").click(function(){
		if(playing == true){
			if(songId == 3){
				songId = 0;
			} else{
				songId = songId + 1;
			}
			playSong(songId);
		}
	});
	
}

// play song
function playSong(songId){
	audio.pause();
	$(".row1").css("background","#f0f5fb");
	$(".row2").css("background","#ffffff");
	if (audio != null && audio.canPlayType && (audio.canPlayType("audio/mpeg") || audio.canPlayType("audio/ogg")))
	{
		if($.browser.mozilla){
			audio.src = "media/"+playList[songId][3]+".ogg";
		}else{
			audio.src = "media/"+playList[songId][3]+".mp3";
		}
		audio.play();
		playing = true;
		$("#play").attr('src','./images/pausebtn.png');
		display(songId);
		$("#entirerow"+(songId+1)).css('background','#579cd9');
	}
}

// update song name, artist name, and album name in the display
function display(songId){
	
	$("#first").html(playList[songId][0]);
	$("#second").html(playList[songId][1] + " - " + playList[songId][2]);

}

// pass links to buy now button for each artist
function links(){
	for(var x = 1; x <= 4; x++){
		$("#link"+x).attr('href',playList[x-1][4]);
	}
}

