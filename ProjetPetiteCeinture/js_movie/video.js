var player={};

player.video=document.getElementById('video');
player.button=document.getElementById('button');
player.video.load();


player.playPause = function () {
	player.button.classList.remove('loading');
	if(player.video.paused){
		player.video.play();
		player.video.classList.add('play');
		player.button.classList.add('off');
	}
	else{
		player.video.pause();
		player.button.classList.remove('off');
	}
}

player.setTime = function (e) {
	//this==e.currentTarget
	player.video.currentTime=e.offsetX*player.video.duration/this.offsetWidth;
}


player.video.addEventListener('canplaythrough',player.playPause,false);
player.video.addEventListener('click',player.playPause,false);
player.button.addEventListener('click',player.playPause,false);
player.video.addEventListener('timeupdate',player.updateProgress,false);

$(document).ready(function() {
	setTimeout(function(){
		
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

		if(isMobile.any())
		{
			$(location).attr('href', 'accueilMobile.html');	
		}
		else
		{
			$(location).attr('href', 'accueil.html');
		}
			},29000);});

















