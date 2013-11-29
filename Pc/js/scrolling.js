var scrolling={

	defaults : { 
				target : '#content',
				axis : 'xy',
       		   },
    
    init : function(options){
                this.params=$.extend(this.defaults,options);
                $.localScroll.defaults.axis = this.params.axis;

			    $.localScroll.hash({
			      target: this.params.target, // Could be a selector or a jQuery object too.
			      queue:true,
			      duration:1500
			    });
			    
			    $.localScroll({
			      target: this.params.target, // could be a selector or a jQuery object too.
			      queue:true,
			      duration:1000,
			      hash:true 
			    });
        },
    mute : function(){
    	if($("#mute").is(".mute"))
		{
			$(".mute").attr("class", "sound");
			$("#audio")[0].play();
		}
		else
		{
			$(".sound").attr("class", "mute");
			$("#audio")[0].pause();
		}
		
    }
}

$(document).ready(function(){
	
	$(".scroll").mCustomScrollbar({
                    verticalScroll:true, // barre verticale
                    theme:"light",
                    scrollInertia: 13,
                    scrollButtons:{
                            enable: false

                    }
                });
	
	});